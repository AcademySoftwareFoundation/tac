#!/usr/bin/env python3
#
# Copyright this project and its contributors
# SPDX-License-Identifier: Apache-2.0
#
# encoding=utf8

import csv
import json
import os
import subprocess

csvFile = os.path.dirname(os.path.realpath(__file__))+'/../../_data/meeting-agenda-items.csv'
jsonProjectData = subprocess.run("gh project item-list 19 --owner AcademySoftwareFoundation --format json", shell=True, capture_output=True).stdout

csvRows = []
projectData = json.loads(jsonProjectData)
for item in projectData['items']:
    print("Processing {}...".format(item['content']['title']))
    meetingItem = {
        'title': item['content']['title'],
        'url': item['content']['url'],
        'number': item['content']['number'],
        'scheduled_date': item['scheduled Date'] if 'scheduled Date' in item else None,
        'status': item['status'] if 'status' in item else None
        }
    if 'labels' in item:
        if '1-new-project-wg' in item['labels']:
            meetingItem['meeting_label'] = '1-new-project-wg'
        elif '2-annual-review' in item['labels']:
            meetingItem['meeting_label'] = '2-annual-review'
        elif '3-tac-meeting-long' in item['labels']:
            meetingItem['meeting_label'] = '3-tac-meeting-long'
        elif '4-tac-meeting-short' in item['labels']:
            meetingItem['meeting_label'] = '4-tac-meeting-short'
    else:
        meetingItem['meeting_label'] = None
    csvRows.append(meetingItem)

with open(csvFile, 'w') as csvFileObject:
    writer = csv.DictWriter(csvFileObject, fieldnames = csvRows[0].keys())
    writer.writeheader() 
    writer.writerows(csvRows) 
