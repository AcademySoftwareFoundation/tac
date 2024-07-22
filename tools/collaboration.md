---
parent: Tools
---

# Collaboration Tools

* TOC
{:toc}

This document outlines the communications tools available for {{ site.foundation_name }} hosted projects and working groups.

{{ site.foundation_name }} leverages the tools provided by the LFX Project Control Center (PCC) for maintaining committee member lists, scheduling meetings, configuring mailing lists, and making community meetings publicly available. The LFX Project Control Center is a tool built and maintained by the Linux Foundation for use by the {{ site.foundation_name }} and its hosted projects and working groups. Access to PCC for hosted projects and working groups for management of meetings and committees can be granted by making a support request [here][pcc access request instructions].

## Committee Management

Hosted projects and working groups will have a primary committee set up in PCC. Larger hosted projects and working groups may have subcommittees or groups. The naming convention for committees and PCC Committee Type will be as follows.

|Name|PCC Committee Type|Description|
|---|---|---|
|Techincal Steering Committee (TSC)|Techincal Steering Committee|Primary committee for hosted projects|
|Working Group (WG)|Working Group|Primary committee for working groups|
|`subcommittee name`|Other|Any additional subcommittees|

The LF staff will set up the primary committee; subcommittees can be set up by the hosted project and/or working group themselves or the LF Staff if desired. The primary committee will be associated with any mailing lists of the hosted project or working group, meaning that they will be automatically added to those mailing lists.

**Projects must maintain their committee members in LFX PCC and are expected to review for accuracy at least every three months**

### Adding people to a committee

Committee members are named individuals who have been appointed or elected to the committee per the hosted project's Technical Charter and any relevant hosted project or working group policies. Each hosted project and working group should detail the requirements for membership and distinguish voting from non-voting roles.

Instructions for adding individuals to a committee in PCC can be found [here][add individuals to committee instructions]. The specific settings for adding individuals are as follows.

|Field|Value|
|---|---|
|Appointed By|For TSCs, this would be `Vote of TSC Committee`. For Working Groups and sub-committees, pick `Community`|
|Voting Status|Generally, this should be `Voting Rep`, though if you have non-voting roles on the committee, select `Other`|
|Voting Start Date|The date when the individual's voting status began on the committee|
|Voting End Date|The date when the individual's voting status is set to end if that is known. Most often, this will be blank unless the person is elected to the committee for a defined term|
|Role|Select if the individual holds a specific role on the committee, such as `Chair`. If not, pick `None`|
|Role Start Date|The date when the individual started in the role if the Role selected is not `None`|
|Role End Date|The date when the individual is planning to end their term in the role if known and if the Role selected is not `None`|

### Removing people from a committee

Instructions for removing individuals from a committee are [here][remove individuals from committee instructions]. Please ensure that you establish, document, and follow the committee's processes for removing individuals from a committee.

## Meetings

Hosted projects and working groups will use the LFX PCC Meeting Management service for all virtual and hybrid project meetings. This tool leverages Zoom, adding helpful features to reduce the overhead for project communities in managing their meetings.

- Ability to automatically invite committee members to a meeting, including sending out invites for existing meetings automatically when a committee member is added and removing the invite when the committee member is removed.
- Automated meeting recording and transcription, making those available to named meeting participants via their LFX Individual Dashboard and, more broadly, via the Public Meeting Calendar if the meeting is set to `Public`.
Meeting attendance is taken automatically and attached to the meeting itself. Attendance is reportable to gauge participants' engagement.

### Adding meetings

Instructions for creating a meeting in PCC can be found [here][create meeting instructions]. Specific guidelines for hosted projects and working groups should be as follows.

- Generally, all hosted projects and working group meetings should have `Make Meeting Public` checked and `Restricted` unchecked, as those meetings are public by default. Occasionally, meetings related to security vulnerability review or other sensitive topics may be held; in those cases, `Make Meeting Public` should be unchecked and `Restricted` checked.
- Associate a `Committee` with the meeting to ensure that those committee members are automatically added. Other non-committee members can join using the meeting link and request that a meeting invite be sent to them.

### Changing meetings

Instructions for changing meetings can be found [here][change meeting instructions]. Specific guidelines for hosted projects and working groups should be as follows.

- Avoid changing meetings less than 24 hours before the meeting starts. If you need to do this, please get in touch with all participants to inform them about the cancellation.

### Cancelling meetings

Instructions for canceling meetings can be found [here][cancel meeting instructions].

### Recording meetings

You can set a meeting to always be recorded or choose to record a single meeting or part of a meeting. Instructions for meeting recording can be found [here][create meeting instructions].

If the meeting is not set to be recorded, you can enable recording on the fly by [getting the host key][find host key] for the meeting and then use the [recording options in Zoom][zoom meeting recording instructions]

## Calendar

Each hosted project and working group has a Public Calendar that can be directly pointed to or embedded in an existing web page. Instructions for getting the link for the hosted project or working group Public Calendar can be found [here][access to public calendar link instructions]. Note that the LF Staff sets up a subdomain forward if the project has a primary domain setup using the format `https://calendar.DOMAINNAME`.

All public meetings for hosted projects and working groups are posted on the [Community Calendar]. 

Meetings that an individual is directly invited to can be found in the 'Meetings' section of that individual's LFX Individual Dashboard; instructions can be found [here][individual dashboard meetings instructions]

## Best Practices

To help individuals not be inundated with calendar overload, try to follow these guidelines:

- Make sure to make meeting invite changes ( including cancellations or reschedulings ) more than 24 hours in advance, as many calendaring clients wait to update. The best practice is to email the respective committee's mailing list or [email the list of meeting attendees in PCC][email meeting participants PCC] to inform the group of the cancellation.
- Instruct invitees to manually remove old entries when provisioning a new series of recurring meetings. Occasionally, we will see some calendaring clients not removing these automatically.
- Ensure the meeting description includes an agenda or a link to the agenda.

[Community Calendar]: {{ site.calendar_url }}
[cancel meeting instructions]: https://docs.linuxfoundation.org/lfx/project-control-center/v2-latest-version/collaborations/meetings#delete-meetings
[access to public calendar link instructions]: https://docs.linuxfoundation.org/lfx/project-control-center/v2-latest-version/collaborations/meetings
[individual dashboard meetings instructions]: https://docs.linuxfoundation.org/lfx/my-profile/meetings
[create meeting instructions]: https://docs.linuxfoundation.org/lfx/project-control-center/v2-latest-version/collaborations/meetings#scheduling-a-meeting
[change meeting instructions]: https://docs.linuxfoundation.org/lfx/project-control-center/v2-latest-version/collaborations/meetings#manage-meetings
[pcc access request instructions]: https://jira.linuxfoundation.org/plugins/servlet/desk/portal/4/create/358
[add individuals to committee instructions]: https://docs.linuxfoundation.org/lfx/project-control-center/v2-latest-version/collaborations/committees#adding-members-to-a-committee
[remove individuals from committee instructions]: https://docs.linuxfoundation.org/lfx/project-control-center/v2-latest-version/collaborations/committees#deleting-a-member-from-a-committee
[email meeting participants PCC]: https://docs.linuxfoundation.org/lfx/project-control-center/v2-latest-version/collaborations/meetings
[zoom meeting recording instructions]: https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0059856
[find host key]: https://docs.linuxfoundation.org/lfx/my-profile/meetings/find-your-host-key
