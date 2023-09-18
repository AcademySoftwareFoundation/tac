---
nav_exclude: true
layout: minimal
---

<style>
  #projects_with_contributors dt::after {
    content: "" !important;
  }
  #projects_with_contributors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  #projects_with_contributors div {
    flex-basis: 16%;
  }
  #projects_with_contributors dt img {
    height: 150px;
  }
  #projects_with_contributors dt {
    text-align: center;
  }
  #projects_with_contributors dd {
    margin-left: 0;
  }
  #projects_with_contributors dd p {
    text-align: center;
  }
  #projects_with_contributors dd p:first-child {
      font-family: Arial;
      font-size: 13px;
      color: #AAAAAA;
  }
  #projects_with_contributors dd p:last-child {
      font-family: Arial;
      font-size: 17px;
      color: #999999;
  }
</style>
{% assign projects = site.data.projects | sort: "Contributed By" %}
<dl id="projects_with_contributors">
{%- for project in site.data.projects -%}
{%- if project['Level'] != 'working-group' -%}
  <div>
  <dt><img src="{{ project['Logo URL'] }}" ></dt>
  <dd><p>Contributed By</p><p>{{ project['Contributed By'] }}</p></dd>
  </div>
{%- endif -%}
{%- endfor -%}
</dl>
