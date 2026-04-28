---
title: "Beyond Centralized Networks: The New Frontier, Starlink (Satellite vs. Terrestrial)"
description: How Starlink reshapes communication infrastructure, and why resilience does not always mean decentralization.
author: mye280c37
categories: [Communication Network]
tags: [Starlink, SpaceX, Decentralized Networks, Communication Infrastructure, Satellite Networks, LEO, Direct-to-Cell, D2C, Spectrum, NTN]
math: false
---

## From Gap-Filler to Lifeline

---

Starlink is increasingly framed as a system that redefines connectivity beyond terrestrial limits.

It reads like marketing copy. But the data behind it is harder to dismiss. As of February 2026, Starlink has surpassed 10 million subscribers across more than 150 countries [1]. In addition, its constellation accounts for roughly 65% of all operational satellites currently in orbit [2], and it has become a critical layer for rural connectivity, crisis communication, military logistics, and in regions where terrestrial broadband infrastructure has never been economically viable. Musk framed Starlink's original mandate as filling that gap.

### The Problem Musk Wanted to Solve

Musk repeatedly framed the problem in simple terms: fiber and cell towers reach most people, but not all of them. He argued that extending terrestrial infrastructure to the remaining gaps was so expensive that no commercial operator would do it voluntarily [3]. At MWC 2021, Musk described Starlink's initial mandate as filling in the gaps between fiber and 5G, offering connectivity to the most difficult-to-reach 3–5% of the population in sparsely populated regions [4].

SpaceX’s architectural choice followed a straightforward tradeoff. Unlike conventional services that rely on underground cables, fiber-optic networks, or cell towers, Starlink delivers internet through satellites in low Earth orbit (LEO). Its satellites orbit much closer to the planet than traditional communication satellites, which reduced latency enough to make satellite broadband viable for many interactive applications [3]. By targeting LEO rather than geostationary orbit, SpaceX could design simpler and lighter satellites. And with Falcon already in place, launch costs could be reduced dramatically [5].

### Resilience by Design

Much of this resilience comes from its reduced dependence on terrestrial infrastructure. With over 7,800 satellites in orbit, Starlink users typically have multiple satellites in view, along with distributed gateway sites and points-of-presence. This scale enabled Starlink to reduce its dependence on any single terrestrial path and, by early 2024, the company reported median latencies stabilizing between 25 ms and 60 ms [6]. Moreover, the introduction of the V2 Mini satellites, which offered four times the capacity of their predecessors, reinforced the broader perception that satellite broadband was beginning to compete seriously with terrestrial access in both speed and responsiveness [7]. This also gave users a path to connectivity even when terrestrial broadband was disrupted by fiber cuts, subsea cable damage, or power outages that could leave millions offline for days [8].

![resilience_arch](../assets/img/posts/2026-04-28-communication-network-05/resilience_arch.png){: width="99%"}_Two layers of resilience during a terrestrial network blackout. Bitchat handles local communication within the isolated area through Bluetooth mesh, while Starlink provides the outward link to the global internet, bypassing the disrupted ground infrastructure._

This same property proved critical in Iran. When the government shut down terrestrial networks during the January 2026 protests, Bitchat usage jumped more than three times as Iranians sought offline alternatives to coordinate locally [9]. At the same time, activists reported that many of the images and videos of protests that emerged since the blackout came via Starlink, with one human rights researcher describing it as "extremely important because the alternative would have been no information” [10, 11]. The two operated as complementary layers of resilience: Bitchat handled communication within affected areas, and Starlink handled the connection to the outside world.

## Starlink's Endgame: From Fallback to Primary Network

---

As the Iran case shows, Starlink works well as a resilience tool beyond its initial mandate. But now, Starlink is moving beyond resilience itself. The company’s recent moves suggest a clear pivot from being a resilient fallback network to becoming a primary mobile infrastructure provider in its own right.

![v2-v3-comparison](../assets/img/posts/2026-04-28-communication-network-05/v2-v3_comparison.png){: width="99%"}_V2 Mini relies on a high-gain dish to receive a wide, diffuse beam. V3 shifts that burden to the satellite itself, concentrating a narrower beam onto a small ground area where unmodified smartphones can connect directly._

V2 Mini relies on a high-gain dish to receive a wide, diffuse beam. V3 shifts that burden to the satellite itself, concentrating a narrower beam onto a small ground area where unmodified smartphones can connect directly.

The technical roadmap makes this pivot concrete. The network is evolving beyond the dish-based model that defined the V2 Mini era—where a specialized, high-gain antenna was a mandatory gateway—to a Direct-to-Cell (D2C) paradigm. In this new stage, the satellite effectively becomes a "cell tower in space," communicating directly with the LTE and 5G modems inside standard smartphones without requiring any specialized hardware on the ground. SpaceX presents V3 Direct-to-Cell as the step toward full 5G-like cellular connectivity from space, where satellites function as “cell towers in space” for existing smartphones [14]. SpaceX's FCC filing from September 2025 requests authorization for up to 15,000 additional LEO satellites dedicated to DTC operations, targeting orbital altitudes of 326–335 km for sub-50ms latency, with a full build-out timeline extending to 2030 [15]. Elon Musk has signaled that the mass deployment of these V3 satellites is targeted for the fourth quarter of 2026, a move that will provide the necessary density and capacity to support high-speed mobile data on a global scale [16].

Hardware alone isn't enough. To operate as a true mobile network, SpaceX also needs the spectrum that lets satellites talk directly to phones. In September 2025, SpaceX agreed to acquire EchoStar's AWS-4 and H-block spectrum licenses in a $17 billion transaction, with the stated purpose of developing and deploying its Direct-to-Cell constellation for broadband-speed internet access to mobile phones across the world [12]. Two months later, SpaceX expanded the deal by purchasing an additional $2.6 billion worth of EchoStar's AWS-3 spectrum licenses [13]. Spectrum is the foundational resource that determines who gets to operate a mobile network. The total came to nearly $20 billion. Taken together, these acquisitions read as groundwork for something more independent: securing the spectrum needed to operate a mobile network without relying on existing terrestrial carriers. SpaceX is no longer just a space company; it has become a Global Spectrum Landlord. By owning both the 'delivery truck' (Rockets) and the 'toll road' (Spectrum) for its Starlink service, SpaceX is effectively bypassing the traditional gatekeepers of the telecom industry.

Now, the direction is clear enough: Starlink is no longer positioning itself as a fallback. It is positioning itself as infrastructure.

## The Cracks in the Constellation

---

The architecture is impressive. The growth numbers are real. But the closer you look at how the network actually performs, and at what kind of global network the spectrum deals are really buying, the more the marketing language starts to wear thin. Three hurdles stand out, and none of them get solved by launching more satellites.

### 1️⃣ The Latency Gap and Jitter

The first crack appears in the delta between official performance claims and real-world measurements.

Measurements using the RIPE Atlas platform [17] found that Starlink’s real-world performance often contradicts the “sub-100 ms” narrative. Specifically, measurements of TLS handshake latency showed that approximately half of all observed values exceeded 100ms, a direct contrast to previous studies claiming near-universal sub-100ms performance. Furthermore, the data exhibits a bimodal distribution, with latencies frequently clustering around 80–100 ms and again around 150–250 ms. **This variability** is driven by factors such as gateway density, orbital dynamics, weather conditions, and even service tier differences. For the end-user, this translates to an inconsistent experience where "broadband-like" responsiveness can vanish without warning.

Additionally, the 2026 large-scale IPv6 measurement study highlighted a persistent **periodic jitter occurring every 15 seconds** [18]. This periodic jitter is a direct result of a ground terminal being reassigned from one fast-moving satellite to the next—a handover process that remains far from seamless.

This technical friction becomes even more pronounced in the **Direct-to-Cell (D2C)** domain. The **April 2026 Ookla report** confirms that D2C is currently far from "5G-like," with successful text message exchanges requiring an **average of 1 minute and 17 seconds** and a success rate of only **60%** [19]. While SpaceX argues that the **massive deployment of V3 satellites** in late 2026 will bridge this gap, the fundamental challenge remains: V3 must not just add capacity, but actually solve the underlying stability issues that create these latency peaks and jitter spikes.

### 2️⃣ The Link Budget Barrier

The first crack came from measurements, comparing what the network actually delivers against what it promises. The second comes from physics. Starlink looks ready to deliver better connectivity with V3, but making D2C work requires solving a physics problem that is, in some ways, harder than the one the dish already solved.

The biggest factor undermining D2C reliability is its dependence on smartphones, devices with omnidirectional antennas and strict transmit power limits [20]. Standard mobile phones lack the antenna gain needed for reliable broadband communication with LEO satellites. This is why services like Starlink have so far relied on an extra ground device, a high-gain phased array antenna providing over 30 dBi of gain, to receive satellite signals and pass them to user devices [21]. 3GPP TR 38.821 makes the same point from the standardization side, acknowledging the physical limits of uplink transmission under smartphone battery constraints [22].

Beyond the device, satellite communication is also vulnerable to obstructions that terrestrial networks largely tolerate. Vegetation alone can cause attenuation ranging from tens of times to orders of magnitude in power loss [23], and in practice, weather and terrain compound the effect. A recent measurement study found that in forested environments, Starlink experienced up to 50% connection failures, compared to 10 to 30% on terrestrial networks [24]. The gap is even more striking in dense urban NLoS environments, where Starlink showed 12 to 17% failure rates while terrestrial networks remained near zero.

To overcome these physical limits and enable communication with unmodified smartphones, the satellite side must provide extremely high antenna gain [25]. This is exactly what Starlink is planning. V3 satellites are expected to feature significantly larger antennas (around 25 to 30 m²) and higher beam density, optimizing the power flux density delivered to ground devices [26]. The V3 constellation is also moving toward a "massive multi-beam" approach, where a single satellite generates many narrow spot beams simultaneously, each concentrating signal onto a small ground area. Large-scale antenna arrays in satellite communications aim to increase system capacity by serving multiple users at the same time and enhancing spatial multiplexing [27], thereby addressing the link budget deficit for individual users.

### 3️⃣ The Sovereignty Puzzle

Starlink markets itself as a network without borders. But spectrum, the most fundamental ingredient of any mobile service, is exactly where borders begin.

The recent FCC report (DA 26-36)  makes this concrete. SpaceX requested authorization to operate MSS in the 1429–2690 MHz range outside the United States, covering its newly acquired AWS-4, H-block, and AWS-3 holdings from EchoStar. The request was deferred [26]. Industry analysis suggests SpaceX was trying to align its US holdings with the global mobile satellite S-band, but the S-band in Europe is already licensed to Viasat and EchoStar through 2027, the relevant 3GPP band (n256) is not yet supported in commercial smartphones, and every other jurisdiction requires a separate licensing process [28].

This is why Starlink's D2C service in the US still runs through a partnership with T-Mobile, using T-Mobile's PCS spectrum [29]. The EchoStar acquisition gives SpaceX a path toward operating as its own mobile infrastructure provider inside the US, transforming it from a D2C partner into an owner that controls its dedicated MSS spectrum [30]. But this transformation stops at the US border. Outside the US, the only viable model is the same one SpaceX just spent twenty billion dollars trying to leave behind: a revenue-sharing partnership with whichever local carrier holds the spectrum.

The architecture is global, but the business model has to be rebuilt one country at a time.

## Beyond the Cracks: Toward Decentralized Networks

---

Looking at the three hurdles above, an independent mobile service from Starlink might feel like a distant future. But the technical gap is closing faster than anyone expected. Resilience has already won real users. SpaceX's launch capacity keeps scaling. And Starlink keeps releasing new pieces of its mobile network on top of that infrastructure. Closing the technical gap is a problem inside Musk's companies, and they have a track record of solving those problems.

What remains is the Sovereignty Puzzle. This is the most important and the most sensitive constraint. If it gets resolved, if SpaceX secures the spectrum it needs and aligns global S-band rights to deliver mobile service regardless of country, what we get looks like a borderless, decentralized mobile service.

### Decentralized in Name Only

But this is also another kind of dependency. Look at every component of this so-called decentralized service. The rockets. The satellites. The spectrum. The cellular link. The on/off switch. All of it belongs to one owner. **This is not decentralization. It is centralization with a different address.**

Satellite communication does solve a real problem. When one government decides to pull the plug, as Iran did earlier this year, millions lose access overnight. This is exactly the kind of failure that Starlink mitigates today. **But mitigating that failure through a single private operator simply moves the risk from one place to another.** A world where Starlink is the only satellite communication system that matters is a different problem, not a solution to the original one.

### What Real Decentralization Looks Like

This is why 3GPP and the wider mobile industry are taking a different approach. Instead of replacing terrestrial networks with one orbital provider, they are working toward multi-RAT systems that combine cellular, Wi-Fi, satellite, mesh, and whatever access technology best fits the situation. No single layer owns the connection. No single company controls the switch.

That is the question for the next post: how the 3GPP ecosystem is building toward a different kind of decentralization, one that does not put everything in one place. The post after that asks an even harder question: Does network infrastructure need to be owned by anyone at all?

## References

---

1. Starlink (@Starlink), X post. [https://x.com/Starlink/status/2022446814591615013](https://x.com/Starlink/status/2022446814591615013)
2. ElectroIQ, "Starlink Statistics." [https://electroiq.com/stats/starlink-statistics/](https://electroiq.com/stats/starlink-statistics/)
3. The Catalyst News, "What You Need to Know About Elon Musk's Starlink Satellite" (2026). [https://thecatalystnews.com/2026/01/23/what-you-need-to-know-about-elon-musks-starlink-satellite/](https://thecatalystnews.com/2026/01/23/what-you-need-to-know-about-elon-musks-starlink-satellite/)
4. CircleID, "Elon Musk on SpaceX, Starlink, His Motivation, Philosophy" (2021). [https://circleid.com/posts/20210702-elon-musk-on-spacex-starlink-his-motivation-philosophy](https://circleid.com/posts/20210702-elon-musk-on-spacex-starlink-his-motivation-philosophy)
5. Max Polyakov, "Starlink Success Story (Part 2)." [https://maxpolyakov.com/starlink-success-story-part-2/](https://maxpolyakov.com/starlink-success-story-part-2/)
6. CircleID, "Starlink Has Begun Delivering Promised Latency Cuts" (2024). [https://circleid.com/posts/20240311-starlink-has-begun-delivering-promised-latency-cuts](https://circleid.com/posts/20240311-starlink-has-begun-delivering-promised-latency-cuts)
7. Spaceflight Now, "SpaceX Unveils First Batch of Larger Upgraded Starlink Satellites" (2023). [https://spaceflightnow.com/2023/02/26/spacex-unveils-first-batch-of-larger-upgraded-starlink-satellites/](https://spaceflightnow.com/2023/02/26/spacex-unveils-first-batch-of-larger-upgraded-starlink-satellites/)
8. IEEE ComSoc Technology Blog, "Starlink Doubles Subscriber Base, Expands to 42 New Countries, Territories, Other Markets" (2025). [https://techblog.comsoc.org/2025/12/30/starlink-doubles-subscriber-base-expands-to-to-42-new-countries-territories-other-markets/](https://techblog.comsoc.org/2025/12/30/starlink-doubles-subscriber-base-expands-to-to-42-new-countries-territories-other-markets/)
9. Al-Monitor, "Ugandans, Iranians Turn to Dorsey's Messaging App Bitchat Amid Web Crackdowns" (2026). [https://www.al-monitor.com/originals/2026/01/ugandans-iranians-turn-dorseys-messaging-app-bitchat-web-crackdowns](https://www.al-monitor.com/originals/2026/01/ugandans-iranians-turn-dorseys-messaging-app-bitchat-web-crackdowns)
10. Al Jazeera, "Is Starlink Helping Iranians Break Internet Blackout, and How Does It Work?" (2026). [https://www.aljazeera.com/news/2026/1/14/is-starlink-helping-iranians-break-internet-blackout-and-how-does-it-work](https://www.aljazeera.com/news/2026/1/14/is-starlink-helping-iranians-break-internet-blackout-and-how-does-it-work)
11. NPR, "Iran Internet Blackout and Starlink" (2026). [https://www.npr.org/2026/01/15/nx-s1-5678567/iran-internet-blackout-starlink](https://www.npr.org/2026/01/15/nx-s1-5678567/iran-internet-blackout-starlink)
12. TechCrunch, "SpaceX Strikes $17B Deal to Buy EchoStar's Spectrum for Starlink's Direct-to-Phone Service" (2025). [https://techcrunch.com/2025/09/08/spacex-strikes-17b-deal-to-buy-echostars-spectrum-for-starlinks-direct-to-phone-service/](https://techcrunch.com/2025/09/08/spacex-strikes-17b-deal-to-buy-echostars-spectrum-for-starlinks-direct-to-phone-service/)
13. TechCrunch, "SpaceX's Starlink Secures More Spectrum and Airlines as It Passes 8 Million Customers" (2025). [https://techcrunch.com/2025/11/06/spacexs-starlink-secures-more-spectrum-and-airlines-as-it-passes-8-million-customers/](https://techcrunch.com/2025/11/06/spacexs-starlink-secures-more-spectrum-and-airlines-as-it-passes-8-million-customers/)
14. DishyTech, "Starlink Just Had a Massive 2025 and 2026 Could Be Even Bigger." [https://www.dishytech.com/starlink-just-had-a-massive-2025-and-2026-could-be-even-bigger/](https://www.dishytech.com/starlink-just-had-a-massive-2025-and-2026-could-be-even-bigger/)
15. NextBigFuture, "SpaceX 15,000 V3 Starlink Direct-to-Cellphone Satellites" (2025). [https://www.nextbigfuture.com/2025/09/spacex-15000-v3-starlink-direct-to-cellphone-satellites.html](https://www.nextbigfuture.com/2025/09/spacex-15000-v3-starlink-direct-to-cellphone-satellites.html)
16. PCMag UK, "Elon Musk Eyes Mass Deployment of V3 Starlink Satellites in Q4 2026." [https://uk.pcmag.com/networking/161985/elon-musk-eyes-mass-deployment-of-v3-starlink-satellites-in-q4-2026](https://uk.pcmag.com/networking/161985/elon-musk-eyes-mass-deployment-of-v3-starlink-satellites-in-q4-2026)
17. Richter et al., "Starlink Networking Measurements" (2025). [https://vaibhavbajpai.com/documents/papers/proceedings/starlink-networking-2025.pdf](https://vaibhavbajpai.com/documents/papers/proceedings/starlink-networking-2025.pdf)
18. Wang et al., "Large-Scale IPv6 Measurement Study of Starlink," arXiv 2412.18243. [https://arxiv.org/pdf/2412.18243v3](https://arxiv.org/pdf/2412.18243v3)
19. Ookla, "Measuring the Direct-to-Device (D2D) Marketplace" (2026). [https://www.ookla.com/articles/measuring-the-direct-to-device-d2d-marketplace-2026](https://www.ookla.com/articles/measuring-the-direct-to-device-d2d-marketplace-2026)
20. Shrestha et al., "Elevation-Aware Supplementary Uplink for Direct Satellite-to-Device Communications," arXiv 2602.19427 (2026). [https://arxiv.org/pdf/2602.19427](https://arxiv.org/pdf/2602.19427)
21. IEEE Vehicular Technology, "Enhancement of Satellite-to-Phone Link Budget" (2023/2024). [https://ieeexplore.ieee.org/document/10286242](https://ieeexplore.ieee.org/document/10286242)
22. 3GPP TR 38.821, "Solutions for NR to Support Non-Terrestrial Networks." [https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=3525](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=3525)
23. ITU-R P.833-7, "Attenuation in Vegetation." [https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.833-7-201202-S!!PDF-E.pdf](https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.833-7-201202-S!!PDF-E.pdf)
24. Ramírez-Arroyo et al., "Measurement-Driven Assessment of Starlink and OneWeb NTN," arXiv 2512.19639 (2025/2026). [https://arxiv.org/pdf/2512.19639](https://arxiv.org/pdf/2512.19639)
25. Ullah et al., "3GPP RedCap Non-Terrestrial Networks: Direct-to-Device Feasibility Study," TechRxiv (2026). [https://www.techrxiv.org/doi/full/10.36227/techrxiv.176162144.46703708/v1](https://www.techrxiv.org/doi/full/10.36227/techrxiv.176162144.46703708/v1)
26. FCC DA 26-36, "SpaceX Gen2/V3 Modification Order" (2026). [https://docs.fcc.gov/public/attachments/DA-26-36A1.pdf](https://docs.fcc.gov/public/attachments/DA-26-36A1.pdf)
27. Liu et al., "Enhancing System Capacity Through Joint Space-Ground Multi-Beam Coordination for LEO Satellite Systems," Wiley Engineering Reports (2025). [https://onlinelibrary.wiley.com/doi/full/10.1002/eng2.13052](https://onlinelibrary.wiley.com/doi/full/10.1002/eng2.13052)
28. Aetha Consulting, "What Starlink's Latest Purchase of AWS-3 Spectrum Tells Us About Its D2D Plans" (2025). [https://www.aethaconsulting.com/what-starlinks-latest-purchase-of-aws-3-spectrum-tells-us-about-its-d2d-plans/](https://www.aethaconsulting.com/what-starlinks-latest-purchase-of-aws-3-spectrum-tells-us-about-its-d2d-plans/)
29. Garcia-Cabeza et al., "Direct-to-Cell: A First Look into Starlink's Direct Satellite-to-Device Radio Access Network through Crowdsourced Measurements," arXiv 2506.00283 (2025). [https://arxiv.org/pdf/2506.00283](https://arxiv.org/pdf/2506.00283)
30. IEEE ComSoc Technology Blog, "Huge Significance of EchoStar's AWS-4 Spectrum Sale to SpaceX" (2025). [https://techblog.comsoc.org/2025/09/08/huge-significance-of-echostars-aws-4-spectrum-sale-to-spacex/](https://techblog.comsoc.org/2025/09/08/huge-significance-of-echostars-aws-4-spectrum-sale-to-spacex/)