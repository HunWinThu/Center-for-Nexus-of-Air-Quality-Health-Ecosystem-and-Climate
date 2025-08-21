import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import images
import capacityImg from '@/assets/capacity.jpg';
import airPollutionResearchImg from '@/assets/air-pollution-research.png';
import riceStrawBurningImg from '@/assets/rice-straw-burning.jpg';
import governmentImg from '@/assets/government.jpg';
import higQualityImg from '@/assets/hig-quality.jpg';
import coBenefitsImg from '@/assets/co-benefits.png';

interface Project {
  id: number;
  title: string;
  sponsor: string;
  partners: string;
  duration: string;
  objectives: string | string[];
  activities: string | string[];
  achievements?: string[];
  image: string;
}

const Blog = () => {
  const navigate = useNavigate();

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

  const projects: {
    ongoing: Project[];
    completed: Project[];
    upcoming: Project[];
  } = {
    ongoing: [
      {
        id: 1,
        title: 'Air Quality Improvement Program in Thailand (AQIP-Thailand)',
        sponsor: 'AFD',
        partners: 'Egis, AirParif, Citepa',
        duration: '2023-2026',
        objectives: 'To support partner countries and cities in the region in their efforts to develop and implement policies and projects in order to improve air quality.',
        activities: 'Technical support at local and national levels to enhance knowledge of air pollution phenomena, strengthen local capacities, and support public policy formulation',
        image: governmentImg
      },
      {
        id: 2,
        title: 'Climate Change Adaptation to Smoke Haze for Improved Child Health in Southeast Asia',
        sponsor: 'e-Asia',
        partners: 'Australia, Thailand, Indonesia, Cambodia, and Laos',
        duration: '2024-2027',
        objectives: 'To strengthen research and development capabilities towards resolution of shared challenges across the region.',
        activities: 'Assess the effectiveness of climate change adaptation interventions for strengthening community resilience to smoke haze in SEA',
        image: airPollutionResearchImg
      },
      {
        id: 3,
        title: 'Assessment of agricultural and forest burning emissions in Lao PDR (Forest Fire Emission- Lao)',
        sponsor: 'The World Bank Group (WBG)',
        partners: 'Lao PDR',
        duration: '2025',
        objectives: 'To conduct a science-based assessment of air pollution from agricultural residue and forest open burning practices in Laos.',
        activities: [
          'Collect and analyze satellite data',
          'Develop methodology framework for land-use cover change',
          'Compile emission inventory',
          'Provide recommendations'
        ],
        image: riceStrawBurningImg
      },
      {
        id: 4,
        title: 'Deliver training programme for implementing decrees for reducing open waste burning and air pollution',
        sponsor: 'United Nations Environment Programme (Climate and Clean Air Coalition, CCAC)',
        partners: 'Clean Air Asia, Ministry of Environment of Cambodia',
        duration: '2025-2027',
        objectives: 'To support Cambodia in effectively reducing open burning and improving air quality through an action plan and training program.',
        activities: [
          'Provide technical expertise in air quality management',
          'Develop technical guidelines on alternatives to open waste burning',
          'Co-lead action plan to reduce municipal solid waste open burning'
        ],
        image: governmentImg
      },
      {
        id: 7,
        title: 'Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (CANBREATHE)',
        sponsor: 'Wellcome Trust',
        partners: 'Australia, Thailand, Indonesia, Cambodia, and Laos',
        duration: '2025-2028',
        objectives: [
          'Estimate burden of wildfire smoke on population health',
          'Understand public perceptions of wildfire health impacts',
          'Build skills and resilience',
          'Inform climate and health policy development'
        ],
        activities: 'Apply climate attribution modelling and storylines to assess the influence of climate change on extreme wildfires and related health impacts',
        image: coBenefitsImg
      }
    ],
    completed: [
      {
        id: 5,
        title: 'USAID Clean Air (K-CAP or Swachchha Hawa)',
        sponsor: 'USAID',
        partners: 'Family Health International (FHI 360)',
        duration: '2022-2025',
        objectives: [
          'Improve Government of Nepal capacity at all levels',
          'Improve civil society and citizen engagement',
          'Enhance private sector involvement'
        ],
        activities: [
          'Technical guidance for air quality data management',
          'Supporting data compilation and analysis',
          'Building capacity in emissions inventory',
          'Establishment of consortium of air pollution researchers'
        ],
        achievements: [
          'Published technical report "State of Air in Nepal"',
          'Developed Excel-based EI calculator',
          'Conducted hands-on training for governmental officers',
          'Launched CARN with multiple successful meetings',
          'Graduated 3 Master\'s students with related research'
        ],
        image: capacityImg
      }
    ],
    upcoming: [
      {
        id: 6,
        title: 'Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (CANBREATHE)',
        sponsor: 'Wellcome Trust',
        partners: 'Australia, Thailand, Indonesia, Cambodia, and Laos',
        duration: '2025-2028',
        objectives: [
          'Estimate burden of wildfire smoke on population health',
          'Understand public perceptions of wildfire health impacts',
          'Build skills and resilience',
          'Inform climate and health policy development'
        ],
        activities: 'Apply climate attribution modelling and storylines to assess the influence of climate change on extreme wildfires and related health impacts',
        image: coBenefitsImg
      }
    ]
  };


  const renderProjectCard = (project: typeof projects.ongoing[0]) => (
    <Card key={project.id} className="hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <DollarSign size={14} />
            Funding: {project.sponsor}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock size={14} />
            Duration: {project.duration}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold">Partners:</h4>
          <p className="text-muted-foreground">{project.partners}</p>
        </div>
        
        <div>
          <h4 className="font-semibold">Objectives:</h4>
          {Array.isArray(project.objectives) ? (
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {project.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">{project.objectives}</p>
          )}
        </div>
        
        <div>
          <h4 className="font-semibold">Key Activities:</h4>
          {Array.isArray(project.activities) ? (
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {project.activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">{project.activities}</p>
          )}
        </div>
        
        {'achievements' in project && project.achievements && Array.isArray(project.achievements) && (
          <div>
            <h4 className="font-semibold">Major Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {project.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        )}
        
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={() => navigate(`/project/${project.id}`)}
        >
          View Project Details
        </Button>
      </CardContent>
    </Card>
  );

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
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Projects
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ongoing">
            <TabsList className="grid w-full grid-cols-3 bg-muted">
              <TabsTrigger value="ongoing" className="py-4 data-[state=active]:bg-background">
                On-going Projects
              </TabsTrigger>
              <TabsTrigger value="completed" className="py-4 data-[state=active]:bg-background">
                Completed Projects
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="py-4 data-[state=active]:bg-background">
                Upcoming Projects
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ongoing" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.ongoing.map(renderProjectCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.completed.map(renderProjectCard)}
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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