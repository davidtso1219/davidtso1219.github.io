---
title: Udemy AWS
layout: note_template
---

# Section 3

## IT Terminology

1. Network: cables, routers, servers connected to each other.
2. Router: A networking device that forwards data packets between computer networks. They know where to send you packets on the internet.
3. Takes a packet and send it to the correct server/client on your network

The overall structure look like this:

- End Computer -> Router -> Switch -> End Computer

## What Is Cloud Computing

- Cloud computing is the delivery of **computation power, database storage, applications and other IT resources.**
- Users can provision exactly the right type and size of resources they need.
- Problems sovled by the Cloud:
  1. Flexibility
  2. Cost-Effectiveness
  3. Scalability
  4. Elasticity
  5. High Availability & Fault Tolerance
  6. Agility

## Deployment Models of the Cloud

1. Private Cloud

   - Cloud services used by a single organiztion, not exposed to the public
   - Complete Control
   - More Security for sensitive applications

2. Public Cloud

   - Cloud resources owned and operated by a third-parth cloud service provider via Internet.

3. Hybrid Cloud
   - Keep some servers on premises and extend some capabilities to the Cloud.
   - Control sensitive assets in your private infrastructure
   - Flexibility and cost-effectiveness of the public cloud

## Types of Cloud computing

1. Infrastructure as a Service (IaaS)
2. Platform as a Service (PaaS)
3. Software as a Service (SaaS)

### Comparing Different Types of Cloud Computing

- IT Structures:
  - Applications, Data, Runtime, Middleware, O/S, Virtualization, Servers, Storage, Networking

1. On-premises, i.e. traditional IT (control everything)
   - **Managed by you:** Applications, Data, Runtime, Middleware, O/S, Virtualization, Servers, Storage, Networking
   - **Managed by others:**
2. IaaS (control down to O/S)
   - **Managed by you:** Applications, Data, Runtime, Middleware, O/S
   - **Managed by others:** Virtualization, Servers, Storage, Networking
3. PaaS (control down to Data)
   - **Managed by you:** Applications, Data
   - **Managed by others:** Runtime, Middleware, O/S, Virtualization, Servers, Storage, Networking
4. SaaS (utilize the application as a service without any control)
   - **Managed by you:**
   - **Managed by others:** Applications, Data, Runtime, Middleware, O/S, Virtualization, Servers, Storage, Networking

## AWS Global Infrastructure

- Regions: A cluster of data centers in a specific geographic area (each region has 2-6 available zones)
- Availability Zones: A clustor one or more data centers and seperated from each other to be isolated from disasters.
- Data Centers
- Edge Locations / Points of Presence

### How to Choose an AWS Region?

- **Compliance** with data governace and legal requirements
- **Proximity** to custmers to reduce latency
- **Available services** within a Region
- **Pricing**

## Shared Responsibility Model

- Customer: responsible for the security **IN** the cloud, i.e. the security of any software application they develop.
- AWS: responsible for the security **OF** the cloud, i.e. the cloud infrastructure and the services
