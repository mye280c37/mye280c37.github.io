---
title: "Beyond Centralized Networks: Why Bitchat Matters"
description: Analyzing Bitchat as a case study in the shift from centralized to decentralized communication networks.
author: mye280c37
categories: [Communication Network]
tags: [Bitchat, Decentralized Networks, Mesh Networks, Communication Infrastructure, BLE, P2P]
math: true
---

Recently, the mainstream direction of future networks has been showing significant shifts. Alongside efforts to advance existing centralized communication infrastructure by integrating it with AI, there's a clear trend toward moving beyond traditional terrestrial infrastructure, including decentralization. This trend can be exemplified by research on hybrid centralized/decentralized communication infrastructure that brings edge-to-edge mechanisms to centralized communication infrastructure, and satellite networks like Starlink.

This trend is observable not only at the infrastructure level but also in applications. A prime example demonstrating this trend in applications is "Bitchat." Although "Bitchat" was released in July 2025 and considerable time has passed since its launch, the emergence of this application is significant from a "decentralization" perspective as it suggests how and in what situations decentralized networks will be utilized in the future. Therefore, I aim to explore the principles and usage scenarios of this application.

## What is Bitchat?

---

Bitchat can be described as **"Decentralized peer-to-peer mesh network with store-and-forward relay"**. The developer of Bitchat is Jack Dorsey, co-founder of X (formerly Twitter), who emphasized the "no-internet" characteristic when introducing Bitchat. This is because the main mechanism of Bitchat is Bluetooth-based. (↗️ [official website](https://bitchat.free/))

### Entire Data Transmission Mechanism

Except for session creation and encryption, the total data transmission mechanism is summarized as following steps.

1. Sender creates a message
2. Message encryption & packetization
3. Dual-role operation
    1. Peripheral: Self-advertise
    2. Central: Scan & connect nearby peers
4. **Connection Timeout Backoff**: Gradual increase of retry interval on connection failure
5. Transmission: **TTL-based Flooding Protocol**
    - Broadcast message to all connected nearby peers
    - If not the receiver, relay node decrements TTL by 1 and relays (max 7 hops)
    - 8-25ms random jitter applied before each relay
    - Relay stops when TTL reaches 0
6. Deduplication for preventing duplicates
    - Unique Message ID-based inspection
        1. **Bloom filter:** Probabilistic quick check for previously seen messages comparing UUID
        2. **Content hashing:** Precise verification when Bloom filter indicates "possibly seen”
    - **Ingress Link Tracking**: Records which peer the message came from to prevent same-path duplicates
7. Transmission succeeds if receiver gets the message before TTL reaches 0; receiver does not relay further

### Duty Cycling with Adaptive Override: Battery vs. Latency

One of the main challenges of mesh networks is high battery consumption from continuously scanning for nearby peers. To address this, Bitchat implements an adaptive duty cycling mechanism.

- **Default mode**: 3s ON / 10s OFF scanning cycle (battery saving)
- **Active conversation**: Switches to continuous scanning when packets are sent/received within the last 10s (low latency)
- **Background mode**: OFF period extended to 15s (maximum power saving)

This represents an optimization strategy that balances node survivability (energy) and quality of service (latency) in environments without fixed infrastructure.

### How to Determine a Channel for Transmission?

BLE natively uses **Adaptive Frequency Hopping (AFH)** to automatically avoid channels with interference. Therefore, the application layer (BitChat) does not need to handle channel selection.

### Estimated Communication Range of Bitchat

BitChat specifies a transmission range of **30-100 meters per hop**, varying by environment. The estimated BLE transmission range by environment can be summarized as the table below.

| Environment | Range per Hop | Total Range (max. 7 hops) |
| --- | --- | --- |
| BitChat Official | ~ 43m | ~ 300m |
| Worst (indoor/urban dense) | 10m | 70m |
| Typical (protests/festivals) | 30m | 210m |
| Best (open outdoor) | 100m | 700m |

While theoretical range varies from 70m (dense indoor) to 700m (open field) depending on environment, the realistic maximum considering signal degradation, interference, and battery mode limitations is approximately 300m as specified in BitChat documentation.

## Guarantee of Connectivity and Continuity

---

By this point, you might be wondering: how can the connectivity and continuity of Bitchat guaranteed?

The connectivity and continuity of Bitchat increase proportionally with the number of active users. This is similar to how blockchain networks become more resilient as more nodes participate. The more users running Bitchat, the denser the mesh network becomes, creating multiple redundant paths for message relay and ensuring robust communication even when individual nodes disconnect.

## Usage Scenarios

---

### When Bitchat Becomes Optimal

Messengers must support seamless connectivity and continuity to be practical. When does Bitchat operate optimally? The answer lies in two key factors.

1. **User Density**: The more people use Bitchat in physical proximity, the stronger the mesh network becomes
2. **Critical Mass**: A minimum number of users (relay nodes) must be present within Bluetooth range to form effective communication paths

### Bitchat as Infrastructure

Beyond functioning as a messenger, Bitchat can serve as resilient communication infrastructure due to three key characteristics.

1. **Power Efficiency During Crisis**: The default energy-saving cycle allows message exchange even when external power sources are unavailable or disrupted, making it viable during extended emergencies
2. **Store-and-Forward Resilience**: Even without real-time paths between sender and receiver, mobile nodes cache messages and relay them upon encountering other nodes, ensuring information eventually reaches its destination despite physical isolation
3. **Resistance to Centralized Control**: Without central servers or base stations, communication cannot be blocked except through physical device confiscation, making it inherently censorship-resistant

### Ideal Use Cases

Bitchat excels in scenarios where large groups gather in concentrated areas:

- **Protests and demonstrations**: Dense crowds create robust mesh networks
- **Large events like music festivals**: Operates despite network congestion
- **Disaster zones**: Functions when traditional infrastructure fails but people cluster for aid
- **Remote areas**: Serves communities without reliable internet access

<br/>

> **The Key Insight**<br/> Bitchat's effectiveness scales with user concentration, not just total user count
{: .prompt-tip }


## Real-World Adoption

---

Bitchat has seen significant uptake in situations where traditional communication infrastructure was unavailable or deliberately disrupted:

### Protests and Civil Resistance

- **Nepal (September 2025)**: [48,781 downloads on September 8](https://beincrypto.com/nepal-bitchat-downloads-protests-2025/) during youth-led protests after government banned 26 social media platforms, resulting in [19 deaths and PM resignation](https://gulfnews.com/world/asia/from-discord-to-bitchat-how-online-outrage-shook-nepals-government-1.500266741).
- **Madagascar (September 2025)**: Downloads surged during protests over power and water cuts, with [Google Trends showing searches spiking from 0 to 100](https://cointelegraph.com/news/bitchat-downloads-madagascar-protests-surge) in Antananarivo. While [specific download numbers were not disclosed](https://cointelegraph.com/news/bitchat-downloads-madagascar-protests-surge), the global app saw 71,000 downloads that week, with Madagascar being a major contributor.

### Internet Blackouts

- **Uganda (January 2026)**: [Over 400,000 total downloads](https://crypto.news/bitchat-downloads-spike-in-uganda-as-voters-prepare-for-offline-elections/) (developer data) as government imposed internet shutdown for presidential elections, with [28,000+ downloads in January 2026 alone](https://www.al-monitor.com/originals/2026/01/ugandans-iranians-turn-dorseys-messaging-app-bitchat-web-crackdowns) (Apptopia) making it #1 on app stores.
- **Iran (January 2026)**: [Usage jumped more than 3x](https://www.al-monitor.com/originals/2026/01/ugandans-iranians-turn-dorseys-messaging-app-bitchat-web-crackdowns) (Apptopia) during nationwide internet blackout amid protests.

These cases demonstrate a pattern: when centralized communication infrastructure becomes a point of control or failure, decentralized alternatives like Bitchat provide a resilient backup channel that authorities cannot easily disable without physically confiscating every device.

## Regression or Paradoxical Evolution?

---

Bitchat's underlying mechanisms are not fundamentally new. In some ways, it represents a **return to the past.**

- **Return**: Like wireless telegraphy before the internet era or early peer-to-peer systems, it uses direct node-to-node communication without central control

However, this cannot be dismissed as merely reusing old technology. It represents a ‘**spiral evolution’** - combining foundational communication principles with modern algorithms.

- **Evolution**: Integrates cutting-edge 2026 BLE technology, robust encryption protocols, and sophisticated algorithms like Bloom filters for deduplication

This paradoxical evolution can be seen as a practical implementation of two key principles that 6G networks aim to achieve: **resilience** and **data sovereignty**.

By combining proven decentralized architecture with modern cryptographic and networking advances, Bitchat demonstrates how "going back" can actually mean moving forward: not in a circle, but in an upward spiral of technological sophistication.

## Conclusion: Paradox of Communication Infrastructure

---

The irony is clear: **the pursuit of convenience led to centralization, centralization enabled control, and the reaction to control is driving us back toward decentralized systems**, completing a full circle at a higher level of technological sophistication.

### The Centralization Paradox

For decades, communication infrastructure evolved toward centralization to guarantee seamless connectivity, continuity, and convenience. Cellular towers, data centers, and ISPs created reliable, high-performance networks. But this very centralization created a vulnerability: a single point of control that could be exploited for surveillance, censorship, or disruption.

### The Decentralization Response

When centralized infrastructure becomes a tool of control, whether through government-imposed blackouts, corporate surveillance, or infrastructure failures, people instinctively seek alternatives that cannot be easily shut down. Bitchat and similar technologies represent this counter-movement: trading some convenience for freedom and resilience.

### Beyond Politics - Infrastructure Resilience

This trend isn't solely about freedom from control. It's also about building communication systems robust enough to survive external shocks: natural disasters, cyberattacks, or infrastructure failures. Decentralized mesh networks provide redundancy that centralized systems cannot match.

### The Future Trajectory

This shift toward infrastructure that goes "beyond traditional terrestrial networks," whether through satellite constellations like Starlink or mesh networks like Bitchat, is not a temporary reaction but an emerging mainstream trend. As both governments and natural events demonstrate the fragility of centralized systems, decentralized alternatives will transition from emergency backup solutions to primary communication channels.