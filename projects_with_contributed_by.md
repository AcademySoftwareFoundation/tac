---
nav_exclude: true
layout: minimal
---
<style>
  
  #projects_with_contributors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & dt::after {
      content: "" !important;
    }
    & div {
      flex-basis: 16%;
    }
    & dt img {
      height: 150px;
    }
    & dt {
      text-align: center;
    }
    & dd {
      margin-left: 0;
    }
    & dd p {
      text-align: center;
    }
    & dd p:first-child {
        font-family: Arial;
        font-size: 13px;
        color: #AAAAAA;
    }
    & dd p:last-child {
        font-family: Arial;
        font-size: 17px;
        color: #999999;
    }
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
