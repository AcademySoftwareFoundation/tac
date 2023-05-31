# Hosted project success metrics

## Overview

This document is intended to capture best practices for ASWF hosted projects to measure project success. It is by no means an exclusive list of success metrics, but intended as a starting point for projects to this about success along with a guide for establish some degree of commonality between projects.

## What is Project Success

A project's definition of success will change over time, and as such, measures of success will need to shift over time as well. 

For most projects, a good place to start is with the founding project team defining what a success looks like to them at the early, MVP, v1, and LTS stages of the project, and some suggested KPI's are listed below. 

In the early stages, a high velocity of commits sustained over months may be a good indicator for your project.  In LTS, this level of activity has likely tapered off, and that's not a bad thing. 

## Metrics for Project Success
(from: https://opensource.com/article/19/8/measure-project) The below metrics are defined by development role in an Open Source project. 

Project founders

As a project founder, I care most about:

    Is my project useful to others? Measured as a function of:

        How many forks over time?
        Metric: Repository forks.

        How many contributors over time?
        Metric: Contributor count.

        Net quality of contributions.
        Metric: Bugs filed over time.
        Metric: Regressions over time.

        Financial health of my project.
        Metric: Donations/Revenue over time.
        Metric: Expenses over time.

    How visible is my project to others?

        Does anyone know about my project? Do others think it’s neat?
        Metric: Social media mentions, shares, likes, and subscriptions.

        Does anyone with influence know about my project?
        Metric: Social reach of contributors.

        What are people saying about the project in public spaces? Is it positive or negative?
        Metric: Sentiment (keyword or NLP) analysis across social media channels.

    How viable is my project?

        Do we have enough maintainers? Is the number rising or falling over time?
        Metric: Number of maintainers.

        Do we have enough contributors? Is the number rising or falling over time?
        Metric: Number of contributors.

        How is velocity changing over time?
        Metric: Percent change of code over time.
        Metric: Time between pull request, code review, and merge.

    How diverse & inclusive is my project?

        Do we have a valid, public, Code of Conduct (CoC)?
        Metric: CoC repository file check.

        Are events associated with my project actively inclusive?
        Metric: Manual reporting on event ticketing policies and event inclusion activities.

        Does our project do a good job of being accessible?
        Metric: Validation of typed meeting minutes being posted.
        Metric: Validation of closed captioning used during meetings.
        Metric: Validation of color-blind-accessible materials in presentations and in project front-end designs.

    How much value does my project represent?

        How can I help organizations understand how much time and money using our project would save them (labor investment)
        Metric: Repo count of issues, commits, pull requests, and the estimated labor rate.

        How can I understand the amount of downstream value my project creates and how vital (or not) it is to the wider community to maintain my project?
        Metric: Repo count of how many other projects rely on my project.

        How much opportunity is there for those contributing to my project to use what they learn working on it to land good jobs and at what organizations (aka living wage)?
        Metric: Count of organizations using or contributing to this library.
        Metric: Averages of salaries for developers working with this kind of project.
        Metric: Count of job postings with keywords that match this project.

Project maintainers

As a Project Maintainer, I care most about:

    Am I an efficient maintainer?
    Metric: Time PR’s wait before a code review.
    Metric: Time between code review and subsequent PR’s.
    Metric: How many of my code reviews are approvals?
    Metric: How many of my code reviews are rejections/rework requests?
    Metric: Sentiment analysis of code review comments.

    How do I get more people to help me maintain this thing?
    Metric: Count of social reach of project contributors.

    Is our code quality getting better or worse over time?
    Metric: Count how many regressions are being introduced over time.
    Metric: Count how many bugs are being introduced over time.
    Metric: Time between bug filing, pull request, review, merge, and release.

Project developers and contributors

As a project developer or contributor, I care most about:

    What things of value can I gain from contributing to this project and how long might it take to realize that value?
    Metric: Downstream value.
    Metric: Time between commits, code reviews, and merges.

    Are there good prospects for using what I learn by contributing to increase my job opportunities?
    Metric: Living wage.

    How popular is this project?
    Metric: Counts of social media posts, shares, and favorites.

    Do community influencers know about my project?
    Metric: Social reach of founders, maintainers, and contributors.

This is not an exhaustive list, please feel free to come up with your own!

Some good KPI's to consider at the start of your project include: 

+ How many contributors do we have?
+ How many maintainers do we have?
+ How many downstream dependencies are there? 
+ How many users of the software do we have?
+ How many bugs do we have?
+ How long does it take for a bug to be fixed?
+ How long are PR's sitting open?

## Tools for measursing Project Success

All projects have their metrics posted on [LFX Insights](https://insights-v2.lfx.linuxfoundation.org/aswf/trends).
