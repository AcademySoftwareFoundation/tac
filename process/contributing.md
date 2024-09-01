---
parent: Processes
nav_order: 10
has_children: true
---
# Contribution Guidelines for hosted projects

* TOC
{:toc}

This document is intended to outline the recommended licensing and contribution standards for any project intended for being hosted by the Academy Software Foundation.

Within open source, there are multiple approaches to contribution and licensing, and Academy Software Foundation recognizes that there is no single strategy that fits all project communities and consumers. This document is not intended to endorse any particular license or contribution strategy but instead to provide guidance on best practices based on experiences with other projects (both Academy Software Foundation-hosted and others within the industry). Please consult your legal counsel for specific guidance for your situation.

## Two-factor authentication (2FA)

- To enable more robust security for hosted projects, Academy Software Foundation TAC requires all hosted projects to require Two-factor authentication (2FA) for accessing code repositories. Instructions for GitHub are below...

  - [Configuring 2FA for your GitHub account](https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication)
  - [Accessing GitHub using 2FA](https://docs.github.com/en/github/authenticating-to-github/accessing-github-using-two-factor-authentication)
  - [Recovering your account if you lose your 2FA credentials](https://docs.github.com/en/github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials)


## License Specification

Generally open source projects at The Linux Foundation that have not previously selected a license leverage the [Apache License, Version 2.0][] for their codebase, a [Community Data License Agreement (CDLA) license][] for any data sets, and the [Creative Commons Attribution 4.0 International License][] for all documentation and non-code assets. These licenses are widely used and understood by developers and organizations alike, providing flexibility for downstream usage and patent protection for those contributing code.

### Code License Identification

Each repository must contain a license file. Include the plain-text version of the license as a LICENSE file in the top-level directory of the repository.

All source files need to include a header to clearly show the license. Academy Software Foundation recommends using [SPDX short-form license identifiers](https://spdx.org/ids) in source code files, which vastly reduces errors in copy and pasting license text and enables the headers to be machine-readable. An example of the use of SPDX short-form license identifiers can be found at https://spdx.org/ids.

### Copyright Notice Format

We have recommended that contributors to a new project establish a common format for copyright notices in their own code. This can help minimize compliance burdens that might otherwise require downstream distributors to reproduce many variations in years, entity names, and formats for notices. We recommend a common copyright notice in a form similar to the following, which does not refer to years or specific contributing entities:

> Copyright Contributors to the __________ Project.
>

For clarity, we would not recommend removing a third party’s license or copyright notice in any circumstance. If a third-party dependency is added to a repository, its license and copyright notices should be preserved and should not be modified or removed.

### Example of the SPDX short-form license identifiers and copyright notice in a source file

Assumes [Apache License, Version 2.0][] and Foo project name.

```
# SPDX-License-Identifier: Apache-2.0
# Copyright Contributors to the Foo Project.
```

## Contribution sign off

Ensuring a clean code pedigree and lineage is critical to the industry's downstream adoption of open-source code.

Academy Software Foundation requires the use of the [Developer’s Certificate of Origin 1.1 (DCO)][DCO], which is the same mechanism that the [Linux® Kernel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/process/submitting-patches.rst#n416) and many other communities use to manage code contributions. The DCO is considered one of the simplest tools for sign-offs from contributors as the representations are meant to be easy to read and indicate signoff is done as a part of the commit message.

Here is an example Signed-off-by line, which indicates that the submitter accepts the DCO:

`Signed-off-by: John Doe <john.doe@example.com>`

You can include this automatically when you commit a change to your local git repository using <code>git commit -s</code>.

### Make doing DCO signoffs easier

By default, all GitHub repositories have both the [GitHub DCO App][] installed and [commit signoffs enabled][GitHub commit signoff policy]. This ensures anyone contributing via the GitHub web interface will automatically signoff commits.

For developers working from thier local machines, there are a few options available to automatically signoff commits.

- DCO command line tool, which lets you do a single signoff for an entire repo ( https://github.com/coderanger/dco )
- Shell scripting to automatically apply signing. Here is an example for bash, to be put into a .bashrc file:

  ```bash
  git() {
      if [[ $1 == "commit" ]]; then
          shift
          echo "Executing git commit -s $@"
          command git commit -s "$@"
      else
          command git "$@"
      fi
  }
  ```


### Signoff for commits where the DCO signoff was missed

When bringing in a code repository for the first time or commits done before the DCO checks are enabled, there would be a series of commits that don't include the sign-off statement. You can retroactively signoff commits you've made by making a commit with your DCO signoff that contains a new text file (the suggested name is past_commits.txt ) with the following contents:

````
The following commits were made pursuant to the Developer Certificate of Origin, even though a Signed-off-by: was not included in the commit message.

<COMMIT HASH> <COMMIT MSG>
...
````

Each user who has made the past commits should have their own <code>Signed-off-by:</code> line in the commit message.

### Contributor License Agreement (CLA)

Some projects might either have used a Contributor License Agreement (CLA) in the past (either in the form of a Corporate Contributor License Agreement (CCLA) or an Individual Contributior License Agreement (ICLA)) or have considered using it. The use of a CLA is not required for open-source projects, and many of the use cases for CLAs are handled through the lighter-weight DCO or by having an independent entity in a place like the Academy Software Foundation makes available.

If your project does have this requirement, Academy Software Foundation recommends reaching out to The Linux Foundation in advance to discuss before proposing your project to the community. The CLA templates recommended by the Academy Software Foundation's Legal Committee presently are the [Academy Software Foundation 2020 CCLA template][] and [Academy Software Foundation 2020 ICLA template][]. These are derived from the Apache Software Foundation's CCLA and ICLA templates, and contain substantively the same scope of license grants and requirements. The changes are intended to reflect Academy Software Foundation entities rather than Apache Software Foundation as the project host and to include administrative changes for Academy Software Foundation's use of the EasyCLA tool to manage authorized contributors under signed CLAs.

# Frequently Asked Questions

Q: What if the project I want to propose is not under an [Apache License, Version 2.0][], [Community Data License Agreement (CDLA) license][], or [Creative Commons Attribution 4.0 International License][]?

A: Some projects may be able to relicense to the [Apache License, Version 2.0][] for their codebase, a [Community Data License Agreement (CDLA) license][] for any data sets, and the [Creative Commons Attribution 4.0 International License][] for all documentation and non-code assets. If this can be easily done by one entity with the appropriate rights, this is our preferred approach. Projects with a history of contributions from multiple parties may not be able to relicense easily. Where another OSI-approved license is in place, the project may be proposed under its existing license and accepted without license change.  Use of a license not approved by the Academy Software Foundation does not preclude you from making a proposal but be sure in your project proposal to address the anticipated challenges of relicensing the project.

Q: Does the use of a particular open-source license require the use of a CLA?

A: No common open-source license requires the use of a CLA. Most open-source projects do not use a CLA. Some critical projects use CLAs, often to ensure contributions and grants made under the license are backed by the company employing developers.

Q: If a project already uses a particular CLA, can the CLA be changed or deprecated?

A: Yes.

Q: Can umbrella CLAs be established where contributors and their organizations grant rights to all Academy Software Foundation projects?

A: The Academy Software Foundation TAC sees value in lowering the friction to contribution and is investigating this as an option as the number of hosted projects grows. In the meantime, projects aligning around the [Academy Software Foundation 2020 CCLA template][] and [Academy Software Foundation 2020 ICLA template][] will ensure minimal legal review for signing a CCLA and/or ICLA.

Q: When a project uses a CLA with the [Apache License, Version 2.0][], is it common for [ASF Contributor Agreements][] to be employed?  Should Academy Software Foundation projects that require a CLA and use the [Apache License, Version 2.0][] employ the Apache CLA or the LF minimal CLA?

A: There is no requirement for a project to adopt [ASF Contributor Agreements][] with code licensed under the [Apache License, Version 2.0][]. Many open source projects leverage the [Apache License, Version 2.0][] without using [ASF Contributor Agreements][] or sometimes without a CLA in general (in many cases use of the [DCO][] alone is sufficent for project communities).

The Academy Software Foundation community is aiming to align around the [Academy Software Foundation 2020 CCLA template][] and [Academy Software Foundation 2020 ICLA template][] in cases where use of a CLA is required. Projects may also use the [Linux Foundation minimal CCLA template][] and [Linux Foundation minimal ICLA template][].

Q: Why does the project require me to sign a CLA?

A: It depends from project to project. Typically, projects that use CLAs do so because the project community wants to ensure that there is a signed agreement explicitly stating the legal terms governing the contribution to the project. CLAs can also be used by organizations in connection with specifying which of their employees are permitted to contribute code on their behalf, under that CLA.

Q: What is the difference between a Corporate and Individual CLA?

A: The Corporate CLA is designed for an organization to authorize contributors that have permission to contribute on behalf of the organization. The Individual CLA is specific for an individual contributor, including those not affliated with an organization.

Q: Who needs to sign the Corporate CLA?

A: The Corporate CLA should be signed by someone in your organization who has sufficient authority to execute the CLA on its behalf. Each company or other organization has its own internal controls to determine who has this authority, so the project can't determine this for you; for example, it might be an executive or other member of your leadership, but you should always consult your organization's leadership to confirm.

Q: What is a CLA Manager?

A: A CLA Manager is the person or are the persons in your organization that are authorized by the signatory of the Corporate CLA to authorize contributors from your organization. This often is a development manager or team lead who is overseeing the contributions being made to a given project.

Q: Do I need to have my employer sign the CCLA if I am making contributions on my own time and using my own equipment?

A: This varies depending on where you live and work, and your employer's policies and agreements. If you have any questions then you should discuss with your manager and/or your employer's legal team before contributing.

Q: I submitted a PR before I signed the CLA, so the PR is now marked with
the red EasyCLA "NOT COVERED" error. What do I do to get the error
to go away?

A: Refer to the [EasyCLA documentation](https://docs.linuxfoundation.org/lfx/easycla/v2-current/getting-started) on making your first contribution to a EasyCLA managed repository, but generally it should go away on its own after a few minutes. If you still have issues, please file a [support request][].

Q: Myself or my company has a CLA for another Academy Software Foundation project, doesn't that cover this project, too?

A: Each Academy Software Foundation project leverages a seperate CLA for contributions to their project. You can follow the [guide](https://docs.linuxfoundation.org/lfx/easycla/v2-current/contributors/corporate-contributor) to automatically notify your organization's CLA manager for the given project and authorize you under their Corporate CLA.

Q: My Corporate CLA manager says I should be on the approved list, but my PR is still blocked. What gives?

A: Confirm that you are selecting the proper company name as there may be multiple corporate entities registered. If you still have issues, please file a [support request][].

[Apache License, Version 2.0]: http://www.apache.org/licenses/LICENSE-2.0
[ASF Contributor Agreements]: https://www.apache.org/licenses/contributor-agreements.html
[Academy Software Foundation 2020 CCLA template]: cla/ccla_template_aswf2020_v2.1.md
[Academy Software Foundation 2020 ICLA template]: cla/icla_template_aswf2020_v2.1.md
[Community Data License Agreement (CDLA) license]: https://cdla.io/
[Creative Commons Attribution 4.0 International License]: http://creativecommons.org/licenses/by/4.0/
[DCO]: https://developercertificate.org/
[Linux Foundation minimal CCLA template]: ccla_template_lfshortform.md
[Linux Foundation minimal ICLA template]: icla_template_lfshortform.md
[support request]: https://support.linuxfoundation.org
[GitHub commit signoff policy]: https://docs.github.com/en/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization
[GitHub DCO App]: https://github.com/apps/dco



