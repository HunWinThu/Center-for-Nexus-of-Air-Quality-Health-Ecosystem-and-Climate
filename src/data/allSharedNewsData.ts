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
    id: 1,
    title: "Roundtable Discussion on Sustainable Last Mile Delivery, Manila, Philippines",
    excerpt: `<p>On 25th July 2025, Dr. Lai Nguyen Huy, the Deputy Director, attended the <strong>Roundtable Discussion on Sustainable Last Mile Delivery</strong> organized by the Institute for Climate and Sustainable Cities (ICSC) in Manila, the Philippines.</p>
              <p>Dr. Huy presented the key findings of the background study of last-mile delivery for Thailand's case study. AirQC actively contributed to the regional report which includes four case studies in Southeast Asia, i.e., Indonesia, the Philippines, Thailand, and Vietnam.`,
    category: "Event",
    date: "25 July 2025",
    image: [e101,e1],
    link: "#",
  },
  {
    id: 2,
    title: "Regional Policy Dialogue Workshop in Vientiane, Lao PDR",
    excerpt: "On 26th June 2025, Prof. Kim Oanh and Dr. Lai Nguyen Huy, representatives of AirQC participated in the high-level regional policy dialogue in Vientiane, Lao PDR, which was co-hosted by the University of Canberra (Australia), National University of Laos, and the University of Health Sciences Laos. <br>The workshop brought together over 40 delegates to introduce two projects for which the AirQC is the key partner: Climate change adaptation to smoke haze for improved child health in Southeast Asia (HEAL-HAZE) and Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (CANBREATHE).</br>The workshop provided key opportunities to understand the social, political and economic barriers to mitigation which empowered the health sector to deal with smoke-haze from biomass open burning.",
    category: "Event",
    date: "26 June 2025",
    image: [e2, e3],
    link: "#",
  },
  {
    id: 3,
    title: "Policy Dialogue Workshop on Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia in Bangkok, Thailand",
    excerpt: `
      <p>On 17th June 2025, Prof. Kim Oanh and Dr. Lai Nguyen Huy, representatives of AirQC, participated in the policy dialogue workshop on <strong>"Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia"</strong> held in Bangkok, Thailand. Policy dialogue is an important work package of HEAL-HAZE and CANBREATHE.</p>    
      <p>This joint workshop aimed to engage policymakers and other stakeholders to prioritize solutions against haze pollution for affected communities and schools, co-create a platform for policy dialogue and knowledge exchange, and identify opportunities for regional cooperation on tackling the health impacts of air pollution and climate change.</p>
      <p>Prof. Kim Oanh, Director of AirQC, delivered a keynote presentation on <strong>"Overview of Smoke Haze Pollution from Wildfires and Agricultural Burning in Southeast Asia."</strong> The AirQC team actively participated in the discussion groups, which aimed to systematically map existing interventions and policies; engage multi-sectoral stakeholders to prioritize adaptation solutions; identify implementation challenges, barriers, and enablers; co-design adaptation interventions tailored to regional needs; empower the health sector to deal with smoke haze; and understand the social, political, and economic barriers to mitigation.</p>
    `,
    category: "Event",
    date: "17 June 2025",
    image: e4,
    link: "#",
  },

  {
    id: 4,
    title: "Training Workshop on 'Science-Based Tools for Air Quality Management', Hanoi, Vietnam",
    excerpt: "On 23 April 2025, a Training Workshop on “Science-Based Tools for Air Quality Management” was held at the Green One UN House in Hanoi, Viet Nam. The event was co-organized by Clean Air Asia, the World Health Organization (WHO) Viet Nam, and the United Nations Development Programme (UNDP). The workshop gathered policymakers, researchers, and civil society representatives from across the region to strengthen partnerships and enhance understanding of air pollution challenges and their impacts.</br>The workshop aimed to promote regional exchange and support integrated approaches that deliver co-benefits for clean air and decarbonization. Participants explored science-based policymaking through the sharing of best practices, analytical tools, and case studies from Viet Nam, China, and Thailand.</br>Prof. Nguyen Thi Kim Oanh, Director of AirQC, delivered a lecture on “Air Quality Data for Effective Air Quality Management – Best Practice in Asia and Lessons for Vietnam” during the pre-event training session “Opportunities to Strengthen Air Quality and Its Management in Vietnam.” She shared insights on improving air quality management systems, advancing data-driven policy, and fostering regional cooperation and knowledge exchange.",
    category: "Event",
    date: "23 April 2025",
    image: [e5,e6],
    link: "#",
  },
  {
    id: 5,
    title: "Regional Dialogue on Climate and Health",
    excerpt: `On 2–3 October 2024, Prof. Nguyen Thi Kim Oanh, Director of AirQC, participated as a speaker and panelist at the "Regional Dialogue on Climate and Health" organized by the Embassy of France to Thailand at Mahidol University.</br>Prof. Kim Oanh delivered the presentation titled "Co-control of Emission Sources for Multiple Benefits." She highlighted the importance of integrated strategies to simultaneously improve air quality, protect public health, and mitigate climate change. During the panel discussion, she emphasized the need for collaborative research and cross-sectoral policy approaches to enhance co-benefits across the environment, health, and climate domains.</br>The dialogue brought together experts, researchers, and policymakers to discuss the critical intersection of climate change and public health. The event aimed to strengthen regional partnerships and enhance collective capacity to address health impacts associated with climate change, fostering more resilient and adaptive health systems in the Asia-Pacific region. Details of the event can be found at <a href='https://www.irasec.com/Climate-and-Health-Regional-Dialogue-3612' target='_blank' rel='noopener noreferrer' style='color: #2563eb; text-decoration: underline;'>Climate and Health Regional Dialogue – IRASEC.</a>`,
    category: "Event",
    date: "2 October 2024",
    image: e7,
    link: "https://www.irasec.com/Climate-and-Health-Regional-Dialogue-3612",
  },
  {
    id: 6,
    title: "Regional Workshop on \"National Air Pollutant Emissions Inventory\"",
    excerpt: "On 23 September 2024, Prof. Nguyen Thi Kim Oanh, Dr. Lai Nguyen Huy, and Dr. Truong Thi Huyen from the AirQC participated online in the Regional Workshop on Developing National Air Pollutant Emissions Inventory, a pre-event to the Fifth Ministerial Meeting of the Regional Forum on Health and Environment of Asia Pacific, held in Jakarta, Indonesia. The workshop was organized by the United Nations Environment Programme (UNEP) to enhance regional capacity and knowledge exchange on emissions inventory development.</br>The workshop aimed to support countries in the Asia-Pacific region by strengthening their technical capacity and facilitating the sharing of best practices for developing comprehensive air pollutant emissions inventories. It focused on fostering evidence-based air quality policies and assessing the associated health impacts of air pollution.</br>As an invited speaker, Prof. Kim Oanh presented the initial findings of the AIT–EANET project on “Emissions Inventory and Source Apportionment Stocktaking.” Her presentation highlighted key methodologies and frameworks to support countries in developing robust emissions inventories, emphasizing the role of these inventories in informing effective policymaking and advancing public health protection across the region. Details of the event can be found at <a href='https://www.unep.org/events/conference/regional-workshop-developing-national-air-pollutant-emissions-inventory' target='_blank' rel='noopener noreferrer' style='color: #2563eb; text-decoration: underline;'>UNEP – Regional Workshop on Developing National Air Pollutant Emissions Inventory.</a>",
    category: "Event",
    date: "23 September 2024",
    image: e8,
    link: "https://www.unep.org/events/conference/regional-workshop-developing-national-air-pollutant-emissions-inventory",
  },
  {
    id: 7,
    title: "Workshop Participation in Advanced Institute on Health Investigation and Air Sensing for Asian Pollution (AI on Hi-ASAP)",
    excerpt: "On 5–8 September 2024, Dr. Lai Nguyen Huy and Dr. Truong Thi Huyen (AirQC members) attended the Advanced Institute on Health Investigation and Air Sensing for Asian Pollution (AI on Hi-ASAP) training workshop in Putrajaya, Malaysia. This event was hosted and organized by the IRDR International Centre of Excellence (IRDR ICoE-Taipei) in partnership with the International Science Council (ISC), Future Earth Taipei, International Global Atmospheric Chemistry – Monsoon Asia and Oceania Networking Group (IGAC-MANGO), University of Putra Malaysia, and National University of Malaysia.</br>This workshop aims to provide young to mid-career practitioners and researchers interested in air pollution and health research in Asia with knowledge, experience, and hands-on practice in the techniques and methodologies required to conduct research with the aim of reducing the health risks of air pollution.</br>The details of the event can be found at <a href='https://www.ukm.my/talib/news/advanced-institute-on-health-investigation-and-air-sensing-for-asian-pollution-ai-on-hi-asap/' target='_blank' rel='noopener noreferrer' style='color: #2563eb; text-decoration: underline;'>AI on Hi-ASAP.</a>",
    category: "Event",
    date: "5 September 2024",
    image: [e9,e10],
    link: "https://www.ukm.my/talib/news/advanced-institute-on-health-investigation-and-air-sensing-for-asian-pollution-ai-on-hi-asap/",
  },
  
  // MEDIA
  {
    id: 101,
    title: "Public Seminar at Universitas Sriwijaya, in Palembang, Indonesia",
    excerpt: "On 23 September 2025, Prof. Nguyen Thi Kim Oanh and Dr. Lai Nguyen Huy (AirQC's team) participated in a policy workshop in Jakarta, Indonesia, organized under the HEAL-HAZE and CANBREATHE projects. During the workshop, presented the prototype of a DIY air purifier designed for Clean Air Room interventions. Following the workshop, the AirQC team joined international partners in field visits to SD Muhammadiyah 1 School, Bappeda Litbang, and the Silaberanti Community in Palembang to identify suitable sites for implementing the Clean Air Room interventions.",
    category: "Media",
    date: "23 September 2025",
    image: m1,
    link: "#",
  },
  {
    id: 102,
    title: "Regional Policy Workshop 'Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia'",
    excerpt: "On 24 September 2025, the Air Quality Nexus Center (AirQC) team participated in the Regional Policy Workshop on Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia, co-organized by the HEAL-HAZE and CANBREATHE projects. Prof. Nguyen Thi Kim Oanh, Director of AirQC, served as a panelist in the session on 'Regional Cooperation on Tackling Health Effects of Forest Fires'. She emphasized the importance of strengthening regional collaboration to reduce biomass open burning and address the associated transboundary haze phenomena.",
    category: "Media",
    date: "24 September 2025",
    image: m2,
    link: "https://www.linkedin.com/posts/heal-network_healhaze-canbreathe-activity-7245563607393996800-hBII",
  },
  {
    id: 103,
    title: "Participation in the Public Seminar 'ENVIFAIR 2025 X RCCC UI' at the University of Indonesia",
    excerpt: "The AirQC team participated in the Public Seminar 'ENVIFAIR 2025 X RCCC UI', which was organized by the Research Center for Climate Change (RCCC) and Faculty of Public Health, Universitas Indonesia, Depok, as a part of the HEAL-HAZE and CANBREATHE projects. Prof. Kim Oanh and Dr. Huy also provided insights in the interviews conducted by the university student union, highlighting the needs for science-based information for policy making and the AirQC activities within these two projects.",
    category: "Media",
    date: "25 September 2025",
    image: m3,
    link: "#",
  },
  {
    id: 104,
    title: "Institutional Collaboration and Partnership Development: MoU with RCEC-AS (Taiwan)",
    excerpt: "On 29 April, AirQC endorsed a Memorandum of Understanding (MoU) between AirQC and the Research Center for Environmental Changes, Academia Sinica (RCEC-AS), Taiwan. The agreement aims to advance collaborative research on air pollution, exposure profiling, and health impacts in Asia, thereby strengthening long-term regional cooperation.",
    category: "Media",
    date: "29 April 2025",
    image: m4,
    link: "#",
  },
  {
    id: 105,
    title: "Interviewed by the Vietnamese National TV Channel",
    excerpt: "Prof. Kim Oanh, Director of AirQC, was interviewed by the Vietnamese National TV channel (VTV1). She discussed the importance of obtaining accurate emission data from different source sectors.",
    category: "Media",
    date: "22 April 2025",
    image: m5,
    link: "https://www.youtube.com/watch?v=Sl-bWb8xQIU",
  },
  {
    id: 106,
    title: "Beijing Forum 2024: 'Sustainable Development and Environmental Health'",
    excerpt: "Prof. Nguyen Thi Kim Oanh, Director of AirQC, participated as a panelist in Session 3 'Air, Climate and Health' under the theme 'Sustainable Development and Environmental Health' at the Beijing Forum 2024, held in Beijing, China. Prof. Kim Oanh delivered an oral presentation on 'Perspectives of Improving Air Quality with Multiple Benefits in Southeast Asia'.",
    category: "Media",
    date: "1 November 2024",
    image: m6,
    link: "https://www.bjf.pku.edu.cn/forum/index.php",
  },
  {
    id: 107,
    title: "Regional Workshop 'Identifying Air Pollution Sources Through Emission Inventory Event'",
    excerpt: "On 22 October 2024, Prof. Nguyen Thi Kim Oanh, Director of AirQC, participated as a guest speaker at the regional workshop 'Identifying Air Pollution Sources Through Emission Inventory' organized by the World Resources Institute (WRI) and Environmental Defense Fund (EDF) in Jakarta, Indonesia. She delivered a presentation on 'Development of Emission Inventory for Integrated Air Quality Management: SEA Regional Perspectives'.",
    category: "Media",
    date: "22 October 2024",
    image: m7,
    link: "#",
  },
  {
    id: 108,
    title: "Panelist at 'Eighth Session of the Committee on Environment and Development (CED-8)'",
    excerpt: "On 17th October 2024, Prof. Nguyen Thi Kim Oanh, Director of AirQC participated in the Eighth Session of the Committee on Environment and Development (CED-8) held at the United Nations Conference Centre (UNCC) in Bangkok, Thailand. Prof. Nguyen Thi Kim Oanh served as a panelist at the side event 'Review of Air Quality Status and Actions in Asia and the Pacific: Air Pollution in the Region and Opportunities to Strengthen Regional Action'.",
    category: "Media",
    date: "17 October 2024",
    image: m8,
    link: "#",
  },
  {
    id: 109,
    title: "5th International Forum on Transboundary Air Pollution in Commemoration of the International Day of Clean Air for Blue Skies",
    excerpt: "On 8 September 2025, Prof. Nguyen Thi Kim Oanh, Director of the Air Quality Nexus Center (AirQC), participated in the 5th International Forum on Transboundary Air Pollution in Commemoration of the International Day of Clean Air for Blue Skies. Prof. Kim Oanh delivered an online presentation titled 'Wildfire Emissions in Southeast Asia: Multiple Effects on Regional Air Quality, Ecosystem, and Health'.",
    category: "Media",
    date: "8 September 2025",
    image: m9,
    link: "#",
  },
  {
    id: 110,
    title: "Air Sensors International Conference (ASIC), Bangkok, Thailand",
    excerpt: "From 19–22 May 2025, Prof. Nguyen Thi Kim Oanh, Director of AirQC, participated in the Air Sensors International Conference (ASIC) held in Bangkok, Thailand. Prof. Kim Oanh served as a member of the Technical Planning Committee of ASIC. She delivered an oral presentation on 'Evaluation of Low-Cost Sensors in the Monitoring of Surface Ozone under Different Environmental Conditions' and co-chaired the session on 'Sensor Performance Evaluation'.",
    category: "Media",
    date: "19 May 2025",
    image: m10,
    link: "#",
  },
  {
    id: 111,
    title: "National Scientific conference on 'Combating Air Pollution and Improving Air Quality in Viet Nam'",
    excerpt: "On 24–25 April 2025, Prof. Nguyen Thi Kim Oanh, Director of the Air Quality Nexus Center (AirQC), participated in the National Scientific Conference on 'Combating Air Pollution and Improving Air Quality in Viet Nam' held in Hanoi. More than 200 delegates attended the conference. Prof. Kim Oanh delivered a technical presentation on 'Integrated Air Quality Management – with Focus on Technical Tools' and contributed as a panelist.",
    category: "Media",
    date: "24 April 2025",
    image: m11,
    link: "https://www.undp.org/vietnam/press-releases/national-scientific-conference-combating-air-pollution-and-improving-air-quality-viet-nam",
  },
  {
    id: 112,
    title: "Mitigation Potential of GHG Emissions from Open Waste Burning",
    excerpt: "On 1st August 2025, Prof. Kim Oanh, Director of AirQC, was invited as an online guest speaker at the regional workshop 'Mitigation Potential of GHG Emissions from Open Waste Burning under Present and Future Scenarios: Cases of South Asian Countries – Nepal and Bangladesh' held in Kathmandu, Nepal. Prof. Kim Oanh delivered a presentation on 'Reflections on Findings and Roadmap: Bridging Science and Policy'.",
    category: "Media",
    date: "1 August 2025",
    image: m12,
    link: "#",
  },
  {
    id: 113,
    title: "Launch Ceremony of the AirQC",
    excerpt: "On 10th July, 2024, the AirQC (AirQC) hosted its official launch ceremony, marking a significant milestone in advancing research, innovation, and collaboration to tackle the growing challenge of air pollution across Asia. Led by Distinguished Professor Nguyen Thi Kim Oanh, the Center aims to strengthen capacity building and cutting-edge research in atmospheric sciences.",
    category: "Media",
    date: "10 July 2024",
    image: m13,
    link: "https://ait.ac.th/2024/07/air-quality-nexus-center-launched-at-ait-to-combat-air-pollution-in-asia-and-beyond/",
  },
  {
    id: 114,
    title: "The annual symposium of the international research network 'Impact of Black Carbon in Southeast Asia' (IRN SOOT-SEA)",
    excerpt: "The annual symposium of the international research network 'Impact of Black Carbon in Southeast Asia' (IRN SOOT-SEA), co-organized by the AirQC (AIT) and French National Research Institute for Sustainable Development IRD, was held at AIT Conference Center on October 4, 2024. The events brought 25 participants from the French and ASEAN experts in air quality and climate research.",
    category: "Media",
    date: "4 October 2024",
    image: m14,
    link: "https://en.ird.fr/soot-sea-annual-symposium-international-collaboration-better-air-quality",
  },
  {
    id: 115,
    title: "Public Seminar on 'Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia'",
    excerpt: "On 18th June 2025, the AirQC (AirQC) hosted the public seminar on 'Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia'. This hybrid event brought together regional and international experts to discuss health risks from wildfire smoke and haze under climate change. Prof. Kim Oanh, Director of AirQC, was also the panelist of the event, sharing her valuable insight on the situation of wildfire in Southeast Asia and its effects.",
    category: "Media",
    date: "18 June 2025",
    image: m15,
    link: "https://ait.ac.th/event/public-seminar-wildfire-smoke-health-impacts-and-adaptation-in-southeast-asia-and-australia/",
  },
  {
    id: 116,
    title: "Networking Meeting with ENVEA-APAQ",
    excerpt: "The Center hosted a networking meeting with Dr. Joseph Deng Mao, Head of Business Development at ENVEA–APAQ Group. ENVEA, a global leader in environmental monitoring solutions, acquired APAQ Group on August 6, 2025, expanding its advanced technologies and services across Southeast Asia.",
    category: "Media",
    date: "6 August 2025",
    image: m16,
    link: "#",
  },
];

// Parse date function for sorting
export const parseDate = (dateString: string): Date => {
  const cleanDate = dateString.replace(/,/g, '').trim();
  try {
    return new Date(cleanDate);
  } catch {
    return new Date(0);
  }
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
