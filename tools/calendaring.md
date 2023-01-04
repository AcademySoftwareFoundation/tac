---
parent: Tools
---

# Calendaring
* TOC
{:toc}
You can stay subscribed to the meetings of the projects and committees of the Academy Software Foundation by subscribing to the coordinating mailing list. Each mailing list has a calendar you can subscribe to with your calendar client of choice.

By default, the following permissions apply to calendars:

- Voting TAC members can manage the [tac calendar][].
- TSC project chairpersons can manage their respective project calendars.
- LF Staff can manage any calendar event.

If you are having an issue with calendar events, please [submit a request][], and the LF Staff can help.

### Meeting management

By default, any TSC or TAC chairperson can schedule community meetings on the [tac calendar][] or a project-specific calendar, respectively. 

#### Create a new meeting

- Create a new meeting using [LFX Meeting Management](https://docs.linuxfoundation.org/lfx/project-control-center/it-services-for-a-project/meetings#scheduling-a-meeting). 

  - Settings for the meeting:

    - *Meeting Title*, enter a descriptive name for your meeting.

    - *Meeting Details*, select the date and time for the meeting to be scheduled. The timezone will be set to the current timezone, but note the meeting will be scheduled in UTC.

    - *Frequency of the meeting*, select the required frequency of the meeting. If you are scheduling a nonrecurring meeting, you need to select Does Not Repeat.

    - *Meeting Visibility*, select the Make Meeting Public.

    - *Meeting Description*, recommended to use the following template:

      ```
      <Summary of the meeting purpose>
      
      Agenda/Notes at <Link to meeting agenda/notes>
      ```

    - Invite Committee Members, select the required committee for which the meeting is scheduled

    - *Recording and Transcription*, checkbox 'Record Meeting' and select 'Public' if you wish to record the meeting.

  - After creating the meeting, go to the *Meeting Management* section for your project, and click on '⋮' at the end of the row for the given meeting, which will open up a menu. Select *Share Meeting*, and then copy the URL in the dialog box that pops up.

- Add the meeting to the [Community Calendar][].

  - Scroll to the bottom of the group calendar, select *Add Event*, and choose the relevant sub-group you are trying to create a new meeting (such as tsc@lists... or process@lists..., etc.). The sub-groups you belong to will be displayed along with those you have privileges for. 

  - Fill in the fields for:

    - *Event Name*, copy from the meeting created above.
    - *Start and End Times*, *Event Repeats*, copy from the meeting created above.
    - *Location*, use the *Share Meeting* link from the meeting created above. 
    - *Organizer Email* will be the sub-group mail list (such as tsc@lists... or process@lists..., etc.).
    - *Organizer Phone* is optional.
    - *Description*, these will be the relevant meeting details. It is recommended to enter the following:

    ```
    <Summary of the meeting purpose>
    
    Agenda/Notes at <Link to meeting agenda/notes>
    
    Register for the meeting at <the 'Share Meeting' link from the meeting created above>
    ```

    - Do not select *Request RSVP*, *Reminders*, or *Notifications*.


#### Update a meeting

- Edit the meeting using [LFX Meeting Management](https://docs.linuxfoundation.org/lfx/project-control-center/it-services-for-a-project/meetings#flexible-scheduling-of-a-meeting).
- Update the meeting on the [Community Calendar][].
  - Click on the event you are updating and select *Edit Event* and make the applicable changes. 
    - Select *Update Event* to save the changes and ensure you choose the update to reflect on *Only This Event* or A*ll Meetings* as applicable.


The meeting update will be reflected in the meeting subscription with the next automatic update.

#### Cancel/Delete a Meeting   

- Delete the meeting using [LFX Meeting Management](https://docs.linuxfoundation.org/lfx/project-control-center/it-services-for-a-project/meetings#delete-meetings).
- Remove the meeting from the [Community Calendar][].
  - Click on the event you are updating, select *Edit Event*, scroll to the bottom, and click on *Delete Event*.

  - You'll need to select *Only This Event* or *All Meetings* as applicable here.


The meeting update will be reflected in the meeting subscription with the next automatic update.

### Calendar management best practices

To help individuals not be inundated with calendar overload, try to follow these guidelines:

- The [tac calendar][] should only be used for TAC meetings, meetings, events for the entire project community, and kickoff meetings of new projects.
- Specific project meetings should be on your project calendar. All meetings should be on the primary discussion, dev, or user calendar unless it's a specific closed meeting to discuss a sensitive topic.
- Make sure to make meeting invite changes ( including cancellations or reschedulings ) more than 24 hours in advance, as many calendaring clients wait to update. It's also best practice to email that calendar's respective mailing list to inform the group of the cancellation.
- Instruct invitees to manually remove old entries when provisioning a new series of recurring meetings.

- Ensure that any meeting invites have identified web conference or location details.
  - Unless the meeting is only in person, always provide a web conference for those who can't attend in person.
- Be sure the description of the meeting has an agenda or a link to the agenda of the meeting.

[Code of Conduct]: /code_of_conduct
[submit a request]: https://servicedesk.aswf.io
[tac calendar]: https://lists.aswf.io/g/tac/calendar
[Community Calendar]: https://calendar.aswf.io/
[Slack]: https://slack.aswf.io
[TAC Mailing List]: https://lists.aswf.io/g/tac