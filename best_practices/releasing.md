---
parent: Best Practices
---

Releasing Best Practices
========================

This document is a work in progress, with several topics still needing built out.

## Versioning
## Release cadence
## Release procedures (various checklists)
## Best ideas for betas, release candidates, final releases
## Packaging
## PyPI

ASWF has a PyPi organization at <https://pypi.org/org/aswf/> which all projects 
should be connected to. Work with [LF Release 
Engineering](https://jira.linuxfoundation.org/plugins/servlet/desk/portal/2/create/1376) 
to have you project connected.

## Binary distribution

It is highly recommended to avoid providing binary artifacts for project releases. Distributing
binary assets has the potential to introduce additional considerations for projects,
and can give downstream users an impression that the level of support is greater than
what the project is equipped to provide.

That said, there are use-cases where providing binary assets adds value for downstream
users. Additionally, some projects may want to distrbute via various app stores ( such
as the Mac App Store ), which would require a binary distribution. Please contact the 
[LF Staff](mailto:support@aswf.io) if your project is considering binary distribution.

## Release announcements (including automated to slack)

Generally making announcements of releases to project users is a best practice for 
projects. If you use GitHub Releases, there is some nice automation you can 
leverage to make this easier.

- [Slack Release Notifer](https://github.com/jmertic/slack-release-notifier) action
  can be included in GitHub Action release workflow to automatically publish release
  notifications and notes to Slack channels.
- GitHub Releases are made available in an RSS feed; format is `https://github.com/:owner/:repo/releases.atom`
  This can be integrated into a project's groups.io mailing list to [automate notifications
  to an email list](https://groups.io/helpcenter/manual/ownersmanual/integrations/integrations_feed.htm).

## Signed releases
## Immutable releases

