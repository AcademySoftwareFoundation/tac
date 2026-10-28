module.exports = async ({ github, context }) => {
  const organizationName = context.repo.owner;
  const DATE_FIELD_NAME = "Scheduled Date";
  const PROJECT_NUMBER = 19;

  // Target Status Column Names
  const STATUS_UPCOMING = "Upcoming Meeting Agenda Items";
  const STATUS_NEXT = "Next Meeting Agenda Items";
  const STATUS_FUTURE = "Future Meeting Agenda Items";

  const DAY_IN_MS = 24 * 60 * 60 * 1000;
  
  // Set reference time to start of today (UTC or local runner date)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentDayOfWeek = today.getDay(); // 0 = Sun, 3 = Wed, 4 = Thu
  const WEDNESDAY = 3;

  // If today is Wednesday, the target upcoming meeting IS today.
  // If today is Thursday or later, the upcoming meeting is the NEXT Wednesday.
  let daysUntilUpcomingWed;
  if (currentDayOfWeek === WEDNESDAY) {
    daysUntilUpcomingWed = 0; // Today is Wednesday: Keep today as the "Upcoming" boundary
  } else {
    daysUntilUpcomingWed = (WEDNESDAY - currentDayOfWeek + 7) % 7;
  }

  const upcomingMeetingDate = new Date(today.getTime() + daysUntilUpcomingWed * DAY_IN_MS);
  upcomingMeetingDate.setHours(23, 59, 59, 999);

  // Next meeting is 14 days after the active upcoming meeting date
  const nextMeetingDate = new Date(upcomingMeetingDate.getTime() + 14 * DAY_IN_MS);
  nextMeetingDate.setHours(23, 59, 59, 999);

  console.log("Calculated TAC Meeting Schedule:");
  console.log("  -> Current Run Date:         ", today.toISOString().split("T")[0]);
  console.log("  -> Active Upcoming Target:   ", upcomingMeetingDate.toISOString().split("T")[0]);
  console.log("  -> Active Next Target:       ", nextMeetingDate.toISOString().split("T")[0]);

  // Inlined Query
  const query = `
    query getProjectData {
      organization(login: "${organizationName}") {
        projectV2(number: ${PROJECT_NUMBER}) {
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
              content {
                ... on Issue {
                  title
                }
                ... on PullRequest {
                  title
                }
                ... on DraftIssue {
                  title
                }
              }
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

  const result = await github.graphql(query);

  const project = result.organization?.projectV2 || result.user?.projectV2;
  if (!project) {
    throw new Error("Project #" + PROJECT_NUMBER + " not found under owner '" + organizationName + "'.");
  }

  // Locate Status field and target option IDs
  const statusField = project.fields.nodes.find((f) => f.name === "Status");
  const upcomingOption = statusField?.options?.find((o) => o.name === STATUS_UPCOMING);
  const nextOption = statusField?.options?.find((o) => o.name === STATUS_NEXT);
  const futureOption = statusField?.options?.find((o) => o.name === STATUS_FUTURE);

  if (!statusField || !upcomingOption || !nextOption || !futureOption) {
    throw new Error(
      "Could not locate Status field or target options ('" +
        STATUS_UPCOMING +
        "', '" +
        STATUS_NEXT +
        "', '" +
        STATUS_FUTURE +
        "')"
    );
  }

  for (const item of project.items.nodes) {
    let scheduledDate = null;
    let currentStatus = null;
    const itemTitle = item.content?.title || "Untitled Item";

    for (const val of item.fieldValues.nodes) {
      if (val.field?.name === DATE_FIELD_NAME) {
        scheduledDate = val.date ? new Date(val.date) : null;
      }
      if (val.field?.name === "Status") {
        currentStatus = val.name;
      }
    }

    if (!scheduledDate) continue;

    let targetOption = null;
    let targetStatusName = null;

    if (scheduledDate >= today && scheduledDate <= upcomingMeetingDate) {
      targetOption = upcomingOption;
      targetStatusName = STATUS_UPCOMING;
    } else if (scheduledDate > upcomingMeetingDate && scheduledDate <= nextMeetingDate) {
      targetOption = nextOption;
      targetStatusName = STATUS_NEXT;
    } else if (scheduledDate > nextMeetingDate) {
      targetOption = futureOption;
      targetStatusName = STATUS_FUTURE;
    }

    // Apply status change if item needs to move
    if (targetOption && currentStatus !== targetStatusName) {
      const formattedDate = scheduledDate.toISOString().split("T")[0];

      console.log('Moving "' + itemTitle + '" (' + item.id + ") -> '" + targetStatusName + "' (Scheduled: " + formattedDate + ")");

      // Inlined Mutation
      const updateStatusMutation = `
        mutation updateStatus {
          updateProjectV2ItemFieldValue(
            input: {
              projectId: "${project.id}"
              itemId: "${item.id}"
              fieldId: "${statusField.id}"
              value: { singleSelectOptionId: "${targetOption.id}" }
            }
          ) {
            projectV2Item {
              id
            }
          }
        }
      `;

      await github.graphql(updateStatusMutation);
    }
  }
};
