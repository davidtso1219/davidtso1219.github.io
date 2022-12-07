---
title: Udemy AWS
layout: note_template
---

# Section 8

## S3 Overview

- S3 stands for Simple Storage Service
- S3 looks like a global service but buckets are created at the **region** levlel
- S3 allows users to store **objects** in buckets
- Bucket must have a unique name **globally**

## S3 Objects

- Object is a file and each object has a key, which is the full path to the object
- There is no directoriies or tree structures in the bucket, just the key with slashs that make everything looks like there are directories
- The key is composed of two parts, _prefix_ and _object name_
  - For example, if we have an object with a key of `s3://my-bucket/my-folder/another-folder/object-name.txt`
  - Prefix is `my-folder/another-folder/`
  - Object name is `object-name.txt`
- The value is the content of the body
  - Maximum object size is 5 TB
  - If uploading an object more than 5 GB, we must use a feature called _multi-part upload_

## S3 Security

- User-based
  - IAM Policy: which API calls should be allowed for a user in IAM
- Resource-based
  - Bucket Policy: bucket-wide rules in S3 console (the policy can allow sharing the bucket cross accounts)
    - JSON based
    - Effect: Allow / Deny
    - Actions: set of APIs
    - Principal: account / IAM user to apply the policy to
  - Object Access Control List (ACL)
  - Bucket Access Control List (ACL)
- Encryption: encrypt objects using encryption keys
- Principals (accoutns / IAM users) can access the bucket if either IAM policy **_OR_** resource policy allows
- Examples:
  - Public Access (anonymous internet user): **Bucket Policy**
  - IAM Users: **IAM Policy**
  - AWS Services: **IAM Role**
  - Cross-Acount Access: **Bucket Policy**
- Bucket Settings
  - Setting were set to _Block_ by default to prevent data leak
  - If you know your bucket should never be public, leave them on

## S3 Website

- S3 enables hosting static websites and having them accessible to the public Internet
- Only thing we need to do is to upload `html` objects, and when we go to the url of an `html` object, the website will be sent.

## S3 Versioning

- We can keep track of versions of objects on S3
- Versioning is enabled at the **bucket** level
- Same key in the bucket will overwrite the object and change the version ID of the object
- Previous verions of the object will **still be stored** so we can restore them in the future
- Any object that does not have a previous version will havet the versio ID of `null`
- Suspending versioning feature will not delete the objects from previous versions

## S3 Replication

- Replication is to copy any action in one bucket to another bucket (if we want to replicate previous actions before enabling the feature, we have to enable a one-time process called _Batch Operation_)
- **Must enable versioning** in both origin and target buckets
- The origin bucket and the target bucket can be in cross regions (CRR) or in the same region (SRR)
- Buckets can even in different AWS accounts
- The copying process will be asynchronous
- And we have to give proper IAM permissions to a IAM role of S3

## S3 Storage Classes

- Durability is the same for all storage classes while availability varies depending on the storage class
- There are many storage classes in AWS S3
  1. Amazon S3 Standard - General Purpose
  2. Amazon S3 Standard-Infrequent Access (IA)
  3. Amazon S3 One Zone-Infrequent Access
  4. Amazon S3 Glacier Instant Retrieval
  5. Amazon S3 Glacier Flexible Retrieval
  6. Amazon S3 Glacier Deep Archive
  7. Amazon S3 Intelligent Tiering
- A feature called **lifecycle rule** can be used to move S3 objects between different storage classes
- You can check [here](https://aws.amazon.com/s3/storage-classes/) for comparison in availabilities and [here](https://aws.amazon.com/s3/pricing/) for prices

## S3 Encryption

- There are three types of encryption in S3
  1. No Encryption - No encryptino at all
  2. Server Side Encryption - Objects are encrypted after being uploaded to a bucket
  3. Client Side Encryption - Objects are encrypted before being uploaded to a bucket by the client

## Shared Responsibility Model

- AWS: Provide and maintain the infrastructure
- Users: Should protect the data by correctly using the S3 services. For example,
  - Versioning
  - Bucket Policy
  - Replication Setup
  - Storage Classes
  - Encryption at rest and in transit

## S3 Snow Family

- Highly secure, portable devices to migrate data in or out of AWS (data migration) and to collect and process data at edge (edge computing)
- There are 3 types of devices in Snow Family
  1. Snowcone
  2. Snowball Edge
  3. Snowmobile
- We can use an application called **AWS OpsHub** to manage our AWS Snow Family devices
- It's recommended to use a fleet of Snowballs to move less than 10PBs of data. Over this quantity, it's better-suited to use Snowmobile.
- More information [here](https://aws.amazon.com/snow/#Feature_comparison_matrix)

### Edge Computing

- Edge computing means to process data while it’s being created on an edge location
- Edges are locations that may have *limited / no access to Internet / computing power*
- Use case
  - Preprocess
  - Maching Learning
  - Transcoding mediea streams

## AWS Storage Gateway

- AWS Storage Gateway is to bridge the data from our on premises servers to the Cloud
- There are three different types of Storage Gateway: using
  1. File Gateway
  2. Volume Gateway
  3. Tape Gateway

## Summary

- S3 security: IAM Policy, IAM Role, S3 Bucket Policy (public access), S3 Encryption
- S3 Websites: a feature to host a static website on Amazon S3
- S3 Versioning: a feature to store multiple versions for files, prevent accidental deletes
- S3 Replication: a feature to copy actions from a bucket to another one in the same region or a different region, must enable versioning
- S3 Storage Classes: Standard, IA, 1Z-IA, Intelligent, Glacier (Instant, Flexible, Deep)
- Snow Family: a feature to migrate data onto or out of S3 and to achieve edge computing
- OpsHub: desktop application to manage Snow Family devices
- Storage Gateway: a solution to extend on-premises storage to S3
