---
parent: Processes
title: Project Lifecycle
has_children: true
---

# Academy Software Foundation - Project Lifecycle

* TOC
{:toc}

This lifecycle document is maintained by The Academy Software Foundation (“ASWF”), and its purpose is to:

* Describe the requirements for contributing a project to ASWF;
* Provide a clear process for the contribution of a project to ASWF; and
* Set milestones and requirements for different stages of a project’s development once accepted into ASWF.

ASWF may adopt or amend this document by votes of its Technical Advisory Council (“TAC”) and Governing Board.

# Proposal Process

Projects must be submitted to [tac@lists.aswf.io](mailto:tac@lists.aswf.io) for consideration. Project proposals submitted to the ASWF TAC must provide the following information to the best of their ability.

* Name of the project (existing or proposed)
* Requested project maturity level (select one): Adopted, Incubation, and Sandbox
* Project description (please describe the purpose and function of the project, its origin and its significance to the ecosystem)
* Please explain how this project is aligned with the mission of ASWF
* What is the project’s license for code contributions and methodology for code contributions. ASWF maintains recommendations for contribution and licensing for hosted projects.
* What tool or platform is utilized for source control (GitHub, etc.) and what is the location (e.g. URL)?
* What are the external dependencies of the project, and what are the licenses of those dependencies?
* What roles does the project have (e.g. maintainers, committers?) Who are the current core committers of the project, or where can a list of committers be found?
* What mailing lists are currently used by the project?
* What tool or platform is leveraged by the project for issue tracking?
* Does the project have a Core Infrastructure Initiative security best practices badge? Do you foresee any challenges obtaining one? (See: https://bestpractices.coreinfrastructure.org)
* What is the project's website? Is there a wiki?
* What social media accounts are used by the project?
* What is the project’s release methodology and cadence?
* Are any trademarks, registered or unregistered, leveraged by the project? Have any trademark registrations been filed by the project or any third party anywhere in the world?

## TAC presentation

Projects will present at the next TAC meeting no sooner than two weeks after their submission date.

Proposed projects will receive a 30-45 minute presentation slot at an upcoming TAC meeting as the schedule allows. The project proposal must include a presentation that conforms to the presentation structure below to ensure uniform and complete submissions.

*   Overview of the project and its purpose
    *  If a project is a new project, it’s often helpful to share the vision for the project, the anticipated structure and benefits.
    *  If the project is an existing open source project proposed to join ASWF, it is often helpful to schedule a project walkthrough for the community to better understand the project, including the architecture, structure and how to get started using the project. This often helps reviews progress more efficiently.
*   How does this submission support the ASWF Mission and Vision Statements?
*   Does the project have any users? 
    *   How do you plan to attract users if accepted?
*   How many committers are you planning to have upfront, and from which companies? 
    *   How do you plan to attract committers and contributors if accepted?
*   Architecture (functional / non-functional aspects), design, feature overview
*   Demo and/or walk through of the project

An initial review of a proposal submitted to the TAC should be conducted within two to four weeks following acceptance of a project contribution proposal. 

The TAC may consider the project for approval at the proposed stage during the meeting it is presented at, provided there is a quorum of TAC voting members present. If there is not a quorum of TAC voting members present or if the TAC is not ready to consider the project for approval during the meeting, the TAC may consider discussing and/or voting on the project proposal via email or postpone the vote to a future meeting. An affirmative majority vote of the TAC is required to accept a new TAC Project.

# Stages

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

## Adopted Stage

Adopted Stage projects are considered mature projects that generally are ready for production use. Projects at this stage are focused on growing an ecosystem of users and are often being leveraged in vendor products or being used by end-users.

### Requirements

To be advance to an Adopted stage, a project must meet the Incubation stage requirements plus:

* Demonstrate a substantial ongoing flow of commits and merged contributions, authored by a healthy number of diverse contributors*.
* Demonstrable roadmap progress.
* A healthy number of public adopters that are identified within the project ( using an ADOPTERS file or showcased on the project’s website ).
* Have achieved and maintained a Core Infrastructure Initiative [Best Practices Gold Level Badge](https://bestpractices.coreinfrastructure.org/)
* Have a technical lead appointed for voting representation of the project to the TAC.
* Be deemed by the TAC to add value to the mission of ASWF.
* Obtain both a 2/3 supermajority vote of the TAC and an affirmative majority vote of the Governing Board

*Since these metrics can vary significantly depending on the type, scope and size of a project, the TAC has final judgment over the level of activity that is adequate to meet these criteria. In general it will be necessary to (at least) demonstrate that the project is not overly reliant on any one individual or company, and can remain healthy in the event of a departure.

### Benefits

Adopted stage projects are eligible to receive the following benefits:

* Be considered as one of the “TAC Projects” under the [ASWF Charter](https://github.com/AcademySoftwareFoundation/foundation/blob/master/CHARTER.md). 
 and may receive additional resources or support as determined by the Governing Board.
* Right to refer to the project as an officially adopted project of ASWF, and receive highest priority for participating in events and other collaborative activities sponsored by ASWF.
* A blog announcement or similar communication announcing the graduation of the project.

## Archive Stage

Projects like products have lifecycles, and often in open source, the relevance for a given project over time can diminish. Nonetheless, having a home for projects that are no longer relevant within the industry is crucial for long-term sustainability and asset management.

Projects only can enter the Archive Stage by either:

*   On request from the project itself, requiring a ⅔ supermajority vote of all active project committers.
*   By a 2/3 supermajority vote of the TAC if it is deemed no longer relevant within the industry.

When in the Archive Stage, the project’s code repository administration is transferred to a designated individual by the TAC. No new features or bug fixes will be addressed unless it is deemed a security issue. ASWF will hold all assets in perpetuity. Archive stage projects will be considered “Technical Projects” under the ASWF charter and may receive support as determined by the Governing Board.

A project can move back to Adopted Stage following the guidelines for a project being accepted at the Adopted Stage above.

# Annual Review

The TAC will review on an annual basis all projects within this lifecycle. Additionally, Sandbox Stage projects will be required to submit quarterly reports of progress towards the Incubation Stage.

The purpose of the TAC Review is to gauge whether the project is still at the correct maturity stage based on the criteria for the current stage, as well as identify any concerns or feedback from the project's TSC that the ASWF can help address.

Projects will schedule their annual review as part of the next TAC meeting following their anniversary of the project’s acceptance. Projects should prepare a short presentation that covers the following points, which the TAC will use in its review of the project:

*   The current activity of the project, including releases, adoption, and committer/contribution growth and diversity.
*   Assessment of whether the project is fulfilling the requirements for the project to remain at its current stage, or be considered for a different stage.
*   Feedback on its experience as an ASWF project, including benefits from being an ASWF project and areas that the TAC and ASWF staff can better support the project.

Annual reviews require a majority affirmative vote of the TAC for the project to continue at the current stage or the appropriate number of votes as outlined for each stage in this document to move to the next stage. If the TAC deems the project to not be currently meeting the requirements of the current stage, it may vote to move the project to the appropriate stage or Archived stage. The project may choose to move outside of the ASWF at any time.
