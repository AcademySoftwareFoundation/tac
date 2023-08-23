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
    csvRows.append({
        'title': item['content']['title'],
        'url': item['content']['url'],
        'number': item['content']['number'],
        'status': item['status']
        })

with open(csvFile, 'w') as csvFileObject:
    writer = csv.DictWriter(csvFileObject, fieldnames = csvRows[0].keys())
    writer.writeheader() 
    writer.writerows(csvRows) 
