---
parent: Processes
title: Project Lifecycle
---

# The Academy Software Foundation
# Project Lifecycle Document

This lifecycle document is maintained by The Academy Software Foundation (“ASWF”), and its purpose is to:

* Describe the requirements for contributing a project to ASWF;
* Provide a clear process for the contribution of a project to ASWF; and
* Set milestones and requirements for different stages of a project’s development once accepted into ASWF.

ASWF may adopt or amend this document by votes of its Technical Advisory Council (“TAC”) and Governing Board.

This document provides for four lifecycle stages for contributed projects:

* Sandbox;
* Incubation;
* Adopted; and
* Archived

All projects must meet the Incubation stage requirements and following a successful Graduation Review, progress to Adopted. It is possible that some projects may be approved as Incubation and pass a Graduation Review at the same time to advance directly to Adopted. A project that does not pass a Graduation Review remains at the Incubation stage unless the TAC votes to transition the project to Archive status.  Alternatively, the TAC or the project TSC may vote to exit the lifecycle under specific terms for transfer of trademarks and other key assets.

## Sandbox Stage

Projects being submitted to the ASWF at the sandbox level are intended to be the entry point for early-stage projects. Characteristics for projects at the Sandbox Stage maybe one or more of:

* Early-stage projects that the ASWF TAC believes warrant experimentation.
* New projects that are designed to extend one or more TAC projects with functionality or interoperability libraries.
* Independent projects that fit the ASWF mission/vision and provide the potential for a novel approach to existing functional areas (or are an attempt to meet an unfulfilled need).
* Projects commissioned or sanctioned by the ASWF, including initial code for ASWF Working Group collaborations, and "experimental" projects.
* Any project that realistically intends to join ASWF Incubation in the future and wishes to lay the foundations for that.

### Requirements

To be accepted at the Sandbox stage, a project must:

* Submit a completed [Project Contribution Proposal Template](proposal_template.md) to the TAC, or the TAC’s designated recipient for contribution proposals.
* Provide such additional information as the TAC may reasonably request.
* Be available to present to the TAC with respect to the project’s proposal and inclusion in ASWF. Project teams should be prepared to present a detailed (20-30 minutes in length) overview on the project in addition to speaking to the information contained in the project contribution proposal.
* Be deemed by the TAC to add potential value or value to the mission of ASWF.
* Obtain an affirmative vote of the TAC.

### Benefits

The Sandbox Stage benefits are outlined below.

* Neutral hosting of the project’s community and any key assets (e.g. trademark, domain, etc.).
* Access to the ASWF collaboration infrastructure ( including GitHub, JIRA, Confluence, mailing lists, Slack ).
* A sponsor from the TAC to assist the project in reaching the Incubation Stage and to facilitate collaboration with other project communities.
* Right to refer to the project as a Sandbox Project of ASWF, and an opportunity to participate in events and other collaborative activities sponsored by ASWF.
* Subject to applicable trademark usage guidelines, to display ASWF’s logo on the project’s code repository.

### Expectations

Sandbox Stage projects should provide a quarterly report to the TAC outlining its progress on completing the requirements for the Incubation Stage.

It’s expected that projects in the Sandbox Stage move to the Incubation Stage within one year. In the case of a Sandbox Stage project that is not renewed with ASWF, the trademark and any other assets will be returned to the project maintainers or an organization they designate.

## Incubation Stage

A project at the Incubation Stage has begun to form a community and develop its scope and mission. Incubation Stage projects likely will have some adoption in testing or production use.

### Requirements

To be accepted at the Incubation stage, a project must meet the Sandbox requirements plus:

*   Have completed and approved the Technical Charter and agree to transfer any relevant trademarks to The Linux Foundation or its affiliate, LF Projects, LLC, and to assist in filing for any relevant unregistered ones. The ASWF maintains a [template](charter_template.md) for projects to use.
*   Have defined its technical governance, including:
    *   A LICENSE file in every code repository, with the license chosen an OSI-approved license.
    *   A README file welcoming new community members to the project and explaining why the project is useful and how to get started.
    *   A CONTRIBUTING file explaining to other developers and your community of users how to contribute to the project. The file should explain what types of contributions are needed and how the process works.
    *   A CODEOWNERS or COMMITTERS file to define individuals or teams that are responsible for code in a repository; document current project owners and current and emeritus committers. 
    *   A CODE_OF_CONDUCT file that sets the ground rules for participants’ behavior associated and helps to facilitate a friendly, welcoming environment. By default, projects should leverage the Linux Foundation Code of Conduct unless an alternate Code of Conduct was previously approved.
    *   A RELEASE file that provides documentation on the release methodology, cadence, criteria, etc.
    *   A GOVERNANCE file that documents the project’s technical governance.
    *   A SUPPORT file to let users and developers know about ways to get help with your project.
*   Have achieved and maintained a Core Infrastructure Initiative [Best Practices Badge](https://bestpractices.coreinfrastructure.org/) at the passing level. 
*   Have had a successful license scan with any critical issues remedied.
*   Have a defined project mission and scope
*   An overview of the project’s architecture and features defined.
*   A project roadmap defined, which should address the following questions.
    *   What use cases are possible now?
    *   What does the next year look like in terms of additional features and use cases covered?
*   Community and contributor growth assessment
    *   The current number of contributors and committers, and the number of different organizations contributing to the project. 
    *   Demonstrate a sustained flow of commits / merged contributions
    *   A credible plan for developing a thriving user community, in particular expanding the number of committers and contributors?
    *   Outline of the plan for the project to complete the requirements for Adopted Stage
* Obtain an affirmative vote of the TAC.

Sandbox Projects may propose to be reviewed to move to the Incubation Stage at any time by adding the review to a future TAC meeting agenda ( minimum two weeks notice required ) or may be moved to the Incubation Stage during its annual review. Projects should prepare a presentation outlining how it has completed the Incubation Stage requirements.

### Benefits

Incubation stage projects are eligible to receive the following benefits:

* Be considered as one of the “Technical Projects” under the [ASWF Charter](https://github.com/AcademySoftwareFoundation/foundation/blob/master/CHARTER.md) and may receive support as determined by the Governing Board.
* Neutral hosting of the project’s community and any key assets (e.g. trademark, domain, etc.)
* Assistance from the ASWF TAC to facilitate collaboration with other project communities.
* Blog announcement or similar communication announcing the inclusion of the project.
* Right to refer to the project as an incubation project of ASWF, and an opportunity to participate in events and other collaborative activities sponsored by ASWF.
* Subject to applicable trademark usage guidelines, to display ASWF’s logo on the project’s code repository.

### Expectations

Incubation Stage projects should provide a quarterly report to the TAC outlining its progress on completing the requirements for the Adopted Stage. 

Every 12 months, each Incubation Stage project will be reviewed by the TAC to assess its progress towards graduating to the Adopted Stage. If the project has not met the requirements for graduating to the Adopted Stage, the TAC may renew the project at the Incubation Stage for another 12 months with a majority vote of the TAC. 

It is expected that Incubation Stage projects graduate to the Adopted Stage within 2 years from moving to the Incubation Stage. In the case of an Incubation Stage project that is not renewed with ASWF, the trademark and any assets will be returned to the project maintainers or an organization they designate.

## Graduation Review

To be advance to an Adopted stage, a project must meet the Incubation stage requirements plus:

* Demonstrate having a healthy number of committers from a diverse contributor base*.
  * A committer is defined in the technical charter but is often used to describe the core contributors who can accept contributions to the project, or a portion thereof.
* Demonstrate a substantial ongoing flow of commits and merged contributions, authored by a healthy number of diverse contributors*.
* Document current project owners and current and emeritus committers in a COMMITTER file or similarly visible system. A copy of the project’s charter (or other authorized governance document) will be included or linked to in visible location.
* Have achieved and maintained a Core Infrastructure Initiative Best Practices Badge.
* Have a technical lead appointed for representation of the project to the TAC.
* Have a completed and presented to the TAC an initial license scan of the project’s codebase.
* Be deemed by the TAC to add value to the mission of ASWF.
* Obtain an affirmative vote of both the TAC and the Governing Board.

*Since these metrics can vary significantly depending on the type, scope and size of a project, the TAC has final judgment over the level of activity that is adequate to meet these criteria. In general it will be necessary to (at least) demonstrate that the project is not overly reliant on any one individual or company, and can remain healthy in the event of a departure.

# Project Benefits Associated with Each Lifecycle Stage

Adopted stage projects are eligible to receive the following benefits:

* Will become an official “Technical Project” under the ASWF charter and may receive additional resources or support as determined by the Governing Board.
* Right to refer to the project as an officially adopted project of ASWF, and receive highest priority for participating in events and other collaborative activities sponsored by ASWF.
* A blog announcement or similar communication announcing the graduation of the project.
* Graduation stage projects that receive the approval of the Governing Board constitute “TAC Projects” under the ASWF charter.

## Archive Stage

* Archive stage projects will constitute “Technical Projects” under the ASWF charter and may receive support as determined by the Governing Board.

# Annual Review

The TAC may undertake periodic reviews of all projects (i.e., annual). Such review will include an assessment as to whether each Incubation stage project is making adequate progress towards the Graduation stage. Any Adopted project may be moved to Archive stage by affirmative vote of the TAC.
