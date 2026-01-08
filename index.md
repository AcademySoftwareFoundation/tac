---
title: Home
nav_order: 1
---

# {{ site.foundation_name }} Technical Advisory Council (TAC)

This site hosts all the materials and resources for the {{ site.foundation_name }} TAC and it's Technical Projects and Working Groups. More details on the role of the TAC can be found [here]({% link process/tac_overview.md %}).

## TAC Members

{%- include tacmembers.html -%}

## {{ site.project_types | map: 'plural' |  array_to_sentence_string }} 

Projects are approved by TAC Members per the [project lifecycle guidelines]({% link process/lifecycle.md %}). You can learn more about hosting projects at {{ site.foundation_name }} and how to propose a project for inclusion as an {{ site.foundation_name }} Technical Project [here]({% link process/start_project.md %}).

Each of the {{ site.foundation_name }} projects are open to participation by anyone subject to the governance each project has adopted. If you are looking for a way to contribute to a project, many {{ site.foundation_name }} projects maintain a list of issues that are suited for first-time contributors on [CLOTributor](https://clotributor.dev/search?foundation={{ site.clotributor_name }}).

Below are the {{ site.project_types | map: 'plural' |  array_to_sentence_string }} supported by the TAC, listed by [project stage]({% link process/lifecycle.md %})

{%- include projectlist.html -%}

## {{ site.foundation_name }} Landscape

There are many more related open source projects than what is hosted at {{ site.foundation_name }}; check out the list and add any we are missing at the [{{ site.foundation_name }} Landscape]({{ site.landscape_url }})
