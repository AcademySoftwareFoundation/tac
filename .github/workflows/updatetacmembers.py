#!/usr/bin/env python3                                                                                                  
#                                                                                                                       
# Copyright this project and its contributors                                                                          
# SPDX-License-Identifier: Apache-2.0                                                                                   
#                                                                                                                       
# encoding=utf8

import csv
import urllib.request
import json
import os

tacmembersCsvFile = os.path.dirname(os.path.realpath(__file__))+'/../../_data/tacmembers.csv'

committeeURL = 'https://api-gw.platform.linuxfoundation.org/project-service/v2/public/projects/a09410000182dD2AAI/committees/81ed2abc-d041-495b-be89-0dffedf8ce85/members'


csvRows = []

with urllib.request.urlopen(committeeURL) as committeeURLResponse:
    committeeURLResponseJSON = json.load(committeeURLResponse)
    for committeeMember in committeeURLResponseJSON['Data']:
        print("Processing {} {}...".format(committeeMember['FirstName'].title(),committeeMember['LastName'].title()))
        csvRows.append({
            'Full Name': "{} {}".format(committeeMember['FirstName'].title(),committeeMember['LastName'].title()),
            'Account Name: Account Name': committeeMember['Organization']['Name'] if 'Organization' in committeeMember and 'Name' in committeeMember['Organization'] else None,
            'Appointed By': committeeMember['AppointedBy'] if 'AppointedBy' in committeeMember else None,
            'Voting Status': committeeMember['VotingStatus'] if 'VotingStatus' in committeeMember else None,
            'Special Role': committeeMember['Role'] if 'Role' in committeeMember else None,
            'Title': committeeMember['Title'] if 'Title' in committeeMember else None,
            'HeadshotURL': committeeMember['LogoURL'] if 'LogoURL' in committeeMember else None
            })

with open(tacmembersCsvFile, 'w') as tacmembersCsvFileObject:
    writer = csv.DictWriter(tacmembersCsvFileObject, fieldnames = csvRows[0].keys())
    writer.writeheader() 
    writer.writerows(csvRows) 
