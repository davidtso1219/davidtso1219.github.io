---
title: Udemy AWS
layout: note_template
---

# Section 7

## Scalability

- The ability to accomodate larger load
- There are two different kinds of scalability

  1. Vertical Scalability: the ability to increase the size of an instance and this is common for **non distributed systems** like databases
  2. Horizontal Scalability: the ability to increase the number of instances and this is common for **distributed systems** like web applications

## High Availability

- The ability to keep the application available even with unexpected events
- High Availability usually comes with horizontal scaling

## Scalability vs Elasticity (vs Agility)

- Scalability: the ability to accommodate a larger load by making the hardware stronger, or by adding more hardware
- Elasticity: the ability to "auto-scale" based on the realtime loading of the application
- Agility: the ability to add new IT resources or features easily and quickly

## Elastic Load Balancing (ELB)

- Load Balancing is evenly balancing the load among our instances
- AWS can help us with this by providing different kinds of load balancing servers to spread the traffic across multiple instances based on our needs
- There are a lot of benefits of Load Balancers

  - Spread the load across multiple instances
  - Provide a single access point (i.e. a shared URL / LB server for your application instances) to multiple instances
  - Seamlessly handle failures of downstream instances
  - Do regular health checks of you instances
  - Provide SSL termination for your web application
  - High available accross zones

- There are three different load balancers provided by AWS ([source](https://aws.amazon.com/elasticloadbalancing/))

  1. Application Load Balancer
  2. Network Load Balancer
  3. Gateway Load Balancer

### Application Load Balancer (ALB)

- HTTP / HTTPS / gRPC protocols - Layer 7
- HTTP Routing Features
- Static DNS (URL)

### Network Load Balancer (NLB)

- TCP / UDP protocols - Layer 4
- High Performance, Low Latency
- Static IP

### Gateway Load Balancer (GLB)

- HTTP / HTTPS protocols - Layer 3
- Route traffic to third-party firewall instance then to your instance

## Auto Scaling Groups (ASG)

- The load on your applications is going to change a lot at different times
- With the cloud, we can create and remove instances every quickly even automatically with ASG
- The main goal is to ensure we have optimal number of machines running at the optimal capacity
- Therefore, we can use the ASG service on AWS to achieve elastic load balancing horizontally with an ELB

### Dynamic Scaling

- The ASG will respond to the changing demand
- There are many different kinds of dynamic scaling

  1. Simple / Step Scaling, e.g. when CPU > 70%, add 2 units
  2. Target Tracking Scaling, e.g. I want average CPU usage to stay at round 40%
  3. Scheduled Scaling, e.g. Increase the minimum capacity to 10 from 6pm to 9pm on Friday
  4. Predictive Scaling, e.g. Use ML to predict the traffic ahead of time

## Summary

- Terminologies

  1. High Availability
  2. Scalability (Vertical & Horizontal)
  3. Elasticity
  4. Agility

- Elastic Load Balancers (ELB)

  - Destribute traffic to multiple instances (could be across different AZ)
  - ALB, NLB, GLB

- Auto Scaling Groups (ASG)

  - Implement elasticity for your application accross different AZ
  - Horizontally scale EC2 instances based on the demand in real time integrated with ELB
