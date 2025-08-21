import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Layers, Scale, Shield, GraduationCap, ArrowRight, Wind, BarChart3, Users, Globe, Leaf, Zap } from 'lucide-react';
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
import igesLogo from '@/assets/partners/international/iges.svg';
import pcdLogo from '@/assets/partners/international/pcd-thailand.png';
import climateImage from '@/assets/co-benefits.png';
import capacity from '@/assets/capacity.jpg';
import logo from '@/assets/aqc.png';
import teamGroupPhoto from '@/assets/team-group-photo.jpg';
import pm25Image from '@/assets/pm2.5.png';
import { Target, Eye } from 'lucide-react';
import Airparif from '@/assets/collaborators/Airparif.png';
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
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Index = () => {
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
      icon: BookOpen, // More appropriate for research
      title: 'High-Quality Research',
      description: ''
    },
    {
      icon: Layers, // Represents multiple layers/pollutants
      title: 'Multi-Pollutant Approach',
      description: ''
    },
    {
      icon: Scale, // Represents balance/assessment
      title: 'Co-Benefits Assessment',
      description: ''
    },
    {
      icon: Globe,
      title: 'International Collaboration',
      description: ''
    },
    {
      icon: Shield, // Represents government support
      title: 'Government Assistance',
      description: ''
    },
    {
      icon: GraduationCap, // Represents training/education
      title: 'Capacity Building & Training',
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
    { name: 'IGES', href: 'https://www.iges.or.jp/', logo: igesLogo },
    { name: 'Pollution Control Department, Thailand', href: 'https://www.pcd.go.th/', logo: pcdLogo },
  ];

  const collaborators = [
    { name: 'Airparif', href: 'https://www.airparif.fr/', logo: Airparif },
    { name: 'BKTP', href: '#', logo: bktp },
    { name: 'Citepa', href: '#', logo: citepa },
    { name: 'Clean Air Asia', href: 'https://cleanairasia.org/', logo: partner1 },
    { name: 'FHI 360', href: 'https://www.fhi360.org/', logo: partner2 },
    { name: 'HEAL', href: 'https://www.canberra.edu.au/faculties/health/heal', logo: partner3 },
    { name: 'Academia Sinica', href: 'https://www.sinica.edu.tw/en', logo: partner4 },
    { name: 'Hanoi University of Science and Technology', href: 'https://hust.edu.vn/en/', logo: hanoiUniversity },
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
    { name: 'VANLANG', href: 'https://www.vlu.edu.vn/en', logo: vanlang },    
    { name: 'VNU', href: 'https://english.hus.vnu.edu.vn/', logo: vnu },
  ];

  return (
    <>
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
              <Link to="/blog" aria-label="Go to Projects">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Explore Our Research
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Our Center Card */}
      <section className="py-24 bg-[linear-gradient(to_right,white,#e0f2fe)]">
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
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            <div className="bg-white/15 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl">
              <h2 className="text-5xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-xl text-white/90">
                Air Quality Nexus will be a leading Center in conducting and implementing application research with the aim to gain
                multiple benefits from reducing air pollution through improvement of health of human and ecosystem,
                and protection of the climate system.
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl">
              <h2 className="text-5xl font-bold text-white mb-4">Our Missions</h2>
              <ul className="text-xl list-disc pl-6 space-y-3 text-white/90">
                <li>Conduct high-quality research demonstrated by real-life applications for improving air quality in Asia and beyond;</li>
                <li>Focus on the multi-pollutant and multi-effect approach to provide cost-effective solutions to complex air pollution problems;</li>
                <li>Demonstrate and quantitatively assess the co-benefits to air quality and climate of integrated measures applicable in local context;</li>
                <li>Continue and expand international cooperation in conducting research projects, consultancies, training, etc.;</li>
                <li>Provide assistance to governments, and other development partners in the planning, designing, scaling up, and implementation of clean air action plans with multiple benefits.</li>
                <li>Build capacity and promote multi-disciplinary approaches in atmospheric sciences within AIT and internationally;</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Research & News */}
      <section className="py-20 bg-[linear-gradient(to_right,white,#e0f2fe)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">News & Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest research findings, publications, and news from the Air Quality Nexus Center.
            </p>
          </div>
          
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-2xl font-bold">Upcoming Events</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={capacity} 
                    alt="International Conference on Air Quality Management"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Sep 15
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">International Conference on Air Quality Management</h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-1">
                      9:00 AM - 5:00 PM
                    </div>
                    <div className="flex items-center gap-1">
                      Bangkok, Thailand
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">A comprehensive conference bringing together researchers, policymakers, and industry experts to discuss latest developments in air quality management across Southeast Asia.</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={multidisciplinaryImage} 
                    alt="Workshop on Emission Inventory Development"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Oct 22
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Workshop on Emission Inventory Development</h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-1">
                      2:00 PM - 6:00 PM
                    </div>
                    <div className="flex items-center gap-1">
                      Virtual Event
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">Hands-on workshop for building technical capacity in emission inventory development using latest methodologies and tools.</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
                    {/* Navigation Button */}
          <div className="text-center">
            <Link to="/news" aria-label="Go to News & Events">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                View All News & Events
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
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


      {/* Features Section */}
        <section className="py-20 bg-[linear-gradient(to_right,white,#e0f2fe)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">Our Thematic Areas</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From cutting-edge research to community engagement, we tackle air quality challenges 
                through multiple integrated approaches.
              </p>
            </div>
                  
            {/* Modified grid layout - 3 columns × 2 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.slice(0, 6).map((feature, index) => ( // Show only 6 items (3×2)
              <Link 
                key={index}
                to={`/what-we-do#${feature.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                className="block"
              >
                <Card 
                  className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/50 aspect-square cursor-pointer hover:scale-105" // aspect-square makes it square
                >
                  <CardContent className="h-full p-6 flex flex-col items-center justify-center text-center">
                    <feature.icon className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={99} />
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
            </div>
          </div>
        </section>



      {/* Strategic Partners Section */}
      <section className="py-20 bg-[linear-gradient(to_right,white,#e0f2fe)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Strategic Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading organizations to advance air quality research and policy worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://cleanairasia.org/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner1}
                        alt="Clean Air Asia logo"
                        className="max-h-full max-w-full object-contain"
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
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.05 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://www.fhi360.org/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner2}
                        alt="FHI 360 logo"
                        className="max-h-full max-w-full object-contain"
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
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://www.canberra.edu.au/faculties/health/heal" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner3}
                        alt="HEAL Global Research Centre logo"
                        className="max-h-full max-w-full object-contain"
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
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.15 }}
                className="w-full flex flex-col items-center"
              >
                <a href="https://www.sinica.edu.tw/en" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-3xl h-44 w-full flex items-center justify-center">
                    <CardContent className="p-6 h-full w-full flex items-center justify-center">
                      <img 
                        src={partner4}
                        alt="Academia Sinica logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </CardContent>
                  </Card>
                </a>
                <h3 className="mt-3 text-base font-medium text-foreground">Academia Sinica</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


       {/* International partners and collaborators */}
       <section className="py-20 bg-[linear-gradient(to_right,white,#e0f2fe)]">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-5xl md:text-5xl font-bold text-foreground mb-4">International Partners and Collaborators</h2>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Key international organizations and universities we collaborate with.
             </p>
           </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {collaborators.map((p, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 14, delay: idx * 0.06 }}
                    className="w-full flex flex-col items-center"
                  >
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-3xl h-36 w-full flex items-center justify-center">
                        <CardContent className="p-4 h-full w-full flex items-center justify-center">
                          <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                        </CardContent>
                      </Card>
                    </a>
                    <h3 className="mt-3 text-sm font-medium text-foreground">{p.name}</h3>
                  </motion.div>
                </div>
              ))}
            </div>
         </div>
       </section>

      {/* Call to Action */}
      <section className="py-20 bg-[linear-gradient(to_right,white,#e0f2fe)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-white/10 to-sky-blue/10 border-primary/10">
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
                      variant="secondary" 
                      className="bg-green-600 text-white hover:bg-green-700"
                    >
                      Partner With Us
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
            </CardContent>
          </Card>
        </div>
      </section>

            <section className="py-20 bg-[linear-gradient(to_right,white,#e0f2fe)]">
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
      </section>

    </>
  );
};

export default Index;