---
title: Udemy AWS
layout: note_template
---

# Section 6

## EBS Volume

- EBS stands for Elastic Block Store
- EBS Volume is the network drive you can attach to your instance when it runs (we can think of it as a USB stick of our computer)
- They can only be mounted to one instance at a time (at the CPP level), e.g. you can't move one from us-east-1 to us-west-1- They are only bound to one AZ, i.e. you can't move the USB from one AZ to another one. (However, you can take a snapshot of it and move the snapshot)

## EBS Snapshot

- We can take a snapshot of the EBS Volume to back up the drive once in a while in case we lost it by accident
- Another benefit of the snapshot is that we can move the snapshot and restore it in another AZ
- It is recommended but not necessary to detach the volume first before taking the snapshot

### EBS Snapshot Features

- EBS Snapshot Archive: we can move it to the archive at a better discount to store it, but restoring will take from 24-72 hours- EBS Snapshot Recycle Bin: AWS will move the deleted snapshots to the recycle bin in case we removed the snapshot by accident (duration can be from 1 day to 1 year)

## AMI

- AMI stands for **Amazon Machine Image**
- AMI is the set of configurations needed to launch an EC2 instance
- With the AMI, EC2 instances can be booted faster because the software is prepackaged
- We can launch an EC2 instance from:

  1. A public AMI provided by Amazon
  2. Our own AMI with our customized configuration that we created with previous instances
  3. Amazon Marketplace where people sell their AMI so we don't need to spend time on creating ourselves

- Building an AMI will also create a snapshot of our EBS, so we don't have to worry about EBS after creating an AMI and terminate the instance

## EC2 Image Builder

- EC2 Image Builder is a automated testing pipeline that can help test the AMI you wanna create- We can even schedule the specific duration to test the AMI once in a while
- This is the general overview:

  1. Create a builder instance with all the softwares you configure
  2. Create an AMI out of the builder instance
  3. Create a test instance out of the AMI it just created
  4. Test softwares installed on the test instance

## EC2 Instance Store

- Unlike network drives like EBS Volumes, EC2 Instance Store is the actual hardware disk attached to your EC2 Instance- Advantages:
  1. Better I/O performance
  2. Good for software like buffer, cache, scratch data, or temporary conten
- Disadvantages:
  1. If the instance is stopped or terminated, the instance store will lose their storage
  2. Will have to backup the storage every time before stopping an instance

## EFS

- EFS stands for Elastic File System
- It is a file system that can be shared with **multiple instances** in different AZ's
- Unlike sharing EBS Volume, we don't need to take any snapshot because all instances will have the **same** file system shared in sync
- The service is charging based on the capacity of the EFS.

## EFS IA

- EFS IA stands for EFS Infrequent Access
- EFS IA is the cost-optimized storage class for files that not accessed frequently in EFS.
- EFS will automatically move files to EFS IA to save money
- We can set a lifecycle policy for EFS to move files EFS IA, e.g. 60 days

## Shared Responsibility Model

- AWS: Provide and maintain the infrastructure
- User:

  - Set up backup / snapshot procedures
  - Set up data encryption
  - Responsibility of any data on the drives
  - Understand the risk of using EC2 Instance Store

## FSx

- Amazon FSx is the AWS service for lauching third party high performance file systems on AWS
- They are fully managed by AWS
- There are many options such as

  1. FSx for Lustre
  2. FSx for Windows File Server
  3. FSx for NetApp ONTAP

### FSx for Windows File Server

- A reliable, scalable Windows native shared file system
- Built on Windows File Server
- It supports SMB protocol and Windows NTFS and it can be integrated with Microsoft Active Directory

### FSx for Lustre

- a reliable, scalable file system for **High Performance Computing**
- Lustre is derived from Linux and cluster
- This is extremely powerful for ML, Analytics, etc.

## Summary

- EBS volumes:

  - Network drives attached to one EC2 instance at a time
  - Mapped to an AZ
  - Can use EBS Snapshots for backups / transferring EBS volumes across AZ

- AMI: An image to create ready-to-use EC2 instances with our customizations
- EC2 Image Builder: A process to automatically build, test and distribute AMIs
- EC2 Instance Store:

  - High performance hardware disk attached to our EC2 instance
  - Lost if our instance is stopped / terminated

- EFS: Network file system, can be attached to 100s of instances in a region
- EFS-IA: Cost-optimized storage class for infrequent accessed files
- FSx for Windows: Network File System for Windows servers
- FSx for Lustre: High Performance Computing Linux file system
