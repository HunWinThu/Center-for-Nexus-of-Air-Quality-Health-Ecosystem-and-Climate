import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StructuredData, usePageSEO } from '@/components/common/SEO';
import { BookOpen, Layers, Scale, Shield, GraduationCap, ArrowRight, Wind, BarChart3, Users, Globe, Leaf, Zap, Clock, Calendar, Activity, Database, Settings, Cloud, Heart, TrendingUp } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Home from '@/assets/HOME.jpg';
import missionsHero from '@/assets/hig-quality.jpg';
import cooperationImage from '@/assets/cooperation.jpg';
import multidisciplinaryImage from '@/assets/multi.png';
import governmentImage from '@/assets/government.jpg';
import partner1 from '@/assets/partners-1.png';
import partner2 from '@/assets/partner-2.png';
import partner3 from '@/assets/partner-3.png';
import partner4 from '@/assets/partners-4.jpeg';
import partner5 from '@/assets/partner-5.png';
import partner6 from '@/assets/partner-6.png';
import igesLogo from '@/assets/partners/international/iges.svg';
import pcdLogo from '@/assets/partners/international/pcd-thailand.png';
import climateImage from '@/assets/co-benefits.png';
import capacity from '@/assets/capacity.jpg';
import logo from '@/assets/aqc.png';
import teamGroupPhoto from '@/assets/team-group-photo.jpg';
import backgroundImage from '@/assets/background-hero.jpg';
import pm25Image from '@/assets/pm2.5.png';
import riceStrawBurningImage from '@/assets/rice-straw-burning.jpg';
import { Target, Eye } from 'lucide-react';
import Airparif from '@/assets/collaborators/Airparif.png';
import worldBank from '@/assets/world-bank.jpg';
import bktp from '@/assets/collaborators/bktp.png';
import citepa from '@/assets/collaborators/citepa-logo.jpg';
import hanoiUniversity from '@/assets/collaborators/Đại_học_Bách_khoa_Hà_Nội_(logo).png';
import eanet from '@/assets/collaborators/EANET-avatar.png';
import pcd from '@/assets/collaborators/Emblem_of_the_Pollution_Control_Department.svg.png';
import emory from '@/assets/collaborators/EmoryUniversity.png';
import fmi from '@/assets/collaborators/fmi.png';
import iges from '@/assets/collaborators/IGES_1.png';
import iiasa from '@/assets/collaborators/IIASA.png';
import ird from '@/assets/collaborators/IRD.png';
import liveLearn from '@/assets/collaborators/Live&Learn.png';
import rifs from '@/assets/collaborators/Logo_RIFS_2023.jpg';
import particlesPlus from '@/assets/collaborators/Particles-Plus-Logo-Opaque.jpg';
import unep from '@/assets/collaborators/United_Nations_Environment_Programme_Logo.svg.png';
import vanlang from '@/assets/collaborators/vanlang.png';
import vnu from '@/assets/collaborators/VNU-USSH (1).jpg';
import bg_3 from '@/assets/bg_3.jpg';
import React, { lazy, Suspense, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { supabase } from '@/services/supabase';
import { getLatestNews, type NewsItem } from '@/data/allSharedNewsData';


const Index = () => {
  // Types for events and news
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

  interface NewsItem {
    id: number;
    title: string;
    date: string;
    category: string;
    content: string;
    image: string;
    location?: string;
    time?: string;
  }

  // SEO setup
  usePageSEO(
    'Air Quality Nexus Center - Leading Air Quality Research',
    'A leading Center in conducting and implementing application research with the aim to gain multiple benefits from reducing air pollution through improvement of health of human and ecosystem, and protection of the climate system.',
    'https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/HOME.jpg'
  );

  // Lazy loading hook
  const useIntersectionObserver = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const currentRef = ref.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [threshold]);

    return [ref, isVisible] as const;
  };

  // Card Skeleton Component
  const CardSkeleton = ({ className = "" }: { className?: string }) => (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-200 rounded-3xl p-6 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );

  // Mission Vision Cards Component
  const MissionVisionCards = () => {
    const [missionRef, missionVisible] = useIntersectionObserver(0.2);
    const [visionRef, visionVisible] = useIntersectionObserver(0.2);

    return (
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        <div ref={visionRef}>
          {visionVisible ? (
            <motion.div
              className="bg-white/90 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-xl text-gray-700">
                Air Quality Nexus will be a leading Center in conducting and implementing application research with the aim to gain
                multiple benefits from reducing air pollution through improvement of health of human and ecosystem,
                and protection of the climate system.
              </p>
            </motion.div>
          ) : (
            <CardSkeleton className="h-64" />
          )}
        </div>
        
        <div ref={missionRef}>
          {missionVisible ? (
            <motion.div
              className="bg-white/90 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Missions</h2>
              <ul className="text-xl list-disc pl-6 space-y-3 text-gray-700">
                <li>Conduct high-quality research demonstrated by real-life applications for improving air quality in Asia and beyond;</li>
                <li>Focus on the multi-pollutant and multi-effect approach to provide cost-effective solutions to complex air pollution problems;</li>
                <li>Demonstrate and quantitatively assess the co-benefits to air quality and climate of integrated measures applicable in local context;</li>
                <li>Continue and expand international cooperation in conducting research projects, consultancies, training, etc.;</li>
                <li>Provide assistance to governments, and other development partners in the planning, designing, scaling up, and implementation of clean air action plans with multiple benefits.</li>
                <li>Build capacity and promote multi-disciplinary approaches in atmospheric sciences within AIT and internationally;</li>
              </ul>
            </motion.div>
          ) : (
            <CardSkeleton className="h-96" />
          )}
        </div>
      </div>
    );
  };

  // Hook to track the news events state
  const useNewsEventsData = () => {
    const [upcomingEvents, setUpcomingEvents] = useState<SupabaseEvent[]>([]);
    const [pastEvents, setPastEvents] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [showingEvents, setShowingEvents] = useState(false);

    // Events data (same as in News.tsx Events tab)
    const eventsData: NewsItem[] = [
      {
        id: 1,
        title: "Launching Ceremony",
        content: "On July 10, 2024, the Center for Nexus of Air Quality, Health, Ecosystem, and Climate known as the Air Quality Nexus Center hosted its official launching ceremony. Led by Distinguished Professor Nguyen Thi Kim Oanh as a Director, the Center aims to advance capacity building and cutting-edge research in atmospheric sciences, fostering multidisciplinary collaboration within the Center and with global partners.",
        category: "Event",
        date: "10 July 2024",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "International workshop of project SOOT-SEA – Atmospheric Activities",
        content: "On 4 October 2024, AirQC successfully organized the international workshop for the project SOOT-SEA – Atmospheric Activities at AITCC, with participation from the French and ASEAN colleagues. SOOT-SEA is an international network focused on understanding the impact of black carbon in Southeast Asia, funded by IRD, France.",
        category: "Event",
        date: "4 October 2024",
        image: "/placeholder.svg"
      },
      {
        id: 3,
        title: "Organized a Public Seminar: Wildfire Smoke Health Impacts and Adaptation",
        content: "On 18 June 2025, the AirQC Center hosted a public seminar on Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia, bringing together regional and international experts to discuss health risks from wildfire smoke and haze under climate change.",
        category: "Event",
        date: "18 June 2025",
        image: "/placeholder.svg"
      }
    ];

    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const { data, error } = await supabase
            .from('upcoming_events')
            .select('*')
            .eq('is_active', true)
            .order('event_date', { ascending: true });

          if (error) {
            console.error('Error fetching events:', error);
          } else if (data) {
            const now = new Date();
            
            // Filter to only future events
            const futureEvents = data.filter((event: SupabaseEvent) => {
              const eventDate = new Date(
                event.event_date.includes('T') 
                  ? event.event_date 
                  : `${event.event_date}T${event.event_time || '00:00'}`
              );
              return eventDate > now;
            });

            // Convert past Supabase events to news items format for fallback
            const pastSupabaseEvents = data
              .filter((event: SupabaseEvent) => {
                const eventDate = new Date(
                  event.event_date.includes('T') 
                    ? event.event_date 
                    : `${event.event_date}T${event.event_time || '00:00'}`
                );
                return eventDate <= now;
              })
              .map((event: SupabaseEvent) => ({
                id: parseInt(event.id.substring(0, 8), 16),
                title: event.title,
                content: event.description || 'Event completed',
                category: "Event",
                date: new Date(event.event_date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }),
                image: event.image_url || '/placeholder.svg',
                location: event.location,
                time: event.event_time
              }));

            // Combine past Supabase events with static events data
            const allPastEvents = [...pastSupabaseEvents, ...eventsData].sort((a, b) => {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return dateB.getTime() - dateA.getTime();
            });

            setUpcomingEvents(futureEvents);
            setPastEvents(allPastEvents);
            setShowingEvents(futureEvents.length > 0);
          }
        } catch (err) {
          console.error('Error loading events:', err);
          // Fallback to static events data if Supabase fails
          setPastEvents(eventsData);
        } finally {
          setLoading(false);
        }
      };

      fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { upcomingEvents, pastEvents, loading, showingEvents };
  };

  // Dynamic subtitle component
  const NewsEventsSubtitle = () => {
    const { showingEvents, loading } = useNewsEventsData();
    
    if (loading) {
      return (
        <h3 className="text-2xl font-bold">Latest Updates</h3>
      );
    }

    return (
      <h3 className="text-2xl font-bold">
        {showingEvents ? 'Upcoming Events' : 'Events'}
      </h3>
    );
  };
  const NewsEventsCards = () => {
    const [newsRef, newsVisible] = useIntersectionObserver(0.1);
    const { upcomingEvents, pastEvents, loading, showingEvents } = useNewsEventsData();

    // Use upcoming events if available, otherwise use events from Events tab
    const showEvents = upcomingEvents.length > 0;
    const displayItems = showEvents ? upcomingEvents.slice(0, 1) : pastEvents.slice(0, 1);

    return (
      <div ref={newsRef}>
        {newsVisible ? (
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {loading ? (
              <div className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl h-[400px] shadow-lg"></div>
              </div>
            ) : (
              displayItems.map((item, idx) => (
                <motion.div
                  key={showEvents ? (item as SupabaseEvent).id : (item as NewsItem).id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card className="group relative overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border-0 rounded-3xl">
                    {/* Professional Event Banner */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
                    
                    {/* Full-width Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-0 min-h-[350px]">
                      {/* Hero Image Section */}
                      <div className="relative overflow-hidden lg:order-1">
                        <img 
                          src={
                            showEvents 
                              ? (item as SupabaseEvent).image_url || '/placeholder.svg'
                              : (item as NewsItem).image || '/placeholder.svg'
                          } 
                          alt={
                            showEvents 
                              ? (item as SupabaseEvent).title
                              : (item as NewsItem).title
                          }
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[300px] lg:min-h-[350px]"
                        />
                        
                        {/* Professional Date Badge */}
                        <div className="absolute top-6 right-6">
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-primary">
                                {showEvents 
                                  ? new Date((item as SupabaseEvent).event_date).getDate()
                                  : new Date((item as NewsItem).date).getDate()
                                }
                              </div>
                              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                                {showEvents 
                                  ? new Date((item as SupabaseEvent).event_date).toLocaleDateString('en-US', { month: 'short' })
                                  : new Date((item as NewsItem).date).toLocaleDateString('en-US', { month: 'short' })
                                }
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Event Type Badge */}
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 text-sm font-semibold rounded-full shadow-xl">
                            {showEvents ? 'UPCOMING EVENT' : 'EVENT'}
                          </Badge>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-black/20"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 lg:p-8 flex flex-col justify-center lg:order-2">
                        {/* Title Section */}
                        <div className="mb-6">
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                            {showEvents ? (item as SupabaseEvent).title : (item as NewsItem).title}
                          </h3>
                          
                          {/* Professional Event Details */}
                          <div className="space-y-3 mb-4">
                            {/* Time Info */}
                            <div className="flex items-center gap-3 text-gray-600">
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <Clock className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">Time</p>
                                <p className="text-xs">
                                  {showEvents 
                                    ? (item as SupabaseEvent).event_time || 'Time TBA'
                                    : (item as NewsItem).time || 'Published'
                                  }
                                </p>
                              </div>
                            </div>

                            {/* Location Info */}
                            {(showEvents ? (item as SupabaseEvent).location : (item as NewsItem).location) && (
                              <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                  <Globe className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-900 text-sm">Location</p>
                                  <p className="text-xs">
                                    {showEvents 
                                      ? (item as SupabaseEvent).location
                                      : (item as NewsItem).location
                                    }
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Description Section */}
                        <div className="mb-6">
                          <p className="text-gray-600 leading-relaxed text-base">
                            {showEvents 
                              ? (item as SupabaseEvent).description || 'Join us for this upcoming event.'
                              : ((item as NewsItem).content || 'Event information.').slice(0, 150) + '...'
                            }
                          </p>
                        </div>

                        {/* Professional CTA Section */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 text-sm">
                                {showEvents ? 'Save the Date' : 'Learn More'}
                              </p>
                              <p className="text-xs text-gray-500">
                                {showEvents ? 'Add to your calendar' : 'View event details'}
                              </p>
                            </div>
                          </div>
                          
                          <Button 
                            className="group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-6 py-2.5 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <span>{showEvents ? 'Register Now' : 'Read More'}</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse bg-gray-200 rounded-3xl h-[400px] shadow-2xl"></div>
          </div>
        )}
      </div>
    );
  };

  // Latest News Cards Component
  const LatestNewsCards = () => {
    const [newsRef, newsVisible] = useIntersectionObserver(0.1);

    return (
      <div ref={newsRef}>
        {newsVisible ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {getLatestNews(3).map((news, idx) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <Link to="/news" className="block">
                  <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 rounded-2xl h-[420px] cursor-pointer flex flex-col">
                    {/* News Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={news.image || '/placeholder.svg'} 
                        alt={news.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg">
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">
                              {new Date(news.date).getDate()}
                            </div>
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              {new Date(news.date).toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 flex-1 flex flex-col justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {news.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {news.excerpt.slice(0, 120) + '...'}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-end pt-4 border-t border-gray-100 mt-auto">
                        <div className="text-primary hover:text-primary hover:bg-primary/10 px-3 py-1 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-1">
                          Read More
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <CardSkeleton key={i} className="h-80" />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Thematic Areas Cards Component
  const ThematicAreasCards = () => {
    const [thematicRef, thematicVisible] = useIntersectionObserver(0.1);

    return (
      <div ref={thematicRef}>
        {thematicVisible ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {features.slice(0, 6).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to="/our-thematic-areas#core-activities"
                  className="block"
                >
                  <Card 
                    className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/50 aspect-square cursor-pointer hover:scale-105"
                  >
                    <CardContent className="h-full p-6 flex flex-col items-center justify-center text-center">
                      <feature.icon className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={99} />
                      <h3 className="text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <CardSkeleton key={i} className="aspect-square" />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Strategic Partners Cards Component
  const StrategicPartnersCards = () => {
    const [partnersRef, partnersVisible] = useIntersectionObserver(0.1);

    return (
      <div ref={partnersRef}>
        {partnersVisible ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://cleanairasia.org/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-white rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner1}
                        alt="Clean Air Asia logo"
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </a>
                <h3 className="mt-3 text-base font-medium text-foreground">Clean Air Asia</h3>
              </motion.div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.05 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://www.fhi360.org/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-white rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner2}
                        alt="FHI 360 logo"
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </a>
                <h3 className="mt-3 text-base font-medium text-foreground">Family Health International (FHI 360)</h3>
              </motion.div>
            </div>

            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://www.canberra.edu.au/faculties/health/heal" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-white rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner3}
                        alt="HEAL Global Research Centre logo"
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </a>
                <h3 className="mt-3 text-base font-medium text-foreground">Healthy Environments and Lives (HEAL) Global Research Centre</h3>
              </motion.div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.15 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://www.sinica.edu.tw/en" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-white rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner4}
                        alt="Academia Sinica logo"
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </a>
                <h3 className="mt-3 text-base font-medium text-foreground">Academia Sinica</h3>
              </motion.div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://www.egis-group.com/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-white rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner5}
                        alt="egis logo"
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </a>
                <h3 className="mt-3 text-base font-medium text-foreground">egis</h3>
              </motion.div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.25 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://www.canberra.edu.au/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-white rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner6}
                        alt="University of Canberra logo"
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </a>
                <h3 className="mt-3 text-base font-medium text-foreground">University of Canberra</h3>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <CardSkeleton key={i} className="h-56" />
            ))}
          </div>
        )}
      </div>
    );
  };

  // International Collaborators Cards Component
  const InternationalCollaboratorsCards = () => {
    const [collabRef, collabVisible] = useIntersectionObserver(0.1);

    return (
      <div ref={collabRef}>
        {collabVisible ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {collaborators.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 14, delay: idx * 0.06 }}
                  className="w-full flex flex-col items-center"
                >
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Card className="group hover:shadow-lg transition-all duration-300 bg-white rounded-3xl h-36 w-full flex items-center justify-center">
                      <CardContent className="p-4 h-full w-full flex items-center justify-center">
                        <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                      </CardContent>
                    </Card>
                  </a>
                  <h3 className="mt-3 text-sm font-medium text-foreground">{p.name}</h3>
                </motion.div>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(21)].map((_, i) => (
              <CardSkeleton key={i} className="h-48" />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Call to Action Card Component
  const CallToActionCard = () => {
    const [ctaRef, ctaVisible] = useIntersectionObserver(0.2);

    return (
      <div ref={ctaRef}>
        {ctaVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="bg-white border-primary/10">
              <CardContent className="p-12 text-center">
                <Leaf className="mx-auto mb-6 text-primary" size={64} />
                <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you're a researcher, community member, or organization, there are many ways 
                  to contribute to cleaner air and healthier communities.
                </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" aria-label="Go to Partners Page">
                      <Button 
                        size="lg" 
                        className="px-8 py-4 text-lg bg-background/80 text-foreground backdrop-blur-md border border-white/30 shadow-lg transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-2xl"
                      >
                        Partner With Us
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </Link>
                  </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <CardSkeleton className="h-80" />
        )}
      </div>
    );
  };

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

  const features = [
    {
      icon: Activity, // Represents monitoring and analysis activities
      title: 'AQ Monitoring, Chemical Analysis, SA',
      description: ''
    },
    {
      icon: Database, // Represents data collection and inventory
      title: 'Emission Inventory and Emission Projection',
      description: ''
    },
    {
      icon: Wind, // Represents air flow and dispersion
      title: 'Dispersion Modeling',
      description: ''
    },
    {
      icon: Settings, // Represents integrated control systems
      title: 'Integrated Air Pollution Control: Demonstration',
      description: ''
    },
    {
      icon: Cloud, // Represents weather and climate
      title: 'Meteorology and Climate Science',
      description: ''
    },
    {
      icon: Heart, // Represents health and well-being
      title: 'Impact Assessment: Health and Ecosystem',
      description: ''
    }
  ];

  const stats = [
    { value: '15+', label: 'Years of Research' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Expert Team Members' },
    { value: '100+', label: 'Communities Served' }
  ];

  const recentPosts = [
    {
      title: 'New Air Quality Monitoring Technologies',
      excerpt: 'Exploring the latest innovations in environmental sensor technology...',
      date: '2024-01-15',
      category: 'Technology'
    },
    {
      title: 'Community Health Impact Studies',
      excerpt: 'Research findings on air pollution effects in urban communities...',
      date: '2024-01-10',
      category: 'Research'
    },
    {
      title: 'Policy Recommendations for Clean Air',
      excerpt: 'Evidence-based policy proposals for improved air quality standards...',
      date: '2024-01-05',
      category: 'Policy'
    }
  ];
  const internationalPartners = [
    { name: 'Clean Air Asia', href: 'https://cleanairasia.org/', logo: partner1 },
    { name: 'FHI 360', href: 'https://www.fhi360.org/', logo: partner2 },
    { name: 'HEAL Global Research Centre', href: 'https://www.canberra.edu.au/faculties/health/heal', logo: partner3 },
    { name: 'Academia Sinica', href: 'https://www.sinica.edu.tw/en', logo: partner4 },
    { name: 'egis', href: 'https://www.egis-group.com/', logo: partner5 },
    { name: 'University of Canberra', href: 'https://www.canberra.edu.au/', logo: partner6 },
    { name: 'Pollution Control Department, Thailand', href: 'https://www.pcd.go.th/', logo: pcdLogo },
  ];

  const collaborators = [
    { name: 'World Bank', href: 'https://www.worldbank.org/ext/en/home', logo: worldBank },
    { name: 'Airparif', href: 'https://www.airparif.fr/', logo: Airparif },
    { name: 'BKTP', href: '#', logo: bktp },
    { name: 'Citepa', href: '#', logo: citepa },
    { name: 'Clean Air Asia', href: 'https://cleanairasia.org/', logo: partner1 },
    { name: 'FHI 360', href: 'https://www.fhi360.org/', logo: partner2 },
    { name: 'HEAL', href: 'https://www.canberra.edu.au/faculties/health/heal', logo: partner3 },
    { name: 'Academia Sinica', href: 'https://www.sinica.edu.tw/en', logo: partner4 },
    { name: 'EANET', href: 'https://www.eanet.asia/', logo: eanet },
    { name: 'Pollution Control Department', href: 'https://www.pcd.go.th/', logo: pcd },
    { name: 'Emory University', href: 'https://www.emory.edu/home/index.html', logo: emory },
    { name: 'FMI', href: 'https://en.ilmatieteenlaitos.fi/', logo: fmi },
    { name: 'IGES', href: 'https://www.iges.or.jp/en', logo: iges },
    { name: 'IIASA', href: 'https://iiasa.ac.at/', logo: iiasa },
    { name: 'IRD', href: 'https://en.ird.fr/', logo: ird },
    { name: 'Live & Learn', href: 'https://livelearn.org/', logo: liveLearn },
    { name: 'RIFS', href: 'https://www.rifs-potsdam.de/en', logo: rifs },
    { name: 'Particles Plus', href: 'https://particlesplus.com/', logo: particlesPlus },
    { name: 'UNEP', href: 'https://www.unep.org/', logo: unep },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData
        type="Organization"
        data={{}}
      />
      <StructuredData
        type="WebSite"
        data={{}}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Home})` }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-sky-blue/20"></div> */}
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 h-full flex items-center justify-center">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white-700 via-white-700 to-white-900 bg-clip-text"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Center for Nexus of Air Quality, Health, Ecosystem, and Climate
            </motion.h1>
            <motion.p 
              className="text-center text-xl md:text-2xl mb-8 text-white max-w-10xl mx-auto bg-green-700/85 rounded-full px-12 py-3 shadow"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              A leading Center in conducting and implementing application research with the aim to gain multiple 
              benefits from reducing air pollution through improvement of health of human and ecosystem, and 
              protection of the climate system.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            >
              <Link to="/projects" aria-label="Go to Projects">
                <Button size="lg" className="px-8 py-4 text-lg bg-background/80 text-foreground backdrop-blur-md border border-white/30 shadow-lg transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-2xl">
                  Explore Our Research
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="border-t border-gray-200"></div>

      {/* About Our Center Card */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h2 
              className="text-5xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
              variants={fadeUpVariants}
            >
              Air Quality Nexus
              <span className="block text-primary">Center</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-grey/90 leading-relaxed mb-6 font-medium max-w-6xl mx-auto text-center"
              variants={fadeUpVariants}
            >
              Air Quality Nexus Center has a goal to serve as a focal point to build capacity and conduct cutting-edge 
              research in atmospheric sciences for effective improvement of air quality in Asia and beyond. The Center will be an institution-wide Center, cooperating with multidisciplinary and cutting-edge research 
              areas of the schools and other AIT Centers to foster collaboration and strengthen AIT research and education capacity.
            </motion.p>
          </motion.div>
        </div>
      </section>



      {/* Our Missions (glass blur) */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bg_3} alt="Air pollution background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Suspense fallback={<div className="max-w-4xl mx-auto grid grid-cols-1 gap-8"><CardSkeleton className="h-64" /><CardSkeleton className="h-96" /></div>}>
            <MissionVisionCards />
          </Suspense>
        </div>
      </section>

      {/* Section Separator */}
      <div className="border-t border-gray-200"></div>

      {/* Recent Research & News */}
      <section id="news-events" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20"> 
            <h2 className="text-5xl font-bold text-foreground mb-6">News & Events</h2>
          </div>      
          
          {/* Upcoming Events Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
              <NewsEventsSubtitle />
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
            </div>
              <Suspense fallback={<div className="max-w-4xl mx-auto"><div className="animate-pulse bg-gray-200 rounded-3xl h-[400px] shadow-2xl"></div></div>}>
              <NewsEventsCards />
            </Suspense>
          </div>

          {/* Latest News Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
              <h3 className="text-2xl font-bold">Latest News</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
            </div>
            <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div className="animate-pulse bg-gray-200 rounded-3xl h-[300px] shadow-xl"></div><div className="animate-pulse bg-gray-200 rounded-3xl h-[300px] shadow-xl"></div><div className="animate-pulse bg-gray-200 rounded-3xl h-[300px] shadow-xl"></div></div>}>
              <LatestNewsCards />
            </Suspense>
          </div>

          {/* Navigation Button */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-muted-foreground">Discover more events and news</p>
              <Link to="/news" aria-label="Go to News & Events">
                <Button
                  size="lg"
                  className="group px-8 py-4 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  View All News & Events
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Team Photo Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamGroupPhoto} 
            alt="Research team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
        {/* Overlay CTA Buttons */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-4">
          <Link to="/launching-event" aria-label="Go to Launching Event">
            <Button
              size="lg"
              className="px-8 py-4 text-lg bg-background/80 text-foreground backdrop-blur-md border border-white/30 shadow-lg transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-2xl"
            >
              Launching Event
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section Separator */}
      <div className="border-t border-gray-200"></div>

      {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">Our Thematic Areas</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From cutting-edge research to community engagement, we tackle air quality challenges 
                through multiple integrated approaches.
              </p>
            </div>
                  
            {/* Modified grid layout - 3 columns × 2 rows */}
            <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">{[...Array(6)].map((_, i) => (<CardSkeleton key={i} className="aspect-square" />))}</div>}>
              <ThematicAreasCards />
            </Suspense>
          </div>
        </section>

        {/* Section Separator */}
        <div className="border-t border-gray-200"></div>

      {/* Strategic Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Strategic Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading organizations to advance air quality research and policy worldwide.
            </p>
          </div>
          
          <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">{[...Array(6)].map((_, i) => (<CardSkeleton key={i} className="h-56" />))}</div>}>
            <StrategicPartnersCards />
          </Suspense>
        </div>
      </section>

      {/* Section Separator */}
      <div className="border-t border-gray-200"></div>

       {/* International partners and collaborators */}
       <section className="py-20 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-5xl md:text-5xl font-bold text-foreground mb-4">International Partners and Collaborators</h2>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Key international organizations and universities we collaborate with.
             </p>
           </div>
            <Suspense fallback={<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">{[...Array(21)].map((_, i) => (<CardSkeleton key={i} className="h-48" />))}</div>}>
              <InternationalCollaboratorsCards />
            </Suspense>
         </div>
       </section>

       {/* Section Separator */}
       <div className="border-t border-gray-200"></div>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<CardSkeleton className="h-80" />}>
            <CallToActionCard />
          </Suspense>
        </div>
      </section>

            {/* <section className="py-20 bg-[linear-gradient(to_right,white,#e0f2fe)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <div className="flex justify-center items-center space-x-2">
              <img src={logo} alt="Air Quality Nexus" className="h-10 w-16 bg-transparent" />
              <span className="text-4xl font-bold text-foreground">Air Quality Nexus</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Leading research and advocacy for cleaner air and sustainable environmental solutions.
            </p>
            <div className="flex justify-center space-x-8">
              <Facebook size={40} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter size={40} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin size={40} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>
      </section> */}

    </>
  );
};

export default Index;