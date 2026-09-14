---
parent: Processes
title: Project Lifecycle
nav_order: 20
has_children: true
---

# {{ site.foundation_name }} - Project Lifecycle

* TOC
{:toc}

This lifecycle document is maintained by the {{ site.foundation_name }}, and its purpose is to:

- Describe the requirements for contributing a project to {{ site.foundation_name }};
- Provide a clear process for the contribution of a project to {{ site.foundation_name }}; and
- Set milestones and requirements for different stages of a project’s development once accepted into {{ site.foundation_name }}.

The {{ site.foundation_name }} may adopt or amend this document by a majority vote of both the Technical Advisory Council (“TAC”) and Governing Board.

# Stages

This document provides for four lifecycle stages for contributed projects (“Projects”):

- [Sandbox](#sandbox-stage);
- [Incubation](#incubation-stage);
- [Graduated](#graduated-stage); and
- [Archived](#archived-stage)

Any project to be considered for inclusion by the TAC must complete the [proposal template](proposal_template). More details on bringing a project to the {{ site.foundation_name }} are outlined [here](start_project).

## Sandbox Stage

Projects submitted to the {{ site.foundation_name }} at the Sandbox Stage are intended to be the entry point for early-stage projects. Characteristics for projects at the Sandbox Stage may be one or more of the following:

- Early-stage projects that the {{ site.foundation_name }} TAC believes warrant experimentation.
- New projects that are designed to extend one or more TAC projects with functionality or interoperability libraries.
- Independent projects that fit the {{ site.foundation_name }} mission/vision and provide the potential for a novel approach to existing functional areas (or are an attempt to meet an unfulfilled need).
- Projects commissioned or sanctioned by the {{ site.foundation_name }}, including initial code for {{ site.foundation_name }} Working Group collaborations and "experimental" projects.
- Any project that realistically intends to become an {{ site.foundation_name }} hosted project and wishes to lay the foundations for that.

### Requirements

To be accepted at the Sandbox stage, a project must:

- Submit a completed Project Contribution Proposal to the TAC via the process outlined in the [Project Contribution Process].
- Complete and approve the Technical Charter and agree to transfer any relevant marks, domain names, accounts, and other assets, to The Linux Foundation or its affiliate, LF Projects, LLC or Linux Foundation Europe, and to assist in filing for any relevant unregistered trademarks.
- Have a successful license scan with any critical issues remedied.
- Provide administrator access to all project tools, such as its GitHub organization, collaboration and communication tools, and build/test infrastructure.
- Provide such additional information as the TAC may reasonably request.

### Approval Process

In conjunction with the LF staff and TAC voting representatives, the project will be scheduled to be presented at an upcoming TAC meeting. This presentation should provide an overview of the project and its alignment with {{ site.foundation_name }}, and speak to the information shared in the project contribution proposal. Voting will be done per the [TAC voting policy].

### Benefits

The Sandbox Stage benefits are outlined below.

- Neutral hosting of the project's community and key assets (e.g., trademark, domain, etc.).
- Access to the {{ site.foundation_name }} collaboration infrastructure ( including GitHub, JIRA, Confluence, mailing lists, 1Password, and Slack ).
- Right to refer to the project as an {{ site.foundation_name }} Sandbox Project, and use the {{ site.foundation_name }} Sandbox Project logo in the project’s code repository ( subject to the {{ site.foundation_name }} Branding Guidelines ).
- Help to create the project’s artwork, website, and other required creative work.
- A sponsor from the TAC will assist the project in reaching the Incubation Stage and facilitate collaboration with other project communities.
- Ability to participate in events and other collaborative activities sponsored by {{ site.foundation_name }}.
- Regularly scheduled license scans of the project’s codebase with results reported to the project’s mailing list.
- Use of the LFX platform, including LFX Insights and LFX Project Control Center (PCC), for managing project health and operations.

Sandbox Stage projects will not have an announcement blog or press announcement because projects at the Sandbox stage are in an early stage and still gaining alignment among the stakeholders. We often see projects in the Sandbox Stage change scope and focus; the TAC aims to ensure that projects have the space to focus on building a solid governance and contributor base to grow towards the Incubation Stage.

### Expectations

Projects in the Sandbox Stage are expected to move or have made demonstrable progress on moving to the [Incubation Stage](#incubation-stage) within one year. Sandbox Projects may propose to be reviewed to move to the Incubation Stage during its regularly scheduled [Annual Review](review_cycle); projects can also request to hold their annual review early if they have completed the requirements before its scheduled [Annual Review](review_cycle).

The TAC may request Sandbox Stage projects to provide updates outlining its progress on completing the requirements for the Incubation Stage before the Annual Review. If a project fails to provide these reports after a TAC request, the TAC may vote to remove the project from the Sandbox stage.

At the project's [Annual Review](review_cycle), the TAC will vote to either:

* Move the project to the [Incubation Stage] if it meets the requirements for that stage.
* Renew the project at the Sandbox Stage if it feels it will move to the Incubation Stage by the next Annual Review.
* Move the project to the [Archived Stage](#archived-stage). In this case, the trademark and any other assets will be returned to the project maintainers or an organization they designate.

{: .note } 
Sandbox Stage projects should have completed all the [project onboarding requirements] within six months of the TAC approval. If a project is unable to complete the requirements in that timeframe, the TAC may request that the project reapply when they can focus on completing the requirements.

## Incubation Stage

Incubation projects are projects that the TAC believes are, or have the potential to be, important to the ecosystem of Projects or the ecosystem as a whole. They may be early-stage projects just getting started, or long-established projects with minimal resource needs. The Incubation stage provides a beneficial, neutral home for these projects, fostering collaborative development and paving the way for deeper alignment with other {{ site.foundation_name }} projects.

### Requirements

To be considered for the Incubation Stage, the project must meet the following requirements:

*   Have defined its technical governance, including:
    *   A README file welcoming new community members to the project and explaining why the project is useful and how to get started ( follow the guidelines at the [README checklist](https://github.com/ddbeck/readme-checklist) to create an excellent README file ).
    *   A CODEOWNERS or COMMITTERS file to define individuals or teams responsible for code in a repository; document current project owners and current and emeritus committers. 
    *   A RELEASE file that documents the release methodology, cadence, criteria, etc.
*   Have achieved and maintained an OpenSSF Best Practices Badge at the [Passing Level](https://bestpractices.coreinfrastructure.org/en/criteria). 
*   Have a defined project mission and scope
*   An overview of the project's architecture and features defined ( equivalent to the [documentation_architecture](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.documentation_architecture) OpenSFF Best Practices Silver Level badge requirement. )
*   A documented project roadmap ( equivalent to the [documentation_roadmap](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.documentation_roadmap) OpenSFF Best Practices Silver Level badge requirement. )
*   Community and contributor growth assessment
    *   The current number of contributors, committers, and different organizations contributing to the project. 
    *   Demonstrate a sustained flow of commits / merged contributions
    *   A healthy number of end-users within the visual effects and motion picture industries have adopted the project and are identified by the project ( using an ADOPTERS file or showcased on the project's website ).
    *   A credible plan for developing a thriving user community, particularly expanding the number of committers and contributors?
    *   Outline of the plan for the project to complete the requirements for the [Graduated Stage](#graduated-stage)
* Obtain an affirmative vote of the TAC.

Projects preparing to be considered for the Incubation Stage should prepare a presentation outlining how they have completed the requirements and present it at the TAC meeting where they are being considered.

### Benefits

Incubation stage projects are eligible to receive the following benefits:

* Be considered as one of the “Technical Projects” under the [Academy Software Foundation Charter](https://github.com/AcademySoftwareFoundation/foundation/blob/master/CHARTER.md) and may receive support as determined by the Governing Board.
* Neutral hosting of the project's community and key assets (e.g., trademark, domain, etc.)
* Assistance from the Academy Software Foundation TAC to facilitate collaboration with other project communities.
* Blog announcement or similar communication announcing the inclusion of the project.
* Right to refer to the project as an incubation project of the Academy Software Foundation and an opportunity to participate in events and other collaborative activities sponsored by the Academy Software Foundation.
* Subject to applicable trademark usage guidelines, display the Academy Software Foundation's logo on the project's code repository.

### Expectations

During the project's Annual Review, the TAC will assess the progress toward graduating to the Graduated Stage. Projects can also request to hold their annual review early if they have completed the requirements before its scheduled [Annual Review](review_cycle). At the Annual Review, the TAC will vote to either: 

* Move the project to the Graduated Stage if it [meets those requirements](#requirements-2).
* Renew the project at the Incubation Stage if it feels it will move to the Graduated Stage by the next Annual Review.
* Move the project to the [Archived Stage](#archived-stage). In this case, the trademark and any other assets will be returned to the project maintainers or an organization they designate.

## Graduated Stage

Graduated Stage projects have matured open source project processes and procedures that are aligned with the best practices defined by the OpenSSF and the industry at large. Projects at this stage focus on growing an ecosystem of users and are often leveraged in vendor products or used by end-users.

### Requirements

To be considered for the Graduated stage, a project must meet the Incubation stage requirements plus:

* Demonstrate a substantial ongoing flow of commits and merged contributions authored by a healthy number of diverse contributors*.
* Demonstrable roadmap progress.
* A significant number of end-users within the visual effects and motion picture industries have adopted the project and are identified within the project ( using an ADOPTERS file or showcased on the project's website ).
* Have completed all of the OpenSSF Best Practices Badge requirements at the [gold level](https://bestpractices.coreinfrastructure.org/en/criteria/2), except for the following criteria, which are temporarily not required:
  * [The project MUST have performed a security review within the last 5 years. This review MUST consider the security requirements and security boundary](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#2.security_review)
  * [The project MUST provide an assurance case that justifies why its security requirements are met. The assurance case MUST include: a description of the threat model, clear identification of trust boundaries, an argument that secure design principles have been applied, and an argument that common implementation security weaknesses have been countered.](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.assurance_case)
  * [The project MUST have FLOSS automated test suite(s) that provide at least 90% statement coverage if there is at least one FLOSS tool that can measure this criterion in the selected language.](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#2.test_statement_coverage90)
  * [The project MUST have FLOSS automated test suite(s) that provide at least 80% branch coverage if there is at least one FLOSS tool that can measure this criterion in the selected language.](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#2.test_branch_coverage80)
  * [The project MUST have a reproducible build. If no building occurs (e.g., scripting languages where the source code is used directly instead of being compiled), select "not applicable"](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.build_repeatable)
  * [The project MUST implement secure design principles where applicable.  If the project is not producing software	select "not applicable".](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.implement_secure_design)
  * [The project website, repository (if accessible via the web), and download site (if separate) MUST include key hardening headers with nonpermissive values.](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#2.hardened_site)
  * [The project (both project sites and project results) SHOULD follow accessibility best practices so that persons with disabilities can still participate in the project and use the project results where it is reasonable to do so.](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.accessibility_best_practices)
  * [The project MUST list external dependencies in a computer-processable way.](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.external_dependencies)
  * [The project results MUST check all inputs from potentially untrusted sources to ensure they are valid (an allowlist), and reject invalid inputs, if there are any restrictions on the data at all.](https://www.bestpractices.dev/en/criteria?details=true&rationale=true#1.input_validation)
* Have a technical lead appointed as a voting representative of the project to the TAC.
* Be deemed by the TAC to add value to the mission of the Academy Software Foundation.
* Obtain both a 2/3 supermajority vote of the TAC and an affirmative majority vote of the Governing Board

*Since these metrics can vary significantly depending on a project's type, scope, and size, the TAC has final judgment over the activity level adequate to meet these criteria. In general, it will be necessary to (at least) demonstrate that the project is not overly reliant on any one individual or organization and can remain healthy in the event of a departure.

### Benefits

Graduated stage projects are eligible to receive the following benefits:

* Be considered as one of the “TAC Projects” under the [Academy Software Foundation Charter](https://github.com/AcademySoftwareFoundation/foundation/blob/master/CHARTER.md) and may receive additional resources or support as determined by the Governing Board.
* Have a voting representative on the TAC.
* Right to refer to the project as an officially Graduated project of the Academy Software Foundation and receive the highest priority for participating in events and other collaborative activities sponsored by the Academy Software Foundation.
* A blog announcement or similar communication announcing the graduation of the project.

### Expectations

Graduated Stage projects will have an Annual Review to assess if the project is still meeting the Graduated Stage requirements. At the Annual Review, the TAC will vote to either: 

* Renew the project at the Graduated Stage if it continues to [meet those requirements](#requirements-2).
* Move the project to the [Archived Stage](#archived-stage). In this case, the trademark and any other assets will be returned to the project maintainers or an organization they designate.

For the first Annual Review after the project reaches the Graduated Stage, it is expected that the project has completed 100% of the OpenSSF Best Practices Badge requirements at the [gold level](https://bestpractices.coreinfrastructure.org/en/criteria/2) with the exception of the requirements listed above.

## Archived Stage

Projects like products have lifecycles, and often, in open source, the relevance of a given project can diminish over time. Nonetheless, having a home for legacy and no longer maintained projects within the industry is crucial for long-term sustainability and asset management. Projects with operational, contributor, and/or adoption issues are not necessarily candidates for the Archived Stage; the TAC will work with these projects to improve any of these issues.

Projects can only enter the Archived Stage by either:

*   On request from the project itself, a 2/3 supermajority vote of all active project committers is required.
*   By a 2/3 supermajority vote of the TAC if deemed to be no longer maintained.

In the Archived Stage, the TAC transfers the project's code repository administration to a designated individual. No new features or bug fixes will be addressed unless they are deemed security issues. Academy Software Foundation will hold all assets in perpetuity. Archived Stage projects will be considered “Technical Projects" under the Academy Software Foundation charter and may receive support as determined by the Governing Board.

A project can move back to one of the Sandbox, Incubation, or Graduated Stages following the guidelines for a project being accepted at that level.
