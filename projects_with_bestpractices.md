---
nav_exclude: true
layout: minimal
---

<h2>Graduated Projects</h2>
<p>Must have a badge at the <a href="https://www.bestpractices.dev/en/criteria/2" title="Gold"><img alt="Gold" src="https://www.bestpractices.dev/assets/gold-95e83bf0f661bb363720e2bf903a1d35eecb42e57359dc99a40cde49a1d82e75.svg" width="35" height="20"></a> level.</p>
<dl id="active_projects_with_bestpractices">
{%- for project in site.data.projects -%}
{%- if project['Level'] == 'graduated' -%}
  <div>
  <dt>
    <img src="{{ project['Logo URL'] }}" >
    {%- if project["Best Practices Badge ID"] and project["Best Practices Badge ID"] != 'none' and project["Best Practices Badge ID"] != 'False' -%}
    <a href="https://www.bestpractices.dev/projects/{{ project["Best Practices Badge ID"] }}"><img src="https://www.bestpractices.dev/projects/{{ project["Best Practices Badge ID"] }}/badge?{{ "now" | date: "%s" }}"></a>
    {%- endif -%}
  </dt>
  </div>
{%- endif -%}
{%- endfor -%}
</dl>
<h2>Incubating Projects</h2>
<p>Must have a badge at the <a href="https://www.bestpractices.dev/en/criteria/0" title="Passing"><img alt="Passing" src="https://www.bestpractices.dev/assets/passing-51f03c93f32d01ad7a7e1fbfd057391ddce31889b7b3949553a79278e02cdbba.svg" width="35" height="20"></a> level.</p>
<dl id="incubating_projects_with_bestpractices">
{%- for project in site.data.projects -%}
{%- if project['Level'] == 'incubating' -%}
  <div>
  <dt>
    <img src="{{ project['Logo URL'] }}" >
    {%- if project["Best Practices Badge ID"] and project["Best Practices Badge ID"] != 'none' and project["Best Practices Badge ID"] != 'False' -%}
    <a href="https://www.bestpractices.dev/projects/{{ project["Best Practices Badge ID"] }}"><img src="https://www.bestpractices.dev/projects/{{ project["Best Practices Badge ID"] }}/badge?{{ "now" | date: "%s" }}"></a>
    {%- endif -%}
  </dt>
  </div>
{%- endif -%}
{%- endfor -%}
</dl>
