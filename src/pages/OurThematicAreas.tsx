import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { HexagonGrid } from '@/components/thematic/HexagonGrid';
import { Link } from 'react-router-dom';
import scopeDiagramImage from '@/assets/scope_diagram.png';

import cooperationImg from '@/assets/cooperation.jpg';
import capacityImg from '@/assets/capacity.jpg';

import missionsHero from '@/assets/hig-quality.jpg';
import multidisciplinaryImage from '@/assets/multi.png';
import governmentImage from '@/assets/government.jpg';
import climateImage from '@/assets/co-benefits.png';

import thematic1 from '@/assets/sliding/2.jpg';
import thematic2 from '@/assets/Our_Thematics/slide01_img02.png';
import thematic3 from '@/assets/Our_Thematics/Slide01_img03.png';
import thematic4 from '@/assets/Our_Thematics/slide01_img05.png';
import thematic5 from '@/assets/Our_Thematics/slide01_img01.png';
import thematic6 from '@/assets/Our_Thematics/slide01_img03.png';

const OurThematicAreas = () => {
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

  useEffect(() => {
    const title = 'Our Thematic Areas | Air Quality Nexus Center';
    document.title = title;

    const description = 'Discover what we do: research, partnerships, and capacity building for cleaner air.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    // Canonical tag
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `${window.location.origin}/air-quality-nexus-center/what-we-do`);

    // Handle hash navigation on mount
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Features data for Core Research Areas cards
  const features = [
    {
      title: 'Air quality Monitoring, Chemical Components Analysis, and Source Apportionment Study',
      image: thematic1
    },
    {
      title: 'Emission Inventories Development and Emissions Projection',
      image: thematic2
    },
    {
      title: 'Performance and Evaluation of Meteorological and Chemical Transport Modeling Systems',
      image: thematic3
    },
    {
      title: 'Integrated Air Pollution Control: Demonstration',
      image: thematic4
    },
    {
      title: 'Meteorology and Science of Climate Change',
      image: thematic5
    },
    {
      title: 'Impacts Assessment: Health, Ecosystem, and Climate Systems',
      image: thematic6
    }
  ];

  // Map feature titles to their respective thematic area routes
  const getThematicRoute = (title: string) => {
    const routeMap: { [key: string]: string } = {
      'Air quality Monitoring, Chemical Components Analysis, and Source Apportionment Study': '/thematic/monitoring-analysis',
      'Emission Inventories Development and Emissions Projection': '/thematic/emission-inventory',
      'Performance and Evaluation of Meteorological and Chemical Transport Modeling Systems': '/thematic/dispersion-modeling',
      'Integrated Air Pollution Control: Demonstration': '/thematic/pollution-control',
      'Meteorology and Science of Climate Change': '/thematic/meteorology-climate',
      'Impacts Assessment: Health, Ecosystem, and Climate Systems': '/thematic/impact-assessment'
    };
    return routeMap[title] || '/our-thematic-areas#core-activities';
  };

  // Thematic Areas Cards Component
  const ThematicAreasCards = () => {
    return (
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              to={getThematicRoute(feature.title)}
              className="block h-full"
            >
              <Card 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 text-center flex-1 flex items-center justify-center">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">{feature.title}</h3>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    );
  };

const sections = [
  {
    title: 'High-Quality Research',
    text: 'Conduct high-quality research demonstrated by real-life applications for improving air quality in Asia and beyond.',
    img: missionsHero,
    alt: 'High-quality air quality research'
  },
  {
    title: 'Multi-Pollutant Approach',
    text: 'Focus on the multi-pollutant and multi-effect approach to provide cost-effective solutions to complex air pollution problems.',
    img: multidisciplinaryImage,
    alt: 'Multi-pollutant approach for air quality management'
  },
  {
    title: 'Co-Benefits Assessment',
    text: 'Demonstrate and quantitatively assess the co-benefits to air quality and climate of integrated measures applicable in local context.',
    img: climateImage,
    alt: 'Co-benefits assessment for air quality and climate'
  },
  {
    title: 'International Collaboration',
    text: 'We work with global partners to co-design solutions, share data, and scale evidence-based practices across regions.',
    img: cooperationImg,
    alt: 'International cooperation and partnerships for clean air'
  },
  {
    title: 'Government Assistance',
    text: 'Provide assistance to governments and partners in planning, designing, scaling up, and implementing clean air action plans with multiple benefits.',
    img: governmentImage,
    alt: 'Government assistance for clean air action plans'
  },
  {
    title: 'Capacity Building & Training',
    text: 'We strengthen institutional and community capacity through training, workshops, and knowledge transfer.',
    img: capacityImg,
    alt: 'Capacity building and training in air quality management'
  }
];

  return (
      <main>
{/* Hero */}
{/* <section className="relative py-16 md:py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-primary mb-4"
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Our Thematic Areas
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-muted-foreground"
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      >
        Advancing clean air through research, collaboration, and real-world implementation.
      </motion.p>
    </motion.div>
  </div>
</section> */}

{/* Section Separator */}
<div className="border-t border-gray-200"></div>

{/* Scope & Cooperation Diagram */}
<section className="pt-1 pb-1 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="text-center mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Air Quality Nexus — Scope & Cooperation</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl"></p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={scopeDiagramImage}
          alt="Air Quality Nexus Scope & Cooperation Diagram"
          className="w-full h-auto"
        />
      </div>
    </motion.div>
  </div>
</section>

{/* Organization & Partners Legend */}
<section className="pt-2 pb-10 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* Card 1: International Organizations */}

      </div>
    </motion.div>
  </div>
</section>

{/* Section Separator */}
<div className="border-t border-gray-200"></div>

{/* Core Activities Hexagon Grid */}
<section id="core-activities" className="pt-8 pb-12 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Activities</h2>
        <p className="text-lg text-muted-foreground">Our key focus areas for improving air quality</p>
      </div>
      <HexagonGrid />
    </motion.div>
  </div>
</section>

{/* Section Separator */}
<div className="border-t border-gray-200"></div>

{/* Our Core Research Areas Section */}
<section id="research-areas" className="py-12 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Research Areas</h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
        From cutting-edge research to community engagement, we tackle air quality challenges through integrated
        multi-pollutant, multi-effect, and cross-sectoral approaches.
      </p>
    </div>
          
    {/* Modified grid layout - 3 columns × 2 rows */}
    <ThematicAreasCards />
  </div>
</section>

        {/* CTA */}
        {/* <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              Want to collaborate or learn more? Visit our Team page or Contact us.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <a href="/air-quality-nexus-center/team" className="underline text-primary">Meet the Team</a>
              <a href="/air-quality-nexus-center/contact" className="underline text-primary">Contact Us</a>
            </div>
          </div>
        </section> */}
      </main>
  );
};

export default OurThematicAreas;
