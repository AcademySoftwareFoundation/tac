---
parent: Tools
---

# IT and Release Enginering Support

* TOC
{:toc}

The Linux Foundation provides support for the infrastructure hosted by the {{ site.foundation_name }}. This support includes both IT support, as well as Release Engineering support. This document outlines the included services available to projects.

## IT Support

Linux Foundation provides direct support for the following infrastructure:

- [Mailing Lists]({{ site.mailing_list_url }})
- [{{ site.foundation_name }} Confluence wiki]({{ site.wiki_url }})
- [{{ site.foundation_name }} website]({{ site.website_url }})
- [LFX Insights]({{ site.lfx_insights_url }})
- [LFX EasyCLA]
- [LFX Project Control Center]

If you need support with using any of these tools, please file a support ticket at [support.linuxfoundation.org].

Tools not listed above are maintained by the individual project communities and not supported by the Linux Foundation directly.

## Domain management

{{ site.foundation_name }} both manages the domain renewals and DNS for all project domains. Projects can request both new domain purchases, transfer of existing domains to the {{ site.foundation_name }}, as well as request redirect or service-specific subdomains, by creating an [IT Request][Domain IT Request]. For domains that are not available, {{ site.foundation_name }} may be able to purchase the domain from it's existing owner pending budget approval.

## Build Infrastructure support

The [CI Working Group] oversees the common build infrastructure for hosted projects. Additionally, there is a FTE resource funded by the ASWF for release engineering support, which includes:

* Helping new projects get situated with CI and getting their repositories properly configured
* Managing rights against repositories
* CI workflow consulting
* Some amount of CI workflow design or porting from other CI platforms
* Management of artifact storage (JFrog Artifactory)
* Managing cloud resources
* Helping with static analysis issues (eg: SonarCloud)
* Interfacing with vendors on behalf of the project for resources or problem resolution: (ex: we communicate and advocate regularly with GitHub for our projects)
* Managing CI credentials
* Helping with training on how to use the LFX tooling available
* Helping resolve issues with the LFX tooling
* Consulting and training in ways to perform Open Source development better
* Regular attendance at TSC meetings or other environment meetings such as the CI Working Group that ASWF has to provide input and clarity along with other items that may impact the community
* Other services evaluated on a request by request basis

## Questions?

The Linux Foundation team is always happy to support projects in thier IT and build infrastructure needs. Please [file a ticket][Generic IT Request] to reach the team.

[LFX EasyCLA]: https://easycla.lfx.linuxfoundation.org/
[LFX Project Control Center]: https://lfx.linuxfoundation.org/tools/project-control-center
[support.linuxfoundation.org]: https://support.linuxfoundation.org
[CI Working Group]: https://github.com/AcademySoftwareFoundation/wg-ci
[Domain IT Request]: https://jira.linuxfoundation.org/plugins/servlet/desk/portal/2?requestGroup=19
[Generic IT Request]: https://jira.linuxfoundation.org/plugins/servlet/desk/portal/2/create/37
