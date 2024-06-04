---
title: "[Review] Improving Spatial Reuse of Wireless LAN Uplink Using BSS Color and Proximity Information"
description: Review of the paper "Improving Spatial Reuse of Wireless LAN Uplink Using BSS Color and Proximity Information"
author: mye280c37
date: 2022-12-01 11:33:00 +0900
categories: [Paper Review]
tags: [Wi-Fi, spatial reuse, hidden terminal, exposed terminal]
math: true
---

## Summary
A spatial reuse method for uplink which can utilize BSS color and proximity information to improve the efficiency of carrier sensing and thus spatial reuse. 

## Main Idea
In the legacy scheme, a transmitter decides to transmit or not based on detected channel status from itself. However, the success of transmission is determined by the channel status of a receiver. Thus, we focus on the transmitter's awareness of the channel status of the receiver.

### Proximity Infomation
Propose the proximity information as a new preamble feature which is the integer value from 0 to 15 encoded by the estimation of the distance between the destination and the interferer.

## Limitation
* A singnaling overhead occurs because of table exchanges between APs
* A transmitter determines channel is idle or busy based on the worst case, so it's conservative.
* In Wi-Fi, downlink which AP provides data to UEs is more important than uplink in terms of users.