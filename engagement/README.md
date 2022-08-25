---
title: Getting Involved
has_children: false
nav_order: 2
---

# Getting Involved in Projects

All of the projects hosted at the Academy Software Foundation are open and transparent, and welcome participation from anyone interested in the technology areas. Each project publishes their governance processes within their project repo ( typically in the README.md file or in a GOVERNANCE.md file within the primary project repo or TSC repo ) on roles within the community and how decision making is made.

## TAC Meetings

Learn more about joining the public meetings of the Technical Advisory Council (TAC) on [the Meetings page](https://tac.aswf.io/meetings)

## Mailing Lists and Slack channels for hosted projects

Each project hosted at the Academy Software Foundation collaborates on open channels that are welcome for anyone in the community to participate in. See the below list of channels for each project.

All Slack channels referenced below are part of the [Academy Software Foundation Slack organization](https://slack.aswf.io) unless otherwise noted.

<table>
<tbody>
{%- for project in site.data.projects -%}
    {%- if project["Level"] != 'emeritus' -%}
    <tr>
        <td><img id="{{ project["Name"] }}" src="{{ project["Logo URL"] }}" /></td>
        <td>
            {%- if project["Website"] -%}
            Website: <a href="{{ project["Website"] }}">{{ project["Website"] }}</a><br />
            {%- endif -%}
            {%- if project["Dev Mailing List"] -%}
            Dev Mailing List: <a href="{{ project["Dev Mailing List"] }}">{{ project["Dev Mailing List"] }}</a><br />
            {%- endif -%}
            {%- if project["User Mailing List"] -%}
            User Mailing List: <a href="{{ project["User Mailing List"] }}">{{ project["User Mailing List"] }}</a><br />
            {%- endif -%}
            {%- if project["Mailing List"] -%}
            Mailing List: <a href="{{ project["Mailing List"] }}">{{ project["Mailing List"] }}</a><br />
            {%- endif -%}
            {%- if project["Slug"] == "open-color-io" %}
            Slack: <a href="https://slack.opencolorio.org/">slack.opencolorio.org</a><br />
            {%- elsif project["Slack"] -%}
            Slack: <a href="https://slack.aswf.io">{{ project["Slack"] }}</a><br />
            {%- endif -%}
            {%- if project["Leads"] -%}
            Leads: {{ project["Leads"] }}<br />
            {%- endif -%}
            {%- if project["Meeting Cadence"] -%}
            Meeting Cadence: {{ project["Meeting Cadence"] }}<br />
            {%- endif -%}
        </td>
    </tr>
    {%- endif -%}
{%- endfor -%}
</tbody>
</table>
