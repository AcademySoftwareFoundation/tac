---
parent: Best Practices
---

Security Best Practices
=======================

Project Security Policy
-----------------------

All ASWF projects should enable GitHub Security Advisories on their
repos, from the "Security" tab.

All ASWF projects should also publish a security policy in
SECURITY.md. It should contain:

1. A message indicating GitHub Security Advisories are the preferred
   mechanism for reporting vulnerabilities privately. If your project
   also maintains a "security@<project>.com" email, mention that as a
   secure forum for communicating with the project maintainers.

2. A statement about reponse expectations, something like:

       Our policy is to acknowledge the receipt of vulnerability
       reports within 48 hours. Our policy is to address critical
       security vulnerabilities rapidly and post patches within 14
       days if possible.

3. A list of known vulnerabilties, identifing affected versions and
   patched versions, with links to CVE records at https://www.cve.org/.

Vulnerability Reporting and Response
------------------------------------

What to do when your project receives a GitHub Security Advisory:

1. The first step is to acknowledge receipt of the report in the
   comments. 

2. Add other maintainers as collaborators, using the sidebar. GitHub
   Security Advisory pages are not publicly visible until
   published (the last step), and depending on the repo configuration,
   the report may be visible only to repo owners/maintainers.
   
3. Decide whether to reject the report as invalid. Read it and
   determine if it is a legitimate flaw or otherwise worthy of
   discussion with the reporter.  Some reasons to reject:
   
   a. It's blatantly invalid. OpenEXR once got a report of a
      vulnerability in MaterialX, clearly a mistake on the reporter's
      part.

   b. The bug is actually in a dependent library. OpenEXR has gotten
      reports of vulnerabilities in OpenJPH, which it uses.

   c. It's a known "feature", not a "bug". OpenEXR sometimes gets
      reports of "out-of-memory" faults from an extremely large image
      from very small file, which is not inherently a flaw in the
      library, as it's the responsibility of the host application to
      guard against these faults, not the OpenEXR library.

   In all cases, explain your reasoning clearly in the comments, and
   give the reporter time to rebut your conclusion.

   Don't reject the immediately unless it is obviously invalid. You
   can always reject it later if further analysis determines that it's
   not really a vulnerability.

   Don't quibble with the reporter about how exploitable a
   vulnerability is. If it's a legitimate bug, fix it, even if it's
   the most obscure of edge cases.

4. Accept the Security Advisory, using the green button.

5. Decide if you want to work in a temporary private fork. This allows
   you to collaborate in private, but at the overhead expense of an
   additional fork of the repo. Choose this option only if the
   vulnerability seems especially egregious and exploitable. If it's a
   garden-variety bug, following the conventional development process
   in your personal fork is perfectly acceptable.

6. Fix the bug.

7. Request a CVE, as soon as you are confident the flaw is legitimate
   and fixable. It can take a day or so for GitHub to respond with a
   reserved identifier. Once they respond, the CVE id will appear in
   the right sidebar. This is the public identifier for this
   vulnerability.

   Once requested, a CVE id cannot be deleted or released, so don't
   request the identifier unless you're sure you'll need it.

8. Submit a PR. Mention the CVE in the PR description or
   comments: 
   
       "Addresses CVE-2026-34589".

   Mention the PR in the GitHub Security Advisory comments so the
   reporter is aware.  It's OK to mention the CVE by name because at
   this point, the details of the vulernability are not yet npublic.
   The CVE number is simply a reserved public identifier with no
   associated information.
   
9. Add a reference to the CVE in your project SECURITY.md. 

10. Make a patch release. Mention the CVE in the release notes.

    CVEs do not have standard title fields, but to give context to the
    change, you can use the title of the associated GitHub Security
    Advisory:

        * [CVE-2026-34589](https://www.cve.org/CVERecord?id=CVE-2026-34589) DWA Lossy Decoder Heap Out-of-Bounds Write

    Backport the fix to previous minor releases as your project
    security policy dictates.

11. On the GitHub Security Advisory page, fill in the "Affected
    versions" and "Patched versions" fields. Click the "Edit advisory"
    button in the upper right corner of the page to edit the fields.
    In the "Affected versions" field, entire a comma-separated list of
    version ranges, or and "x":
   
        2.x, 3.0.0-3.0.6, 3.1.0-3.1.9

    Note that it's insufficient to only indicate which release the fix
    is in. You also need to indicate which previous releases also
    contain the vulnerability. Admittedly, this is often not trivial
    to determine.

12. Once the patched release is out, publish the Security Advisory
    (green button at the bottom of the page). This makes the page
    public, and it also populates the page at https://www.cve.org with
    the relevant information.

TODO
----

Additional topics to cover here:
- Signed releases
- Specify GHA actions and dependency checkouts by SHA commit, not version
- See testing best practices for: static analysis, dynamic analysis, fuzzing
- Security audits and how to interact with those teams
