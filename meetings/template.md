---
parent: Meetings
title: "Meeting Template"
nav_exclude: true
---

<pre>
{%- capture agenda -%}
---
parent: Meetings
title: "{{ "now" | date: "%Y-%m-%d" }}"
---

# Academy Software Foundation - Technical Advisory Council (TAC) Meeting - {{ "now" | date: "%B %e, %Y" }}

Join the meeting at [https://zoom-lfx.platform.linuxfoundation.org/meeting/97880950229?password=81d2940e-c055-43b9-9b5a-6cd7d7090feb](https://zoom-lfx.platform.linuxfoundation.org/meeting/97880950229?password=81d2940e-c055-43b9-9b5a-6cd7d7090feb)

## Voting member attendance

### Premier member Representatives
{% for member in site.data.tacmembers -%}
{% if member["Appointed By"] == "Membership Entitlement" %}
- [ ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{%- endif -%}
{% endfor %}

### Project Representatives
{% for member in site.data.tacmembers -%}
{% if member["Appointed By"] == "Vote of TSC Committee" and member['Voting Status'] != 'Observer' %}
{%- for project in site.data.projects -%}
{% if project["TAC Representative"] contains member["Full Name"] %}
- [ ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- break -%}
{% elsif project["Leads"] contains member["Full Name"] %}
- [ ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- break -%}
{%- endif -%}
{%- endfor -%}
{%- endif -%}
{% endfor %}

### Industry Representatives
{% for member in site.data.tacmembers -%}
{% if member["Appointed By"] == "Vote of TAC Committee" %}
- [ ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{%- endif -%}
{% endfor %}

## Other Attendees
{% for member in site.data.tacmembers -%}
{%- if member['Voting Status'] == 'Observer' -%}
{%- for project in site.data.projects -%}
{% if project["TAC Representative"] contains member["Full Name"] %}
- [ ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- break -%}
{% elsif project["Leads"] contains member["Full Name"] %}
- [ ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- break -%}
{%- endif -%}
{%- endfor -%}
{%- endif -%}
{% endfor %}
{%- for member in site.data.tacmembers -%}
{% if member["Special Role"] == "LF Staff" %}
- [ ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{%- endif -%}
{% endfor %}

## Antitrust Policy Notice

Linux Foundation meetings involve participation by industry competitors, and it
is the intention of the Linux Foundation to conduct all of its activities in
accordance with applicable antitrust and competition laws. It is therefore
extremely important that attendees adhere to meeting agendas, and be aware of,
and not participate in, any activities that are prohibited under applicable US
state, federal or foreign antitrust and competition laws.

Examples of types of actions that are prohibited at Linux Foundation meetings
and in connection with Linux Foundation activities are described in the Linux
Foundation Antitrust Policy available at
[linuxfoundation.org/antitrust-policy](https://www.linuxfoundation.org/antitrust-policy).
If you have questions about these matters, please contact your company counsel,
or if you are a member of the Linux Foundation, feel free to contact Andrew
Updegrove of the firm of Gesmer Updegrove LLP, which provides legal counsel to
the Linux Foundation.

## Agenda

{% assign agendaitems = site.data.meeting-agenda-items | where: "status", "Upcoming Meeting Agenda Items" | sort: "meeting_label" -%}
- General Updates
{%- for agendaitem in agendaitems -%}
{%- if agendaitem.meeting_label == "4-tac-meeting-short" %}
  - {{ agendaitem.title }} [#{{ agendaitem.number }}]({{ agendaitem.url }})
{%- endif -%}
{% endfor %}
{% for agendaitem in agendaitems -%}
{%- if agendaitem.meeting_label != "4-tac-meeting-short" -%}
- {{ agendaitem.title }} [#{{ agendaitem.number }}]({{ agendaitem.url }})
{%- endif %}
{% endfor %}
## Notes


{%- endcapture -%}
{{ agenda }}
</pre>

<a href="https://github.com/AcademySoftwareFoundation/tac/new/main/meetings?filename={{ "now" | date: "%Y-%m-%d" }}.md&value={{ agenda | url_encode }}">Create Pull Request</a> | 


