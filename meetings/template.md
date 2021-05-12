---
parent: Meetings
title: yyyy-mm-dd
nav_exclude: true
---

# AWSF TAC Meeting - Month DD, Year

## Voting member attendance

### Premier member representatives

{% for member in site.data.tacmembers %}
{% if member["Appointed By"] == "Membership Entitlement" %}
- [  ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{% endif %}
{% endfor %}

### Project Representatives


{% for member in site.data.tacmembers %}
{% if member["Appointed By"] == "Vote of TSC Committee" %}
- [  ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{% endif %}
{% endfor %}

### Industry Representatives

{% for member in site.data.tacmembers %}
{% if member["Appointed By"] == "Vote of TAC Committee" %}
- [  ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{% endif %}
{% endfor %}

# Agenda

- Technical Project updates
  - OpenVDB
  - OpenColorIO
  - OpenEXR
  - OpenCue
  - OpenTimelineIO
  - OpenShadingLanguage

- Working Groups
  - CI 
  - Diversity & Inclusion
  - Python 3
  - USD
  - Review & Approval
  - Asset Repository 
  
- Update on candidate projects

- Next meeting

# Action Items (AIs)

# Notes

# Chat

