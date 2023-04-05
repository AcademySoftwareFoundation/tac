---
parent: Processes
has_children: true
---

# OpenSSF Best Practices Badge

* TOC
{:toc}


The [Open Source Security Foundation (OpenSSF) Best Practices badge](https://bestpractices.coreinfrastructure.org/en) allows Free/Libre and Open Source Software (FLOSS) projects to show that they follow best practices in managing their project. Consumers of the badge can quickly assess which FLOSS projects are following best practices and, as a result, are more likely to produce higher-quality secure software. Academy Software Foundation projects, as a part of the [project lifecycle established by the TAC](lifecycle), achieve this badge to showcase them being exemplars in open source for the visual effects and motion picture industries. 

This document outlines specific questions Academy Software Foundation projects have raised in regard to fulfilling the badge requirements. If you have questions not answered, please provide a PR that adds your question below and will be merged with an answer.

## "The project MUST have at least one primary developer who knows how to design secure software." - how to fulfill this?

Having a primary developer take the three courses outlined below ( all free to audit ) would be sufficient:

- [Secure Software Development: Requirements, Design, and Reuse (LFD104x) - Linux Foundation - Training](https://training.linuxfoundation.org/training/secure-software-development-requirements-design-and-reuse-lfd104/) 
- [Secure Software Development: Implementation (LFD105x) - Linux Foundation - Training](https://training.linuxfoundation.org/training/secure-software-development-implementation-lfd105/) 
- [Secure Software Development: Verification and More Specialized Topics (LFD106x) - Linux Foundation - Training](https://training.linuxfoundation.org/training/secure-software-development-verification-and-more-specialized-topics-lfd106/) 

## Is there a list or document which describes the static analysis tools that ASWF supports or recommends?

SonarCloud is the tool that multiple projects have implemented, and there is already an organization-level access token that projects can use with it. You can see a specific example in the OpenEXR analysis_workflow.yml, which shows how to build, run the test suite, post-process, and upload to SonarCloud using the SONAR_TOKEN from the organization level. You can see the results for the various ASWF projects with SonarCloud here:

[https://sonarcloud.io/organizations/academysoftwarefoundation/projects](https://sonarcloud.io/organizations/academysoftwarefoundation/projects)

I'm also seeing some work towards using clang-tidy in Imath: [https://github.com/AcademySoftwareFoundation/Imath/blob/main/config/ImathSetup.cmake](https://github.com/AcademySoftwareFoundation/Imath/blob/main/config/ImathSetup.cmake)

and in OSL:

[https://github.com/AcademySoftwareFoundation/OpenShadingLanguage/blob/3bd377861087f99c6c69d73a95176d88072ff5da/src/cmake/compiler.cmake#L406]https://github.com/AcademySoftwareFoundation/OpenShadingLanguage/blob/3bd377861087f99c6c69d73a95176d88072ff5da/src/cmake/compiler.cmake#L406)

## "The project MUST have a documented process for responding to vulnerability reports." - does GitHub have anything to help with this?



## "The project MUST list external dependencies in a computer-processable way." - is there an automated way to build this?

LFX Security automatically will pull the list of dependencies for a project provided they use the standard mechanisms leveraged by Snyk. Note there is still outstanding work to be done for [C/C++ projects to be supported](https://docs.snyk.io/scan-application-code/snyk-code/snyk-code-language-and-framework-support).

## "The project MUST provide an assurance case that justifies why its security requirements are met. The assurance case MUST include: a description of the threat model, clear identification of trust boundaries, an argument that secure design principles have been applied, and an argument that common implementation security weaknesses have been countered."



## The project MUST have a [reproducible build](https://reproducible-builds.org/). If no building occurs (e.g., scripting languages where the source code is used directly instead of being compiled), select "not applicable"

The easiest solution is not to provide a binary build of the project, which is generally recommended. 

## The project MUST have performed a security review within the last 5 years. This review MUST consider the security requirements and security boundary. 



## "The project MUST have FLOSS automated test suite(s) that provide at least 90% statement coverage if there is at least one FLOSS tool that can measure this criterion in the selected language. "and "The project MUST have FLOSS automated test suite(s) that provide at least 80% branch coverage if there is at least one FLOSS tool that can measure this criterion in the selected language."

