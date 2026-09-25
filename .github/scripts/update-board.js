module.exports = async ({ github, context }) => {
  const organizationName = context.repo.owner;
  const DATE_FIELD_NAME = "Scheduled Date";
  const PROJECT_NUMBER = 19; // AcademySoftwareFoundation project number

  // Target Status Column Names
  const STATUS_UPCOMING = "Upcoming Meeting Agenda Items";
  const STATUS_NEXT = "Next Meeting Agenda Items";

  // Define time windows (in milliseconds)
  const DAY_IN_MS = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const twoWeeksOut = new Date(today.getTime() + 14 * DAY_IN_MS);
  twoWeeksOut.setHours(23, 59, 59, 999);

  const fourWeeksOut = new Date(today.getTime() + 28 * DAY_IN_MS);
  fourWeeksOut.setHours(23, 59, 59, 999);

  // Raw GraphQL string without template variable syntax collisions
  const query = `
    query getProjectData(\(loginName: String!,\)projectNum: Int!) {
      organization(login: $loginName) {
        projectV2(number: $projectNum) {
          id
          fields(first: 20) {
            nodes {
              ... on ProjectV2Field {
                id
                name
              }
              ... on ProjectV2SingleSelectField {
                id
                name
                options {
                  id
                  name
                }
              }
            }
          }
          items(first: 100) {
            nodes {
              id
              fieldValues(first: 20) {
                nodes {
                  ... on ProjectV2ItemFieldValueCommon {
                    field {
                      ... on ProjectV2FieldCommon {
                        name
                      }
                    }
                  }
                  ... on ProjectV2ItemFieldDateValue {
                    date
                  }
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const result = await github.graphql(query, {
    loginName: organizationName,
    projectNum: PROJECT_NUMBER,
  });

  const project = result.organization?.projectV2 || result.user?.projectV2;
  if (!project) {
    throw new Error(`Project #\({PROJECT_NUMBER} not found under owner '\){organizationName}'.`);
  }

  // Locate Status field and target option IDs
  const statusField = project.fields.nodes.find((f) => f.name === "Status");
  const upcomingOption = statusField?.options?.find((o) => o.name === STATUS_UPCOMING);
  const nextOption = statusField?.options?.find((o) => o.name === STATUS_NEXT);

  if (!statusField || !upcomingOption || !nextOption) {
    throw new Error(
      `Could not locate Status field or target options ('\({STATUS_UPCOMING}', '\){STATUS_NEXT}')`
    );
  }

  const updateStatusMutation = `
    mutation updateStatus(\(projId: ID!,\)itemId: ID!, \(fieldId: ID!,\)optId: String!) {
      updateProjectV2ItemFieldValue(
        input: {
          projectId: $projId
          itemId: $itemId
          fieldId: $fieldId
          value: { singleSelectOptionId: $optId }
        }
      ) {
        projectV2Item {
          id
        }
      }
    }
  `;

  for (const item of project.items.nodes) {
    let scheduledDate = null;
    let currentStatus = null;

    for (const val of item.fieldValues.nodes) {
      if (val.field?.name === DATE_FIELD_NAME) {
        scheduledDate = val.date ? new Date(val.date) : null;
      }
      if (val.field?.name === "Status") {
        currentStatus = val.name;
      }
    }

    if (!scheduledDate) continue;

    // Target resolution based on date threshold
    let targetOption = null;
    let targetStatusName = null;

    if (scheduledDate >= today && scheduledDate <= twoWeeksOut) {
      targetOption = upcomingOption;
      targetStatusName = STATUS_UPCOMING;
    } else if (scheduledDate > twoWeeksOut && scheduledDate <= fourWeeksOut) {
      targetOption = nextOption;
      targetStatusName = STATUS_NEXT;
    }

    // Apply status change if item needs to move
    if (targetOption && currentStatus !== targetStatusName) {
      console.log(
        `Moving Item ID ${item.id} -> '\({targetStatusName}' (Scheduled:\){
          scheduledDate.toISOString().split("T")[0]
        })`
      );

      await github.graphql(updateStatusMutation, {
        projId: project.id,
        itemId: item.id,
        fieldId: statusField.id,
        optId: targetOption.id,
      });
    }
  }
};
