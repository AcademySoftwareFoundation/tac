---
parent: Project Lifecycle
grand_parent: Processes
---

# OpenSSF Best Practices Badge FAQ

The [Open Source Security Foundation (OpenSSF) Best Practices badge](https://bestpractices.coreinfrastructure.org/en) allows Free/Libre and Open Source Software (FLOSS) projects to show that they follow best practices in managing their project. Consumers of the badge can quickly assess which FLOSS projects are following best practices and, as a result, are more likely to produce higher-quality secure software. Academy Software Foundation projects, as a part of the [project lifecycle established by the TAC](lifecycle), achieve this badge to showcase them being exemplars in open source for the visual effects and motion picture industries. 

This document outlines specific questions Academy Software Foundation projects have raised concerning fulfilling the badge requirements. If you have unanswered questions, please provide a PR that adds your question below and will be merged with an answer.

* TOC
{:toc}

## Passing

### The project website MUST succinctly describe what the software does (what problem does it solve?).

For projects without a separate website, the primary GitHub repo ```README.md``` should have this information. If a project doesn't have a separate website, but has a public GitHub or GitLab source code repository site, that repository site is the project website.

### The project website MUST provide information on how to: obtain, provide feedback (as bug reports or enhancements), and contribute to the software.

We recommend having a separate ```CONTRIBUTING.md``` file if it's non-trivial; if it's trivial, it can be noted in the ```README.md``` file.

### The information on how to contribute MUST explain the contribution process (e.g., are pull requests used?)

We recommend having a separate ```CONTRIBUTING.md``` file if it's non-trivial; if it's trivial, it can be noted in the ```README.md``` file.

### The information on how to contribute SHOULD include the requirements for acceptable contributions (e.g., a reference to any required coding standard).

We recommend having a separate ```CONTRIBUTING.md``` file if it's non-trivial; if it's trivial, it can be noted in the ```README.md``` file.

OpenEXR's [CONTRIBUTING.md](https://github.com/AcademySoftwareFoundation/openexr/blob/main/CONTRIBUTING.md#Coding-Style) is a great example to follow.

### The software produced by the project MUST be released as FLOSS.

This is a requirement for any project hosted in the ASWF and LF.

### It is SUGGESTED that any required license(s) for the software produced by the project be [approved by the Open Source Initiative (OSI)](https://opensource.org/licenses).

Generally, all projects at the ASWF are under an OSI-approved license. Note that the Apache-2.0 license, BSD-3 Clause License, and MIT license are OSI-approved licenses.

### The project MUST post the license(s) of its results in a standard location in their source repository.

We recommended having this in a ```LICENSE``` file in each repository ( [more details here](https://www.bestpractices.dev/en/criteria/0?details=true&rationale=true#0.license_location) )

### The project MUST provide basic documentation for the software produced by the project.
### The project MUST provide reference documentation that describes the external interface (both input and output) of the software produced by the project.
### The project sites (website, repository, and download URLs) MUST support HTTPS using TLS.
### The project MUST have one or more mechanisms for discussion (including proposed changes and issues) that are searchable, allow messages and topics to be addressed by URL, enable new people to participate in some of the discussions, and do not require client-side installation of proprietary software.
### The project SHOULD provide documentation in English and be able to accept bug reports and comments about code in English.
### The project MUST be maintained.
### The project MUST have a version-controlled source repository that is publicly readable and has a URL.
### The project's source repository MUST track what changes were made, who made the changes, and when the changes were made.
### To enable collaborative review, the project's source repository MUST include interim versions for review between releases; it MUST NOT include only final releases.
### It is SUGGESTED that common distributed version control software be used (e.g., git) for the project's source repository.
### The project results MUST have a unique version identifier for each release intended to be used by users.
### It is SUGGESTED that the [Semantic Versioning (SemVer)](https://semver.org) or [Calendar Versioning (CalVer)](https://calver.org/) version numbering format be used for releases. It is SUGGESTED that those who use CalVer include a micro level value.
### It is SUGGESTED that projects identify each release within their version control system. For example, it is SUGGESTED that those using git identify each release using git tags.
### The project MUST provide, in each release, release notes that are a human-readable summary of major changes in that release to help users determine if they should upgrade and what the upgrade impact will be. The release notes MUST NOT be the raw output of a version control log (e.g., the git log" command results are not release notes). Projects whose results are not intended for reuse in multiple locations (such as the software for a single website or service) AND employ continuous delivery MAY select "N/A"."
### The release notes MUST identify every publicly known run-time vulnerability fixed in this release that already had a CVE assignment or similar when the release was created. This criterion may be marked as not applicable (N/A) if users typically cannot practically update the software themselves (e.g., as is often true for kernel updates). This criterion applies only to the project results, not to its dependencies. If there are no release notes or there have been no publicly known vulnerabilities, choose N/A.
### The project MUST provide a process for users to submit bug reports (e.g., using an issue tracker or a mailing list).
### The project SHOULD use an issue tracker for tracking individual issues.
### The project MUST acknowledge a majority of bug reports submitted in the last 2-12 months (inclusive); the response need not include a fix.
### The project SHOULD respond to a majority (&gt;50%) of enhancement requests in the last 2-12 months (inclusive).
### The project MUST have a publicly available archive for reports and responses for later searching.
### The project MUST publish the process for reporting vulnerabilities on the project site.
### If private vulnerability reports are supported, the project MUST include how to send the information in a way that is kept private.
### The project's initial response time for any vulnerability report received in the last 6 months MUST be less than or equal to 14 days.
### If the software produced by the project requires building for use, the project MUST provide a working build system that can automatically rebuild the software from source code.
### It is SUGGESTED that common tools be used for building the software.
### The project SHOULD be buildable using only FLOSS tools.
### The project MUST use at least one automated test suite that is publicly released as FLOSS (this test suite may be maintained as a separate FLOSS project). The project MUST clearly show or document how to run the test suite(s) (e.g., via a continuous integration (CI) script or via documentation in files such as BUILD.md, README.md, or CONTRIBUTING.md).
### A test suite SHOULD be invocable in a standard way for that language.
### It is SUGGESTED that the test suite cover most (or ideally all) the code branches, input fields, and functionality.
### It is SUGGESTED that the project implement continuous integration (where new or changed code is frequently integrated into a central code repository and automated tests are run on the result).
### The project MUST have a general policy (formal or not) that as major new functionality is added to the software produced by the project, tests of that functionality should be added to an automated test suite.
### The project MUST have evidence that the test_policy for adding tests has been adhered to in the most recent major changes to the software produced by the project."
### It is SUGGESTED that this policy on adding tests be documented in the instructions for change proposals."
### The project MUST enable one or more compiler warning flags, a safe language mode or use a separate "linter" tool to look for code quality errors or common simple mistakes if there is at least one FLOSS tool that can implement this criterion in the selected language.
### The project MUST address warnings.
### It is SUGGESTED that projects be maximally strict with warnings in the software produced by the project, where practical.
### The project MUST have at least one primary developer who knows how to design secure software.

A great starting point for all projects is the [Concise Guide for Developing More Secure Software](https://github.com/ossf/wg-best-practices-os-developers/blob/main/docs/Concise-Guide-for-Developing-More-Secure-Software.md) maintained by OpenSSF. Past there, having a primary developer take the three courses outlined below ( all free to audit ) would be sufficient:

- [Secure Software Development: Requirements, Design, and Reuse (LFD104x) - Linux Foundation - Training](https://training.linuxfoundation.org/training/secure-software-development-requirements-design-and-reuse-lfd104/) 
- [Secure Software Development: Implementation (LFD105x) - Linux Foundation - Training](https://training.linuxfoundation.org/training/secure-software-development-implementation-lfd105/) 
- [Secure Software Development: Verification and More Specialized Topics (LFD106x) - Linux Foundation - Training](https://training.linuxfoundation.org/training/secure-software-development-verification-and-more-specialized-topics-lfd106/)

There are many [additional resources maintained by OpenSSF](https://github.com/ossf/wg-best-practices-os-developers/blob/main/docs/Existing%20Guidelines%20for%20Developing%20and%20Distributing%20Secure%20Software.md) that projects should reference as it pertains to language or domain-specific security topics.

### At least one of the project's primary developers MUST know of common kinds of errors that lead to vulnerabilities in this kind of software, as well as at least one method to counter or mitigate each of them.

Taking the classes in the previous item resolves this.

### The software produced by the project MUST use, by default, only cryptographic protocols and algorithms that are publicly published and reviewed by experts (if cryptographic protocols and algorithms are used).
### If the software produced by the project is an application or library, and its primary purpose is not to implement cryptography, then it SHOULD only call on software specifically designed to implement cryptographic functions; it SHOULD NOT re-implement its own.
### All functionality in the software produced by the project that depends on cryptography MUST be implementable using FLOSS.
### The security mechanisms within the software produced by the project MUST use default keylengths that at least meet the NIST minimum requirements through the year 2030 (as stated in 2012). It MUST be possible to configure the software so that smaller keylengths are completely disabled.
### The default security mechanisms within the software produced by the project MUST NOT depend on broken cryptographic algorithms (e.g., MD4, MD5, single DES, RC4, Dual_EC_DRBG), or use cipher modes that are inappropriate to the context, unless they are necessary to implement an interoperable protocol (where the protocol implemented is the most recent version of that standard broadly supported by the network ecosystem, that ecosystem requires the use of such an algorithm or mode, and that ecosystem does not offer any more secure alternative). The documentation MUST describe any relevant security risks and any known mitigations if these broken algorithms or modes are necessary for an interoperable protocol.
### The default security mechanisms within the software produced by the project SHOULD NOT depend on cryptographic algorithms or modes with known serious weaknesses (e.g., the SHA-1 cryptographic hash algorithm or the CBC mode in SSH).
### The security mechanisms within the software produced by the project SHOULD implement perfect forward secrecy for key agreement protocols so a session key derived from a set of long-term keys cannot be compromised if one of the long-term keys is compromised in the future.
### If the software produced by the project causes the storing of passwords for authentication of external users, the passwords MUST be stored as iterated hashes with a per-user salt by using a key stretching (iterated) algorithm (e.g., Argon2id, Bcrypt, Scrypt, or PBKDF2). See also [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
### The security mechanisms within the software produced by the project MUST generate all cryptographic keys and nonces using a cryptographically secure random number generator, and MUST NOT do so using generators that are cryptographically insecure.
### The project MUST use a delivery mechanism that counters MITM attacks. Using https or ssh+scp is acceptable.

Making project releases available via GitHub using the Releases mechanism satisfies this requirement.

### A cryptographic hash (e.g., a sha1sum) MUST NOT be retrieved over http and used without checking for a cryptographic signature.
### There MUST be no unpatched vulnerabilities of medium or higher severity that have been publicly known for more than 60 days.
### Projects SHOULD fix all critical vulnerabilities rapidly after they are reported.
### The public repositories MUST NOT leak a valid private credential (e.g., a working password or private key) that is intended to limit public access.
### At least one static code analysis tool (beyond compiler warnings and safe language modes) MUST be applied to any proposed major production release of the software before its release if there is at least one FLOSS tool that implements this criterion in the selected language.

SonarCloud is the tool that multiple projects have implemented, and there is already an organization-level access token that projects can use with it. You can see a specific example in the OpenEXR analysis_workflow.yml, which shows how to build, run the test suite, post-process, and upload to SonarCloud using the SONAR_TOKEN from the organization level. You can see the results for the various ASWF projects with SonarCloud here:

[https://sonarcloud.io/organizations/academysoftwarefoundation/projects](https://sonarcloud.io/organizations/academysoftwarefoundation/projects)

There also is some work towards using clang-tidy in Imath: [https://github.com/AcademySoftwareFoundation/Imath/blob/main/config/ImathSetup.cmake](https://github.com/AcademySoftwareFoundation/Imath/blob/main/config/ImathSetup.cmake)

and in OSL:

[https://github.com/AcademySoftwareFoundation/OpenShadingLanguage/blob/3bd377861087f99c6c69d73a95176d88072ff5da/src/cmake/compiler.cmake#L406](https://github.com/AcademySoftwareFoundation/OpenShadingLanguage/blob/3bd377861087f99c6c69d73a95176d88072ff5da/src/cmake/compiler.cmake#L406)

### It is SUGGESTED that at least one of the static analysis tools used for the static_analysis criterion include rules or approaches to look for common vulnerabilities in the analyzed language or environment.
### All medium and higher severity exploitable vulnerabilities discovered with static code analysis MUST be fixed in a timely way after they are confirmed.
### It is SUGGESTED that static source code analysis occur on every commit or at least daily.
### It is SUGGESTED that at least one dynamic analysis tool be applied to any proposed major production release of the software before its release.
### It is SUGGESTED that if the software produced by the project includes software written using a memory-unsafe language (e.g., C or C++), then at least one dynamic tool (e.g., a fuzzer or web application scanner) be routinely used in combination with a mechanism to detect memory safety problems such as buffer overwrites. If the project does not produce software written in a memory-unsafe language, choose not applicable (N/A).
### It is SUGGESTED that the project use a configuration for at least some dynamic analysis (such as testing or fuzzing) which enables many assertions. In many cases these assertions should <i>not</i> be enabled in production builds.
### All medium and higher severity exploitable vulnerabilities discovered with dynamic code analysis MUST be fixed in a timely way after they are confirmed.

## Silver

### The project MUST achieve a passing level badge.
### The information on how to contribute MUST include the requirements for acceptable contributions (e.g., a reference to any required coding standard).

The recommendation is to have this specifically outlined in the ```README.md``` or in a separate ```CONTRIBUTING.md``` file. OpenEXR's [CONTRIBUTING.md](https://github.com/AcademySoftwareFoundation/openexr/blob/main/CONTRIBUTING.md#Coding-Style) is a great example to follow.

### The project SHOULD have a legal mechanism where all developers of non-trivial amounts of project software assert that they are legally authorized to make these contributions. The most common and easily-implemented approach for doing this is by using a [Developer Certificate of Origin (DCO)](https://developercertificate.org/) where users add "signed-off-by" in their commits and the project links to the DCO website. However this MAY be implemented as a Contributor License Agreement (CLA)	or other legal mechanism.

All projects hosted have this requirement in their IP policies already and it is setup to be managed for each project by default, so this requirement is fulfilled.

### The project MUST clearly define and document its project governance model (the way it makes decisions, including key roles).

Having this in a `GOVERNANCE.md` would suffice; there is an example one defined in the test project.

### The project MUST adopt a code of conduct and post it in a standard location.

All ASWF project by default adopt the [LF Projects LLC CoC](https://lfprojects.org/policies/code-of-conduct/), so this requirement is fulfilled.

### The project MUST clearly define and publicly document the key roles in the project and their responsibilities, including any tasks those roles must perform.  It MUST be clear who has which role(s), though this might not be documented in the same way.

Having this in a `GOVERNANCE.md` would suffice; there is an example one defined in the test project.

### The project MUST be able to continue with minimal interruption if any one person dies, is incapacitated, or is otherwise unable or unwilling to continue support of the project. In particular, the project MUST be able to create and close issues, accept proposed changes, and release versions of software, within a week of confirmation of the loss of support from any one individual. This MAY be done by ensuring someone else has any necessary keys, passwords, and legal rights to continue the project. Individuals who run a FLOSS project MAY do this by providing keys in a lockbox and a will providing any needed legal rights (e.g., for DNS names).

Each repo has `thelinuxfoundation` as a user on their repo, so this requirement is fulfilled.

### The project SHOULD have a bus factor of 2 or more.

You need to have more than one maintainer; ASWF doesn't accept any projects with only one maintainer, so this requirement is fulfilled.

### The project MUST have a documented roadmap that describes what the project intends to do and not do for at least the next year.

This could be a GitHub project board for the project that outlines the planned issues, or a document in the repo or somewhere else that lists the planned work. This list can change over time, but having something gives confidence to downstream users.

### The project MUST include documentation of the architecture (aka high-level design) of the software produced by the project. If the project does not produce software, select not applicable (N/A).

This can be as simple or complex as it makes sense. At a minimum, having something that describes how the code is organized is sufficient. This is a great tool to have available for getting new contributors onboarded.

### The project MUST document what the user can and cannot expect in terms of security from the software produced by the project (its security requirements).

This likely will align with the security assurance case, but the doc should cover what the project does for security ( for example, input sanitization ) and areas that the project doesn't directly address but the user should ( for example, don't run as `root` ).

### The project MUST provide a quick start guide for new users to help them quickly do something with the software.

This is a cornerstone of good documentation. Part of this is the installation instructions, but having an example to show how the project works or something the user could do to understand how it works is of huge value to prospective users. OpenEXR has a [great example](https://github.com/AcademySoftwareFoundation/openexr#quick-start).

### The project MUST make an effort to keep the documentation consistent with the current version of the project results (including software produced by the project). Any known documentation defects making it inconsistent MUST be fixed. If the documentation is generally current, but erroneously includes some older information that is no longer true, just treat that as a defect, then track and fix as usual.

Good practice for any project. Many projects keep the documentation alongside the code so when changes are made it's reflected in the same branch. Just The Docs has support for multiple versions of documentation.

### The project repository front page and/or website MUST identify and hyperlink to any achievements, including this best practices badge, within 48 hours of public recognition that the achievement has been attained.

Put it in the README.md, either as a badge or textual notice.

### The project (both project sites and project results) SHOULD follow accessibility best practices so that persons with disabilities can still participate in the project and use the project results where it is reasonable to do so.

If a project is just working out of GitHub/Read The Docs/Confluence and not building a formal website, then this requirement is fulfilled. If you have a separate website, it's a good idea to review and assess.

### The software produced by the project SHOULD be internationalized to enable easy localization for the target audience's culture, region, or language. If internationalization (i18n) does not apply (e.g., the software doesn't generate text intended for end-users and doesn't sort human-readable text), select not applicable (N/A).

Note you don't need multiple languages supported, just the mechanism such that you could ( i.e., split text strings out to a separate document ).

### If the project sites (website, repository, and download URLs) store passwords for authentication of external users, the passwords MUST be stored as iterated hashes with a per-user salt by using a key stretching (iterated) algorithm (e.g., Argon2id, Bcrypt, Scrypt, or PBKDF2). If the project sites do not store passwords for this purpose, select not applicable (N/A).

Note that these sites already meet this criterion: GitHub, GitLab, ReadTheDocs, and any tools integrated with Linux Foundation (LF) IDs. If you are using just these tools then this requirement is fulfilled.

### The project MUST maintain the most often used older versions of the product or provide an upgrade path to newer versions. If the upgrade path is difficult, the project MUST document how to perform the upgrade (e.g., the interfaces that have changed and detailed suggested steps to help upgrade).

Good practice overall. You don't need a migration script, just instructions.

### The project MUST use an issue tracker for tracking individual issues.

All ASWF projects do this, so this requirement is fulfilled.

### The project MUST give credit to the reporter(s) of all reports resolved in the last 12 months, except for the reporter(s) who request anonymity. If there have been no vulnerabilities resolved in the last 12 months, select not applicable (N/A).

A good practice is to put this in the SECURITY.md. 

### The project MUST have a documented process for responding to vulnerability reports.

GitHub does have [features for security vulnerability management](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing), which as a best practice should be used, but in addition, a project should have SECURITY file in the primary code repository to outline this process ( [OpenEXR](https://github.com/AcademySoftwareFoundation/openexr/blob/main/SECURITY.md) is a great example of this ).

### The project MUST identify the specific coding style guides for the primary languages it uses, and require that contributions generally comply with it.

Good example from [OpenEXR](https://github.com/AcademySoftwareFoundation/openexr/blob/main/CONTRIBUTING.md#Coding-Style). You can adopt an existing coding style to make this easier.

### The project MUST automatically enforce its selected coding style(s) if there is at least one FLOSS tool that can do so in the selected language(s).

If you are using a standard coding style, there are numerous tools to validate that will integrate into GitHub actions.

### Build systems for native binaries MUST honor the relevant compiler and linker (environment) variables passed in to them (e.g., CC, CFLAGS, CXX, CXXFLAGS, and LDFLAGS) and pass them to compiler and linker invocations. A build system MAY extend them with additional flags; it MUST NOT simply replace provided values with its own. If no native binaries are being generated, select not applicable (N/A).

Generally, ASWF projects don't produce binaries for users, so this would be 'N/A'. 

### The build and installation system SHOULD preserve debugging information if they are requested in the relevant flags (e.g., install -s is not used). If there is no build or installation system (e.g. typical JavaScript libraries)	select not applicable (N/A).

### The build system for the software produced by the project MUST NOT recursively build subdirectories if there are cross-dependencies in the subdirectories. If there is no build or installation system (e.g., typical JavaScript libraries), select not applicable" (N/A).

### The project MUST be able to repeat the process of generating information from source files and get exactly the same bit-for-bit result. If no building occurs (e.g., scripting languages where the source code is used directly instead of being compiled), select not applicable (N/A).

The easiest solution is not to provide a binary build of the project, which is generally recommended. 

There is ongoing work within the CI Working Group on how GitHub Actions or another tool could help satisfy this requirement.

### The project MUST provide a way to easily install and uninstall the software produced by the project using a commonly-used convention.
### The installation system for end-users MUST honor standard conventions for selecting the location where built artifacts are written to at installation time.  For example, if it installs files on a POSIX system it MUST honor the DESTDIR environment variable. If there is no installation system or no standard convention, select not applicable" (N/A)."
### The project MUST provide a way for potential developers to quickly install all the project results and support environment necessary to make changes, including the tests and test environment. This MUST be performed with a commonly-used convention.
### The project MUST list external dependencies in a computer-processable way.

LFX Security automatically will pull the list of dependencies for a project, provided they use the standard mechanisms leveraged by Snyk. Note there is still outstanding work to be done for [C/C++ projects to be supported](https://docs.snyk.io/scan-application-code/snyk-code/snyk-code-language-and-framework-support).

### Projects MUST monitor or periodically check their external dependencies (including convenience copies) to detect known vulnerabilities, and fix exploitable vulnerabilities or verify them as unexploitable.

Same as above.

### The project SHOULD avoid using deprecated or obsolete functions and APIs where FLOSS alternatives are available in the set of technology it uses (its technology stack) and to a supermajority of the users the project supports (so that users have ready access to the alternative).

Good practice.

### An automated test suite MUST be applied on each check-in to a shared repository for at least one branch.  This test suite MUST produce a report on test success or failure.

This can be easily integrated into the PR actions; good practice for ensuring contributions don't break existing functionality.

### The project MUST add regression tests to an automated test suite for at least 50% of the bugs fixed within the last six months.

See below for how to address

### The project MUST have FLOSS automated test suite(s) that provide at least 80% statement coverage if there is at least one FLOSS tool that can measure this criterion in the selected language.

A few considerations for projects in completing this requirement:

- If testing a code path requires specialized hardware not available to the project, then the project should deduct that code from the total amount of code to measure this requirement.
- Similarly, a project likely will not be able to test integrations with third-party commercial products. In some cases, a project may be able to create mocks that simulate the third-party application's integration points, but in cases where that is not possible, the project should deduct that code from the total amount of code to measure this requirement.
- Sometimes, build/compile options change the test coverage between runs. For these cases, the project should measure based on the coverage across all runs. For example

Run 1: Covers code branches A, B, and C
Run 2: Covers code branches A, C, and D

In this case, the project can indicate test coverage for code branches A, B, C, and D, even though not all code branches as covered in a single run.

### The project MUST have a formal written policy that as major new functionality is added, tests for the new functionality MUST be added to an automated test suite.

Can be a simple statement - example [OpenEXR](https://github.com/AcademySoftwareFoundation/openexr/blob/main/CONTRIBUTING.md#test-policy)

### The project MUST include, in its documented instructions for change proposals, the policy that tests are to be added for major new functionality.

Can be a simple statement - example [OpenEXR](https://github.com/AcademySoftwareFoundation/openexr/blob/main/CONTRIBUTING.md#test-policy)

### Projects MUST be maximally strict with warnings in the software produced by the project, where practical.
### "The project MUST implement secure design principles (from know_secure_design) where applicable.  If the project is not producing software select "not applicable" (N/A).
### The default security mechanisms within the software produced by the project MUST NOT depend on cryptographic algorithms or modes with known serious weaknesses (e.g., the SHA-1 cryptographic hash algorithm or the CBC mode in SSH).
### The project SHOULD support multiple cryptographic algorithms, so users can quickly switch if one is broken. Common symmetric key algorithms include AES, Twofish, and Serpent. Common cryptographic hash algorithm alternatives include SHA-2 (including SHA-224, SHA-256, SHA-384 AND SHA-512) and SHA-3.
### The project MUST support storing authentication credentials (such as passwords and dynamic tokens) and private cryptographic keys in files that are separate from other information (such as configuration files, databases, and logs), and permit users to update and replace them without code recompilation. If the project never processes authentication credentials and private cryptographic keys, select not applicable" (N/A).
### The software produced by the project SHOULD support secure protocols for all of its network communications, such as SSHv2 or later, TLS1.2 or later (HTTPS), IPsec, SFTP, and SNMPv3. Insecure protocols such as FTP, HTTP, telnet, SSLv3 or earlier, and SSHv1 SHOULD be disabled by default, and only enabled if the user specifically configures it. If the software produced by the project does not support network communications, select not applicable" (N/A).
### The software produced by the project SHOULD, if it supports or uses TLS, support at least TLS version 1.2. Note that the predecessor of TLS was called SSL. If the software does not use TLS, select not applicable" (N/A).
### The software produced by the project MUST, if it supports TLS, perform TLS certificate verification by default when using TLS, including on subresources. If the software does not use TLS, select not applicable" (N/A).
### The software produced by the project MUST, if it supports TLS, perform certificate verification before sending HTTP headers with private information (such as secure cookies). If the software does not use TLS, select not applicable" (N/A).
### The project MUST cryptographically sign releases of the project results intended for widespread use, and there MUST be a documented process explaining to users how they can obtain the public signing keys and verify the signature(s). The private key for these signature(s) MUST NOT be on site(s) used to directly distribute the software to the public. If releases are not intended for widespread use, select not applicable" (N/A).
### It is SUGGESTED that in the version control system, each important version tag (a tag that is part of a major release, minor release, or fixes publicly noted vulnerabilities) be cryptographically signed and verifiable as described in signed_releases.
### The project results MUST check all inputs from potentially untrusted sources to ensure they are valid (an *allowlist*), and reject invalid inputs, if there are any restrictions on the data at all.
### Hardening mechanisms SHOULD be used in the software produced by the project so that software defects are less likely to result in security vulnerabilities.
### The project MUST provide an assurance case that justifies why its security requirements are met. The assurance case MUST include: a description of the threat model, clear identification of trust boundaries, an argument that secure design principles have been applied, and an argument that common implementation security weaknesses have been countered.

The goal here is for the project to define its security process and scope for the project. A good example of such a document is from [curl](https://curl.se/libcurl/security.html).

### The project MUST use at least one static analysis tool with rules or approaches to look for common vulnerabilities in the analyzed language or environment, if there is at least one FLOSS tool that can implement this criterion in the selected language.
### If the software produced by the project includes software written using a memory-unsafe language (e.g., C or C++), then at least one dynamic tool (e.g., a fuzzer or web application scanner) MUST be routinely used in combination with a mechanism to detect memory safety problems such as buffer overwrites. If the project does not produce software written in a memory-unsafe language, choose not applicable (N/A).

## Gold

### The project MUST achieve a silver level badge.
### The project MUST have a bus factor of 2 or more.
### The project MUST have at least two unassociated significant contributors.
### The project MUST include a copyright statement in each source file, identifying the copyright holder (e.g., the [project name] contributors).
### The project MUST include a license statement in each source file. This MAY be done by including the following inside a comment near the beginning of each file: ```SPDX-License-Identifier: [SPDX license expression for project]```
### The project's source repository MUST use a common distributed version control software (e.g., git or mercurial).
### The project MUST clearly identify small tasks that can be performed by new or casual contributors.
### The project MUST require two-factor authentication (2FA) for developers for changing a central repository or accessing sensitive data (such as private vulnerability reports). This 2FA mechanism MAY use mechanisms without cryptographic mechanisms such as SMS, though that is not recommended.
### The project's two-factor authentication (2FA) SHOULD use cryptographic mechanisms to prevent impersonation. Short Message Service (SMS) based 2FA, by itself, does NOT meet this criterion, since it is not encrypted.
### The project MUST document its code review requirements, including how code review is conducted, what must be checked, and what is required to be acceptable.
### The project MUST have at least 50% of all proposed modifications reviewed before release by a person other than the author, to determine if it is a worthwhile modification and free of known issues which would argue against its inclusion
### The project MUST have a [reproducible build](https://reproducible-builds.org/). If no building occurs (e.g. scripting languages where the source code is used directly instead of being compiled)	select "not applicable" (N/A).
### A test suite MUST be invocable in a standard way for that language.
### The project MUST implement continuous integration, where new or changed code is frequently integrated into a central code repository and automated tests are run on the result.
### The project MUST have FLOSS automated test suite(s) that provide at least 90% statement coverage if there is at least one FLOSS tool that can measure this criterion in the selected language.
### The project MUST have FLOSS automated test suite(s) that provide at least 80% branch coverage if there is at least one FLOSS tool that can measure this criterion in the selected language.
### The software produced by the project MUST support secure protocols for all of its network communications, such as SSHv2 or later, TLS1.2 or later (HTTPS), IPsec, SFTP, and SNMPv3. Insecure protocols such as FTP, HTTP, telnet, SSLv3 or earlier, and SSHv1 MUST be disabled by default, and only enabled if the user specifically configures it. If the software produced by the project does not support network communications, select "not applicable" (N/A).
### The software produced by the project MUST, if it supports or uses TLS, support at least TLS version 1.2. Note that the predecessor of TLS was called SSL. If the software does not use TLS, select "not applicable" (N/A).
### The project website, repository (if accessible via the web), and download site (if separate) MUST include key hardening headers with nonpermissive values.
### The project MUST have performed a security review within the last 5 years. This review MUST consider the security requirements and security boundary.

This is in progress; the Academy Software Foundation will provide a mechanism for projects to complete this requirement.

### Hardening mechanisms MUST be used in the software produced by the project so that software defects are less likely to result in security vulnerabilities.
### The project MUST apply at least one dynamic analysis tool to any proposed major production release of the software produced by the project before its release.
### The project SHOULD include many run-time assertions in the software it produces and check those assertions during dynamic analysis.
