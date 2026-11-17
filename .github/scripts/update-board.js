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

  // Anchor date: set this to any known true TAC meeting Wednesday
  const KNOWN_MEETING_ANCHOR = new Date("2026-01-07T00:00:00Z");

  const WEDNESDAY = 3;
  const currentDayOfWeek = today.getDay(); // 0 = Sun, 3 = Wed, 4 = Thu

  // 1. Find the nearest upcoming Wednesday (0 if today is Wednesday)
  const daysUntilNextWed = (WEDNESDAY - currentDayOfWeek + 7) % 7;
  const targetWed = new Date(today.getTime() + daysUntilNextWed * DAY_IN_MS);
  targetWed.setHours(0, 0, 0, 0);

  // 2. Determine if targetWed falls on the bi-weekly schedule
  const diffDays = Math.round((targetWed.getTime() - KNOWN_MEETING_ANCHOR.getTime()) / DAY_IN_MS);
  const isMeetingWeek = Math.abs(diffDays) % 14 === 0;

  let upcomingMeetingDate;
  if (isMeetingWeek) {
    upcomingMeetingDate = new Date(targetWed.getTime());
  } else {
    // If targetWed is the Wednesday in-between, the upcoming meeting is next week
    upcomingMeetingDate = new Date(targetWed.getTime() + 7 * DAY_IN_MS);
  }
  upcomingMeetingDate.setHours(23, 59, 59, 999);

  // The meeting after that is 14 days following the upcoming one
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
