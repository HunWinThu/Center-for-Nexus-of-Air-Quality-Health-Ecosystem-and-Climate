import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    upcoming: [
      {
        id: 2,
        title: 'Climate Change Adaptation to Smoke Haze for Improved Child Health in Southeast Asia',
        image: ""
      },
    ]
  };


  const renderProjectCard = (project: typeof projects.ongoing[0]) => (
    <Card 
      key={project.id} 
      className="hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image || governmentImg} 
          alt={project.title}
          className={`w-full h-64 ${project.image === laos ? 'object-contain bg-gray-50' : 'object-cover'}`}
        />
      </div>
      
      {/* Project Title */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
          {project.title}
        </h3>
      </div>
    </Card>
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
          <Tabs defaultValue="ongoing">
            <TabsList className="grid w-full grid-cols-3 bg-accent/50 p-2 rounded-lg mb-8">
              <TabsTrigger 
                value="ongoing" 
                className="text-xs sm:text-sm md:text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground px-2 sm:px-4"
              >
                On-going Projects
              </TabsTrigger>
              <TabsTrigger 
                value="completed" 
                className="text-xs sm:text-sm md:text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground px-2 sm:px-4"
              >
                Completed Projects
              </TabsTrigger>
              <TabsTrigger 
                value="upcoming" 
                className="text-xs sm:text-sm md:text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground px-2 sm:px-4"
              >
                Upcoming Projects
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ongoing" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.ongoing.map(renderProjectCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.completed.map(renderProjectCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.upcoming.map(renderProjectCard)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

    </>
  );
};

export default Blog;