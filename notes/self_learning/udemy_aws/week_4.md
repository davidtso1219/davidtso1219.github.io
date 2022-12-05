---
title: Udemy AWS
layout: note_template
---

# Section 4

## IAM

- IAM stands for **Identity and Access Management**
- IAM is a **GLOBAL** service
- You can create accounts for people in your organization using IAM with root account.
- You will create an admin account with the root account and don't do anything else with the root account. Instead, use IAM user account to perform tasks.

## Terminology

- Root account: created by default, can't be used or shared.
- Users: people within an an organization and can be grouped.
- Groups: sets of **users**, not **groups** (a user can be in no group, one group, or multiple groups)

## Permission

- Users or Groups can be assigned to certain permissions written in JSON and these JSON files are called **policies**
- The core principle is **the least privilege principle**, which means don't give more permissions than user needs to have.

## Policy

- A policy consists of

  1. Version
  2. ID
  3. Statement

- A statement consists of

  1. SID (Optional)
  2. Effect: **Allow** or **Deny**
  3. Principal: which account/user/group this policy applies to
  4. Action: list of actions this policy allows or denies
  5. Resources: list of resources this policy applies to (Optional)
  6. Condition: list of conditions when this policy applies (Optional)

### Password Policy

- In AWS, you can setup a password policy to enhance the password security of each user.
- There are a a lot different options to do so. For example,
  1. Set a minimum password length
  2. Require specific character types like uppercase and lowercase
  3. Allow users to change their passwords
  4. Set a expiration duration

## Multi Factor Authentication (MFA)

- Enhance the security even further, so that even an user's password is stolen, the account is not compromised unless the security device is also stolen

## Access Key

- Access Key is the way users use to access AWS, and access keys are generated through AWS console.
- There are 3 options to access AWS though access keys
  1. AWS Management Console
  2. AWS CLI: A tool to interact with AWS on a command line interface
  3. AWS SDK: A tool to interact with AWS programmtically in many programming languages
- There are two parts of access key
  1. Access Key ID - like your username (okay to share)
  2. Access Key Secret - like your password (never share)

## CloudShell

- A web version of the the AWS CLI on AWS Management Console.
- It has some special features like download/upload, and you can download/upload file directly through the web page.
- CloudShell is pretty much the same as AWS CLI but it is not available in every region.

## IAM Roles

- Some AWS services will need permission to perform some actions just like users.
- Therefore, we need to assign IAM roles to different services to give them permissions to do specific tasks.
- Ex.
  1. EC2 Instance Roles
  2. Lambda Function Roles
  3. Roles for CloudFormation

## IAM Security Tools

1. IAM Credential Report (account-level)

- A report that lists all users under your account ad the status of their various credentials, e.g. whether they have enabled MFA.

2. IAM Access Advisor (user-level)

- Access Advisor shows the service permissions granted to a user and when those services were last accessed.

## IAM Guidelines & Best Practices

- Don't use the **root account** except for AWS account setup
- One physical user = One AWS user
- Assign permissions to groups, not users
- Create a strong **password policy**, and enforce MFA
- Use **Roles** to give germissions to AWS services
- Use **Access Keys** for AWS CLI/SDK and rotate accesss keys once in a while
- Audit permissions with **IAM Credentials Report**
- **Never share IAM users & Access Keys**

## Shared Responsibility Model for IAM

- AWS: Provide and maintain the infrastructure
- User: manage services provided by AWS following the guidelines listed [above](#iam-guidelines--best-practices)

## Summary

- Users: mapped to a physical user, has a password for AWS Console
- Groups: contains users only
- Policies: JSON document that outlines permissions for users or preferably groups
- Roles: **users** for AWS services like EC2, but not actual person
- Security: MFA, Password Policy
- AWS CLI: A command line interface to access AWS
- AWS SDK: A software toolket to access AWS programmtically
- Access Keys: credentials AWS uses to verify identity
- Audit: IAM Credentials Report & IAM Access Advisor
