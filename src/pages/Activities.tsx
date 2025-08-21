import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Activities = () => {
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

  const activities = [
    {
      id: 1,
      title: 'Smart Digital Monitoring System for Improved Respiratory Health of Elderly and Pregnant People',
      description: 'Developing and testing a smart health monitoring platform for vulnerable populations, integrating air quality data with health outcomes in collaboration with international partners.',
      location: 'Thailand, Japan, Germany',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'ongoing',
      participants: 15,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      category: 'Research',
      partner: 'Hokkaido University, Technical University of Munich',
      aitRole: 'Lead Research Partner'
    },
    {
      id: 2,
      title: 'Multi-Sensor Platform for Indoor and Outdoor Air Quality Assessment',
      description: 'Creating comprehensive sensor networks to monitor air quality parameters across different environments, supporting data-driven environmental health decisions.',
      location: 'Thailand, Regional ASEAN',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'ongoing',
      participants: 12,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      category: 'Research',
      partner: 'ASEAN University Network',
      aitRole: 'Technology Development Lead'
    },
    {
      id: 3,
      title: 'Low-Cost Air Quality Sensor Development and Deployment',
      description: 'Innovative sensor technology development focusing on affordability and accessibility for widespread air quality monitoring in developing regions.',
      location: 'Southeast Asia',
      startDate: '2023-01-01',
      endDate: '2024-12-31',
      status: 'ongoing',
      participants: 20,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      category: 'Technology',
      partner: 'Multiple Regional Universities',
      aitRole: 'Lead Institution'
    },
    {
      id: 4,
      title: 'Community-Based Air Quality Monitoring Network',
      description: 'Empowering local communities with tools and knowledge to monitor and respond to air quality issues in their neighborhoods.',
      location: 'Bangkok Metropolitan Area',
      startDate: '2023-06-01',
      endDate: '2024-06-30',
      status: 'ongoing',
      participants: 45,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      category: 'Community',
      partner: 'Local Government Agencies',
      aitRole: 'Technical Support Provider'
    },
    {
      id: 5,
      title: 'Air Quality Data Analytics and Visualization Platform',
      description: 'Advanced data analytics platform for processing and visualizing air quality data to support policy making and public awareness.',
      location: 'Thailand',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      status: 'completed',
      participants: 8,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
      category: 'Data Science',
      partner: 'Government Data Centers',
      aitRole: 'Data Analytics Lead'
    },
    {
      id: 6,
      title: 'Regional Air Quality Research Consortium',
      description: 'Multi-country research initiative coordinating air quality studies across Southeast Asia to address transboundary pollution challenges.',
      location: 'ASEAN Region',
      startDate: '2022-01-01',
      endDate: '2024-12-31',
      status: 'ongoing',
      participants: 35,
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop',
      category: 'Research',
      partner: 'ASEAN+3 Field of Study',
      aitRole: 'Coordinating Institution'
    },
    {
      id: 7,
      title: 'Climate Change and Air Quality Nexus Study',
      description: 'Comprehensive research examining the interconnections between climate change patterns and air quality variations in tropical regions.',
      location: 'Southeast Asia',
      startDate: '2022-06-01',
      endDate: '2023-12-31',
      status: 'completed',
      participants: 25,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      category: 'Climate Research',
      partner: 'International Climate Organizations',
      aitRole: 'Research Partner'
    },
    {
      id: 8,
      title: 'Urban Heat Island and Air Quality Interaction Study',
      description: 'Investigating how urban heat islands affect air quality patterns and developing mitigation strategies for tropical cities.',
      location: 'Bangkok, Chiang Mai',
      startDate: '2022-01-01',
      endDate: '2023-06-30',
      status: 'completed',
      participants: 18,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      category: 'Urban Studies',
      partner: 'City Planning Departments',
      aitRole: 'Environmental Assessment Lead'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      ongoing: 'bg-nature-green/20 text-earth-green',
      completed: 'bg-blue-100 text-blue-800',
      upcoming: 'bg-sky-blue/20 text-ocean-blue'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Research: 'bg-purple-100 text-purple-800',
      Technology: 'bg-blue-100 text-blue-800',
      Community: 'bg-green-100 text-green-800',
      'Data Science': 'bg-cyan-100 text-cyan-800',
      'Climate Research': 'bg-orange-100 text-orange-800',
      'Urban Studies': 'bg-red-100 text-red-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants}>
              <Badge variant="secondary" className="mb-4">Our Work</Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Research Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              Advancing air quality science through innovative research, international collaborations, and cutting-edge technology development at the Air Quality Nexus Center.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                variants={cardVariants}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-accent/10">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <motion.img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-48 object-cover"
                      variants={imageVariants}
                      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                      whileHover={{ scale: 1.08 }}
                    />
                    <div className="absolute top-4 left-4 space-x-2">
                      <Badge className={getStatusColor(activity.status)}>
                        {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                      </Badge>
                      <Badge className={getCategoryColor(activity.category)}>
                        {activity.category}
                      </Badge>
                    </div>
                  </div>
                
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{activity.participants} researchers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>
                        {new Date(activity.startDate).toLocaleDateString()} - {' '}
                        {new Date(activity.endDate).toLocaleDateString()}
                      </span>
                    </div>
                    {(activity as any).partner && (
                      <div className="text-xs">
                        <span className="font-medium">Partner:</span> {(activity as any).partner}
                      </div>
                    )}
                    {(activity as any).aitRole && (
                      <div className="text-xs">
                        <span className="font-medium">AIT Role:</span> {(activity as any).aitRole}
                      </div>
                    )}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ExternalLink size={16} className="mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-sky-blue/10 border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Collaborate With AIT</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join the Air Quality Nexus Center's mission to advance air quality research. We welcome collaborations with international institutions, researchers, and organizations committed to environmental health innovation.
                </p>
                <div className="space-x-4">
                  <Button size="lg">Research Collaboration</Button>
                  <Button size="lg" variant="outline">Visit Our Center</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </>
  );
};

export default Activities;