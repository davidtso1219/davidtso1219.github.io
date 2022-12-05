---
title: Udemy AWS
layout: note_template
---

# Chapter 1: Fundamentals

## Definitions

- Computer Network: A set of nodes connected by communication links
- Node: A node can be a computer, printer, or anything that can send or receive data
- Communication Link: A communication link can be a wired link or a wireless link that carries the information (in fact, air is the link of wireless connections)
- End Node: A node that is either the starting point or the ending point of a communication, e.g. PC, cellphone
- Intermediary Node: A node that is not a starting point or the ending point of a communication. (Intermediary nodes are used to transfer/forward data between other nodes)

## Basic Characteristics of Computer Network

- Fault Tolerance: The ability to continue working despite failures and ensure no loss of service
- Scalability: The ability to grow based on the needs without performance being affected
- Quality of Service (QoS): The ability to set priorities and manage data traffic to reduce data loss, delay, etc.
- Security: The ability to prevent unauthorized access, misuse, and forgery and provide confidentiality, integrity, and availability

## Data Flow

There are two different ways for data to flow from one node to another node.

- SimplexL: communication is always unidirectional, i.e. one device will always send device and the other one will always receive, e.g. keyboards
- Half Duplex: Communication can be in both directions but **_not at the same time_**, i.e. if one is sending the other one can only receive, and vice versa, e.g. Walkie Talkie
- Full Duplex: communication can be in both directions and simultaneously, e.g. two nodes can send and receive data to and from another at the same time, e.g. telephone line

## Protocols

- Protocols are the rules that form a certain way of communication, i.e. what / how / when the data communicates?
- Without these rules, one node might send data in a way that others couldn't understand, then the communication will become useless
- Just like if two people speak in two different languages, then there is no way for them to understand what each other is saying

### Elements of Protocols

- Encoding: the sender will encode the data in a way that the transmitter will be able to send to the receiver, and the encoding scheme will change based on the medium like physical wire or air.
- Formatting and Encapsulation: Both the sender and the receiver should agree on the format, so that the both sender and receiver can be identified and the receiver will be able to understand the data accordingly.
- Size: the protocol should determine how

  - sender: break big data packets into smaller packets and mark each packet with a number
  - receiver: assemble small data packets based on the number on each packet

- Timing: the protocol should determine

  1. the speed of the data being transmitte because the sender and the receiver might have different capacities of handling data flow (flow control)
  2. how long should the send be waiting for the receiver to respond with successful signals to indicate the transmission is successful. (timeout)

- Delivery options: there are three delivery options

  1. Unicast: one sender sends data to exactly one receiver
  2. Multicast: one sender sends data to mulitple receivers, but not all participants in the network
  3. Broadcast: one sender sends data to all participants in the network

## Network Types

- Peer to Peer Network
  - No centralized administration
  - All peers are equal
  - Simple sharing applications
  - Not scalable
- Client Server Network
  - Centralized administration (server)
  - Request-Response model
  - Scalable
  - Server may be overloaded

## Components of Networks

- Nodes
  - End Nodes
  - Intermediary Nodes
- Media
  - Wired Media (guided media), e.g. ethernet, USB
  - Wireless Media (unguided medai), e.g. infrared, radio, microwave, satellite
- Services
  - E-mails
  - Voice over IP calls
  - World Wide Web

## Classification of Networks

- Local Area Network (LAN): a computer network that interconnects computers in a limited area, like a school, a building. LAN Devices are
  1. Wired LAN (Ethernet from a computer to Hub/Switch)
  2. Wireless LAN (WiFi from a computer to Hub/Switch)
- Metropolitan Area Network (MAN): a computer network that interconnects computers or even LAN in a region with the size of metropolican city. MAN devices are
  1. Switches/Hubs
  2. Routers/Bridges
- Wide Area Network (WAN): a even larger computer network that extends over a large geographical area.

## Network Topologies

- Network Topology is the arrangement of nodes of a computer network, or the layout of the network
- Physical Topology vs. Logical Topology

  - Physical Topology: Physical placement of various nodes
  - Logical Topology: Logical way of handling data flow in the network

- There are many kinds of network topologies
  1. Bus
  2. Ring
  3. Start
  4. Mesh
  5. Hybrid

### Bus

- All data transmitted between nodes in the network is transmitted over _a common transmission medium_
- A signal with the address of the receiver travers from the sender in _both directions_ to all machines on the way connected until it find the intended receiver
- The topology is like a straight long street with all buildings connected. Any car from one building to another one will see every building along the way until the car arrives.

- Advantages

  - Only one wire - less expensive
  - Suited for temporary networks
  - Node failures does not affect others

- Disadvantages

  - Not fault tolerant (no redundancy)
  - No security

### Ring

- A ring topology is essentially a bus topology in a closed loop
- Peer-to-Peer LAN
- Unidirectional
- Only the node with the TOKEN can send the data to other

- Advantages

  - Better performance than Bus topology
  - All nodes are equal

- Disadvantages

  - One weak link can cause bottleneck of the entire network
  - One single point of failure, a node or a link, can affect the entire network
  - No security

### Start

- Every node is connected to a central node called a _hub_ or _switch_
- Centralized Managed
- All traffic must pass through the central node

- Advantages

  - Easier to design and implement
  - Centralized administration
  - Scalable

- Disadvantages

  - Any failure of the central node can affect the entire network
  - Overloaded central node can become a bottleneck
  - Increased cost because of the central node

### Mesh

- Each node is directly connected to every other node in the network

- Advantages

  - Fault Tolerant
  - Reliable

- Disadvantages

  - Broadcasting would become an issue
  - Expensive and impractical for large networks

### Hybrid

- A network with different parts being different kinds of network topologies

## Addressing

- There are three different types of addressing
  1. IP Address
  2. MAC Address
  3. Port Address

### IP Address

- IP stands for Internet Protocol
- Every node in the computer network is identified with the help of IP addressing.
- IP addresses of routers are assigned by the the local internet service provider (ISP)
- IP addresses of a LAN is assigned by the router
- An IP address is represented in decimal from 0 to 255 and it has 4 octets (x.x.x.x)

### MAC Address

- MAC stands for Media Access Control
- Every node in a LAN is identified with the help of MAC addressing
- MAC addresses are assigned by the manufacturer
- An MAC address is represented in 16 hexadecimal separated into 8 groups by one of the 3 different separators

### Port Address

- Every computer has many processes going on and each of them is assigned to a port address
- Every process process in a node is identified with the help of port addressing
- Port addresses are assigned by the operating system
- An Port address is represented as an integer from 0 to 65535
- Port is the endpoint of a communication

### Analogy

- Let's say we want to send a package to a person
- We need three pieces of information

  1. The physical address of their family because there are many buildings in the world (IP address)
  2. The name of the family because there are many families in the building (MAC address)
  3. The name of the person because there are many people in the family (Port Address)

### Summary

- Router needs an IP address to forward data to the right LAN, Switch needs a MAC address to forward data to the right node, Node needs a Port Address to forward data to the right process.
- Before sending any data, the node must attach the source and destination IP addresses, MAC addresses, and Port addresses.

## Switch Technologies

- Switching in computer network is to find the best route for data transmission
- It is an one to one connections
- Data switching is mainly classified into three types

  1. Circuit Switching
  2. Message Switching
  3. Packet Switching: Datagram Approach, Virtual Circuit Approach

### Circuit Switching

- A dedicated path is established between the sender and receiver before any data transmission
- Ex. Telephone Network
- Three phases in circuit switching

  1. Connection established
  2. Data transfer
  3. Connection disconnected

### Message Switching

- Data is transferred as a complete unit and forwarded using store and forward mechanism at the intermediary nodes
- Not suited for streaming media or realtime applications

### Packet Switching

- Data is broken into smaller pieces called packets and each packet will have the source and destination IP address with a **_sequence number_**.
- Each packet will be sent individually
- The sequence number can help the receiver

  1. Reorder the packets
  2. Detect missing packets
  3. Send acknowledgement

- Once the sender receives the acknowledgement from the receiver, it knows that the packet is sent successfully
- Otherwise, after a certain period of time, it knows that the transfer might be unsuccessful and resend the data

#### Datagram Switching

- Datagram switching is also known as connectioneless switching
- Each individual entity is called datagram
- Datagram contains the destination information and the intermediary nodes will use this to forward the datagram
- **Intermediate nodes take the routing decisions to forward the datagram**
- Therefore, the path for each datagram is not fixed

#### Virtual Circuit Approach

- Virtual Circuit Approach is also know as connection-oriented switching
- A preplanned route is established before any data trasmission
- There will be two special packets called **Call request** and **Call accept** used to find the preplanned route
- Therefore, the path for each packet is fixed.

