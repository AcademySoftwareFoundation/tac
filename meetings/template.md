---
parent: Meetings
title: "Meeting Template"
layout: minimal
nav_exclude: true
---

<pre>
{%- capture agenda -%}
---
parent: Meetings
title: "{{ "now" | date: "%Y-%m-%d" }}"
---

# {{ site.foundation_name }} Technical Advisory Council (TAC) Meeting - {{ "now" | date: "%B %e, %Y" }}

{% if site.tac_lfx_meeting_url -%}
Join the meeting at [{{ site.tac_lfx_meeting_url }}]({{ site.tac_lfx_meeting_url }})
{%- endif %}

## Voting Representative Attendees

### {{ site.membership_top_tier }} Member Representatives
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
{% elsif project["Chair"] contains member["Full Name"] %}
- [ ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- endif -%}
{%- endfor -%}
{%- endif -%}
{% endfor %}

{% if site.vote_of_tac_committee_title -%}
### {{ site.vote_of_tac_committee_title }}
{% for member in site.data.tacmembers -%}
{% if member["Appointed By"] == "Vote of TAC Committee" %}
- [ ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{%- endif -%}
{% endfor %}
{%- endif %}

## Non-Voting Attendees

### Non-Voting Project and Working Group Representatives
{% for member in site.data.tacmembers -%}
{%- if member['Voting Status'] == 'Observer' -%}
{%- for project in site.data.projects -%}
{% if project["TAC Representative"] contains member["Full Name"] %}
- [ ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{% elsif project["Chair"] contains member["Full Name"] %}
- [ ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- endif -%}
{%- endfor -%}
{%- endif -%}
{% endfor %}

### LF Staff
{% for member in site.data.tacmembers -%}
{% if member["Special Role"] == "LF Staff" %}
- [ ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{%- endif -%}
{% endfor %}

### Other Attendees


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

<a href="{{ site.gh_edit_repository }}/new/main/meetings?filename={{ "now" | date: "%Y-%m-%d" }}.md&value={{ agenda | url_encode }}">Create Pull Request</a> | 


