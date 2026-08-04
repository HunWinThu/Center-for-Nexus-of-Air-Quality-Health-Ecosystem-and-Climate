// Complete shared news data for both News.tsx and Index.tsx
// Import all required images from main assets (for homepage)
import image1 from '@/assets/image1.jpeg';
import image2 from '@/assets/image2.png';
import image9 from '@/assets/image9.jpeg';
import image11 from '@/assets/image11.jpeg';
import image12 from '@/assets/image12.jpeg';

// --- Event images (e1–e10) ---
import e1  from '@/assets/Event/e1.png';
import e2  from '@/assets/Event/e2.png';
import e3  from '@/assets/Event/e3.png';
import e4  from '@/assets/Event/e4.png';
import e5  from '@/assets/Event/e5.png';
import e6  from '@/assets/Event/e6.png';
import e7  from '@/assets/Event/e7.png';
import e8  from '@/assets/Event/e8.png';
import e9  from '@/assets/Event/e9.png';
import e10 from '@/assets/Event/e10.png';
import e101 from '@/assets/Event/e101.png';

// --- Media/meeting images (m1–m25; note: no m21 in folder) ---
import m1  from '@/assets/Event/m1.png';
import m2  from '@/assets/Event/m2.png';
import m3  from '@/assets/Event/m3.png';
import m4  from '@/assets/Event/m4.png';
import m5  from '@/assets/Event/m5.png';
import m6  from '@/assets/Event/m6.png';
import m7  from '@/assets/Event/m7.png';
import m8  from '@/assets/Event/m8.png';
import m9  from '@/assets/Event/m9.png';
import m10 from '@/assets/Event/m10.png';
import m11 from '@/assets/Event/m11.png';
import m12 from '@/assets/Event/m12.png';
import m13 from '@/assets/Event/m13.png';
import m14 from '@/assets/Event/m14.png';
import m15 from '@/assets/Event/m15.png';
import m16 from '@/assets/Event/m16.png';
import m17 from '@/assets/Event/m17.png';
import m18 from '@/assets/Event/m18.png';
import m19 from '@/assets/Event/m19.png';
import m20 from '@/assets/Event/m20.png';
// m21 missing
import m22 from '@/assets/Event/m22.png';
import m23 from '@/assets/Event/m23.png';
import m24 from '@/assets/Event/m24.png';
import m25 from '@/assets/Event/m25.png';
import m30 from '@/assets/Event/m30.png';
import m31 from '@/assets/Event/m31.jpg';
import m32 from '@/assets/Event/m32.jpg';
import m33 from '@/assets/Event/m33.jpg';
import m34 from '@/assets/Event/m34.jpg';
import m35 from '@/assets/Event/m35.jpg';
import m36 from '@/assets/Event/m36.jpg';
import m37 from '@/assets/Event/m37.jpg';
import m38 from '@/assets/Event/m38.jpg';
import m39 from '@/assets/Event/m39.png';
import m40 from '@/assets/Event/m40.png';
import m41 from '@/assets/Event/m41.jpg';
import m42 from '@/assets/Event/m42.png';
import m43 from '@/assets/Event/m43.png';
import m44 from '@/assets/Event/m44.jpg';
import m45 from '@/assets/Event/m45.jpg';
import m47 from '@/assets/Event/m47.jpg';
import m48 from '@/assets/Event/m48.jpg';
import m49 from '@/assets/Event/m49.jpg';
import m52 from '@/assets/Event/m52.jpg';
import m53 from '@/assets/Event/m53.jpg';
import m54 from '@/assets/Event/m54.jpg';
import m55 from '@/assets/Event/m55.jpg';
import m56 from '@/assets/Event/m56.jpg';
import m57 from '@/assets/Event/m57.jpg';
import m58 from '@/assets/Event/m58.jpg';
import m59 from '@/assets/Event/m59.jpg';
import m60 from '@/assets/Event/m60.jpg';
import m61 from '@/assets/Event/m61.jpg';
import m62 from '@/assets/Event/m62.jpg';
import m63 from '@/assets/Event/m63.jpg';
import m64 from '@/assets/Event/m64.jpg';
import m65 from '@/assets/Event/m65.jpg';
import m66 from '@/assets/Event/m66.jpg';
import m67 from '@/assets/Event/m67.jpg';
import m68 from '@/assets/Event/m68.jpg';
import m69 from '@/assets/Event/m69.jpg';
import m70 from '@/assets/Event/m70.png';
import m71 from '@/assets/Event/m71.jpg';
import m72 from '@/assets/Event/m72.jpg';
import m73 from '@/assets/Event/m73.jpg';

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string | string[];
  link: string;
}

// All news items - Events and Media
export const allNewsItems: NewsItem[] = [
  // EVENTS
  {
  id: 27,
  title: "2026 Advanced Institute on Health Investigation and Air Sensing for Asian Pollution (AI on Hi-ASAP), Bali, Indonesia",
  excerpt: `The Air Quality Nexus Center (AirQC), AIT participated in the 2026 Advanced Institute on Health Investigation and Air Sensing for Asian Pollution (AI on Hi-ASAP), held from 20–24 July 2026 in Bali, Indonesia.<br></br>Organized by the IRDR International Centre of Excellence (ICoE–Taipei), c/o Center for Sustainability Science, Academia Sinica, the advanced institute brought together approximately 20–25 young to mid-career researchers, practitioners, and policy professionals from across the Asia-Pacific region. The program aimed to strengthen regional research capacity and foster interdisciplinary collaboration in air pollution, environmental sensing, and public health research through scientific knowledge exchange and hands-on training.<br></br>The five-day institute provided participants with lectures, technical sessions, and practical training on air pollution monitoring, low-cost sensor technologies, environmental data analysis, and health risk assessment. Discussions focused on the application of sensor technologies and scientific methodologies to support disaster risk reduction (DRR), reduce the health impacts of air pollution, and strengthen research capacity across the region.<br></br>Representing AirQC, Mr. Hun Win Thu, Research Assistant and IoT Engineer, participated in the advanced institute and delivered a presentation entitled "Evaluation of Low-Cost Sensors Performance in the Monitoring of PM₂.₅." His presentation highlighted AirQC's experience in evaluating the performance of low-cost PM₂.₅ sensors and their application in supporting reliable, cost-effective air quality monitoring for research and environmental management.<br></br>The advanced institute highlighted the importance of regional collaboration in advancing air pollution and health research while promoting the use of innovative sensing technologies for environmental monitoring. Through its participation, AirQC continues to strengthen international research collaboration, technical capacity, and knowledge exchange in support of improving air quality management and reducing health risks associated with air pollution across the Asia-Pacific region.<br></br><strong>For more information, please visit:</strong> <a href='https://www.css.sinica.edu.tw/en-US/News/AnnouncementDetail?AnnouncementId=N202606220002' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://www.css.sinica.edu.tw/en-US/News/AnnouncementDetail?AnnouncementId=N202606220002</a>`,
  category: "Event",
  date: "20–24 July 2026",
  image: [m68,m66, m67,m65,m69],
  link: "#",
},
  {
  id: 26,
  title: "3rd Webinar on Long-range Transport of Air Pollution and Capacity Building for Air Quality Modeling and Forecasting, RRC.AP",
  excerpt: `On 25 May 2026, the Air Quality Nexus Center (AirQC) participated in the 3rd Webinar on Long-range Transport of Air Pollution and Capacity Building for Air Quality Modeling and Forecasting, organized by the Regional Resource Centre for Asia and the Pacific at the Asian Institute of Technology (AIT RRC.AP) in collaboration with the South Asia Co-operative Environment Programme (SACEP). The webinar was part of the Malé Declaration Webinar Series on Air Quality Management: Science and Investment for Sustainable Development in Malé Declaration Member Countries and focused on the role of air quality modeling and forecasting in understanding long-range and transboundary transport of air pollution. The event brought together 116 participants from academia, government agencies, international organizations, NGOs, the private sector, and research institutions across South and Southeast Asia and other regions to exchange knowledge on advanced tools and methodologies for evidence-based air quality management.<br></br>In the concluding session, Prof. Nguyen Thi Kim Oanh, Distinguished Emeritus Professor at AIT and Director of the Air Quality Nexus Center (AirQC), delivered the concluding remarks, emphasizing the importance of strengthening regional capacity in air quality modeling and forecasting to support transboundary air pollution management. She highlighted that air pollution knows no borders and stressed the critical role of modeling tools in identifying emission sources, tracking pollutant transport, evaluating policy scenarios, and supporting science-based decision-making. She also underscored the growing potential of artificial intelligence, machine learning, satellite observations, and low-cost sensor networks to enhance air quality forecasting, while emphasizing the need for high-quality datasets to ensure reliable applications.`,
  category: "Event",
  date: "25 May 2026",
  image: [m72, m73],
  link: "#",
},
  {
  id: 25,
  title: "Intergovernmental Panel on Climate Change (IPCC) Task Force on National Greenhouse Gas Inventories (TFI), Third Lead Author Meeting (LAM3), Rome, Italy",
  excerpt: `From 21–24 April 2026, Prof. Nguyen Thi Kim Oanh participated, by invitation, in the Third Lead Author Meeting (LAM3) for the preparation of the 2027 IPCC Methodology Report on Inventories for Short-lived Climate Forcers, convened by the Intergovernmental Panel on Climate Change (IPCC) Task Force on National Greenhouse Gas Inventories (TFI) and hosted by the Food and Agriculture Organization of the United Nations (FAO) at its Headquarters in Rome, Italy. The meeting brought together Lead Authors and experts to advance the development of methodologies for preparing national inventories of short-lived climate forcers.<br></br><strong>`,
  category: "Event",
  date: "21–24 April 2026",
  image: [m71],
  link: "#",
},

  {
  id: 24,
  title: "2026 Symposium of the World Meteorological Organization (WMO) Global Atmosphere Watch (GAW) Programme, Geneva, Switzerland",
  excerpt: `From 13–17 April 2026, Prof. Nguyen Thi Kim Oanh (Center Director) participated, by invitation, in the 2026 Symposium of the World Meteorological Organization (WMO) Global Atmosphere Watch (GAW) Programme held at the WMO Headquarters in Geneva, Switzerland. As an invited expert in GAW Programme activities, she contributed to discussions on the Programme's scientific priorities, future work plans, capacity building, partnerships, and the development of the 2028–2032 GAW Science and Implementation Plan. During the symposium, Prof. Kim Oanh also presented a poster entitled "Biomass Open Burning in Southeast Asia: Emissions from Forest Fires and Crop Residue," which highlighted a comprehensive emission inventory for Southeast Asia, spatial and temporal emission distributions, key emission characteristics, and the implications of biomass open burning for regional air quality and atmospheric pollution management.<br></br><strong>`,
  category: "Event",
  date: "13–17 April 2026",
  image: [m70],
  link: "#",
  },

  {
    id: 23,
    title: "AirQC Contributes to Regional Workshop on PFAS and Mercury Monitoring in PM2.5",
    excerpt: `The Air Quality Nexus Center (AirQC) at the Asian Institute of Technology (AIT) participated in The First Asia-Pacific Network Regional Training Workshop on Per- and Polyfluoroalkyl Substances (PFAS) and Mercury Monitoring in PM2.5, held from 21–22 May 2026 at the Faculty of Environment, University of Science, Vietnam National University Ho Chi Minh City (VNUHCM-US), Vietnam.<br></br>Organized under the APN-funded project APN CRRP2025-08MY-To and supported by the Asia-Pacific Network for Global Change Research (APN), the workshop brought together scientists, researchers, and environmental experts from across the Asia-Pacific region, including Vietnam, Japan, the United States, Singapore, Malaysia, Indonesia, Thailand, the Philippines, Taiwan, India, Bangladesh, and Myanmar. The event aimed to strengthen regional capacity and collaboration in monitoring emerging atmospheric contaminants and advancing air quality research.<br></br>The two-day workshop provided a platform for participants to exchange scientific knowledge and discuss recent developments in PFAS and mercury research in the atmospheric environment. Technical sessions covered PM2.5 sampling and monitoring techniques, analytical methods for PFAS detection, emerging contaminant monitoring trends, and experiences in international research collaboration.<br></br>Representing AirQC, Prof. Nguyen Thi Kim Oanh, Director of the Air Quality Nexus Center; Dr. Lai Nguyen Huy, Research Specialist; and Ms. Khing Thwe Oo, Research Associate, actively participated in the workshop's technical sessions and networking activities. Prof. Nguyen Thi Kim Oanh delivered a presentation entitled "Air Quality Management: Technical Tools and ML/AI Applications in Southeast Asia," highlighting integrated air quality management frameworks, technical tools for data generation and analysis, and the potential of machine learning and artificial intelligence applications to support air quality assessment, forecasting, and policy development across Southeast Asia.<br></br>Participants also visited environmental laboratories at the Nguyen Van Cu and Dong Hoa campuses of VNUHCM-US, where they learned about laboratory facilities, air quality monitoring systems, sampling methodologies, and analytical capabilities supporting environmental research and education.<br></br>The workshop underscored the importance of regional cooperation in addressing emerging environmental issues and strengthening scientific capacity in air quality and contaminant monitoring. Through its participation, AirQC continues to contribute to international research collaboration, knowledge exchange, and capacity-building efforts aimed at improving air quality management and environmental sustainability throughout the Asia-Pacific region.<br></br><strong>For more information, please visit:</strong> <a href='https://sites.google.com/hcmus.edu.vn/apn-hg-and-pfas-southeast-asia/project-activites/remark-the-first-apn-workshop-2026' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://sites.google.com/hcmus.edu.vn/apn-hg-and-pfas-southeast-asia/project-activites/remark-the-first-apn-workshop-2026</a>`,
    category: "Event",
    date: "22 May 2026",
    image: [m56,m57,m60,m61,m62,m63,m64,m59],
    link: "#",
  },

  {
    id: 22,
    title: "AIT–IRD MoU Strengthens International Research Partnerships",
    excerpt: `The Air Quality Nexus Center (AirQC), Asian Institute of Technology (AIT), welcomed the signing of a Memorandum of Understanding (MoU) between AIT and the Institute of Research for Development (IRD), France, during the Franco-Thai Symposium on Higher Education, Research and Innovation 2026 held in Bangkok on 14 May 2026.<br></br>The MoU marks an important step in strengthening international research collaboration between AIT and French research institutions. Signed by AIT President Prof. Pai-Chi Li and representatives of IRD, the agreement establishes a framework for cooperation through joint research initiatives, academic and scientific exchanges, training and capacity development, consultancy, and knowledge-sharing activities.<br></br>The partnership will focus on interdisciplinary research areas aligned with global sustainability priorities, including climate change and environmental sustainability, smart and resilient communities, integrated food-energy-water systems, and technological innovation to address societal challenges.<br></br>For AirQC, the collaboration provides new opportunities to expand partnerships with IRD researchers and enhance research activities in air quality, climate change, environmental health, and sustainable development. The MoU is expected to facilitate future joint projects, scientific exchanges, and capacity-building initiatives that contribute to evidence-based solutions for environmental challenges in the region.<br></br>Representing AirQC at the signing ceremony were Prof. Nguyen Thi Kim Oanh, Distinguished Emeritus Professor and Director of the Air Quality Nexus Center; Dr. Lai Nguyen Huy, Research Specialist; and Ms. Khing Thwe Oo. The event brought together academic leaders, researchers, and policymakers from Thailand and France to strengthen bilateral cooperation in higher education, research, and innovation.<br></br>The AIT–IRD partnership reflects a shared commitment to advancing scientific excellence and developing innovative solutions to global sustainability challenges through international collaboration.<br></br><strong>For more information, please visit:</strong> <a href='https://ait.ac.th/2026/05/ait-expands-french-research-partnerships-through-ird-mou/' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://ait.ac.th/2026/05/ait-expands-french-research-partnerships-through-ird-mou/</a>`,
    category: "Event",
    date: "14 May 2026",
    image: [m53,m54,m55],
    link: "#",
  },
  {
    id: 21,
    title: "Launch of the Climate, Fire and Health Community of Practice (CoP) under CANBREATHE and HEAL-HAZE",
    excerpt: `On 23<sup>rd</sup> April 2026, AirQC (AIT) participated in the launch of the Climate, Fire and Health Community of Practice (CoP), held online under the CANBREATHE and HEAL-HAZE projects. The session brought together researchers, policymakers, practitioners, and community representatives from Southeast Asia and Australia to strengthen collaboration and knowledge exchange on climate change, wildfire smoke, air pollution, and public health.<br></br>The event aimed to support regional learning, capacity building, and cross-sectoral collaboration to address transboundary haze and climate-health challenges. Dr. Lai Nguyen Huy of AirQC participated as a speaker, sharing experiences on regional air quality management and wildfire smoke issues in Southeast Asia. The activity was supported by the Wellcome Trust and the e-Asia Joint Research Program (e-ASIA JRP), and was part of the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects.`,
    category: "Event",
    date: "23 April 2026",
    image: [m52],
    link: "#",
  },
  {
    id: 16,
    title: "Better Air Quality (BAQ) Conference 2026, United Nations Conference Centre (UNCC), Bangkok, Thailand",
    excerpt: `From 11<sup>th</sup> to 13<sup>th</sup> March 2026, the Air Quality Nexus Center (AirQC) team participated in the Better Air Quality (BAQ) Conference 2026, held at the United Nations Conference Centre (UNCC) in Bangkok, Thailand. Organized by Clean Air Asia and partners, the conference brought together policymakers, researchers, development agencies, and practitioners from across the Asia-Pacific region to advance solutions for air pollution and climate challenges. Throughout the conference, AirQC researchers engaged in technical sessions, contributed to knowledge exchange, and supported discussions on regional air quality management.<br></br>The BAQ 2026 Conference aimed to promote integrated and science-based approaches to address key air pollution sources, including transport, industry, energy, agriculture, and open burning, while emphasizing co-benefits for public health, climate mitigation, and sustainable development. The event also highlighted the importance of strengthened regional cooperation, policy alignment, and capacity building to tackle transboundary air pollution issues in Southeast Asia and beyond.<br></br>In the session on "Strengthening Regional Cooperation to Manage Agricultural Open Burning and Wildfires in Southeast Asia and Beyond" held on 11<sup>th</sup> March 2026, Prof. Nguyen Thi Kim Oanh, Director of AirQC, delivered a presentation titled "Regional Overview of Agricultural Open Burning, Landscape Wildfires, PM<sub>2.5</sub> &amp; BC Pollution, and Transboundary Haze in Southeast Asia." Her presentation provided a comprehensive overview of emission sources and regional pollution patterns, highlighting the contribution of open burning and wildfires to PM<sub>2.5</sub> and black carbon (BC) levels, and emphasizing the need for coordinated regional actions, data sharing, and airshed-based management strategies to effectively address transboundary haze.<br></br>For more information about the BAQ Conference 2026, please visit: <a href='https://cleanairasia.org/baq' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://cleanairasia.org/baq</a>`,
    category: "Event",
    date: "11 March 2026",
    image: [m48, m47, m49],
    link: "https://cleanairasia.org/baq",
  },
  {
    id: 1,
    title: "Turning Waste into Solutions: AIT Maps Southeast Asia's Pollution Challenge",
    excerpt: "The Air Quality Nexus Center (AirQC) is proud to contribute to AIT's work on mapping Southeast Asia's pollution challenges, highlighting the urgent need to address waste-related air pollution across the region.<br></br><strong>Exposing the hidden cost of open burning:</strong><br></br>Across Southeast Asia, nearly 15% of municipal waste is still burned in open piles. Field experiments conducted by AIT reveal that this practice releases approximately 482 nanograms of dioxins per kilogram of waste, contributing annually to an estimated 5.3 kilograms of highly toxic dioxins and 669,400 kilograms of cancer-linked chemicals across the region.<br></br>These findings provide policymakers with one of the clearest pictures to date of the serious health and environmental impacts of uncontrolled waste burning—and reinforce the need for sustainable waste management solutions.<br></br>Watch the video to learn more: <a href='https://www.eurekalert.org/multimedia/1110991' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://www.eurekalert.org/multimedia/1110991</a>",
    category: "Media",
    date: "21 January 2026",
    image: [m43],
    link: "https://www.eurekalert.org/multimedia/1110991",
  },
  {
    id: 2,
    title: "International Conference on 'Current Trends in Natural Product Research', Banaras Hindu University (BHU), Varanasi, India",
    excerpt: "On 10<sup>th</sup> December 2025, the Air Quality Nexus Center (AirQC) participated in the International Conference on \"Current Trends in Natural Product Research\", an international forum that brought together students, researchers, professionals, and industry representatives to exchange knowledge on recent scientific advances and emerging research directions in natural product research.<br></br>The conference aimed to accelerate research and knowledge sharing through high-quality keynote lectures, engaging panel discussions, and oral and poster presentations. The program fostered interdisciplinary dialogue and strengthened understanding of diverse concepts, methodologies, and applications related to natural products, while promoting collaboration between academia, research institutions, and industry.<br></br>During the conference, Nguyen Thi Kim Oanh, Director of AirQC, delivered a presentation titled \"Renewable Energy Transition: Multiple Benefits for Air Quality, Health, Ecosystems, and Climate.\" Her presentation highlighted the co-benefits of transitioning to renewable energy systems, emphasizing evidence-based pathways to simultaneously reduce air pollution, improve public health, protect ecosystems, and mitigate climate change, in line with AirQC's integrated nexus approach.",
    category: "Event",
    date: "10 December 2025",
    image: [m41],
    link: "#",
  },
  {
    id: 3,
    title: "Clean Air Week 2025, Sukosol Hotel, Bangkok",
    excerpt: "Clean Air Week 2025 was convened from 24<sup>th</sup> to 28<sup>th</sup> November 2025 at The Sukosol Hotel, Bangkok, Thailand, organized by the United Nations Environment Programme (UNEP) in collaboration with key partners including the United Nations Economic and Social Commission for Asia and the Pacific (UNESCAP), the World Health Organization (WHO), the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ), and the Clean Air Fund. The conference brought together policymakers, researchers, international organizations, and regional stakeholders from across the Asia-Pacific region, with both in-person and online participation, to advance dialogue and coordinated action on air quality and climate challenges.<br></br>The conference aimed to promote regional cooperation in addressing persistent air pollution challenges, particularly fine particulate matter (PM<sub>2.5</sub>), which remains at unhealthy levels in many Asian cities. Discussions highlighted the multiple benefits of improving air quality—not only for public health, but also for climate mitigation and sustainable development. Key thematic areas included emissions from fossil fuel combustion, transport, industry, brick kilns, agriculture, domestic fuel use, and open waste burning. The event also reaffirmed commitments under UNEA-6 Resolution 6/10 on Promoting Regional Cooperation on Air Pollution, emphasizing shared responsibility and scalable solutions for cleaner air across the region.<br></br>The Air Quality Nexus Center (AirQC) team participated actively throughout the week, contributing to technical discussions, sharing recent research findings, and supporting key sessions. In Section 2: Regional Solutions to Address Open Burning of Agricultural Crop Residues, Prof. Nguyen Thi Kim Oanh, Director of AirQC, delivered a presentation titled \"Crop Residue Open Burning vs. Other Landscape Fires in Southeast Asia: Emissions and Effects.\" Her presentation addressed major emission sources, compared the impacts of different landscape fire types, and underscored the urgent need for coordinated, airshed-based mitigation strategies to address transboundary air pollution in Southeast Asia.<br></br>For more information about Clean Air Week 2025, please visit: <a href='https://www.unep.org/events/unep-event/clean-air-week' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://www.unep.org/events/unep-event/clean-air-week</a>",
    category: "Event",
    date: "24 November 2025",
    image: [m36,m37,m38, m45],
    link: "https://www.unep.org/events/unep-event/clean-air-week",
  },
  {
    id: 4,
    title: "Participation in the 6<sup>th</sup> Asian Air Pollution and Climate Change Workshop (AAPC), Tsukuba, Japan",
    excerpt: "From 20<sup>th</sup> to 22<sup>nd</sup> November 2025, the Air Quality Nexus Center (AirQC) team participated in the 6<sup>th</sup> Asian Air Pollution and Climate Change Workshop (AAPC) held in Tsukuba, Japan. The workshop was organized as a scientific forum for researchers and experts concerned with the impacts of air pollution and climate change on ecosystems, particularly vegetation, and emphasized in-depth discussion and knowledge exchange. The event brought together 36 participants from eight countries across Asia and Europe, providing a platform for regional and international collaboration.<br></br>The workshop aimed to advance scientific understanding of the interactions between air pollution, climate change, and ecosystem responses, while fostering long-term research collaboration across national boundaries. Consistent with the AAPC tradition, the program emphasized interactive discussion over formal presentations, enabling participants to exchange insights on emission sources, mitigation strategies, and ecosystem impacts in diverse regional contexts.<br></br>Prof. Nguyen Thi Kim Oanh, Director of AirQC, delivered a keynote presentation titled \"Multiple Benefits of Emission Reduction from Thermal Power Plants in Southeast Asia.\" Her presentation highlighted the co-benefits of emission mitigation for improving air quality, reducing climate impacts, and protecting ecosystems. In addition, Dr. Lai Nguyen Huy, Manager of AirQC presented a poster entitled \"Assessment of Biomass Open Burning Emissions in Southeast Asia,\" sharing recent research findings on emission sources and regional implications. The AirQC team actively engaged in discussions throughout the workshop, strengthening research exchanges and fostering new collaborations with regional and international partners.<br></br>More information about the workshop is available at: <a href='https://sites.google.com/go.tuat.ac.jp/aapctsukuba/home' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://sites.google.com/go.tuat.ac.jp/aapctsukuba/home</a>",
    category: "Event",
    date: "20 November 2025",
    image: [  m31, m44, m33, m34, m32],
    link: "https://sites.google.com/go.tuat.ac.jp/aapctsukuba/home",
  },
  {
    id: 5,
    title: "Visit to the Ministry of the Environment of Japan (MoEJ), Tokyo, Japan",
    excerpt: "On 18<sup>th</sup> November 2025, Prof. Nguyen Thi Kim Oanh and Dr. Lai Nguyen Huy of the AirQC Team conducted an official visit to the Ministry of the Environment of Japan (MoEJ) in Tokyo. The meeting was part of AirQC's ongoing engagement with regional partners to strengthen cooperation on air quality management, science-based policymaking, and joint research initiatives.<br></br>The visit aimed to review progress under existing collaborations and explore new opportunities for joint activities. Discussions focused on enhancing regional air quality monitoring capacity, advancing emissions inventory development, supporting transboundary air pollution research, and expanding cooperation under emerging projects related to air-health resilience and climate co-benefits.<br></br>During the meeting, Prof. Kim Oanh and Dr. Huy shared updates on AirQC's current research programs and highlighted areas where scientific collaboration between AIT and MoEJ can create meaningful regional impact. Both sides expressed strong interest in advancing collaborative research, capacity-building efforts, and policy-oriented initiatives to support cleaner air and healthier communities across Asia.",
    category: "Event",
    date: "18 November 2025",
    image: [m35],
    link: "#",
  },
  {
    id: 6,
    title: "Healthy Environment and Lives (HEAL) 2025 Conference",
    excerpt: "From 3<sup>rd</sup> to 6<sup>th</sup> November 2025, the Air Quality Nexus Center (AirQC) participated in the Healthy Environment and Lives (HEAL) 2025 Conference, a four-day hybrid event focused on the urgent health, climate, and environmental challenges facing Australia, the Asia-Pacific region, and the world.<br></br>The conference theme, \"Weaving Diverse Knowledges into Climate Action for Better Health,\" brought together international experts, policymakers, researchers, and community leaders across multiple hubs and virtual platforms. The event aimed to highlight scientific evidence, community-led initiatives, and integrated policy approaches to address climate-related health impacts.<br></br>On 3<sup>rd</sup> November 2025, Prof. Nguyen Thi Kim Oanh, Director of AirQC, served as a panelist in the session \"Scientific Evidence and Policy on Wildfire Smoke–Related Health Impacts.\" She shared insights on the health risks of wildfire smoke, the need for evidence-based policy frameworks, and the importance of regional collaboration to reduce exposure and strengthen public health resilience.<br></br>The full conference program and details are available here: <a href='https://vepimg.b8cdn.com/uploads/vjfnew/19538/uploads/vjf/content/misc/1762201689HEAL_2025_Conference_Program.pdf' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL 2025 Conference Program</a>",
    category: "Event",
    date: "3 November 2025",
    image: [m42],
    link: "https://vepimg.b8cdn.com/uploads/vjfnew/19538/uploads/vjf/content/misc/1762201689HEAL_2025_Conference_Program.pdf",
  },
  {
    id: 7,
    title: "International Conference and the 14th Croatian Scientific and Professional Meeting 'Air Protection 2025', Hotel Kolovare, Zadar, Croatia",
    excerpt: "From 22<sup>nd</sup> to 25<sup>th</sup> October 2025, Prof. Nguyen Thi Kim Oanh, Director of the AirQC, participated online in the International Conference and the 14th Croatian Scientific and Professional Meeting \"Air Protection 2025.\" The event, held at Hotel Kolovare in Zadar, Croatia, was organized by the Croatian Air Pollution Protection Association (CAPPA) in partnership with the Institute for Medical Research and Occupational Health (IMI), the Croatian Meteorological and Hydrological Service (DHMZ), and the European Federation of Clean Air and Environmental Protection Associations (EFCA).<br></br>The conference was convened under the auspices of the International Union of Air Pollution Prevention and Environmental Protection Associations (IUAPPA) and brought together international experts and practitioners in air quality management.<br></br>On 24<sup>th</sup> October 2025, Prof. Nguyen Thi Kim Oanh delivered an invited lecture titled \"Biomass Open Burning in Southeast Asia: Emissions and Multiple Effects.\" In her lecture, she highlighted the major sources and drivers of biomass burning in the region, its significant impacts on air quality, ecosystems, and human health, and the need for coordinated regional policies to mitigate biomass burning emissions.<br></br>The conference Book of Abstracts is available here: <a href='https://zastitazraka.imi.hr/wp-content/uploads/2025/11/Zbornik_sazetaka-2025_online.pdf' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://zastitazraka.imi.hr/wp-content/uploads/2025/11/Zbornik_sazetaka-2025_online.pdf</a>",
    category: "Event",
    date: "22 October 2025",
    image: [m39,m40],
    link: "https://zastitazraka.imi.hr/wp-content/uploads/2025/11/Zbornik_sazetaka-2025_online.pdf",
  },
  {
    id: 8,
    title: "Second Lead Author Meeting of the Intergovernmental Panel on Climate Change (IPCC) Task Force on National Greenhouse Gas Inventories (TFI), Boğaziçi University Cultural Center, Istanbul, Türkiye",
    excerpt: "From 7<sup>th</sup> to 9<sup>th</sup> October 2025, Prof. Nguyen Thi Kim Oanh, Director of the Air Quality Nexus Center (AirQC), participated online in the Second Lead Author Meeting of the Intergovernmental Panel on Climate Change (IPCC) Task Force on National Greenhouse Gas Inventories (TFI). The meeting, held at the Boğaziçi University Cultural Center, Albert Long Hall in Istanbul, Türkiye, followed an official invitation from the Co-Chairs of the IPCC TFI to contribute to the development of the upcoming methodology report.<br></br>The meeting aimed to advance the preparation of the 2027 IPCC Methodology Report on Inventories for Short-Lived Climate Forcers (SLCFs) by reviewing draft chapters, aligning methodological approaches, and incorporating the latest scientific evidence. It provided a platform for Lead Authors and contributing experts to collaborate on improving accuracy, transparency, and consistency in national SLCF inventory reporting.<br></br>Prof. Kim Oanh contributed online. She is the lead author of Chapter 1, Chapter 3 and Chapter 4 of the report.",
    category: "Event",
    date: "7 October 2025",
    image: '',
    link: "#",
  },
  {
    id: 9,
    title: "Roundtable Discussion on Sustainable Last Mile Delivery, Manila, Philippines",
    excerpt: "On 25<sup>th</sup> July 2025, Dr. Lai Nguyen Huy, the Deputy Director, attended the <strong>Roundtable Discussion on Sustainable Last Mile Delivery</strong> organized by the Institute for Climate and Sustainable Cities (ICSC) in Manila, the Philippines.<br></br>Dr. Huy presented the key findings of the background study of last-mile delivery for Thailand's case study. AirQC actively contributed to the regional report which includes four case studies in Southeast Asia, i.e., Indonesia, the Philippines, Thailand, and Vietnam.",
    category: "Event",
    date: "25 July 2025",
    image: [e101,e1],
    link: "#",
  },
  {
    id: 10,
    title: "Regional Policy Dialogue Workshop in Vientiane, Lao PDR",
    excerpt: "On 26<sup>th</sup> June 2025, Prof. Kim Oanh and Dr. Lai Nguyen Huy, representatives of AirQC participated in the high-level regional policy dialogue in Vientiane, Lao PDR, which was co-hosted by the University of Canberra (Australia), National University of Laos, and the University of Health Sciences Laos. <br></br>The workshop brought together over 40 delegates to introduce two projects for which the AirQC is the key partner: Climate change adaptation to smoke haze for improved child health in Southeast Asia (<a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a>) and Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (<a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a>).<br></br>The workshop provided key opportunities to understand the social, political and economic barriers to mitigation which empowered the health sector to deal with smoke-haze from biomass open burning.",
    category: "Event",
    date: "26 June 2025",
    image: [e2, e3],
    link: "#",
  },
  {
    id: 11,
    title: "Policy Dialogue Workshop on Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia in Bangkok, Thailand",
    excerpt: `On 17<sup>th</sup> June 2025, Prof. Kim Oanh and Dr. Lai Nguyen Huy, representatives of AirQC, participated in the policy dialogue workshop on <strong>Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia</strong> held in Bangkok, Thailand. Policy dialogue is an important work package of <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a>.<br></br>This joint workshop aimed to engage policymakers and other stakeholders to prioritize solutions against haze pollution for affected communities and schools, co-create a platform for policy dialogue and knowledge exchange, and identify opportunities for regional cooperation on tackling the health impacts of air pollution and climate change.<br></br>Prof. Kim Oanh, Director of AirQC, delivered a keynote presentation on <strong>Overview of Smoke Haze Pollution from Wildfires and Agricultural Burning in Southeast Asia.</strong> The AirQC team actively participated in the discussion groups, which aimed to systematically map existing interventions and policies; engage multi-sectoral stakeholders to prioritize adaptation solutions; identify implementation challenges, barriers, and enablers; co-design adaptation interventions tailored to regional needs; empower the health sector to deal with smoke haze; and understand the social, political, and economic barriers to mitigation.`,
    category: "Event",
    date: "17 June 2025",
    image: e4,
    link: "#",
  },

  {
    id: 12,
    title: "Training Workshop on 'Science-Based Tools for Air Quality Management', Hanoi, Vietnam",
    excerpt: `On 23<sup>rd</sup> April 2025, a Training Workshop on “Science-Based Tools for Air Quality Management” was held at the Green One UN House in Hanoi, Viet Nam. The event was co-organized by Clean Air Asia, the World Health Organization (WHO) Viet Nam, and the United Nations Development Programme (UNDP). The workshop gathered policymakers, researchers, and civil society representatives from across the region to strengthen partnerships and enhance understanding of air pollution challenges and their impacts.<br></br>The workshop aimed to promote regional exchange and support integrated approaches that deliver co-benefits for clean air and decarbonization. Participants explored science-based policymaking through the sharing of best practices, analytical tools, and case studies from Viet Nam, China, and Thailand.<br></br>Prof. Nguyen Thi Kim Oanh, Director of AirQC, delivered a lecture on “Air Quality Data for Effective Air Quality Management – Best Practice in Asia and Lessons for Vietnam” during the pre-event training session “Opportunities to Strengthen Air Quality and Its Management in Vietnam.” She shared insights on improving air quality management systems, advancing data-driven policy, and fostering regional cooperation and knowledge exchange.`,
    category: "Event",
    date: "23 April 2025",
    image: [e5,e6],
    link: "#",
  },
  {
    id: 13,
    title: "Regional Dialogue on Climate and Health",
    excerpt: `On 2<sup>nd</sup>–3<sup>rd</sup> October 2024, Prof. Nguyen Thi Kim Oanh, Director of AirQC, participated as a speaker and panelist at the "Regional Dialogue on Climate and Health" organized by the Embassy of France to Thailand at Mahidol University.<br></br>Prof. Kim Oanh delivered the presentation titled "Co-control of Emission Sources for Multiple Benefits." She highlighted the importance of integrated strategies to simultaneously improve air quality, protect public health, and mitigate climate change. During the panel discussion, she emphasized the need for collaborative research and cross-sectoral policy approaches to enhance co-benefits across the environment, health, and climate domains.<br></br>The dialogue brought together experts, researchers, and policymakers to discuss the critical intersection of climate change and public health. The event aimed to strengthen regional partnerships and enhance collective capacity to address health impacts associated with climate change, fostering more resilient and adaptive health systems in the Asia-Pacific region. Details of the event can be found at <a href='https://www.irasec.com/Climate-and-Health-Regional-Dialogue-3612' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>Climate and Health Regional Dialogue – IRASEC.</a>`,
    category: "Event",
    date: "2 October 2024",
    image: e7,
    link: "https://www.irasec.com/Climate-and-Health-Regional-Dialogue-3612",
  },
  {
    id: 14,
    title: "Regional Workshop on \"National Air Pollutant Emissions Inventory\"",
    excerpt: `On 23<sup>rd</sup> September 2024, Prof. Nguyen Thi Kim Oanh, Dr. Lai Nguyen Huy, and Dr. Truong Thi Huyen from the AirQC participated online in the Regional Workshop on Developing National Air Pollutant Emissions Inventory, a pre-event to the Fifth Ministerial Meeting of the Regional Forum on Health and Environment of Asia Pacific, held in Jakarta, Indonesia. The workshop was organized by the United Nations Environment Programme (UNEP) to enhance regional capacity and knowledge exchange on emissions inventory development.<br></br>The workshop aimed to support countries in the Asia-Pacific region by strengthening their technical capacity and facilitating the sharing of best practices for developing comprehensive air pollutant emissions inventories. It focused on fostering evidence-based air quality policies and assessing the associated health impacts of air pollution.<br></br>As an invited speaker, Prof. Kim Oanh presented the initial findings of the AIT–EANET project on “Emissions Inventory and Source Apportionment Stocktaking.” Her presentation highlighted key methodologies and frameworks to support countries in developing robust emissions inventories, emphasizing the role of these inventories in informing effective policymaking and advancing public health protection across the region. Details of the event can be found at <a href='https://www.unep.org/events/conference/regional-workshop-developing-national-air-pollutant-emissions-inventory' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>UNEP – Regional Workshop on Developing National Air Pollutant Emissions Inventory.</a>`,
    category: "Event",
    date: "23 September 2024",
    image: e8,
    link: "https://www.unep.org/events/conference/regional-workshop-developing-national-air-pollutant-emissions-inventory",
  },
  {
    id: 15,
    title: "Workshop Participation in Advanced Institute on Health Investigation and Air Sensing for Asian Pollution (AI on Hi-ASAP)",
    excerpt: "On 5<sup>th</sup>–8<sup>th</sup> September 2024, Dr. Lai Nguyen Huy and Dr. Truong Thi Huyen (AirQC members) attended the Advanced Institute on Health Investigation and Air Sensing for Asian Pollution (AI on Hi-ASAP) training workshop in Putrajaya, Malaysia. This event was hosted and organized by the IRDR International Centre of Excellence (IRDR ICoE-Taipei) in partnership with the International Science Council (ISC), Future Earth Taipei, International Global Atmospheric Chemistry – Monsoon Asia and Oceania Networking Group (IGAC-MANGO), University of Putra Malaysia, and National University of Malaysia.<br></br>This workshop aims to provide young to mid-career practitioners and researchers interested in air pollution and health research in Asia with knowledge, experience, and hands-on practice in the techniques and methodologies required to conduct research with the aim of reducing the health risks of air pollution. The details of the event can be found at <a href='https://www.ukm.my/talib/news/advanced-institute-on-health-investigation-and-air-sensing-for-asian-pollution-ai-on-hi-asap/' target='_blank' rel='noopener noreferrer' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://www.ukm.my/talib/news/advanced-institute-on-health-investigation-and-air-sensing-for-asian-pollution-ai-on-hi-asap/</a>",
    category: "Event",
    date: "5 September 2024",
    image: [e9,e10],
    link: "https://www.ukm.my/talib/news/advanced-institute-on-health-investigation-and-air-sensing-for-asian-pollution-ai-on-hi-asap/",
  },
  
  // MEDIA
  {
    id: 101,
    title: "Public Seminar at Universitas Sriwijaya, in Palembang, Indonesia",
    excerpt: `On 23<sup>rd</sup> September 2025, Prof. Nguyen Thi Kim Oanh and Dr. Lai Nguyen Huy (AirQC's team) participated in a policy workshop in Jakarta, Indonesia, organized under the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects. <br></br>During the workshop, presented the prototype of a DIY air purifier designed for Clean Air Room interventions and organized a panel discussion on “Community Empowerment for Environmental Health and Health Equity,” sharing experiences and lessons learned alongside <strong>Bicara Udara, Clean Air Asia, and Nafas</strong>.<br></br>The workshop aimed to promote multi-country collaboration and strengthen regional actions to improve community health resilience against air pollution. It served as a platform for dialogue among partners from <strong>Australia, Thailand, Cambodia, Laos, and Indonesia</strong>, encouraging knowledge exchange and capacity building for practical clean-air solutions.<br></br>Following the workshop, the AirQC team joined international partners in field visits to <strong>SD Muhammadiyah 1 School, Bappeda Litbang</strong>, and the <strong>Silaberanti Community</strong> in Palembang to identify suitable sites for implementing the Clean Air Room interventions.<br></br>The international project team also conducted a <strong>public seminar at Universitas Sriwijaya</strong>, engaging local stakeholders and academic partners to enhance collaboration and ensure the successful implementation of the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> initiatives.`,
    category: "Media",
    date: "23 September 2025",
    image: m1,
    link: "#",
  },
  {
    id: 102,
    title: "Regional Policy Workshop \"Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia\"",
    excerpt: `On 24<sup>th</sup> September 2025, the Air Quality Nexus Center (AirQC) team participated in the Regional Policy Workshop on Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia, co-organized by the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects. The workshop, held in Jakarta and co-hosted by the <strong>HEAL National Research Network at the University of Canberra,</strong> brought together experts, policymakers, and regional partners from across Southeast Asia and Australia, including representatives from the <strong>University of Indonesia, Clean Air Asia, Bicara Udara, NAFAS, Kopernik</strong>, and other key organizations.<br></br>The event aimed to strengthen regional collaboration on addressing the transboundary haze problem and its impacts on climate and public health. It provided a platform for dialogue and knowledge exchange on inclusive approaches to empower vulnerable communities, promote local adaptation strategies, and integrate cross-sectoral policies for emissions reduction and health equity. Key themes of the workshop included community resilience, health impacts of haze pollution, and opportunities for regional cooperation to support evidence-based policymaking for cleaner air in Southeast Asia.<br></br>Prof. Nguyen Thi Kim Oanh, Director of AirQC, served as a panelist in the session on “Regional Cooperation on Tackling Health Effects of Forest Fires.” She emphasized the importance of strengthening regional collaboration to reduce biomass open burning and address the associated transboundary haze phenomena. Prof. Kim also underscored the need for coordinated scientific research, shared data, and capacity-building initiatives to support sustainable policy actions across the region. Details of the event can be found at <a href='https://www.linkedin.com/posts/healthy-environments-and-lives-national-research-network_canbreathe-healhaze-airpollution-activity-7377193248529797120-Kzpr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA4s_y0BnLpqcLSByHM-1AKn5x8aH4fVXAw' style='color: hsl(105 33% 30%); text-decoration: underline;'>Healthy Environments and Lives National Research Network – LinkedIn</a>.`,
    category: "Media",
    date: "24 September 2025",
    image: [m2,m3],
    link: "https://www.linkedin.com/posts/heal-network_healhaze-canbreathe-activity-7245563607393996800-hBII",
  },
  {
    id: 103,
    title: "Participation in the Public Seminar 'ENVIFAIR 2025 X RCCC UI' at the University of Indonesia",
    excerpt: `The AirQC team participated in the Public Seminar "ENVIFAIR 2025 X RCCC UI", which was organized by the Research Center for Climate Change (RCCC) and Faculty of Public Health, Universitas Indonesia, Depok, as a part of the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects.<br></br>Prof. Kim Oanh and Dr. Huy also provided insights in the interviews conducted by the university student union, highlighting the needs for science-based information for policy making and the AirQC activities within these two projects.`,
    category: "Media",
    date: "25 September 2025",
    image: m4,
    link: "#",
  },
  {
    id: 104,
    title: "Institutional Collaboration and Partnership Development: MoU with RCEC-AS (Taiwan)",
    excerpt: `On 29<sup>th</sup> April, AirQC endorsed a Memorandum of Understanding (MoU) between AirQC and the Research Center for Environmental Changes, Academia Sinica (RCEC-AS), Taiwan. The agreement aims to advance collaborative research on air pollution, exposure profiling, and health impacts in Asia, thereby strengthening long-term regional cooperation.`,
    category: "Media",
    date: "29 April 2025",
    image: '',
    link: "#",
  },
  {
    id: 105,
    title: "Interviewed by the Vietnamese National TV Channel",
    excerpt: "Prof. Nguyen Thi Kim Oanh, Director of the Air Quality Nexus Center (AirQC), was interviewed by the Vietnamese National Television Channel (VTV1) to discuss the importance of obtaining accurate emission data from different source sectors.<br></br>During the interview, Prof. Kim Oanh emphasized that understanding the main emission sources and associated key pollutants is essential for developing effective control measures. She explained that, “To convince polluters and design appropriate policies, we must first ensure that the data we provide are reliable and trustworthy.” Her remarks highlighted the critical role of science-based evidence in guiding emission reduction strategies and strengthening regional air quality management.<br></br>The full interview video can be found at<br><a href='https://www.youtube.com/watch?v=Sl-bWb8xQIU' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://www.youtube.com/watch?v=Sl-bWb8xQIU</a>",
    category: "Media",
    date: "22 April 2025",
    image: m5,
    link: "https://www.youtube.com/watch?v=Sl-bWb8xQIU",
  },
  {
    id: 106,
    title: "Sustainable Development and Environmental Health of the Beijing Forum 2024",
    excerpt: "Taking place from 1<sup>st</sup>–3<sup>rd</sup> November 2024 at Peking University, the Beijing Forum 2024 aimed to foster global dialogue guided by the principle of \"The Harmony of Civilizations and Prosperity of All,\" seeking advancement through innovation and mutual understanding among nations. Since its inception in 2004, the Beijing Forum has hosted over 7,000 distinguished guests from more than 80 countries and regions. The annual event, drawing on Beijing's rich cultural heritage, is dedicated to advancing research on global issues and promoting academic development and social progress worldwide. The 21<sup>st</sup> Beijing Forum, with its comprehensive scope, addressed contemporary challenges through 13 thematic panels, two symposia, and three Beijing Forum Global events, promoting international cooperation and shared progress through open dialogue and mutual learning.<br></br>Prof. Nguyen Thi Kim Oanh, Director of AirQC, participated as a panelist in Session 3 <em>\"Air, Climate and Health\"</em> under the theme <em>\"Sustainable Development and Environmental Health\"</em> at the Beijing Forum 2024, held in Beijing, China. The forum emphasized the interlinkages between environmental systems, human health, and sustainable development, advocating for integrative and multidisciplinary approaches to address major global challenges such as air pollution, climate change, and health inequities.<br></br>Prof. Kim Oanh delivered an oral presentation on <em>\"Perspectives of Improving Air Quality with Multiple Benefits in Southeast Asia,\"</em> sharing valuable insights on air quality management and highlighting the interconnected impacts of air pollution, climate change, and public health. She also emphasized the importance of collaborative research and regional cooperation to strengthen evidence-based policymaking and advance sustainable air quality improvement across Southeast Asia. Details of the Beijing Forum 2024 can be found at <a href='https://www.bjf.pku.edu.cn/forum/index.php' style='color: hsl(105 33% 30%); text-decoration: underline;'>Beijing Forum 2024</a>.",
    category: "Media",
    date: "1 November 2024",
    image: m6,
    link: "https://www.bjf.pku.edu.cn/forum/index.php",
  },
  {
    id: 107,
    title: "Regional Workshop \"Identifying Air Pollution Sources Through Emission Inventory Event\"",
    excerpt: `On 22<sup>nd</sup> October 2024, Prof. Nguyen Thi Kim Oanh, Director of AirQC, participated as a guest speaker at the regional workshop "Identifying Air Pollution Sources Through Emission Inventory" organized by the World Resources Institute (WRI) and Environmental Defense Fund (EDF) in Jakarta, Indonesia. She delivered a presentation on "Development of Emission Inventory for Integrated Air Quality Management: SEA Regional Perspectives", sharing her valuable insights into building high-quality source inventories in Southeast Asia.<br></br>The workshop provided a key opportunity to connect with regional experts, exchange knowledge on emission inventory methodologies, strengthen local capacities through public dissemination, and advance collective efforts to develop effective clean-air and climate-health solutions.`,
    category: "Media",
    date: "22 October 2024",
    image: m7,                                                                                                                                                                                                                                                                                                                          
    link: "#",                                                                       
  },                                                                                                                                                                
  {
    id: 108,              
    title: "Panelist at \"Eighth Session of the Committee on Environment and Development (CED-8)\"",
    excerpt: "The AirQC team participated in the “Eighth Session of the Committee on Environment and Development (CED-8)” to be held at the United Nations Conference Centre (UNCC) in Bangkok, Thailand organized by the Ministry of the Environment of Japan (MOEJ) in collaboration with UNESCAP and several international institutions, including ROK, MOE, and ADPC.<br></br>The event provided a comprehensive overview of the current status and trends in air pollutant emissions and air quality across Asia and the Pacific, facilitating informed collective action among diverse stakeholders in support of the Regional Action Plan for Air Pollution (RAPAP). Key outcomes included heightened awareness of air quality trends relating to aerosols and trace gases, a better understanding of transboundary air pollution impacts and sources, and the identification of strategies to enhance regional efforts in tackling air pollution.<br></br>Prof. Kim Oanh served as a panelist at the side event “Review of Air Quality Status and Actions in Asia and the Pacific; Air pollution in the region and opportunities to strengthen regional action.” She emphasized the importance of getting science- and evidence-based information to foster regional cooperation in dealing with the air pollution challenge, along with the need for capacity building.<br></br>On 17<sup>th</sup> October 2024, Prof. Nguyen Thi Kim Oanh, Director of AirQC, participated in the Eighth Session of the Committee on Environment and Development (CED-8) held at the United Nations Conference Centre (UNCC) in Bangkok, Thailand. The session and its side event were organized by the United Nations Economic and Social Commission for Asia and the Pacific (ESCAP), the Government of Japan, the Government of the Republic of Korea, the United Nations Environment Programme (UNEP), and the Asian Disaster Preparedness Center (ADPC).<br></br>The side event, “Review of Air Quality Status and Actions in Asia and the Pacific: Air Pollution in the Region and Opportunities to Strengthen Regional Action,” provided a region-wide overview of the current status and trends in air pollutant emissions and air quality across Asia and the Pacific. It aimed to strengthen collective action among diverse stakeholders in support of the Regional Action Programme on Air Pollution (RAPAP). Key outcomes of the event included:<br></br><ul><li>Strengthened awareness of air quality status and trends covering both aerosols (PM) and trace gases</li><li>Improved understanding of transboundary air pollution sources and impacts across airsheds</li><li>Identification of practical options to enhance regional cooperation and strengthen actions to tackle air pollution</li></ul><br></br>Prof. Nguyen Thi Kim Oanh, Director of AirQC, served as a panelist at the side event “Review of Air Quality Status and Actions in Asia and the Pacific: Air Pollution in the Region and Opportunities to Strengthen Regional Action.” She emphasized the importance of generating science- and evidence-based information to foster regional cooperation in addressing air pollution challenges, as well as the need for capacity building and sustained collaborative initiatives to enhance the effectiveness of air quality management in the Asia-Pacific region. Details of the event are available at <a href='https://www.unescap.org/sites/default/d8files/event-documents/Concept%20Note_Review%20of%20Air%20Quality%20Status%20and%20Actions%20in%20Asia%20and%20the%20Pacific_CED-8%20Associated%20Event_1.pdf' style='color: hsl(105 33% 30%); text-decoration: underline;'>UNESCAP – Review of Air Quality Status and Actions in the Asia and the Pacific (CED-8)</a>.",
    category: "Media",
    date: "17 October 2024",
    image: [m8,m9],
    link: "#",
  },
  {
    id: 109,
    title: "5th International Forum on Transboundary Air Pollution in Commemoration of the International Day of Clean Air for Blue Skies",
    excerpt: `On 8<sup>th</sup> September 2025, Prof. Nguyen Thi Kim Oanh, Director of the Air Quality Nexus Center (AirQC), participated in the <em>5<sup>th</sup> International Forum on Transboundary Air Pollution in Commemoration of the International Day of Clean Air for Blue Skies.</em> The event was organized by the <strong>Ministry of Foreign Affairs (MOFA)</strong> of the Republic of Korea, with participation from policymakers, researchers, and representatives of international organizations working on regional air quality and environmental management.<br></br>The forum aimed to strengthen regional cooperation on air pollution mitigation and promote the implementation of integrated policies addressing the environmental and health impacts of transboundary pollution. It provided a platform for dialogue among key stakeholders to exchange knowledge, discuss technical and policy challenges, and identify collaborative strategies to achieve cleaner air in the Asia-Pacific region.<br></br>Prof. Kim Oanh delivered an online presentation titled “Wildfire Emissions in Southeast Asia: Multiple Effects on Regional Air Quality, Ecosystem, and Health.” Her talk highlighted the need for an <strong>airshed management approach</strong> to effectively address transboundary air pollution challenges. She also shared insights from the Center’s ongoing research under the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects, emphasizing their contributions to improving regional understanding of wildfire impacts and promoting evidence-based solutions for cleaner air. Details of the event can be found at <a href='https://www.mofa.go.kr/eng/brd/m_5676/view.do?seq=322958' style='color: hsl(105 33% 30%); text-decoration: underline;'>Ministry of Foreign Affairs, Republic of Korea.</a>`,
    category: "Media",
    date: "8 September 2025",
    image: m10,
    link: "#",
  },
  {
    id: 110,
    title: "Air Sensors International Conference (ASIC), Bangkok, Thailand",
    excerpt: "From 19<sup>th</sup>–22<sup>nd</sup> May 2025, Prof. Nguyen Thi Kim Oanh, Director of AirQC, participated in the Air Sensors International Conference (ASIC) held in Bangkok, Thailand. The conference was organized by the Air Quality Research Center, University of California, Davis, USA, and brought together global experts, researchers, and practitioners working on sensor technology and data-driven air quality management.<br></br>Prof. Kim Oanh served as a member of the Technical Planning Committee of ASIC, contributing to the scientific coordination of conference sessions. She delivered an oral presentation on “Evaluation of Low-Cost Sensors in the Monitoring of Surface Ozone under Different Environmental Conditions” and co-chaired the session on “Sensor Performance Evaluation.” In addition, she also chaired the session on “Validating Air Sensors and Expanding Data Networks.”<br></br>The conference provided a valuable platform for sharing advancements in air sensor technologies, exploring opportunities for international collaboration, and promoting the integration of sensor-based monitoring systems for improved air quality management. More details about ASIC 2025 can be found at <a href='https://airquality.ucdavis.edu/events/2025-air-sensors-international-conference-southeast-asia' style='color: hsl(105 33% 30%); text-decoration: underline;'>Air Quality Research Center – UC Davis</a>.",
    category: "Media",
    date: "19 May 2025",
    image: [m11, m12],
    link: "#",
  },
  {
    id: 111,
    title: "National Scientific conference on 'Combating Air Pollution and Improving Air Quality in Viet Nam'",
    excerpt: "On 24<sup>th</sup>–25<sup>th</sup> April 2025, Prof. Nguyen Thi Kim Oanh, Director of the Air Quality Nexus Center (AirQC), participated in the National Scientific Conference on “Combating Air Pollution and Improving Air Quality in Viet Nam” held in Hanoi. The event was co-organized by the Ministries of Agriculture, Environment, and Health, in collaboration with the United Nations Development Programme (UNDP), World Health Organization (WHO), and Clean Air Asia (CAA).<br></br>The conference aimed to foster dialogue among policymakers, scientists, and practitioners to identify effective measures to combat air pollution, improve air quality, and promote sustainable urban development in Viet Nam. This conference is a vital forum not only for assessing the current situation and sharing international experiences but also for proposing innovative scientific solutions aligned with trends in digital transformation, artificial intelligence, and practical feasibility—all aimed at reducing pollution and achieving the goal of “Blue Skies – Clean Air”.<br></br>More than 200 delegates attended the conference, including leading experts from Tsinghua University, Peking University (China), and the Air Quality Nexus Center (AIT), alongside representatives from various ministries (Construction, Health, Industry and Trade), key localities such as Ha Noi, Hung Yen, Bac Ninh, Ho Chi Minh City, and major corporations, associations, enterprises, and international organizations.<br></br>Prof. Kim Oanh delivered a technical presentation on “Integrated Air Quality Management – with Focus on Technical Tools” and contributed as a panelist. She emphasized the importance of integrating science-based tools and regional cooperation to enhance policy implementation and achieve long-term improvements in air quality management across Viet Nam and the wider region.<br></br>Further information on the conference can be found at <a href='https://www.undp.org/vietnam/press-releases/national-scientific-conference-combating-air-pollution-and-improving-air-quality-viet-nam' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://www.undp.org/vietnam/press-releases/national-scientific-conference-combating-air-pollution-and-improving-air-quality-viet-nam</a>.",
    category: "Media",
    date: "24 April 2025",
    image: [m13,m14,m15],
    link: "https://www.undp.org/vietnam/press-releases/national-scientific-conference-combating-air-pollution-and-improving-air-quality-viet-nam",
  },
  {
    id: 112,
    title: "Mitigation Potential of GHG Emissions from Open Waste Burning",
    excerpt: "On 1<sup>st</sup> August 2025, Prof. Kim Oanh, Director of AirQC, was invited as an online guest speaker at the regional workshop <strong>\"Mitigation Potential of GHG Emissions from Open Waste Burning under Present and Future Scenarios: Cases of South Asian Countries – Nepal and Bangladesh\"</strong> held in Kathmandu, Nepal.<br></br>The workshop was jointly organized by the Center of Research for Environment, Energy and Water (CREEW), Nepal; the University of Dhaka, Bangladesh; and Kobe City University of Foreign Studies, Japan, with support from the Asia-Pacific Network for Global Change Research (APN).<br></br>Prof. Kim Oanh delivered a presentation on \"Reflections on Findings and Roadmap: Bridging Science and Policy\". Her presentation topic was on the emissions of dioxins from waste open burning activities.",
    category: "Media",
    date: "1 August 2025",
    image: m16,
    link: "#",
  },
  {
    id: 113,
    title: "Launch Ceremony of the AirQC",
    excerpt: "On 10<sup>th</sup> July 2024, the AirQC (AirQC) hosted its official launch ceremony, marking a significant milestone in advancing research, innovation, and collaboration to tackle the growing challenge of air pollution across Asia.<br></br>Led by Distinguished Professor Nguyen Thi Kim Oanh, the Center aims to strengthen capacity building and cutting-edge research in atmospheric sciences. AirQC fosters multidisciplinary collaboration within AIT and with international partners, focusing on integrated approaches to mitigate air pollution’s impacts on health, ecosystems, and climate. Its mission emphasizes developing cost-effective, science-based solutions and supporting governments in implementing effective clean air policies.<br></br>During the inauguration, Prof. Kazuo Yamamoto, President of AIT, reaffirmed AIT’s strong commitment to addressing air pollution and leading the way toward a healthier, cleaner, and more sustainable future. He encouraged all stakeholders to collaborate, exchange ideas, and work collectively toward the shared goal of improving air quality for all, expressing his enthusiasm for the impactful outcomes that will emerge from the Center.<br></br>Dr. Bindu Lohani, Chairman of Clean Air Asia and AIT Board Member, highlighted that improving air quality is fundamental to community health and well-being. He emphasized the importance of implementing innovative solutions, establishing robust policies, and fostering collaboration among governments, organizations, and communities to achieve cleaner air and a stable climate.<br></br>In her remarks, Prof. Nguyen Thi Kim Oanh, Director of the AirQC, underscored the urgent global need for actionable solutions to combat air pollution. She called for a united approach centered on airshed management and transboundary cooperation, stressing that the Center is poised to spearhead these efforts by engaging with strategic partners across Asia and beyond to drive meaningful progress and multiple co-benefits for clean air, human health, ecosystems, and climate.<br></br>The event also featured a presentation by Assoc. Prof. Dr. Wenchao Xue, Chair of the Environmental Engineering and Management (EEM) program at AIT, who shared perspectives on integrated environmental research approaches in Asia. Following this, notable guests including Ms. Le Thanh Thuy, Head of Project Management and Communication of Hanoi EPA, Ministry of Natural Resources and Environment (MONRE), Vietnam; Prof. Sotiris Vardoulakis, Director, NHMRC Healthy Environments And Lives (HEAL) National Research Network, University of Canberra, Australia; Dr. Eric Zusman, Research Director, Center for Sustainability Governance, Institute for Global Environmental Strategies (IGES), Japan; Mr. Bhushan Tuladhar, Chief of Party, USAID Clean Air, FHI 360-Nepal; Mr. Bert Fabian, Coordinator, Secretariat for the EANET, UN Environment Programme, Asia and the Pacific; and Prof. Joyashree Roy, Director of SMARTS Center, AIT, delivered their remarks. These sessions provided valuable insights and fostered discussions on the nexus of air quality, health, ecosystems, and climate.<br></br>The launch event concluded with a call to action for continued collaboration and innovation. It highlighted AIT’s leadership in driving impactful research and policy engagement to improve air quality, strengthen public health, and enhance climate resilience across the region.<br></br>The details of the event can be found at<br></br> <a href='https://ait.ac.th/2024/07/air-quality-nexus-center-launched-at-ait-to-combat-air-pollution-in-asia-and-beyond/' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://ait.ac.th/2024/07/air-quality-nexus-center-launched-at-ait-to-combat-air-pollution-in-asia-and-beyond/</a>",
    category: "Media",
    date: "10 July 2024",
    image: m17,
    link: "https://ait.ac.th/2024/07/air-quality-nexus-center-launched-at-ait-to-combat-air-pollution-in-asia-and-beyond/",
  },
  {
    id: 114,
    title: "The annual symposium of the international research network 'Impact of Black Carbon in Southeast Asia' (IRN SOOT-SEA)",
    excerpt: "The annual symposium of the international research network \"Impact of Black Carbon in Southeast Asia\" (IRN SOOT-SEA), co-organized by the AirQC (AIT) and French National Research Institute for Sustainable Development IRD, was held at AIT Conference Center on October 4, 2024. The event brought 25 participants from the French and ASEAN experts in air quality and climate research.<br><br></br>The day before the workshop, on 3<sup>rd</sup> October 2024, AirQC warmly welcomed IRD representatives to visit the Environmental Engineering and Management (EEM) Ambient Laboratory, Air Quality Modeling Laboratory, and EEM Main Laboratory.<br></br>The symposium opened with a speech by Prof. Pai-Chi Li, President of AIT, underlining <strong>the importance of this meeting in assessing work on air pollution in the Greater Mekong Region.</strong> SOOT-SEA is an international network focused on understanding the impact of black carbon in Southeast Asia, funded by IRD, France. This project includes key partners from France (Institute of Environmental Geosciences (IGE)), Thailand (AirQC (AIT) and Environmental Science Research Center of Chiang Mai University (ESRC-CMU)), Vietnam (University of Engineering and Technology of the National University of Vietnam (VNU-UET), University of Science of the National University of Vietnam in Ho Chi Minh City (VNUHCM-US)), and Laos (Center of Excellence in Environment of the National University of Laos (NUoL-CoEE)). The workshop provided an invaluable platform to promote and structure research and capacity-building efforts regarding black carbon and air pollution challenges within the region. It aimed to foster North–South and South–South collaborations and set the groundwork for future co-funding opportunities from national and international organizations.<br></br>The details of the event can be found at <a href='https://en.ird.fr/soot-sea-annual-symposium-international-collaboration-better-air-quality' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://en.ird.fr/soot-sea-annual-symposium-international-collaboration-better-air-quality</a>",
    category: "Media",
    date: "4 October 2024",
    image: [m18, m19, m20],
    link: "https://en.ird.fr/soot-sea-annual-symposium-international-collaboration-better-air-quality",
  },
  {
    id: 115,
    title: "Public Seminar on 'Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia'",
    excerpt: "On 18<sup>th</sup> June 2025, the AirQC (AirQC) hosted the public seminar on \"Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia\". This hybrid event brought together regional and international experts to discuss health risks from wildfire smoke and haze under climate change.<br></br>The event is within the framework of <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> and <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> projects. Before the public seminar happened, Dr. Lai Nguyen Huy presented an overview of the AirQC, highlighting its key research areas and projects.<br></br>The event focused on climate attribution, health assessments, and adaptation for vulnerable groups. Key presentations covered early warning systems, health effects, and interventions like clean air rooms. The seminar also promoted policy dialogue and science-based regional planning. Prof. Kim Oanh, Director of AirQC, was also the panelist of the event, sharing her valuable insight on the situation of wildfire in Southeast Asia and its effects.<br></br>On the same date, AirQC hosted the guests to a guided laboratory tour of AIT's research facilities, including the Environmental Engineering and Management (EEM) Ambient Laboratory, Air Quality Modeling Laboratory, and the EEM Main Laboratory.<br></br>The details of the public seminar can be found at <br></br><a href='https://ait.ac.th/event/public-seminar-wildfire-smoke-health-impacts-and-adaptation-in-southeast-asia-and-australia/' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://ait.ac.th/event/public-seminar-wildfire-smoke-health-impacts-and-adaptation-in-southeast-asia-and-australia/</a>",
    category: "Media",
    date: "18 June 2025",
    image: [m22, m30, m23, m24],
    link: "https://ait.ac.th/event/public-seminar-wildfire-smoke-health-impacts-and-adaptation-in-southeast-asia-and-australia/",
  },
];

// Parse both single dates ("25 May 2026") and event ranges
// ("20–24 July 2026"). Date ranges are ordered by their start date.
export const parseDate = (dateString: string): Date => {
  const cleanDate = dateString.replace(/,/g, '').trim();
  const eventDateMatch = cleanDate.match(
    /^(\d{1,2})(?:\s*[–—-]\s*\d{1,2})?\s+([A-Za-z]+)\s+(\d{4})$/,
  );

  if (eventDateMatch) {
    const [, day, monthName, year] = eventDateMatch;
    const month = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ].indexOf(monthName.toLowerCase());

    if (month !== -1) {
      return new Date(Date.UTC(Number(year), month, Number(day)));
    }
  }

  const timestamp = Date.parse(cleanDate);
  return Number.isNaN(timestamp) ? new Date(0) : new Date(timestamp);
};

// Get sorted news items (latest first)  
export const getSortedNewsItems = (): NewsItem[] => {
  return [...allNewsItems].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
};

// Get latest news items (top N)
export const getLatestNews = (count: number = 3): NewsItem[] => {
  return getSortedNewsItems().slice(0, count);
};
