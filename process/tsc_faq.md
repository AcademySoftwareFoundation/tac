---
parent: Project Lifecycle
grand_parent: Processes
nav_order: 99
---

# Technical Steering Committee (TSC) FAQ

* TOC
{:toc}

The Technical Steering Committee (TSC) is the leadership of the project. This committee's primary role is to:

- Set the overall direction of the project
- Ensure the project community has the needed resources and infrastructure to succeed
- Resolve any issues within the project community
- Provide project updates to the TAC and the community at large

## Members

Typically, the TSC comprises the primary committers or maintainers in a project. To start, there may be an appointed list, but over time more individuals may join the TSC according to the policies the TSC set for how new members are added. Regardless, TSC meetings are generally open to anyone interested unless there are sensitive issues to discuss, which necessitate a private meeting.

[LFX Project Control Center] is a tool for managing project committees and roles within a project. Each project will be set up in that tool with a voting committee named 'Technical Steering Committee (TSC),' notating the project chairperson and all voting members. Project chairpersons will have access to manage this in addition to the Linux Foundation staff supporting the project. Additionally, each project should have a [GitHub Team][GitHub Teams Docs] set up with each of their maintainers, with each project repository granted 'maintainer' permission. Generally, the LF Staff will have this setup for each project, but it's up to the project to maintain after that.

More details on using LFX Project Control Center for committee management can be found [in the LFX documentation][LFX PCC Committee Management Docs].

### Adding New Members

The TSC can add members at any time with a simple majority vote of the current TSC members. The vote can be held during a regular TSC meeting, via email, or as part of a GitHub Issue; either way, it is crucial to have a documented vote for adding the individual with the votes recorded. You should also save this vote in the TSC records for future reference to provide full transparency into TSC member selection.

Once a TSC member is confirmed, the TSC Chairperson should...

- Add them to the TSC Committee in [LFX Project Control Center].
- Update the GitHub repository team for maintainers to add the TSC member.

## Roles

Generally, TSCs have a few roles in facilitating the operations of the TSC. TSC voting members elect roles, and the TSC determines term lengths.

### Chairperson

The TSC Chairperson is the figurehead of the project. The TSC Chairperson's primary role is to:

- Lead all meetings of the TSC, setting the agenda with the consultation of other TSC members.
- Be the public spokesperson for the project at events and in public communications ( such as PR/AR meetings, articles, and blog posts )
- Serve as a project representative to the TAC and other projects and entities.

### Secretary

The Secretary records all meeting notes for TSC members and ensures they are distributed to the project community after the meeting in a timely manner. Often, projects have a rotating secretary role instead of a permanent role.

### Additional roles

TSCs often add additional roles on an as-needed basis to manage different areas or functions within a project. TSCs can develop the correct definitions and scope for these roles, but it's highly advised to document them to ensure expectations are aligned.

Roles we've seen in a project include but aren't limited to...

- Chief Architect
- Security Lead
- Release Manager
- Documentation Lead

### Transitioning Roles

Individuals in project roles change from time to time, and it's important to have both a transparent selection process and ensure all relevant permissions are transitioned to the new role owner. In general, TSCs should follow the following process in transitioning roles.

1) Define an election or selection process for the role. This should be documented in a GOVERNANCE.md file or similar document.
2) Hold a vote of the TSC to confirm the individual being elected to the role.
3) Update any systems relevant to the role, in particular...
  - Add the role for the person on the TSC Committee in [LFX Project Control Center], specifying the date they started the role and if the role has a set term, the date the role will end.
  - Update the GitHub repository team so maintainers can adjust any relevant permissions. For example, the TSC Chairperson should be given permission to add/remove individuals from the team.
  - [Contact the LF Staff][Service Desk] to provide access to any project-specific resources.
    - If the role is TSC Chairperson, they will be added to the [Technical Leads Mailing List], as well as the TAC Committee and associated mailing lists ( [TAC Mailing List] and [TAC Private Mailing List] ).
    - If the project is appointing a different TAC representative than its TSC Chairperson, the TAC representative will be added to [TAC Mailing List] instead of the TSC Chairperson

TSC charters do not dictate the specific terms or election processes for any of the roles within the TSC; it's expected that the TSC develop this as part of their policies and document them in a GOVERNANCE.md file or similar document.

## Meetings

TSC meetings allow the project community to share updates and discuss issues and plans. All TSC meetings are considered open to the public unless there is a sensitive issue to discuss ( in the case of private meetings, Linux Foundation staff should be present at such meetings ).

It's recommended to schedule meetings on a regular cadence ( for example, every other week at 2:00 pm US Pacific Time ). Many project communities alternate TSC meeting times if project members are globally dispersed ( for example, one time that is US Eastern/Europe friendly and another that is US Pacific/Asia/Australia friendly ).

### Scheduling logistics

Using LFX Project Control Center, you can easily schedule one-off or recurring meetings that automatically send invites to TSC members, allow other interested parties to register for meetings, and record meetings and make them available for others. Additionally, it provides excellent statistics for meeting attendance which can help you assess member engagement.

More details on using LFX Project Control Center for meeting management can be found [in the LFX documentation][LFX PCC Meeting Management Docs].

For public meetings, LFX PCC provides a public link for sharing the meeting with non-attendees so they can register for the meeting. It's recommended to make that link available publically.

### Agenda

The TSC Chairperson should share an agenda at least 24 hours before the meeting with an ask to share additional agenda items. The agenda should be shared through the public communication/collaboration channels they use ( such as the mailing lists, chat channels, GitHub, etc ).

## FAQs about TSCs

### Q: Is a TSC member required to have their employer be a member of the Academy Software Foundation?

A: No - All technical community work, such as projects and working groups, are open to anyone to participate and not bound by membership in the Academy Software Foundation. 

### Q: Does a person lose their membership in a TSC if they leave or change employers?

A: No - TSC membership is bound to an individual, not an organization. If a change of employment for a TSC member results in a key contributing organization lacking TSC representation, the TSC may invite a new TSC member affiliated with that organization, provided that person meets any requirements for TSC membership. 

### Q: Does an individual serving on the TSC represent themselves, the project, and/or their employer?

A: As TSC members are individuals within the context of a TSC, it's expected that all their actions are for the general good of the project itself. It's not appropriate to use the project for anti-competitive purposes nor to discuss a TSC member employer's product plans and roadmap in conjunction with the project planning.

[TAC Mailing List]: https://lists.aswf.io/g/tac
[TAC Private Mailing List]: https://lists.aswf.io/g/tac-private
[Technical Leads Mailing List]: https://lists.aswf.io/g/technical-project-leads
[LFX Project Control Center]: https://projectadmin.lfx.linuxfoundation.org/
[Service Desk]: https://servicedesk.aswf.io
[LFX PCC Meeting Management Docs]: https://docs.linuxfoundation.org/lfx/project-control-center-pre-release/it-services-for-a-project/meetings
[LFX PCC Committee Management Docs]: https://docs.linuxfoundation.org/lfx/project-control-center-pre-release/setup-services-for-a-project/committees-setup-for-a-project
[GitHub Teams Docs]: https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams
