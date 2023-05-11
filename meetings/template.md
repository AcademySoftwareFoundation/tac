---
parent: Meetings
title: "Meeting Template"
nav_exclude: true
---

<pre>
---
parent: Meetings
title: "{{ "now" | date: "%Y-%m-%d" }}"
---

# AWSF TAC Meeting - {{ "now" | date: "%B %e, %Y" }}

## Voting member attendance

### Premier member Representatives

{%- for member in site.data.tacmembers -%}
{% if member["Appointed By"] == "Membership Entitlement" %}
- [  ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{%- endif -%}
{% endfor %}

### Project Representatives

{%- for member in site.data.tacmembers -%}
{% if member["Appointed By"] == "Vote of TSC Committee" %}
{%- for project in site.data.projects -%}
{%- if project["TAC Representative"] == member["Full Name"] -%}
- [  ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- elsif project["Leads"] == member["Full Name"] -%}
- [  ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- endif -%}
{% endfor %}
{%- endif -%}
{% endfor %}

### Industry Representatives

{%- for member in site.data.tacmembers -%}
{% if member["Appointed By"] == "Vote of TAC Committee" %}
- [  ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{%- endif -%}
{% endfor %}

# Agenda

- Technical Project updates
- Working Groups
- Update on candidate projects
- Next meeting

# Action Items (AIs)

# Notes

# Chat

</pre>

