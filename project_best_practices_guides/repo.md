---
parent: Best Practices
title: Repository
---

# Repository Setup Recommendations

* TOC
{:toc}

This document reflects the minimum viable governance recommendation for any Linux Foundation hosted project. This document assumes the use of a public-facing version control repository, such as GitHub or GitLab, but can be adapted to any other tool being used. These are based on the [OpenSSF Best Practices Badge Program](https://www.bestpractices.dev/en) recommendations, along with other practices across Linux Foundation projects and more broadly in open source projects in general.

Key Words: “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “NOT RECOMMENDED”, “MAY”, and “OPTIONAL” are defined in accordance with [BCP 14](https://www.rfc-editor.org/info/bcp14) 

## Required Files at the root of the repository

These files follow the standard conventions in open source projects and MUST to exist. 

Note that if your project has multiple repositories, you MUST either have these files in each of the repositories, or it is RECOMMENDED to have the base files live in one repository ( either the primary code repository, or the special `.github` repository if using GitHub or `.gitlab` if using GitLab ) and then reference them in each of the other repositories.

### `README`

Each repository MUST have a `README` file, which outlines the following items:

* MUST have an overview of what the project does.
* MUST have the latest release information (if applicable)
    * Release history, including change logs, can be either maintained in a `RELEASE` file ( example at [https://keepachangelog.com/](https://keepachangelog.com/) ), or a project could use the GitHub ‘Releases’ functionality to emulate the same.
* MUST have information on how a user can use the code in the repository (if applicable).
    * This MAY be split out into a separate `BUILD` or `INSTALL` file, referenced in the `README` file, if the instructions exceed 30 words.
* MUST have information on how a user can contribute to the code repository.
    * This SHOULD be split out into a separate `CONTRIBUTING` file if it exceeds a paragraph of instructions.
    * Instructions for contributing security vulnerabilities MUST be in a `SECURITY` file, which can be referenced in the `README` file, but MUST be referenced in the `CONTRIBUTING` file.
* MUST include information on how a user gets support or how to discuss the project with others.
    * MUST provide links to mailing lists, communication channels, and where to submit bug reports.
* MUST include a calendar link for project meetings, or a list of meetings with instructions on how to join.
* SHOULD have an acknowledgment of any initial contributing organizations or persons.
* SHOULD have badges for OpenSSF Best Practices badge status, build status, and license.

### `LICENSE`

Each repository MUST have a `LICENSE` file, which lists the primary license of the source code and should be the exact text from [https://spdx.org/licenses/](https://spdx.org/licenses/). If the repository contains code or assets not under the primary license of the source code, they MUST be referenced in a `THIRD-PARTY` file, which lists the covered files and includes the full license text from [https://spdx.org/licenses/](https://spdx.org/licenses/).

### `GOVERNANCE`

Each repository MUST have a `GOVERNANCE` file, which details how decisions are made in the project. The following items MUST be included:

* A link to the Technical Charter ( do NOT make a copy of the Technical Charter in your repository )
* Community Roles, definitions of those roles (e.g., TSC Member, Maintainer/Committer, Contributor), and how one can be promoted to any of those roles.
* List of current leaders in the project
    * This MAY be outlined in a `COMMITTERS` or `MAINTAINERS` file if appropriate.
* How decisions are made, and voting is conducted.
* Any other project policies or processes.
    * Release instructions MAY be maintained in a `RELEASE` file.
* Schedule/joining instructions for TSC meeting and a link to the TSC meeting agendas and notes.

### `CODE_OF_CONDUCT`

The Code of Conduct MUST be maintained in a `CODE_OF_CONDUCT` file. If using the [LF Projects, LLC CoC](https://lfprojects.org/policies/code-of-conduct/), it is RECOMMENDED to include a link to that in the `CODE_OF_CONDUCT` file instead of copying and pasting.

### `SECURITY`

The project MUST maintain a `SECURITY` file that outlines the security policy for the project, including procedures for reporting vulnerabilities and policies for responding to them. More details at:

* [https://github.com/ossf/scorecard/blob/main/docs/checks.md#security-policy](https://github.com/ossf/scorecard/blob/main/docs/checks.md#security-policy) 
* [https://www.bestpractices.dev/en/criteria/0?details=true&rationale=true#0.vulnerability_report_process](https://www.bestpractices.dev/en/criteria/0?details=true&rationale=true#0.vulnerability_report_process) 

## Permissions

* Write access to the repository MUST be connected to a community role (i.e., the project CAN NOT provide write access to a user unless they have a community role that grants them write access )
* Project MUST require all users with write access to the repository to have two-factor authentication (2FA) enabled for their accounts.
* Adding/removing users with write access MUST have a vote to approve, and this vote MUST be documented ( MAY be documented in a GitHub/GitLab Pull Request or Issue ). The voters to approve MUST be a quorum of persons in that community role (i.e. a quorum of existing maintainers to approve a new maintainer). Quorum is defined in the project’s Technical Charter.
* It is RECOMMENDED to use the Teams functionality in GitHub or GitLab to manage community roles and write access.
* It is RECOMMENDED to use the `CODEOWNERS` file to manage users who maintain or have expertise in specific areas of the project
    * GitHub: [https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) 
    * GitLab: [https://docs.gitlab.com/user/project/codeowners](https://docs.gitlab.com/user/project/codeowners) 

## Compliance

* Projects MUST use tooling to enforce DCO checks. RECOMMENDED tooling includes:
    * DCO Probot - [https://github.com/apps/dco](https://github.com/apps/dco) 
    * GitHub Signoff - [https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository) 
* If a project uses a CLA, the project MUST use tooling to enforce CLA checks. [LFX EasyCLA](https://lfx.linuxfoundation.org/tools/easycla/) MUST be used for CLA checks for Linux Foundation-hosted projects.
* Projects SHOULD leverage the Linux Foundation License Scanning Operations Program to ensure license compliance.
* Projects SHOULD use [SPDX short-form identifiers](https://spdx.dev/learn/handling-license-info/). 
