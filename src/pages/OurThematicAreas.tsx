import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HexagonGrid } from '@/components/thematic/HexagonGrid';

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
<section className="relative py-16 md:py-20">
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
  {/* Decorative waves */}
  <div aria-hidden className="pointer-events-none absolute right-0 top-4 -z-10 opacity-30">
    <svg width="520" height="220" viewBox="0 0 520 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
      {[...Array(10)].map((_, i) => (
        <path key={i} d={`M0 ${20 + i*18} C 120 ${0 + i*18}, 260 ${40 + i*18}, 520 ${12 + i*18}`} className="stroke-primary" strokeWidth="2" fill="none" />
      ))}
    </svg>
  </div>
</section>

{/* Core Activities Hexagon Grid */}
<section className="py-12 bg-accent/10">
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
        <section className="py-12 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              Want to collaborate or learn more? Visit our Team page or Contact us.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <a href="/air-quality-nexus-center/team" className="underline text-primary">Meet the Team</a>
              <a href="/air-quality-nexus-center/contact" className="underline text-primary">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
  );
};

export default OurThematicAreas;
