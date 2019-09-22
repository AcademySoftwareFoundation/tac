# Contribution Guidelines recommendations for projects hosted by ASWF

## Overview

This document is intended to outline the recommended licensing and contribution standards for any project intended for being hosted by the ASWF.

Within open source there are multiple approaches to contribution and licensing, and ASWF recognizes that there is no single strategy that fits all project communities and consumers. This document is not intended to provide an endorsement to any particular license or contribution strategy, but instead to provide guidance on best practices based on experiences with other projects (both ASWF hosted and others within the industry). Please consult your legal counsel for specific guidance for your situation.

## License

Generally net new open source projects at The Linux Foundation leverage the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) for their codebase and the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) for all documentation and non-code assets. These licenses is widely used and understood by both developers and organizations alike, providing flexibility for downstream usage and patent protection for those contributing code.

### Code License identificiation

Each repository must contain a license file. Include the plain-text version of the license as a LICENSE file in the top-level directory of the repostiory.

All source files need to include a header to clearly show the license. ASWF recommends the use of [SPDX short-form license identifiers](https://spdx.org/ids) in source code files, which vastly reduces errors in copy and pasting license text and enables the headers to be machine readable. Example of the use of SPDX short-form license identifiers can be found at https://spdx.org/ids.

### Copyright Notice Format

We have been recommending that contributors to a new project establish a common format for copyright notices in their own code. This can help minimize compliance burdens that might otherwise require downstream distributors to reproduce a large number of variations in years, entity names and formats for notices. We recommend a common copyright notice in a form similar to the following, which does not refer to years or specific contributing entities:

Copyright Contributors to the __________ Project.

For clarity, we would not recommend removing a third party’s license or copyright notice in any circumstance. If a third party dependency is added to a repository, its license and copyright notices should be preserved and should not be modified or removed.

### Example of the SPDX short-form license identifiers and copyright notice in a source file

Assumes Apache License, Version 2.0 and Foo project name.

```
# SPDX-License-Identifier: Apache-2.0
# Copyright Contributors to the Foo Project.
```

## Contribution sign off

Ensuring a clean code pedigree and lineage is critical to downstream adoption of open source code in industry.

ASWF requires the use of the [Developer’s Certificate of Origin 1.1 (DCO)](https://developercertificate.org/), which is the same mechanism that the [Linux® Kernel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/process/submitting-patches.rst#n416) and many other communities use to manage code contributions. The DCO is considered one of the simplest tools for sign offs from contributors as the representations are meant to be easy to read and indicating signoff is done as a part of the commit message.

Here is an example Signed-off-by line, which indicates that the submitter accepts the DCO:

<code>Signed-off-by: John Doe <john.doe@hisdomain.com></code>

You can include this automatically when you commit a change to your local git repository using <code>git commit -s</code>. You might also want to leverage this [command line tool](https://github.com/coderanger/dco) for automatically adding the signoff message on commits.

### Signoff for commits where the DCO signoff was missed

When bringing in a code repository for the first time, or commits done before the DCO checks are enabled, there would be a series of commits that don't include the sign-off statement. You can retroactively signoff commits you've made by make a commit with your DCO signoff that contains a new text file ( suggested name is past_commits.txt ) with the following contents:

````
The following commits were made pursuant to the Developer Certificate of Origin, even though a Signed-off-by: was not included in the commit message.

<COMMIT HASH> <COMMIT MSG>
...
````

Each user who has made the past commits should have thier own <code>Signed-off-by:</code> line in the commit message.

### Contributor License Agreement (CLA)

Some projects might either have used a Contributor License Agreement (CLA) in the past (either in the form of a Corporate Contributor License Agreement (CCLA) or Individual Contributior License Agreement (ICLA)) or have considered using it. The use of a CLA is not required for open source projects and many of the use cases for CLAs are handled through the lighter weight DCO or by having an independent entity in place like the ASWF makes available.

If your project does have this requirement, ASWF recommends reaching out to The Linux Foundation in advance to discuss before proposing your project to the community.  Where a CLA is required, the ASWF recommends usage of the [Linux Foundation minimal CCLA template](ccla_template.md).

# Frequently Asked Questions

Q: What if the project I want to propose is not under an Apache 2 license or Creative Commons Attribution 4.0 International License?

A: Some projects may be able to relicense to [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) for their codebase and the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/) for all documentation and non-code assets. If this can be easily done by one entity with the appropriate rights, this is our preferred approach. Projects with a history of contributions from multiple parties may not be able to easily relicense. Where another OSI-approved license is in place, the project may be proposed under its existing license and may be accepted without license change.  Use of a license not approved by the ASWF does not preclude you from making a proposal but be sure in your project proposal to address the anticipated challenges relicensing the project.

Q: Does the use of a particular open source license require the use of a CLA?

A: No common open source license requires the use of a CLA. Most open source projects do not use a CLA. Some critical projects do use CLAs, often to ensure contributions and grants made under the license are backed by the company employing developers making those contributions.

Q: If a project already uses a particular CLA, can the CLA be changed or deprecated?

A: Yes.

Q: Can umbrella CLAs be established where contributors and their organizations grant rights to all ASWF projects?

A: The ASWF TAC sees value in lowering the friction to contribution, and is investigating this as an option as the number of hosted projects grows. In the meantime, projects aligning around the [Linux Foundation minimal CCLA template](ccla_template.md) will ensure that the legal review for signing a CCLA is minimal.

Q: When a project uses a CLA with the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0), is it common for the [Apache CCLA](https://www.apache.org/licenses/cla-corporate.txt) to be employed?  Should ASWF projects that require a CLA and use the Apache License, Version 2.0 employ the Apache CLA or the LF minimal CLA?

A: There is no requirement for a project to adopt an Apache CCLA with code licensed under the Apache License, Version 2.0. Many open source projects leverage the Apache License, Version 2.0 without using the Apache CCLA or sometimes without a CLA in general (in many cases use of the [DCO](https://developercertificate.org/) alone is sufficent for project communities).

The ASWF community is aiming to align around the [Linux Foundation minimal CCLA template](ccla_template.md) in cases where use of a CLA is required.
