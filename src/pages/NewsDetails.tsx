import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import capacityImg from '@/assets/capacity.jpg';
import airPollutionResearchImg from '@/assets/air-pollution-research.png';
import riceStrawBurningImg from '@/assets/rice-straw-burning.jpg';
import governmentImg from '@/assets/government.jpg';
import higQualityImg from '@/assets/hig-quality.jpg';
import coBenefitsImg from '@/assets/co-benefits.png';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  type: 'news';
}

interface Event {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  capacity: string;
  image: string;
  type: 'event';
}

const NewsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Sample data - in a real app this would come from an API
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "New Research Reveals Impact of Rice Straw Burning on Regional Air Quality",
      excerpt: "Recent study by our research team shows significant correlation between agricultural burning practices and air pollution levels across Southeast Asian countries.",
      content: "Our comprehensive three-year study has revealed alarming insights into how rice straw burning practices across Southeast Asia significantly contribute to regional air pollution. The research, conducted in collaboration with international partners, analyzed satellite data, ground-level measurements, and economic impacts across six countries.\n\nThe study found that during peak burning seasons, particulate matter (PM2.5) concentrations increased by up to 300% in affected regions, with health implications extending far beyond agricultural areas. These findings highlight the urgent need for alternative agricultural practices and coordinated regional policy responses.\n\nKey findings include: seasonal PM2.5 spikes correlating with burning periods, transboundary pollution affecting neighboring countries, economic losses from health impacts exceeding $2.3 billion annually, and successful pilot programs demonstrating viable alternatives to open burning.\n\nThe research team recommends implementing comprehensive regional frameworks for agricultural waste management, providing economic incentives for farmers to adopt alternative practices, and establishing real-time monitoring networks to track pollution sources and impacts.",
      category: "Research",
      date: "2025-08-10",
      author: "Dr. Sarah Chen & Research Team",
      tags: ["Air Quality", "Agriculture", "Research", "Southeast Asia"],
      image: riceStrawBurningImg,
      type: 'news'
    },
    {
      id: 2,
      title: "Partnership Announcement with International Environmental Organizations",
      excerpt: "Air Quality Nexus Center announces new collaborative partnerships to strengthen regional capacity in air quality monitoring and management.",
      content: "The Air Quality Nexus Center is proud to announce strategic partnerships with leading international environmental organizations to accelerate progress in air quality management across Southeast Asia.\n\nThese partnerships will focus on technology transfer, capacity building, and collaborative research initiatives. Our new partners bring decades of experience in environmental monitoring, policy development, and community engagement.\n\nThe collaboration will establish joint research programs, share best practices in air quality management, develop training programs for local researchers and policymakers, and create funding opportunities for innovative air quality solutions.\n\nThis partnership represents a significant step forward in our mission to improve air quality across the region through science-based solutions and international cooperation.",
      category: "Partnership",
      date: "2025-08-05",
      author: "Air Quality Nexus Center",
      tags: ["Partnership", "International", "Collaboration", "Capacity Building"],
      image: coBenefitsImg,
      type: 'news'
    },
    {
      id: 3,
      title: "Government Policy Workshop Successfully Completed",
      excerpt: "Three-day intensive workshop with government officials concluded with actionable recommendations for air quality policy implementation.",
      content: "Our intensive three-day policy workshop brought together 45 government officials from eight Southeast Asian countries to develop actionable strategies for air quality management.\n\nThe workshop covered policy framework development, implementation strategies, monitoring and evaluation systems, and stakeholder engagement approaches. Participants worked in cross-country teams to develop region-specific solutions.\n\nKey outcomes include: development of policy implementation roadmaps for each participating country, establishment of a regional policy network for ongoing collaboration, agreement on common monitoring standards and protocols, and commitment to annual policy progress reviews.\n\nThe workshop concluded with concrete commitments from each country to implement at least three policy measures within the next 12 months, with technical support from our center.",
      category: "Training",
      date: "2025-07-28",
      author: "Policy Team",
      tags: ["Policy", "Government", "Training", "Implementation"],
      image: governmentImg,
      type: 'news'
    },
    {
      id: 4,
      title: "Technical Report on Air Quality Monitoring Networks Released",
      excerpt: "Comprehensive analysis of current air quality monitoring infrastructure and recommendations for network enhancement published.",
      content: "Our latest technical report provides a comprehensive assessment of air quality monitoring networks across Southeast Asia, identifying gaps and opportunities for improvement.\n\nThe 150-page report analyzes monitoring infrastructure in 12 countries, evaluates data quality and availability, assesses technological capabilities and limitations, and provides detailed recommendations for network enhancement.\n\nKey findings reveal significant gaps in rural monitoring, inconsistent data quality standards, limited real-time data sharing, and inadequate public access to information. The report proposes a regional monitoring framework that addresses these challenges.\n\nRecommendations include standardizing monitoring equipment and protocols, establishing data sharing agreements between countries, implementing quality assurance programs, and developing public-facing data platforms for increased transparency.",
      category: "Publication",
      date: "2025-07-20",
      author: "Technical Team",
      tags: ["Monitoring", "Technical Report", "Infrastructure", "Data Quality"],
      image: higQualityImg,
      type: 'news'
    }
  ];

  const events: Event[] = [
    {
      id: 5,
      title: "International Conference on Air Quality Management",
      description: "A comprehensive conference bringing together researchers, policymakers, and industry experts to discuss latest developments in air quality management across Southeast Asia.",
      content: "Join us for the premier conference on air quality management in Southeast Asia, bringing together leading researchers, policymakers, and industry experts for three days of intensive knowledge sharing and networking.\n\nThe conference will feature keynote presentations from renowned international experts, technical sessions covering the latest research findings, policy roundtables with government representatives, and industry exhibitions showcasing innovative technologies.\n\nKey topics include: emerging air quality challenges and solutions, policy innovations and implementation strategies, technological advances in monitoring and control, health impact assessment and mitigation, and regional cooperation frameworks.\n\nThis conference provides an unparalleled opportunity to connect with peers, share research findings, and influence the future direction of air quality management in the region. Participants will leave with actionable insights and new collaborative relationships.",
      date: "2025-09-15",
      time: "9:00 AM - 5:00 PM",
      location: "Bangkok, Thailand",
      organizer: "Air Quality Nexus Center",
      capacity: "300 participants",
      image: capacityImg,
      type: 'event'
    },
    {
      id: 6,
      title: "Workshop on Emission Inventory Development",
      description: "Hands-on workshop for building technical capacity in emission inventory development using latest methodologies and tools.",
      content: "This intensive hands-on workshop is designed for technical professionals seeking to enhance their skills in emission inventory development and management.\n\nThe workshop covers fundamental principles of emission inventory development, latest methodological approaches and international standards, practical use of emission calculation tools and software, and quality assurance and uncertainty assessment techniques.\n\nParticipants will work with real datasets and industry-standard software, receive personalized feedback from expert instructors, and earn continuing education credits. The workshop includes comprehensive training materials and ongoing support.\n\nThis workshop is ideal for environmental consultants, government officials, researchers, and industry professionals involved in emission inventory work. No prior experience is required, but basic knowledge of environmental science is recommended.",
      date: "2025-10-22",
      time: "2:00 PM - 6:00 PM",
      location: "Virtual Event",
      organizer: "Technical Training Division",
      capacity: "50 participants",
      image: airPollutionResearchImg,
      type: 'event'
    }
  ];

  // Find item by ID (could be news or event)
  const allItems = [...newsItems, ...events];
  const item = allItems.find(p => p.id === parseInt(id || '0'));

  if (!item) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
          <Button onClick={() => navigate('/news')}>
            Back to News
          </Button>
        </div>
      </MainLayout>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <MainLayout>
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-20"
      >
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/news')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={20} />
            Back to News & Events
          </Button>
        </div>

        {/* Hero Image */}
        <motion.section 
          className="relative w-full h-64 md:h-96 overflow-hidden"
          variants={imageVariants}
        >
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl"
                variants={itemVariants}
              >
                {item.title}
              </motion.h1>
            </div>
          </div>
        </motion.section>

        {/* Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Meta Information */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {item.type === 'news' ? (
                // News metadata
                <>
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                    <Tag size={18} className="text-primary" />
                    <span className="font-medium">{(item as NewsItem).category}</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                    <Calendar size={18} className="text-primary" />
                    <span>{new Date((item as NewsItem).date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                    <Users size={18} className="text-primary" />
                    <span>{(item as NewsItem).author}</span>
                  </Badge>
                </>
              ) : (
                // Event metadata
                <>
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                    <Calendar size={18} className="text-primary" />
                    <span>{new Date((item as Event).date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                    <Clock size={18} className="text-primary" />
                    <span>{(item as Event).time}</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-base">
                    <MapPin size={18} className="text-primary" />
                    <span>{(item as Event).location}</span>
                  </Badge>
                </>
              )}
            </motion.div>

            {/* Content Body */}
            <motion.div 
              className="prose prose-lg max-w-none"
              variants={itemVariants}
            >
              <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                {item.content}
              </div>
            </motion.div>

            {/* Tags (for news items) */}
            {item.type === 'news' && (item as NewsItem).tags && (
              <motion.div 
                className="space-y-3"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {(item as NewsItem).tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Event Additional Info */}
            {item.type === 'event' && (
              <motion.div 
                className="grid md:grid-cols-2 gap-6 p-6 bg-muted/30 rounded-lg"
                variants={itemVariants}
              >
                <div>
                  <h3 className="font-semibold mb-2">Event Organizer</h3>
                  <p className="text-muted-foreground">{(item as Event).organizer}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Capacity</h3>
                  <p className="text-muted-foreground">{(item as Event).capacity}</p>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </motion.main>

    </MainLayout>
  );
};

export default NewsDetails;