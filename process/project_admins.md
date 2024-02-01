---
parent: Project Lifecycle
grand_parent: Processes
nav_order: 999
---

# Project Admins

A project admin is a project committer that has been granted GitHub
Admin privilege level. This gives the individual the right to change
certain repository settings without needing to submit
[Linux Foundation Release Engineering Service Desk](https://docs.releng.linuxfoundation.org/en/latest/helpdesk.html) tickets. By
default project committers have GitHub Write privilege level.

GitHub also supports the concept of a Maintain privilege level which allows
designated users a significant subset of the privileges of a user with the Admin
privilege level. Projects are encouraged to consider whether full Admin
privileges are required for certain designated users, or if Maintain level
privileges would be sufficient.

As GitHub Admin privilege level provides full access, project admins agree
not to perform these sensitive and destructive actions:

* Delete or archive the repository
* Transfer the repository out of the ASWF organization
* Change the repository visibility
* Disable or downgrade the DCO signoff PR check from mandatory to optional
* Disable or downgrade the CLA PR check from mandatory to optional
* Merge a pull request to a protected branch where either the DCO signoff or
  CLA checks have failed
* Force push to a protected branch where either the DCO signoff or CLA checks
  have failed or have not yet been performed

Being given and retaining these permissions is at the discretion of the Linux
Foundation Release Engineering team.

## List of Project Admins

* Dan Bailey, OpenVDB ( [@danrbailey](https://github.com/danrbailey) )
* Cary Phillips, OpenEXR ( [@cary-ilm](https://github.com/cary-ilm) )
