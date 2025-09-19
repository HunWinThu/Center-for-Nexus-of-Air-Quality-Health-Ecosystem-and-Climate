import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HexagonGrid } from '@/components/thematic/HexagonGrid';
import ScopeCooperationDiagram from '@/components/diagrams/ScopeCooperationDiagram';

import cooperationImg from '@/assets/cooperation.jpg';
import capacityImg from '@/assets/capacity.jpg';

import missionsHero from '@/assets/hig-quality.jpg';
import multidisciplinaryImage from '@/assets/multi.png';
import governmentImage from '@/assets/government.jpg';
import climateImage from '@/assets/co-benefits.png';

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
        className="text-4xl md:text-5xl font-bold text-foreground mb-4"
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
<section className="pt-16 pb-32 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Air Quality Nexus — Scope & Cooperation</h2>
        <p className="text-lg text-muted-foreground">Our collaborative approach integrating air quality, climate, and planetary health</p>
      </div>
      <ScopeCooperationDiagram />
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="bg-white border-2 border-yellow-400 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 h-auto sm:h-56 md:h-60"
        >
          <div className="border-l-4 border-yellow-400 pl-3 sm:pl-4 md:pl-6 h-full">
            <h4 className="font-bold text-yellow-600 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">International Organizations</h4>
            <div className="flex flex-col space-y-1 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-600 sm:w-20 text-left mr-0 sm:mr-2">WMO</span><span>: World Meteorological Organization</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-600 sm:w-20 text-left mr-0 sm:mr-2">CCAC</span><span>: Climate & Clean Air Coalition</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-600 sm:w-20 text-left mr-0 sm:mr-2">IGES</span><span>: Institute for Global Environmental Strategies</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-600 sm:w-20 text-left mr-0 sm:mr-2">RIFS</span><span>: Research Institute for Future Studies</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-600 sm:w-20 text-left mr-0 sm:mr-2">RICARDO</span><span>: Ricardo Energy & Environment</span></div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Research Institutions & Universities */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white border-2 border-yellow-500 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 h-auto sm:h-56 md:h-60"
        >
          <div className="border-l-4 border-yellow-500 pl-3 sm:pl-4 md:pl-6 h-full">
            <h4 className="font-bold text-yellow-700 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Research Institutions & Universities</h4>
            <div className="flex flex-col space-y-1 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-700 sm:w-20 text-left mr-0 sm:mr-2">CAA</span><span>: Clean Air Asia</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-700 sm:w-20 text-left mr-0 sm:mr-2">IRD</span><span>: Institute of Research for Development</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-700 sm:w-20 text-left mr-0 sm:mr-2">IIASA</span><span>: International Institute for Applied Systems Analysis</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-700 sm:w-20 text-left mr-0 sm:mr-2">PKU</span><span>: Peking University</span></div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Health & Environment Organizations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white border-2 border-yellow-500 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 h-auto sm:h-56 md:h-60"
        >
          <div className="border-l-4 border-yellow-500 pl-3 sm:pl-4 md:pl-6 h-full">
            <h4 className="font-bold text-yellow-700 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Health & Environment Organizations</h4>
            <div className="flex flex-col space-y-1 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-700 sm:w-20 text-left mr-0 sm:mr-2">WHO</span><span>: World Health Organization</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-700 sm:w-20 text-left mr-0 sm:mr-2">EANET</span><span>: Acid Deposition Monitoring Network in East Asia</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-yellow-700 sm:w-20 text-left mr-0 sm:mr-2">SINICA</span><span>: Academia Sinica</span></div>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Asian Institute of Technology (AIT) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white border-2 border-blue-400 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 h-auto sm:h-56 md:h-60"
        >
          <div className="border-l-4 border-blue-400 pl-3 sm:pl-4 md:pl-6 h-full">
            <h4 className="font-bold text-blue-600 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Asian Institute of Technology (AIT)</h4>
            <div className="flex flex-col space-y-1 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-blue-600 sm:w-20 text-left mr-0 sm:mr-2">AIT</span><span>: Asian Institute of Technology</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-blue-600 sm:w-20 text-left mr-0 sm:mr-2">EEM</span><span>: Energy, Environment & Climate Change</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-blue-600 sm:w-20 text-left mr-0 sm:mr-2">RRC.AP</span><span>: Regional Resource Centre for Asia and the Pacific</span></div>
            </div>
          </div>
        </motion.div>

        {/* Card 5: Technical Terms - Centered in second row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white border-2 border-green-500 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 h-auto sm:h-44 md:h-48 lg:col-start-1 lg:col-end-3 lg:max-w-lg lg:mx-auto"
        >
          <div className="border-l-4 border-green-500 pl-3 sm:pl-4 md:pl-6 h-full">
            <h4 className="font-bold text-green-600 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Technical Terms</h4>
            <div className="flex flex-col space-y-1 sm:space-y-2 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-green-600 sm:w-20 text-left mr-0 sm:mr-2">GHG</span><span>: Greenhouse Gases</span></div>
              <div className="flex flex-col sm:flex-row"><span className="font-semibold text-green-600 sm:w-20 text-left mr-0 sm:mr-2">SLCF</span><span>: Short-Lived Climate Forcers</span></div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  </div>
</section>

{/* Section Separator */}
<div className="border-t border-gray-200"></div>

{/* Core Activities Hexagon Grid */}
<section id="core-activities" className="py-12 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Activities</h2>
        <p className="text-lg text-muted-foreground">Our key focus areas for improving air quality</p>
      </div>
      <HexagonGrid />
    </motion.div>
  </div>
</section>

{/* Section Separator */}
<div className="border-t border-gray-200"></div>

{/* Sections - alternating layout */}
<section className="py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
    {sections.map((s, i) => (
      <motion.article 
        key={i} 
        id={s.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardVariants}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          variants={imageVariants}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={s.img}
            alt={s.alt}
            loading="lazy"
            className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-md"
          />
        </motion.div>
        <motion.div variants={fadeUpVariants}>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">{s.title}</h2>
          <p className="text-muted-foreground mb-6">{s.text}</p>
          <a href="/air-quality-nexus-center/contact" className="inline-block">
            <Button>Learn More</Button>
          </a>
        </motion.div>
      </motion.article>
    ))}
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
