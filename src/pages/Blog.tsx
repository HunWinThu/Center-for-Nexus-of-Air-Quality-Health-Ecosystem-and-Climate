import { MainLayout } from '@/components/layout/MainLayout';
// Removed Card wrapper: projects will be rendered as a simple list
// Tabs removed: projects will be displayed in a two-column layout
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import images
import capacityImg from '@/assets/capacity.jpg';
import airPollutionResearchImg from '@/assets/air-pollution-research.png';
import riceStrawBurningImg from '@/assets/rice-straw-burning.jpg';
import governmentImg from '@/assets/government.jpg';
import coBenefitsImg from '@/assets/co-benefits.png';
import laos from '@/assets/Laos_neighbours.png'
import forestFireImg from '@/assets/project_detail/forest_fire.png';
import openburning from '@/assets/project_detail/open_waste burning.png';
import canbrathe from '@/assets/project_detail/canbrethe.png';
import healHaze from '@/assets/project_detail/heal-haze.png';




interface Project {
  id: number;
  title: string;
  image: string;
}

const Blog = () => {
  const navigate = useNavigate();

  // Animation variants - balanced timing for elegant loading
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.7
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const projects: {
    ongoing: Project[];
    completed: Project[];
    upcoming: Project[];
  } = {
    ongoing: [
      {
        id: 1,
        title: 'Air Quality Improvement Program in Thailand (AQIP-Thailand)',
        image: governmentImg
      },
      {
        id: 3,
        title: 'Assessment of agricultural and forest burning emissions in Lao PDR (Forest Fire Emission- Lao)',
        image: forestFireImg
      },
      {
        id: 4,
        title: 'Deliver training programme for implementing decrees for reducing open waste burning and air pollution',
        image: openburning
      },
      {
        id: 7,
        title: 'Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (CANBREATHE)',
        image: canbrathe
      },
      {
        id: 8,
        title: 'Climate Change Adaptation to Smoke Haze for Improved Child Health in Southeast Asia (HEAL-HAZE)',
        image: healHaze
      }
    ],
    completed: [
      {
        id: 5,
        title: 'USAID Clean Air (K-CAP or Swachchha Hawa)',
        image: capacityImg
      }
    ],
    upcoming: []
  };


  const renderProjectRow = (project: typeof projects.ongoing[0]) => (
    <li key={project.id} className="py-2">
      <button
        onClick={() => navigate(`/project/${project.id}`)}
        className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors text-left w-full"
      >
        {project.title}
      </button>
    </li>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-primary mb-6"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Projects
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="pt-4 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">On-going Projects</h2>
              <ul className="list-disc pl-6 space-y-2">
                {projects.ongoing.map(renderProjectRow)}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">Recently Completed Projects</h2>
              <ul className="list-disc pl-6 space-y-2">
                {projects.completed.map(renderProjectRow)}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Blog;