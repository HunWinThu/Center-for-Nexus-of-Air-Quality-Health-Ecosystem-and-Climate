// News data extracted from Word document
export interface NewsDetail {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  image: string;
  location?: string;
  time?: string;
}

export const newsData: NewsDetail[] = [
  {
    id: 1,
    title: "Public Seminar: 'Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia'",
    date: "2025-06-18",
    category: "Event",
    content: "On 18 June 2025, the AirQC Center hosted a public seminar on 'Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia,' bringing together regional and international experts to discuss health risks from wildfire smoke and haze under climate change. Part of the CANBREATHE and HEAL-HAZE projects, the event focused on climate attribution, health assessments, and adaptation for vulnerable groups. Key presentations covered early warning systems, health effects, and interventions like clean air rooms. The seminar also promoted policy dialogue and science-based regional planning. Following the seminar, experts were invited to a guided laboratory tour of AIT's research facilities, including the EEM Ambient Laboratory, Air Quality Modeling Laboratory, and the EEM Main Environmental Laboratory.",
    image: "/assets/image1.jpeg",
    location: "AIT, Bangkok, Thailand",
    time: "9:00 AM - 5:00 PM"
  },
  {
    id: 2,
    title: "International Conference on Air Quality Management",
    date: "2025-09-15",
    category: "Conference",
    content: "A comprehensive conference bringing together researchers, policymakers, and industry experts to discuss latest developments in air quality management across Southeast Asia.",
    image: "/assets/capacity.jpg",
    location: "Bangkok, Thailand",
    time: "9:00 AM - 5:00 PM"
  },
  {
    id: 3,
    title: "Roundtable Discussion on Sustainable Last Mile Delivery, Manila, Philippines",
    date: "2025-07-25",
    category: "Workshop",
    content: "AirQC attended the Sustainable Last Mile Delivery workshop organized by ICSC in Manila. The team presented key findings from a Thailand case study and actively contributed to discussions for the regional report, promoting sustainable logistics practices.",
    image: "/assets/image2.png",
    location: "Manila, Philippines"
  },
  {
    id: 4,
    title: "Regional Policy Dialogue Workshop in Vientiane, Laos",
    date: "2025-06-26",
    category: "Policy",
    content: "AirQC participated in a high-level regional policy dialogue in Vientiane, co-hosted by the University of Canberra, NUOL, and the University of Health Sciences Laos. The workshop brought together over 50 participants from across the region to discuss policy frameworks for air quality management and health protection measures.",
    image: "/assets/image3.jpeg",
    location: "Vientiane, Laos"
  },
  {
    id: 5,
    title: "Laboratory Visit, Training, and Community Engagement in Vientiane, Laos",
    date: "2025-06-25",
    category: "Training",
    content: "At NUOL's Faculty of Engineering, AirQC co-delivered technical training on air quality modeling, early warning systems, and HYSPLIT. The afternoon included visits to four nurseries, promoting dialogue on child air-health risks and protective measures in early childhood care environments.",
    image: "/assets/image4.jpeg",
    location: "Vientiane, Laos"
  },
  {
    id: 6,
    title: "Field Visits to Early Childhood Centers in Luang Prabang, Lao PDR",
    date: "2025-06-24",
    category: "Field Visit",
    content: "AirQC participated in field campaigns visiting five nursery schools to evaluate environmental health challenges. The team emphasized community-based interventions and shared expertise on low-cost air sensing to protect children from air pollution.",
    image: "/assets/image5.jpg",
    location: "Luang Prabang, Lao PDR"
  },
  {
    id: 7,
    title: "Field Visits to Childcare Centers and Haze-Affected Areas in Chiang Mai, Thailand",
    date: "2025-06-20",
    category: "Field Visit",
    content: "AirQC team members visited three Child Development Centers in Hangdong and Doi Saket Districts, followed by Doi Suthep and Doi Pui mountains. The visits assessed haze exposure among children and explored practical indoor air protection measures and localized monitoring approaches.",
    image: "/assets/image6.jpeg",
    location: "Chiang Mai, Thailand"
  },
  {
    id: 8,
    title: "Institutional Visit to Chiang Mai University, Thailand",
    date: "2025-06-19",
    category: "Collaboration",
    content: "Prof. Kim Oanh and Dr. Lai Nguyen Huy visited the Research Institute for Health Sciences (RIHES) at Chiang Mai University as part of HEAL-HAZE and CANBREATHE. Prof. Kim delivered a technical presentation on air quality modeling and early warning systems, followed by a lab tour and collaborative discussions on joint air-health research.",
    image: "/assets/image7.jpeg",
    location: "Chiang Mai, Thailand"
  },
  {
    id: 9,
    title: "Training Session and Institutional Visit to the Institute of Technology of Cambodia (ITC)",
    date: "2025-06-11",
    category: "Training",
    content: "Prof. Kim Oanh and Dr. Lai Nguyen Huy represented AirQC at the HEAL-HAZE and CANBREATHE training session in Phnom Penh, delivering lectures on air quality modeling and demonstrating the HYSPLIT model. The session enhanced regional technical capacity in air quality management.",
    image: "/assets/image8.jpeg",
    location: "Phnom Penh, Cambodia"
  },
  {
    id: 10,
    title: "Air Sensors International Conference (ASIC) Participation",
    date: "2025-05-22",
    category: "Conference",
    content: "From 19 to 22 May 2025, Prof. Kim Oanh participated in the Air Sensors International Conference (ASIC) in Bangkok, organized by the UC Davis Air Quality Research Center, USA. She served as a member of the technical planning committee, delivered an oral presentation titled 'Evaluation of Low-Cost Sensors in the Monitoring of Surface Ozone,' and co-chaired a conference session, contributing to the advancement of sensor-based air quality monitoring research.",
    image: "/assets/image9.jpeg",
    location: "Bangkok, Thailand"
  },
  {
    id: 11,
    title: "International workshop of project 'SOOT-SEA – Atmospheric Activities'",
    date: "2024-10-04",
    category: "Workshop",
    content: "On 4 October 2024, AirQC successfully organized the international workshop for the project 'SOOT-SEA – Atmospheric Activities' at AITCC, with participation from the French and ASEAN colleagues. SOOT-SEA is an international network focused on understanding the impact of black carbon in Southeast Asia, funded by IRD, France. This project includes key partners from Thailand (AIT and Chiang Mai University), Vietnam (Hanoi University and Ho Chi Minh City University of Science), as well as several universities in Cambodia and Laos. The workshop provided an invaluable platform to promote and structure research and capacity-building efforts regarding black carbon and air pollution challenges within the region. It aimed to foster North-South and South-South collaborations and set the groundwork for future co-funding opportunities from national and international organizations. The international participants also visited the EEM Ambient Laboratory, Air quality modeling laboratory, and EEM Main Laboratory.",
    image: "/assets/image10.jpeg",
    location: "AIT, Bangkok, Thailand"
  },
  {
    id: 12,
    title: "Technical Report: State of Air for Nepal with the focus in Kathmandu Valley",
    date: "2024-12-01",
    category: "Publication",
    content: "A technical report 'State of Air for Nepal with the focus in Kathmandu Valley', SoAR, led by the AIT team was published online. This is an activity of AIT partner (in the consortium of 5 partners) of the 5-year USAID-funded USAID Clean Air project. The SoAR provides an assessment of the current air pollution situation with the aim of providing science-based evidence for Nepal to tackle air pollution problems through appropriate clean air measures. The report was prepared based on information extracted and scrutinized from multiple data sources covering ground-based and satellite monitoring, emissions inventories, model simulated, and reanalysis data, with a focus on PM2.5. The report was reviewed by recognized experts inside, including the Department of Environment, and outside Nepal.",
    image: "/assets/hig-quality.jpg"
  }
];

export const getNewsById = (id: number): NewsDetail | undefined => {
  return newsData.find(news => news.id === id);
};
