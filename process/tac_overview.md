---
parent: Processes
---

# TAC Overview

* TOC
{:toc}

## Responsibilities

The TAC’s responsibilities include:

- Setting an overall technical vision for the {{ site.foundation_name }}
- Approving new projects and working groups;
- Overseeing the Project Lifecycle;
- Enabling collaboration between projects and working groups;
- Making recommendations to the Budget Committee for any resource needs;
- Voting on other decisions that come before the TAC.

Additional responsibilities are described in [{{ site.foundation_name }} Directed Fund Charter]({{ site.directed_fund_charter_url }}).

## What the TAC is NOT responsible for

- The TAC does **not** manage the day-to-day activities and operations of hosted projects and working groups, such as committer rights, release schedules, and roadmaps.
- The TAC is **not** responsible for overseeing day-to-day operations of Academy Software Foundation. This is the responsibility of the foundation staff.
- The TAC does **not** directly manage the overall budget for the {{ site.foundation_name }}. The TAC makes resource recommendations to the Budget Committee and Governing Board, and provides feedback on the use of those resources.

## Composition

The TAC voting members consist of:

- One representative appointed from each {{ site.membership_top_tier }} member
- One representative appointed by the TSC of each TAC Project (as defined in the [{{ site.foundation_name }} Directed Fund Charter]({{ site.directed_fund_charter_url }})). {{ site.tac_projects | map: 'plural' |  array_to_sentence_string }} are considered TAC Projects
{% if site.vote_of_tac_committee_title -%}
- Up to {{ site.vote_of_tac_committee_count }} annually TAC appointed {{ site.vote_of_tac_committee_title }}
{%- endif %}

See [{{ site.foundation_name }} Directed Fund Charter]({{ site.directed_fund_charter_url }}) for more information about composition.

{{ site.membership_top_tier }} members and TAC Projects can change their representative at any time by making a request [here]({{ site.helpdesk_url }}).

## Discussion Channels

### Relevant Mailing Lists

- TAC Public List: [{{ site.tac_mailing_list_email }}]({{ site.tac_mailing_list_url }})
- TAC Private List: {{ site.tac_private_mailing_list_email }} (This list is ONLY for sensitive topics)
- {{ site.project_types | map: 'singular' |  array_to_sentence_string }}
 Leads: technical-project-leads@lists.aswf.io

### Slack Channel

- You can join {{ site.foundation_name }} Slack [here]({{ site.slack_url }})
- To join the TAC Slack channel, make a request [here]({{ site.helpdesk_url }}).
