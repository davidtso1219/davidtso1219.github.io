---
title: Udemy AWS
layout: note_template
---

# Section 5

## AWS Budget

- You will need to modify this information using your root account. Even an admin account would not be able to do so.
- You can turn on the permission using your root account, so other users can modify it too.
- You should explore your bills, setup budget plan using templates, and explore free-tiers for the services you are interested in.

## EC2

- Stands for Elastic Compute Cloud
- The service type is _Infrastructure As A Service_ (IaaS)
- A few main capabilities are:
  1. Use a virtual machine (EC2)
  2. Store data on virtual drives (EBS)
  3. Distribute load accross machiens (ELB)
  4. Scale the service using auto-scaling group (ASG)

## Options & Configurations

- Operating System (OS)
- Computer Power (CPU)
- Memory (RAM)
- Storage
  - Network-attached (EBS, EFS)
  - Hardware (EC2 Instance Storage)
- Network Card
- Firewall Rules
- Bootstrap Scripts (EC2 User Data)

## EC2 Instance Types

- There are many types of ECS instances on AWS. Take a look at this [link](https://aws.amazon.com/ec2/instance-types/)
- The naming convention of instance types on AWS is: [instance_class][generation].[size].
- For example, t3.micro, where t is the instance class, 3 is the generation, and micro is the size.

## Security Groups

- Security Groups are like the firewall surround the EC2 instances. They regulate
  1. Access to Ports
  2. Authorized IP Ranges
  3. Inbound Network Traffic
  4. Outbound Network Traffic
- Any network traffic, both inbound and outbound, will have to go through the security groups first.
- Any security permission is set to **_not allowed_** by default unless any security groups explicitly allow such permission.
- There will be a default security group that allows all outbound traffic from the EC2 instance.
- A security group can be applied to many instances and an instance can be applied to many security groups.

### General Guidelines

- Create a separate security group dedicating on SSH because of its crucial and complicated configuration.
- If your application is not accessible, i.e. "timeout", it is the security group issues.
- If your application gives a "connection refused" error, it is the application issues.

### Example

- Create a free-tier EC2 Instance
- Set everything by default
- Go to the default security group you created when creating the instance
- Go to inbound rule
- Delete the rule that allows HTTP traffic
- Try to access the application via your browser
- You will likely see a timeout because we have disabled the HTTP connection
- Add the rule back
- You will likely see the application again because we have enabled to HTTP connection now

## SSH

- The most common way to connect to your server on AWS.
- To connect, we have to specify which user to connect on the instance (the user on the server like the one we log in every time on our PC, **_NOT_** IAM user)
- Check the default user name [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/managing-users.html#ami-default-user-names)

### Reminders

- Remember to use the **key pair** you generated when creating the EC2 instance
- Remember to change the permission of the key pair to 400 by running `chmod 400 key-pair.pem`

### SSH

- Now you can ssh with the following command to access the server

```sh
ssh -i /path/key-pair-name.pem instance-user-name@instance-IPv6-address
```

## EC2 Instance Role

### Reminders

1. Never ever enter your IAM Access Key when setting your configurations via `aws configure`

### Add an IAM Role

1. Go to Instances
2. Click **_Actions_**
3. Click **_Security_**
4. Click **_Modify IAM Role_**
5. Choose the role to attach and save the configuration

## ECS Instance Purchasing Options

- On-Demand Instances – short workload, predictable pricing, pay by second
- Reserved (1 & 3 years)
  - Reserved Instances – long workloads with only one type of instance
  - Convertible Reserved Instances – long workloads with flexible instances
- Savings Plans (1 & 3 years) – commitment to an amount of usage, long workload
- Spot Instances – short workloads, cheap, can lose instances (less reliable, and **_not suitable for critical jobs_**)
- Dedicated Hosts – book an entire physical server, control instance placement
- Dedicated Instances – no other customers will share your hardware (no control over instance placement)
- Capacity Reservations

## EC2 Shared Responsibility Model

- AWS: Provide and maintain the infrastructure
- User:
  - Security Groups rules
  - OS patches and updates
  - Software installed on EC2
  - IAM Roles
  - Data Security

## Summary

- EC2 Instance: AMI (OS) + Instance Size (CPU + RAM) + Storage + security groups + EC2 User Data
- Security Groups: Firewall attached to the EC2 instance
- EC2 User Data: Script launched at the first start of an instance
- SSH: start a terminal into our EC2 Instances (port 22)
- EC2 Instance Role: link to IAM roles
- Purchasing Options: On-Demand, Spot, Reserved (Standard, Convertible, Scheduled), Dedicated Host, Dedicated Instance
