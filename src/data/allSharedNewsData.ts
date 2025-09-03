// Complete shared news data for both News.tsx and Index.tsx
// Import all required images
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
import image24 from '@/assets/News&Events/image24.png';
import image25 from '@/assets/News&Events/image25.jpeg';
import image26 from '@/assets/News&Events/image26.jpeg';
import image27 from '@/assets/News&Events/image27.jpg';
import image28 from '@/assets/News&Events/image28.jpg';

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

// All news items (matches the newsItems array from News.tsx)
export const allNewsItems: NewsItem[] = [
  {
    id: 30,
    title: "Networking Meeting with ENVEA-APAQ",
    excerpt: "The Center hosted a networking meeting with Dr. Joseph Deng Mao, Head of Business Development at ENVEA–APAQ Group. ENVEA, a global leader in environmental monitoring solutions, acquired APAQ Group on August 6, 2025, expanding its advanced technologies and services across Southeast Asia.",
    category: "News",
    date: "6 August 2025",
    image: image26,
    link: "#",
  },
  {
    id: 29,
    title: "Delivered Expert talk: Regional Workshop on Mitigation Potential of GHG Emissions from Open Waste Burning",
    excerpt: "On August 1, 2025, Prof. Kim Oanh, Center Director, virtually participated as an invited expert in the regional workshop titled Mitigation Potential of GHG Emissions from Open Waste Burning under Present and Future Scenarios: Cases of South Asian Countries – Nepal and Bangladesh, held in Kathmandu, Nepal.",
    category: "News", 
    date: "1 August 2025",
    image: image27,
    link: "#",
  },
  {
    id: 22,
    title: "Roundtable Discussion on Sustainable Last Mile Delivery, Manila, Philippines",
    excerpt: "AirQC attended the Sustainable Last Mile Delivery workshop organized by ICSC in Manila. The team presented key findings from a Thailand case study and actively contributed to discussions for the regional report, promoting sustainable logistics practices.",
    category: "News",
    date: "25 July 2025", 
    image: "",
    link: "#",
  },
  // Add more news items as needed...
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
