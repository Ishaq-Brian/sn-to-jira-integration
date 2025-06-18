# sn-to-jira-integration

**Servicenow to jira integration (2025)**

This integration allows creating data in the Jira instance and also synchronizes data in ServiceNow by fetching corresponding information from Jira.

**Business Rule:** This code creates a new Bug issue in a specific Jira project (PM) using details from a ServiceNow record (current.short_description) via a POST REST API call.

Name: IB Project - JIRA Sync
Table: Story [rm_story]
when async

insert ✔
Actve ✔
Advanced ✔

**Scheduled Script Execution:** This code fetches all Jira issues from project PM and creates new rm_story records in ServiceNow for each issue that doesn't already exist (based on Jira issue key).

Name : JIRA Integration 

Actve ✔
