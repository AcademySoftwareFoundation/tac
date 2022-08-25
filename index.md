---
title: Home
nav_order: 1
---

# Overview

The role of the Technical Advisory Committee (TAC) of the Academy Software Foundation (ASWF) is to facilitate communication and collaboration among the Technical Projects. The TAC will be responsible for:

*  Coordinating collaboration among Technical Projects, including development of an overall technical vision for the community;
*  Making recommendations to the Budget Committee of resource priorities for Technical Projects;
*  Electing annually a chairperson to preside over meetings, set the agenda for meetings, ensure meeting minutes are taken and who will also serve on the Governing Board as the TAC’s representative (the “TAC Representative”); and
*  Such other matters related to the technical role of the TAC as may be communicated to the TAC by the Governing Board.

# TAC Members

All members of the broad ASWF community are welcome to participate in TAC activities, such as meetings or online discussion. For voting matters such as project inclusion or graduation, TAC members are composed of:

* One representative appointed by each Premier Member;
* One representative appointed by the technical oversight body (e.g., a technical steering committee) of each TAC Project; and
* Up to three experts from the broader motion picture industry (who serve for one-year terms)

Current TAC Members are:

<table class="sortable">
<thead>
    <tr>
        <th>Representative</th>
        <th>Appointed By</th>
        <th>Role</th>
        <th>Organization</th>
    </tr>
</thead>
<tbody>
{%- for member in site.data.tacmembers -%}
{%- if member["Appointed By"] == "Membership Entitlement" -%}
    <tr>
        <td>{{ member["Full Name"] }}</td>
        <td>Premier Member representative</td>
        <td>{% if member["Special Role"] == "Chair" %}Chairperson - {% endif %}{{ member["Voting Status"] }}</td>
        <td>{{ member["Account Name: Account Name"] }}</td>
    </tr>
{%- endif -%}
{%- endfor -%}
{%- for member in site.data.tacmembers -%}
{%- if member["Appointed By"] == "Vote of TSC Committee" -%}
    <tr>
        <td>{{ member["Full Name"] }}</td>
        <td>{{ member["Appointed By"] }}</td>
        <td>{% if member["Special Role"] == "Chair" %}Chairperson - {% endif %}{{ member["Voting Status"] }}</td>
        <td>{{ member["Account Name: Account Name"] }}</td>
    </tr>
{%- endif -%}
{%- endfor -%}
{%- for member in site.data.tacmembers -%}
{%- if member["Appointed By"] == "Vote of TAC Committee" -%}
    <tr>
        <td>{{ member["Full Name"] }}</td>
        <td>Industry Representative</td>
        <td>{% if member["Special Role"] == "Chair" %}Chairperson - {% endif %}{{ member["Voting Status"] }}</td>
        <td>{{ member["Account Name: Account Name"] }}</td>
    </tr>
{%- endif -%}
{%- endfor -%}
</tbody>
</table>
<link rel="stylesheet" href="css/sorTable.css">
<script src="js/sorTable.js"></script>

# Technical Projects

Technical Projects are approved by TAC Members per the [ASWF Project Lifecycle guidelines](https://github.com/AcademySoftwareFoundation/tac/blob/master/process/lifecycle.md). You can submit your project for inclusion as an ASWF Technical Project by completing the [Project Contribution Proposal Template](https://github.com/AcademySoftwareFoundation/tac/blob/master/process/proposal_template.md) and emailing it to tac@lists.awsf.io.

Each of the ASWF projects are open to participation by anyone subject to the governance each project has adopted. If you are looking for a way to contribute to a project, many ASWF projects maintain a list of "good first issues" ( linked to below ).

Current Technical Projects are listed below.

<!-- Embed list of all ASWF members -->  
<iframe src="https://landscape.aswf.io/pages/hosted-projects?style=body{background-color:white;}%23embedded-footer{display:none;}" frameborder="0" id="landscape" scrolling="no" style="width: 1px; min-width: 100%; opacity: 1; visibility: visible; overflow: hidden;"></iframe>
<script src="https://landscape.aswf.io/iframeResizer.js"></script>


There are many more VFX related open source projects than what is hosted at ASWF; check out the list and add any we are missing at the [ASWF Landscape](https://landscape.aswf.io)

[![ASWF Landscape](https://landscape.aswf.io/images/landscape.png)](https://landscape.aswf.io)

# Current Working Groups

Working groups may be formed by the TAC to focus on specific areas of technical interest or need within the ASWF.  They report to the TAC which remains responsible for any formal decisions or voting matters.

## Active

- [CI Working Group](meetings/CI-workinggroup)
- [Diversity and Inclusion Working Group](https://lists.aswf.io/g/diversity)
- [Rust Working Group](https://github.com/vfx-rs/organization)
- [Universal Scene Description Working Group (USD WG)](https://wiki.aswf.io/display/WGUSD/USD+Working+Group)

## Archived

- [Assets WG](https://wiki.aswf.io/display/ARW)
- [Python 3 Working Group](https://github.com/AcademySoftwareFoundation/wg-python3)



