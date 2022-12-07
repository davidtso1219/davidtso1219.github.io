---
title: Udemy AWS
layout: note_template
---

# Section 9

## RDS

- RDS stands for Relational Database Service
- It is a managed database service to use SQL as the query language
- The service allows us to create different kinds of relational databases managed on AWS

### RDS vs Deploying DB on EC2

- Advantages:

  - RDS is a managed service:
  - Automated provisioning & OS patching
  - Continuous backups and restore to specific timestamp (Point in Time Restore)!
  - Monitoring dashboards
  - Read replicas for improved read performance
  - Multi AZ setup for DR (Disaster Recovery)
  - Maintenance windows for upgrades
  - Scaling capability (vertical and horizontal)
  - Storage backed by EBS (gp2 or io1)

- Disadvantage:

  - We can’t SSH into your instances

## Aurora

- Aurora is a proprietary technology from AWS (not open sourced)
- **PostgresSQl** and **MySQL** are both supported by Aurora
- Aurora claims to be cloud optimized and could be multiple times faster than other relational databases
- **_Not in free tier_**

## RDS Deployment

- There are many architectures you can choose to deploy your databases
	1. Read Replicas
		- We will have up to 5 replicas that our applications can read from
		- However, we will still have one main database where we can write to
		- We can scale the workload for reading databases horizontally in this way
	2. Multi-AZ
		- a failover in case of AZ outage
		- Data is only read and written into one main database
		- We can only have one AZ as a backup
	3. Multi-Region
		- a failover in case of Region outage
		- We can have local performance for reading if we have applications across different regions
