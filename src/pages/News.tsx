import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import images
import capacityImg from '@/assets/capacity.jpg';
import airPollutionResearchImg from '@/assets/air-pollution-research.png';
import riceStrawBurningImg from '@/assets/rice-straw-burning.jpg';
import governmentImg from '@/assets/government.jpg';
import higQualityImg from '@/assets/hig-quality.jpg';
import coBenefitsImg from '@/assets/co-benefits.png';
// News event images
import image1 from '@/assets/image1.jpeg';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.jpeg';
import image4 from '@/assets/image4.jpeg';
import image5 from '@/assets/image5.jpg';
import image6 from '@/assets/image6.jpeg';
import image7 from '@/assets/image7.jpeg';
import image8 from '@/assets/image8.jpeg';
import image9 from '@/assets/image9.jpeg';
import image10 from '@/assets/image10.jpeg';
import image11 from '@/assets/image11.jpeg';
import image12 from '@/assets/image12.jpeg';
import image13 from '@/assets/image13.jpeg';
import image14 from '@/assets/image14.jpeg';
import image15 from '@/assets/image15.jpeg';
import image16 from '@/assets/image16.jpeg';
import image17 from '@/assets/image17.jpeg';
import image18 from '@/assets/image18.jpeg';
import image19 from '@/assets/image19.jpeg';
import image20 from '@/assets/image20.jpeg';
import image21 from '@/assets/image21.png';
import image22 from '@/assets/image22.jpeg';
import image23 from '@/assets/image23.png';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

interface SupabaseEvent {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  location: string;
  image_url?: string;
  is_active: boolean;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const News = () => {
  const navigate = useNavigate();
  const [supabaseEvents, setSupabaseEvents] = useState<SupabaseEvent[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  
  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 }
  };

  // Load events from Supabase
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { supabase } = await import('@/services/supabase');
        const { data, error } = await supabase
          .from('upcoming_events')
          .select('*')
          .eq('is_active', true)
          .order('event_date', { ascending: true });

        if (error) {
          console.error('Error fetching events:', error);
        } else {
          console.log('Fetched events from database:', data);
          setSupabaseEvents(data || []);
        }
      } catch (err) {
        console.error('Error loading events:', err);
      } finally {
        setLoadingEvents(false);
      }
    };

    fetchEvents();
  }, []);

const upcomingEvents: Event[] = supabaseEvents
  .filter(event => {
    let eventDateTime;
    
    // Check if event_date already includes time (ISO format)
    if (event.event_date.includes('T')) {
      // Date is already in ISO format, use it directly
      eventDateTime = new Date(event.event_date);
    } else {
      // Date is just date, combine with time
      eventDateTime = new Date(`${event.event_date}T${event.event_time || '00:00'}`);
    }
    
    const currentDateTime = new Date();
    
    console.log(`Event: ${event.title}`);
    console.log(`Raw event_date: ${event.event_date}`);
    console.log(`Raw event_time: ${event.event_time}`);
    console.log(`Parsed Event DateTime: ${eventDateTime}`);
    console.log(`Current DateTime: ${currentDateTime}`);
    console.log(`Is Future Event: ${eventDateTime > currentDateTime}`);
    console.log('---');
    
    return eventDateTime > currentDateTime;
  })
  .map(event => ({
    id: parseInt(event.id.substring(0, 8), 16),
    title: event.title,
    date: event.event_date,
    time: event.event_time || '00:00',
    location: event.location || 'TBA',
    description: event.description || '',
    image: event.image_url || '/placeholder.svg'
  }));

console.log('Total events from DB:', supabaseEvents.length);
console.log('Upcoming events after filter:', upcomingEvents.length);

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Networking Meeting with IRD",
    excerpt:
      "The team met Dr. Xavier Mari (Representative of IRD in Thailand) on Jun 14 to prepare a proposal on “Integrated approaches to climate mitigation and air quality improvement in Southeast Asia (SEACAI)” onsite at AIT. The team discussed with Dr. Xavier about all the proposed work packages (WPs) and agreed that the WP on the Data Management System will be led by AirQC. A discussion on the organization of the next IRD SOOT-SEA meeting at AIT on Oct 4, 2024.",
    category: "News",
    date: "14 June 2024",
    image: "",
    link: "#",
  },
  {
    id: 2,
    title: "Joined the Kick-off meeting",
    excerpt:
      "Joined the Kick-off meeting of e-Asia HEAL-HAZE project, July 02. Prof. Kim Oanh, Director of the Center, presented the planned activities of modeling (WP3) and early warning (WP5) which are led by the Center, and also discussed with partners on other WPs.",
    category: "News",
    date: "02 July, 2024",
    image: "",
    link: "#",
  },
  {
    id: 3,
    title: "Networking and research collaboration meeting with of EANET and ACAP",
    excerpt:
      "On 27 August 2024, the EANET National Committee and Secretariat, and Asia Center for Air Pollution Research (ACAP) (Figure 1) visited AirQC. A hybrid meeting was organized with onsite participants at AIT campus. The agenda included the introduction by ACAP, EANET, followed by a presentation from the AirQC regarding the key research activities with a focus on acid deposition monitoring and modeling. The participants engaged in discussions about potential collaboration opportunities. AirQC hosted a visit to the Air Quality modeling lab and the Environmental Engineering and Management (EEM) laboratory. The meeting featured distinguished guests, including Mr. Bert Fabian (Coordinator of the Secretariat for EANET; joined online), Prof. Fan Meng (Deputy Director General of ACAP), Dr. Ken Yamashita (Head of the Asia Center for Air Pollution Research, ACAP), Dr. Meihua Zhu (Chief Senior Researcher, ACAP), and Dr. Junichi Kurokawa (Head of the Data Management Department, ACAP).",
    category: "News",
    date: "27 August 2024",
    image: image1,
    link: "#",
  },
  {
    id: 4,
    title: "Networking Meeting with Ricardo Plc",
    excerpt:
      "On 15 October 2024, Dr. Mark Broomfield, Technical Director at Ricardo Plc (Figure 4) visited the center. The meeting was to explore the air quality expertise and experience of both the AirQC and Ricardo to identify potential collaboration opportunities.",
    category: "News",
    date: "15 October 2024",
    image: image2,
    link: "#",
  },
  {
    id: 5,
    title: "Networking Meeting with the Delegation from the University of Surrey, UK",
    excerpt:
      "On 16 October 2024, AirQC had the honor of hosting a delegation from the University of Surrey, UK, comprising distinguished members including Prof. GQ Max Lu (President and Vice Chancellor), Mr. Patrick Degg (Vice President, Global), Prof. Bob Nichol (Pro-Vice Chancellor and Executive Dean of the Faculty of Engineering and Physical Sciences), Prof. Adam Amara (Head of the School of Mathematics and Physics), Mr. Tom Windle (Director of International Partnerships), and Dr. Lian Liu (Chemical Engineer and Reader from the School of Chemistry and Chemical Engineering), Figure 5. The purpose of their visit was a courtesy meeting with the AIT President and management team to explore potential collaborative activities between AIT and the University of Surrey. The delegation participated in discussions with the AirQC and other centers at AIT, and with AIT President, marking a significant step towards fostering international partnerships in research and education. Representative of EEM also joined the meeting.",
    category: "News",
    date: "16 October 2024",
    image: image3,
    link: "#",
  },
  {
    id: 6,
    title: "Keynote & Invited Talks: UNEP Regional Workshop on Developing National Air Pollutant Emissions Inventory",
    excerpt:
      "On 23 September 2024, Prof. Kim Oanh (Center director) was a guest speaker and presented the initial findings of the AIT-EANET project on “Emissions Inventory and Source Apportionment Stocktaking” at the “Regional workshop on national air pollutant emissions inventory\", a Pre-Event to the Fifth Ministerial Meeting of the Regional Forum on Health and Environment of Asia Pacific organized by UNEP in Jakarta, Indonesia. This workshop aimed to support countries in the Asia-Pacific region by enhancing their capacity and facilitating the exchange of best practices related to the development of air pollutant emissions inventories. The focus was on fostering effective air quality policies and conducting assessments of the health impacts associated with air pollution. The presentation highlighted the work of the AIT-EANET EI project, emphasizing key methodologies and frameworks that can aid countries in creating robust emissions inventories to inform future policy-making and public health initiatives.",
    category: "News",
    date: "23 September 2024",
    image: "",
    link: "#",
  },
  {
    id: 7,
    title: "Panelist and invited speaker at “Regional Dialogue on Climate and Health”",
    excerpt:
      "On 2-3 October 2024, Prof. Kim Oanh was a Speaker and Panelist at the “Climate and Health Regional Dialogue” organized by the Embassy of France to Thailand, at Mahidol University. This gathering brought together experts, researchers, and stakeholders to discuss the critical intersection of climate change and public health. The dialogue aimed to strengthen partnerships and enhance the collective capacity to address the health implications of climate change, paving the way for more resilient and adaptive health systems in the face of a changing climate. Prof. Kim Oanh engaged in meaningful discussions about the Co-control of emission sources for multiple benefits to air quality, health and climate, exchanging insights and exploring collaborative approaches to promote the co-controlling efforts.",
    category: "News",
    date: "2 October 2024",
    image: "",
    link: "#",
  },
  {
    id: 8,
    title: "Panelist at a side event of “Eighth Session of the Committee on Environment and Development (CED-8)”",
    excerpt:
      "On 17-18 October 2024, Prof. Kim Oanh and Dr. Lai Nguyen Huy participated the “Eighth Session of the Committee on Environment and Development (CED-8)” at UNCC in Bangkok (Figure 6). Prof. Kim Oanh was a Panelist at the Side Event “Towards Clean Air: Air Quality Status and Actions in the Asia-Pacific”. Prof. Kim Oanh emphasized the importance of getting science- and evidence-based information to foster regional cooperation in dealing with the air pollution challenge, along with the needs for capacity building. This side event was organized by The Ministry of the Environment of Japan (MOEJ) in collaboration with UNESCAP and several international institutions, including ROK, MOE, and ADPC. This event aimed to provide a comprehensive overview of the current status and trends in air pollutant emissions and air quality across Asia and the Pacific, facilitating informed collective action among diverse stakeholders in support of the Regional Action Plan for Air Pollution (RAPAP). Key outcomes included heightened awareness of air quality trends relating to aerosols (PM) and trace gases, a better understanding of transboundary air pollution impacts and sources, and the identification of strategies to enhance regional efforts in tackling air pollution. The panel discussion focused on assessing air pollution trends in the region and exploring opportunities for strengthening collaborative actions to address these critical challenges.",
    category: "News",
    date: "17 October 2024",
    image: image4,
    link: "#",
  },
  {
    id: 9,
    title: "Invited speaker at “Identifying Air Pollution Sources Through Emission Inventory Event”",
    excerpt:
      "On 22 October 2024, Prof. Kim Oanh (Center director) was a guest speaker “Development of emission inventory for integrated air quality management: SEA regional perspectives”. Invited speaker at “Identifying Air Pollution Sources Through Emission Inventory Event” organized by the World Resources Institute (22 October 2024)”. This hybrid workshop organized by the World Resources Institute (WRI) Indonesia, titled \"Regional Workshop on Developing National Air Pollutant Emissions Inventory.\" The workshop facilitated discussions on best practices and innovative strategies for developing comprehensive emissions inventories, aiming to empower Southeast Asian countries to tackle air pollution challenges and improve public health outcomes.",
    category: "News",
    date: "22 October 2024",
    image: image5,
    link: "#",
  },
  {
    id: 10,
    title: "Panelist at the Beijing Forum",
    excerpt:
      "On November 1-2, 2024. Prof. Kim Oanh, Director of AirQC participated as a panelist in Session 3 titled “AiR, Climate and Health” at the “Sustainable Development and Environmental Health” of the Beijing Forum 2024. She shared her perspectives on improving air quality in Southeast Asia, highlighting the multiple benefits associated with these improvements in a talk “Perspectives of Improving Air Quality with Multiple Benefits in Southeast Asia”.",
    category: "News",
    date: "November 1, 2024",
    image: "",
    link: "#",
  },
  {
    id: 11,
    title: "Workshop Participation: Advanced Institute on Health Investigation and Air Sensing for Asian Pollution (AI on Hi-ASAP) workshop",
    excerpt:
      "On 5-8th September 2024, Dr. Lai Nguyen Huy and Dr. Truong Thi Huyen (AirQC members) attended this event organized by Universiti Putra Malaysia (UPM) together with Integrated Research on Disaster Risk, International Centre of Excellence Taipei (IRDR ICoE - Taipei) and Universiti Kebangsaan Malaysia (UKM) in Malaysia. This workshop aims to provide young to mid-career practitioners and researchers interested in air pollution and health research in Asia with knowledge, experience, and hands-on practice in the techniques and methodologies required to conduct research with the aim of reducing the health risks of air pollution.",
    category: "News",
    date: "5 September 2024",
    image: "",
    link: "#",
  },
  {
    id: 12,
    title: "Networking Meeting for Research Collaboration with Mahidol University",
    excerpt:
      "On 9 October 2024, the center held a meeting with a visitor team from Mahidol University (MU), led by Associate Prof. Kraichat Tantrakarnapa, Deputy Dean. The discussion was on planning forthcoming projects of HEAL-HAZE and CANBREATHE and the Hi-ASAP collaborative research using LCS (AS-LUNG sensors) for air quality monitoring. The Hi-ASAP Project is coordinated by the Research Center for Environmental Changes at Academia Sinica, Taiwan, and both MU and AIT are active participants.",
    category: "News",
    date: "9 October 2024",
    image: image6,
    link: "#",
  },
  {
    id: 13,
    title: "Networking Meeting: Visit of Ms. Yumi Yasuda, Ministry of Environment, Japan",
    excerpt:
      "The Center hosted Ms. Yumi Yasuda, Section Chief from the Ministry of Environment, Japan. The visit provided an opportunity for networking and exploring potential avenues for research collaboration, strengthening ties between the Center and Japan’s Ministry of Environment.",
    category: "News",
    date: "22 Apr, 2025",
    image: "",
    link: "#",
  },
  {
    id: 14,
    title: "Networking Meeting with Ricardo",
    excerpt:
      "The Center held an online meeting with researchers from Ricardo Plc’s Environmental Evidence and Data Practice. Discussions focused on air quality management in the Greater Mekong Subregion, fostering knowledge exchange and potential collaboration.",
    category: "News",
    date: "2 June 2025",
    image: "",
    link: "#",
  },
  {
    id: 15,
    title: "Institutional Collaboration and Partnership Development: MoU with RCEC-AS (Taiwan)",
    excerpt:
      "On 29 April, AirQC endorsed a Memorandum of Understanding (MoU) between AirQC and the Research Center for Environmental Changes, Academia Sinica (RCEC-AS), Taiwan. The agreement aims to advance collaborative research on air pollution, exposure profiling, and health impacts in Asia, thereby strengthening long-term regional cooperation.",
    category: "News",
    date: "29 April, 2025",
    image: "",
    link: "#",
  },
  {
    id: 16,
    title: "Panelist: Combating Air Pollution and Improving Air Quality in Viet Nam",
    excerpt:
      "On 25 April 2025, the Center participated in the Conference on ‘Combating Air Pollution and Improving Air Quality in Viet Nam,’ organized by the Ministry of Agriculture and Environment, Ministry of Health, UNDP, and WHO. Prof. Kim Oanh, Director delivered a talk on ‘Integrated Air Quality Management – with Focus on Technical Tools’ and contributed as a panelist.”",
    category: "News",
    date: "25 April 2025",
    image: "",
    link: "#",
  },
  {
    id: 17,
    title: "Lectures, Panels, and Keynote Participation",
    excerpt:
      "Prof. Kim Oanh, Center Director, delivered lectures at two training pre-events of the conference: ‘Air Quality Data for Effective Air Quality Management – Best Practice in Asia and Lessons for Vietnam’ on 22 April.",
    category: "News",
    date: "22 April, 2025",
    image: "",
    link: "#",
  },
  {
    id: 18,
    title: "Lectures, Panels, and Keynote Participation",
    excerpt:
      "On 23 May, Prof. Kim Oanh delivered a lecture at the training pre-event ‘Opportunities to Strengthen Air Quality and Its Management in Vietnam,’ sharing insights on improving air quality management and fostering regional knowledge exchange.",
    category: "News",
    date: "23 May, 2025",
    image: "",
    link: "#",
  },
  {
    id: 19,
    title: "Interviewed by the National TV",
    excerpt:
      "Prof. Kim Oanh was interviewed by National TV (VTV1) to discuss the importance of accurate emission source data for effective emission control",
    category: "News",
    date: "22 April, 2025",
    image: "",
    link: "#",
  },
  {
    id: 20,
    title: "Policy Dialogue Workshop on Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia",
    excerpt:
      "Prof. Kim Oanh, Center Director, delivered the keynote presentation on “Overview of Smoke Haze Pollution from Wildfires and Agricultural Burning in Southeast Asia” at the regional policy dialogue workshop in Bangkok, co-organized by Mahidol University and the University of Canberra. The workshop provided a platform for cross-sectoral engagement on haze pollution mitigation.",
    category: "News",
    date: "17 June 2025",
    image: image7,
    link: "#",
  },
  {
    id: 21,
    title: "Regional Policy Dialogue Workshop in Vientiane, Laos",
    excerpt:
      "AirQC participated in a high-level regional policy dialogue in Vientiane, co-hosted by the University of Canberra, NUOL, and the University of Health Sciences Laos. The workshop brought together over 40 delegates to discuss cross-sectoral strategies for addressing haze pollution in the region.",
    category: "News",
    date: "26 June 2025",
    image: image8,
    link: "#",
  },
  {
    id: 22,
    title: "Roundtable Discussion on Sustainable Last Mile Delivery, Manila, Philippines",
    excerpt:
      "AirQC attended the Sustainable Last Mile Delivery workshop organized by ICSC in Manila. The team presented key findings from a Thailand case study and actively contributed to discussions for the regional report, promoting sustainable logistics practices.",
    category: "News",
    date: "25 July 2025",
    image: "",
    link: "#",
  },
  {
    id: 23,
    title: "Training Session and Institutional Visit to the Institute of Technology of Cambodia (ITC)",
    excerpt:
      "Prof. Kim Oanh and Dr. Lai Nguyen Huy represented AirQC at the HEAL-HAZE and CANBREATHE training session in Phnom Penh, delivering lectures on air quality modeling and demonstrating the HYSPLIT model. The session enhanced regional technical capacity in air quality management.",
    category: "News",
    date: "11 June 2025",
    image: image9,
    link: "#",
  },
  {
    id: 24,
    title: "Laboratory Visit, Training, and Community Engagement in Vientiane, Laos",
    excerpt:
      "At NUOL’s Faculty of Engineering, AirQC co-delivered technical training on air quality modeling, early warning systems, and HYSPLIT. The afternoon included visits to four nurseries, promoting dialogue on child air-health risks and protective measures in early childhood care environments.",
    category: "News",
    date: "25 June 2025",
    image: image10,
    link: "#",
  },
  {
    id: 25,
    title: "Field Visits to Childcare Centers and Haze-Affected Areas in Chiang Mai, Thailand",
    excerpt:
      "AirQC team members visited three Child Development Centers in Hangdong and Doi Saket Districts, followed by Doi Suthep and Doi Pui mountains. The visits assessed haze exposure among children and explored practical indoor air protection measures and localized monitoring approaches.",
    category: "News",
    date: "20 June 2025",
    image: image11,
    link: "#",
  },
  {
    id: 26,
    title: "Institutional Visit to Chiang Mai University, Thailand",
    excerpt:
      "Prof. Kim Oanh and Dr. Lai Nguyen Huy visited the Research Institute for Health Sciences (RIHES) at Chiang Mai University as part of HEAL-HAZE and CANBREATHE. Prof. Kim delivered a technical presentation on air quality modeling and early warning systems, followed by a lab tour and collaborative discussions on joint air-health research.",
    category: "News",
    date: "19 June 2025",
    image: "",
    link: "#",
  },
  {
    id: 27,
    title: "Field Visits to Early Childhood Centers in Luang Prabang, Lao PDR",
    excerpt:
      "AirQC participated in field campaigns visiting five nursery schools to evaluate environmental health challenges. The team emphasized community-based interventions and shared expertise on low-cost air sensing to protect children from air pollution.",
    category: "News",
    date: "24 June 2025",
    image: image12,
    link: "#",
  },
  {
    id: 28,
    title: "Air Sensors International Conference (ASIC) Participation",
    excerpt:
      "From 19 to 22 May 2025, Prof. Kim Oanh participated in the Air Sensors International Conference (ASIC) in Bangkok, organized by the UC Davis Air Quality Research Center, USA. She served as a member of the technical planning committee, delivered an oral presentation titled ‘Evaluation of Low-Cost Sensors in the Monitoring of Surface Ozone,’ and co-chaired a conference session, contributing to the advancement of sensor-based air quality monitoring research.",
    category: "News",
    date: "19 May 2025",
    image: "",
    link: "#",
  },
];

// Function to parse date strings to Date objects for proper sorting
const parseDate = (dateString: string): Date => {
  // Handle various date formats in the data
  const cleanDate = dateString.replace(/,/g, '').trim();
  
  // Try different date formats
  const formats = [
    // "25 July 2025", "22 April 2025"
    /^(\d{1,2})\s+(\w+)\s+(\d{4})$/,
    // "02 July, 2024"
    /^(\d{1,2})\s+(\w+),?\s+(\d{4})$/,
    // "27 August 2024"
    /^(\d{1,2})\s+(\w+)\s+(\d{4})$/,
    // "November 1, 2024"
    /^(\w+)\s+(\d{1,2}),?\s+(\d{4})$/,
    // "5 September 2024"
    /^(\d{1,2})\s+(\w+)\s+(\d{4})$/
  ];

  for (const format of formats) {
    const match = cleanDate.match(format);
    if (match) {
      try {
        return new Date(cleanDate);
      } catch {
        continue;
      }
    }
  }
  
  // Fallback: try direct parsing
  try {
    return new Date(cleanDate);
  } catch {
    return new Date(0); // Return epoch if parsing fails
  }
};

// Sort newsItems by date (latest first)
const sortedNewsItems = [...newsItems].sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Convert past Supabase events to news items format
const pastEventsAsNews: NewsItem[] = supabaseEvents
  .filter(event => {
    let eventDateTime;
    
    // Check if event_date already includes time (ISO format)
    if (event.event_date.includes('T')) {
      // Date is already in ISO format, use it directly
      eventDateTime = new Date(event.event_date);
    } else {
      // Date is just date, combine with time
      eventDateTime = new Date(`${event.event_date}T${event.event_time || '00:00'}`);
    }
    
    const currentDateTime = new Date();
    return eventDateTime <= currentDateTime;
  })
  .map(event => ({
    id: parseInt(event.id.substring(0, 8), 16),
    title: event.title,
    excerpt: event.description || 'Event completed',
    category: "Event",
    date: new Date(event.event_date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    image: event.image_url || '',
    link: "#"
  }));

// Combine past events with existing news items and sort
const allNewsItems = [...pastEventsAsNews, ...newsItems].sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Events data
const eventsData: NewsItem[] = [
  {
    id: 1,
    title: "Launching Ceremony",
    excerpt: "On July 10, 2024, the Center for Nexus of Air Quality, Health, Ecosystem, and Climate known as the Air Quality Nexus Center hosted its official launching ceremony. Led by Distinguished Professor Nguyen Thi Kim Oanh as a Director, the Center aims to advance capacity building and cutting-edge research in atmospheric sciences, fostering multidisciplinary collaboration within the Center and with global partners. The Center focuses on tackling the urgent challenge of air pollution, particularly fine particulate matter (PM2.5), which poses serious health risks across Asia. It emphasizes integrated, multi-pollutant and multi-effect approaches to develop cost-effective solutions and support governments in implementing clean air policies. The launch event featured insights from prominent experts and stakeholders, highlighting the Center’s commitment to driving impactful research and policy engagement to improve air quality, public health, ecosystems, and climate resilience in the region.",
    category: "Event",
    date: "10 July 2024",
    image: image14,
    link: "#",
  },
  {
    id: 2,
    title: "International workshop of project “SOOT-SEA – Atmospheric Activities”", 
    excerpt: "On 4 October 2024, AirQC successfully organized the international workshop for the project “SOOT-SEA – Atmospheric Activities” at AITCC, with participation from the French and ASEAN colleagues (Figure 7). SOOT-SEA is an international network focused on understanding the impact of black carbon in Southeast Asia, funded by IRD, France. This project includes key partners from Thailand (AIT and Chiang Mai University), Vietnam (Hanoi University and Ho Chi Minh City University of Science), as well as several universities in Cambodia and Laos. The workshop provided an invaluable platform to promote and structure research and capacity-building efforts regarding black carbon and air pollution challenges within the region. It aimed to foster North-South and South-South collaborations and set the groundwork for future co-funding opportunities from national and international organizations. <br>The international participants of the project “SOOT-SEA – Atmospheric Activities” also visited the EEM Ambient Laboratory, Air quality modeling laboratory, and EEM Main Laboratory (Figure 2). This project is a collaborative effort for exchange of ideas among international researchers in the field of monitoring and emissions inventory of black carbon, a strong short-lived climate pollutant, in SEA.",
    category: "Event",
    date: "4 October 2024",
    image: image16,
    link: "#",
  },
  {
    id: 3,
    title: "Organized a Public Seminar: ‘Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia’",
    excerpt: "Organized a Public Seminar: ‘Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia, paragraph On 18 June 2025, the AirQC Center hosted a public seminar on “Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia,” bringing together regional and international experts to discuss health risks from wildfire smoke and haze under climate change. Part of the CANBREATHE and HEAL-HAZE projects, the event focused on climate attribution, health assessments, and adaptation for vulnerable groups. Key presentations covered early warning systems, health effects, and interventions like clean air rooms. The seminar also promoted policy dialogue and science-based regional planning. Following the seminar, experts were invited to a guided laboratory tour of AIT’s research facilities, including the EEM Ambient Laboratory, Air Quality Modeling Laboratory, and the EEM Main Environmental Laboratory",
    category: "Event",
    date: "18 June 2025",
    image: image19,
    link: "#",
  },
];

// Sort eventsData by date (latest first)
const sortedEventsData = [...eventsData].sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateB.getTime() - dateA.getTime();
});

const resources: NewsItem[] = [
  {
    id: 1,
    title: "Technical Report\nState of Air for Nepal with the focus in Kathmandu Valley",
    excerpt:
      "A technical report “State of Air for Nepal with the focus in Kathmandu Valley”, SoAR, led by the AIT team was published online. This is an activity of AIT partner (in the consortium of 5 partners) of the 5-year USAID-funded USAID Clean Air project. The SoAR provides an assessment of the current air pollution situation with the aim of providing science-based evidence for Nepal to tackle air pollution problems through appropriate clean air measures. The report was prepared based on information extracted and scrutinized from multiple data sources covering ground-based and satellite monitoring, emissions inventories, model simulated, and reanalysis data, with a focus on PM2.5. The report was reviewed by recognized experts inside, including the Department of Environment, and outside Nepal.",
    category: "Resource",
    date: "2024",
    image: "",
    link: "#",
  },
];
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              News & Events
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              Stay updated with our latest research, events, and developments in air quality science
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-accent/50 p-2 rounded-lg mb-8">
              <TabsTrigger 
                value="upcoming" 
                className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                <Calendar className="mr-2" size={16} />
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger 
                value="news" 
                className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                All News
              </TabsTrigger>
              <TabsTrigger 
                value="events" 
                className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Events
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Events Content */}
            <TabsContent value="upcoming" className="mt-8">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {loadingEvents ? (
                  <div className="col-span-full text-center py-12">
                    <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading upcoming events...</p>
                  </div>
                ) : upcomingEvents.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No Upcoming Events</h3>
                    <p className="text-muted-foreground">Stay tuned for future events and announcements.</p>
                  </div>
                ) : (
                  upcomingEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      variants={cardVariants}
                      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out h-full">
                        <div className="relative overflow-hidden">
                          <motion.img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-48 object-cover"
                            variants={imageVariants}
                            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">
                              {new Date(event.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <motion.h3 
                            className="text-xl font-semibold mb-2"
                            variants={fadeUpVariants}
                          >
                            {event.title}
                          </motion.h3>
                          <motion.div 
                            className="text-sm text-muted-foreground mb-2"
                            variants={fadeUpVariants}
                          >
                            <div className="flex items-center gap-1 mb-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.location}
                            </div>
                          </motion.div>
                          <motion.p 
                            className="text-muted-foreground mb-4"
                            variants={fadeUpVariants}
                          >
                            {event.description}
                          </motion.p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </TabsContent>

            {/* All News Content */}
            <TabsContent value="news" className="mt-8">
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {allNewsItems.map((news) => (
                  <motion.div
                    key={news.id}
                    variants={cardVariants}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 overflow-hidden">
                          <motion.img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-48 md:h-full object-cover"
                            variants={imageVariants}
                            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <motion.div 
                            className="flex items-center gap-2 mb-2"
                            variants={fadeUpVariants}
                          >
                            <span className="text-sm text-muted-foreground">
                              {new Date(news.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </span>
                            {news.category === "Event" && (
                              <Badge variant="secondary">Past Event</Badge>
                            )}
                          </motion.div>
                          <motion.h3 
                            className="text-xl font-semibold mb-3 leading-tight"
                            variants={fadeUpVariants}
                          >
                            {news.title}
                          </motion.h3>
                          <motion.p 
                            className="text-muted-foreground"
                            variants={fadeUpVariants}
                          >
                            {news.excerpt}
                          </motion.p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Events Content */}
            <TabsContent value="events" className="mt-8">
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {sortedEventsData.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={cardVariants}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 overflow-hidden">
                          <motion.img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-48 md:h-full object-cover"
                            variants={imageVariants}
                            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <motion.div 
                            className="flex items-center gap-2 mb-2"
                            variants={fadeUpVariants}
                          >
                            <span className="text-sm text-muted-foreground">
                              {new Date(event.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </span>
                          </motion.div>
                          <motion.h3 
                            className="text-xl font-semibold mb-3 leading-tight"
                            variants={fadeUpVariants}
                          >
                            {event.title}
                          </motion.h3>
                          <motion.p 
                            className="text-muted-foreground"
                            variants={fadeUpVariants}
                          >
                            {event.excerpt}
                          </motion.p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

    </>
  );
};

export default News;