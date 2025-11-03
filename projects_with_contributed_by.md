---
nav_exclude: true
layout: minimal
---

{% assign projects = site.data.projects | sort: "Contributed By" %}
<dl id="projects_with_contributors">
{%- for project in site.data.projects -%}
{%- if project['Level'] != 'working-group' -%}
  <div>
  <dt><img src="{{ project['Logo URL'] }}" ></dt>
  <dd><p>Contributed By</p><p>{{ project['Contributed By'] }}</p></dd>
  <dd><p>Chairperson(s)</p><p>{{ project['Chair'] }}</p></dd>
  </div>
{%- endif -%}
{%- endfor -%}
</dl>
