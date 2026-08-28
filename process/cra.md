---
title: CRA Guidance
parent: Processes
---

# CRA Guidance for Linux Foundation Projects

* TOC
{:toc}

Effective September 11, 2026, the EU Cyber Resilience Act (CRA) requires Open Source Software (OSS) Stewards to report actively exploited vulnerabilities and severe security incidents impacting digital products sold in the EU market (to the extent they are involved in product development).

## Why This Matters

Under the CRA, OSS Stewards (foundations and entities governing open source projects) must adhere to strict reporting timelines—including an early warning within 24 hours of becoming aware of an actively exploited vulnerability, followed by a formal notification within 72 hours.

**The Linux Foundation is handling this for you.** LF's project-hosting legal entities will act as the CRA stewards for the projects they host. They will be registered on the ENISA’s single reporting platform, they know the deadlines, and they file the regulatory reports. **Your project does not need to build its own EU CRA regulatory compliance function.**

## What do {{ site.foundation_name }} hosted projects need to do

1. Document whether your software is ultimately intended for commercial activities (most widely-used LF open source software projects are). If your project does not publish software, the CRA is not relevant to your project.
2. Add a short CRA stewardship statement to your `SECURITY.md` or similar public-facing security process document, identifying your foundation and LF steward. A template to use is below.

    ```
    CRA stewardship: This project is supported under the Linux Foundation CRA stewardship framework.
    Our project CRA steward is [STEWARD LEGAL ENTITY] and its policy is available at
    https://www.linuxfoundation.org/security. Security vulnerabilities should be reported through
    [PROJECT SECURITY REPORTING MECHANISM] which we will coordinate with our CRA steward. For actively
    exploited vulnerabilities or other security matters that may require CRA escalation, please use the
    project's security [EMERGENCY REPORTING MECHANISM] as appropriate.
    ```

    {: .note }
    The LF legal steward is the “Legal Parent” listed in LFX PCC (see Operations > Project Definition > Legal Details, or ask the [support desk]).

3. Know the escalation rule: if you learn of an actively exploited vulnerability or a severe incident (for example, compromise of your release process), notify your LF steward's CRA contact immediately ( which can be found at [linuxfoundation.org/security](https://linuxfoundation.org/security)), while you fix the problem, never instead of fixing it.

## Resources

* [Understanding the EU Cyber Resilience Act (CRA) (LFEL1001) - Linux Foundation - Education](https://training.linuxfoundation.org/express-learning/understanding-the-eu-cyber-resilience-act-cra-lfel1001/), which is a free course that provides an in-depth look at the various roles and requirements for CRA compliance.

Thank you for helping keep open source software secure and compliant.

[support desk]: {{ site.helpdesk_url }}
