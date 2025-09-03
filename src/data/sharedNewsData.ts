// Shared news data for both News.tsx and Index.tsx
// Import images
import image26 from '@/assets/News&Events/image26.jpeg';
import image27 from '@/assets/News&Events/image27.jpg';

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

// Latest 3 news items from the News tab (top of the list)
export const latestNewsItems: NewsItem[] = [
  {
    id: 30,
    title: "Networking Meeting with ENVEA-APAQ",
    excerpt:
      "The Center hosted a networking meeting with Dr. Joseph Deng Mao, Head of Business Development at ENVEA–APAQ Group. ENVEA, a global leader in environmental monitoring solutions, acquired APAQ Group on August 6, 2025, expanding its advanced technologies and services across Southeast Asia. Established in Singapore in 2013, APAQ Group provides comprehensive air quality solutions, including consultancy, dispersion modeling, monitoring instrumentation, and training, delivering compliance-grade systems tailored to regional needs. The meeting provided an excellent opportunity to explore regional collaboration on air quality monitoring and data-driven environmental solutions.",
    category: "News",
    date: "6 August 2025",
    image: image26,
    link: "#",
  },
  {
    id: 29,
    title: "Delivered Expert talk: Regional Workshop on Mitigation Potential of GHG Emissions from Open Waste Burning",
    excerpt:
      "On August 1, 2025, Prof. Kim Oanh, Center Director, virtually participated as an invited expert in the regional workshop titled Mitigation Potential of GHG Emissions from Open Waste Burning under Present and Future Scenarios: Cases of South Asian Countries – Nepal and Bangladesh, held in Kathmandu, Nepal. The workshop was jointly organized by the Center of Research for Environment, Energy and Water (CREEW), Nepal; the University of Dhaka, Bangladesh; and Kobe City University of Foreign Studies, Japan, with support from the Asia-Pacific Network for Global Change Research (APN). Prof. Oanh delivered a brief talk and provided comments, contributing expertise on the air quality and climate implications of waste burning while supporting dialogue on policy development and regional cooperation.",
    category: "News",
    date: "1 August 2025",
    image: image27,
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
];
