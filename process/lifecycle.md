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

# TAC presentation

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

This document provides for three lifecycle stages for contributed projects:

* Incubation;
* Adopted; and
* Archived

All projects must meet the Incubation stage requirements and following a successful Graduation Review, progress to Adopted. It is possible that some projects may be approved as Incubation and pass a Graduation Review at the same time to advance directly to Adopted. A project that does not pass a Graduation Review remains at the Incubation stage unless the TAC votes to transition the project to Archive status.  Alternatively, the TAC or the project TSC may vote to exit the lifecycle under specific terms for transfer of trademarks and other key assets.

## Incubation Stage Requirements

To be accepted at the Incubation stage, a project must:

* Submit a completed [Project Contribution Proposal Template](proposal_template.md) to the TAC, or the TAC’s designated recipient for contribution proposals.
* Provide such additional information as the TAC may reasonably request.
* Be available to present to the TAC with respect to the project’s proposal and inclusion in ASWF. Project teams should be prepared to present a detailed (20-30 minutes in length) overview on the project in addition to speaking to the information contained in the project contribution proposal.
* Be deemed by the TAC to add potential value or value to the mission of ASWF.
* Have a technical charter that provides for inbound and outbound licensing of code under an OSI-approved license approved by the Governing Board of ASWF for projects. The ASWF maintains a [template](charter_template.md) for projects to use.
* Agree to transfer any relevant trademarks to an LF entity to hold for the project. In the case of projects with established trademarks where a trademark transfer is commercially difficult, we generally recommend the project use a new name upon incubation.
* Obtain an affirmative vote of the TAC.

An initial review of a proposal submitted to the TAC should be conducted within two to four weeks following acceptance of a project contribution proposal. If a project is a new project, it’s often helpful to share the vision for the project, the anticipated structure and benefits.
If the project is an existing open source project proposed to join ASWF, it is often helpful to schedule a project walkthrough for the community to better understand the project, including the architecture, structure and how to get starting using the project. This often helps progress reviews more efficiently.

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

Incubation stage projects are eligible to receive the following benefits:

* Incubation stage projects will constitute “Technical Projects” under the ASWF charter and may receive support as determined by the Governing Board.
* Neutral hosting of the project’s community and any key assets (e.g. trademark, domain, etc.)
* Assistance from the ASWF TAC to facilitate collaboration with other project communities.
* Blog announcement or similar communication announcing the inclusion of the project.
* Right to refer to the project as an incubation project of ASWF, and an opportunity to participate in events and other collaborative activities sponsored by ASWF.
* Subject to applicable trademark usage guidelines, to display ASWF’s logo on the project’s code repository.

Incubation stage projects are expected to leverage third-party public code repositories.

Adopted stage projects are eligible to receive the following benefits:

* Will become an official “Technical Project” under the ASWF charter and may receive additional resources or support as determined by the Governing Board.
* Right to refer to the project as an officially adopted project of ASWF, and receive highest priority for participating in events and other collaborative activities sponsored by ASWF.
* A blog announcement or similar communication announcing the graduation of the project.
* Graduation stage projects that receive the approval of the Governing Board constitute “TAC Projects” under the ASWF charter.

## Archive Stage

* Archive stage projects will constitute “Technical Projects” under the ASWF charter and may receive support as determined by the Governing Board.

# Annual Review

The TAC will review on an annual basis all projects within this lifecycle. Additionally, Sandbox Stage projects will be required to submit quarterly reports of progress towards the Incubation Stage.

The purpose of the TAC Review is to gauge whether the project is still at the correct maturity stage based on the criteria for the current stage, as well as identify any concerns or feedback from the project's TSC that the ASWF can help address.

Projects will schedule their annual review as part of the next TAC meeting following their anniversary of the project’s acceptance. Projects should prepare a short presentation that covers the following points, which the TAC will use in its review of the project:

*   The current activity of the project, including releases, adoption, and committer/contribution growth and diversity.
*   Assessment of whether the project is fulfilling the requirements for the project to remain at its current stage, or be considered for a different stage.
*   Feedback on its experience as an ASWF project, including benefits from being an ASWF project and areas that the TAC and ASWF staff can better support the project.

Annual reviews require a majority affirmative vote of the TAC for the project to continue at the current stage or the appropriate number of votes as outlined for each stage in this document to move to the next stage. If the TAC deems the project to not be currently meeting the requirements of the current stage, it may vote to move the project to the appropriate stage or Archived stage. The project may choose to move outside of the ASWF at any time.
