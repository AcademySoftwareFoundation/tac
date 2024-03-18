#!/usr/bin/env python3
#
# Copyright this project and its contributors
# SPDX-License-Identifier: Apache-2.0
#
# encoding=utf8

import yaml
import urllib.request
import urllib.parse
import json
import os

cloMonitorFile = os.path.dirname(os.path.realpath(__file__))+'/../../_data/aswf.yaml'

landscapeBaseURL = 'https://landscape.aswf.io'
landscapeHostedProjects = landscapeBaseURL+'/data/exports/projects-hosted.json'
landscapeSingleItem = landscapeBaseURL+'/data/items/{}.json'

artworkRepoLogoURL = 'https://artwork.aswf.io/'

projectEntries = []

with urllib.request.urlopen(landscapeHostedProjects) as hostedProjectsResponse:
    for projectStage in json.load(hostedProjectsResponse):
        for project in projectStage['items']:
            with urllib.request.urlopen(landscapeSingleItem.format(project['id'])) as singleItemResponse:
                projectData = json.load(singleItemResponse)
                if projectData['project'] == 'emeritus':
                    continue
                print("Processing {}...".format(projectData['name']))
                
                # grab correct logo from artwork repo
                logo_url = ''
                logo_url_dark = ''
                if 'extra' in projectData and 'artwork' in projectData['extra']:
                    urlparts = urllib.parse.urlparse(projectData['extra']['artwork'])
                    with urllib.request.urlopen('{}://{}/assets/data.json'.format(urlparts.scheme,urlparts.netloc)) as artworkResponse:
                        artworkData = json.load(artworkResponse)
                        logo_url = '{}://{}{}{}'.format(urlparts.scheme,urlparts.netloc,urlparts.path,artworkData[urlparts.path]['primary_logo'])
                        logo_url_dark = '{}://{}{}{}'.format(urlparts.scheme,urlparts.netloc,urlparts.path,artworkData[urlparts.path]['dark_logo'])
                else:
                    logo_url = project['logo']
                    logo_url_dark = project['logo']

                projectEntry = {
                    'name': projectData['id'],
                    'display_name': projectData['name'],
                    'description': projectData['description'],
                    'category': 'Visual Effects and Computer Graphics',
                    'logo_url': logo_url,
                    'logo_url_dark': logo_url_dark,
                    'devstats_url': projectData['extra']['LFX_insights'] if 'extra' in projectData and 'LFX_insights' in projectData['extra'] else None,
                    'maturity': projectData['project'],
                    'repositories': []
                }
                if 'repos' in projectData:
                    for repo in projectData['repos']:
                        projectEntry['repositories'].append({
                            'name': repo['url'].rsplit('/', 1)[-1],
                            'url': repo['url'],
                            'exclude': ['clomonitor']
                        })
                    projectEntries.append(projectEntry)
    
with open(cloMonitorFile, 'w') as cloMonitorFileObject:
    yaml.dump(projectEntries, cloMonitorFileObject, sort_keys=False, indent=2)
