---
parent: Project Lifecycle
grand_parent: Processes
---

# OpenSSF Best Practices Badge FAQ

The [Open Source Security Foundation (OpenSSF) Best Practices badge](https://bestpractices.coreinfrastructure.org/en) allows Free/Libre and Open Source Software (FLOSS) projects to show that they follow best practices in managing their project. Consumers of the badge can quickly assess which FLOSS projects are following best practices and, as a result, are more likely to produce higher-quality secure software. Academy Software Foundation projects, as a part of the [project lifecycle established by the TAC](lifecycle), achieve this badge to showcase them being exemplars in open source for the visual effects and motion picture industries. 

This document outlines specific questions Academy Software Foundation projects have raised concerning fulfilling the badge requirements. If you have unanswered questions, please provide a PR that adds your question below and will be merged with an answer.

* TOC
{:toc}

## "The project MUST have at least one primary developer who knows how to design secure software." - how to fulfill this?

A great starting point for all projects is the [Concise Guide for Developing More Secure Software](https://github.com/ossf/wg-best-practices-os-developers/blob/main/docs/Concise-Guide-for-Developing-More-Secure-Software.md) maintained by OpenSSF. Past there, having a primary developer take the three courses outlined below ( all free to audit ) would be sufficient:

- [Secure Software Development: Requirements, Design, and Reuse (LFD104x) - Linux Foundation - Training](https://training.linuxfoundation.org/training/secure-software-development-requirements-design-and-reuse-lfd104/) 
- [Secure Software Development: Implementation (LFD105x) - Linux Foundation - Training](https://training.linuxfoundation.org/training/secure-software-development-implementation-lfd105/) 
- [Secure Software Development: Verification and More Specialized Topics (LFD106x) - Linux Foundation - Training](https://training.linuxfoundation.org/training/secure-software-development-verification-and-more-specialized-topics-lfd106/)

There are many [additional resources maintained by OpenSSF](https://github.com/ossf/wg-best-practices-os-developers/blob/main/docs/Existing%20Guidelines%20for%20Developing%20and%20Distributing%20Secure%20Software.md) that projects should reference as it pertains to language or domain-specific security topics.

## Is there a list or document which describes the static analysis tools that ASWF supports or recommends?

SonarCloud is the tool that multiple projects have implemented, and there is already an organization-level access token that projects can use with it. You can see a specific example in the OpenEXR analysis_workflow.yml, which shows how to build, run the test suite, post-process, and upload to SonarCloud using the SONAR_TOKEN from the organization level. You can see the results for the various ASWF projects with SonarCloud here:

[https://sonarcloud.io/organizations/academysoftwarefoundation/projects](https://sonarcloud.io/organizations/academysoftwarefoundation/projects)

There also is some work towards using clang-tidy in Imath: [https://github.com/AcademySoftwareFoundation/Imath/blob/main/config/ImathSetup.cmake](https://github.com/AcademySoftwareFoundation/Imath/blob/main/config/ImathSetup.cmake)

and in OSL:

[https://github.com/AcademySoftwareFoundation/OpenShadingLanguage/blob/3bd377861087f99c6c69d73a95176d88072ff5da/src/cmake/compiler.cmake#L406](https://github.com/AcademySoftwareFoundation/OpenShadingLanguage/blob/3bd377861087f99c6c69d73a95176d88072ff5da/src/cmake/compiler.cmake#L406)

## "The project MUST have a documented process for responding to vulnerability reports." - does GitHub have anything to help with this?

GitHub does have [features for security vulnerability management](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing), which as a best practice should be used, but in addition, a project should have SECURITY file in the primary code repository to outline this process ( [OpenEXR](https://github.com/AcademySoftwareFoundation/openexr/blob/main/SECURITY.md) is a great example of this ).

## "The project MUST list external dependencies in a computer-processable way." - is there an automated way to build this?

LFX Security automatically will pull the list of dependencies for a project, provided they use the standard mechanisms leveraged by Snyk. Note there is still outstanding work to be done for [C/C++ projects to be supported](https://docs.snyk.io/scan-application-code/snyk-code/snyk-code-language-and-framework-support).

## "The project MUST provide an assurance case that justifies why its security requirements are met. The assurance case MUST include: a description of the threat model, clear identification of trust boundaries, an argument that secure design principles have been applied, and an argument that common implementation security weaknesses have been countered."

The goal here is for the project to define its security process and scope for the project. A good example of such a document is from [curl](https://curl.se/libcurl/security.html).

## The project MUST have a [reproducible build](https://reproducible-builds.org/). If no building occurs (e.g., scripting languages where the source code is used directly instead of being compiled), select "not applicable"

The easiest solution is not to provide a binary build of the project, which is generally recommended. 

There is ongoing work within the CI Working Group on how GitHub Actions or another tool could help satisfy this requirement.

## The project MUST have performed a security review within the last 5 years. This review MUST consider the security requirements and security boundary. 

This is in progress; Academy Software Foundation will provide a mechanism for projects to complete this requirement.

## "The project MUST have FLOSS automated test suite(s) that provide at least 90% statement coverage if there is at least one FLOSS tool that can measure this criterion in the selected language. "and "The project MUST have FLOSS automated test suite(s) that provide at least 80% branch coverage if there is at least one FLOSS tool that can measure this criterion in the selected language."

A few considerations for projects in completing this requirement:

- If testing a code path requires specialized hardware not available to the project, then the project should deduct that code from the total amount of code to measure this requirement.
- Similarly, a project likely will not be able to test integrations with third-party commercial products. In some cases, a project may be able to create mocks that simulate the third-party application's integration points, but in cases where that is not possible, the project should deduct that code from the total amount of code to measure this requirement.
- Sometimes, build/compile options change the test coverage between runs. For these cases, the project should measure based on the coverage across all runs. For example

Run 1: Covers code branches A, B, and C
Run 2: Covers code branches A, C, and D

In this case, the project can indicate test coverage for code branches A, B, C, and D, even though not all code branches as covered in a single run.
