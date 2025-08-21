import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, DollarSign, Clock, Users, Target, Activity, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

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

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Project data (same as in Blog.tsx)
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
        image: capacityImg
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
        image: higQualityImg
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

  // Find project by ID
  const allProjects = [...projects.ongoing, ...projects.completed, ...projects.upcoming];
  const project = allProjects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/blog')}>
            Back to Projects
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
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Button>
        </div>

        {/* Hero Image */}
        <motion.section 
          className="relative w-full h-64 md:h-96 overflow-hidden"
          variants={imageVariants}
        >
          <img 
            src={project.image} 
            alt={project.title}
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
                {project.title}
              </motion.h1>
            </div>
          </div>
        </motion.section>

        {/* Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Key Info Badges */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Badge variant="secondary" className="flex items-center gap-3 px-4 py-2 text-base">
                <DollarSign size={18} className="text-primary" />
                <span className="font-medium">Funding:</span> {project.sponsor}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-3 px-4 py-2 text-base">
                <Clock size={18} className="text-primary" />
                <span className="font-medium">Duration:</span> {project.duration}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-3 px-4 py-2 text-base">
                <Users size={18} className="text-primary" />
                <span className="font-medium">Partners:</span> {project.partners}
              </Badge>
            </motion.div>

            {/* Project Sections */}
            <div className="space-y-12">
              {/* Objectives */}
              <motion.section variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Objectives</h2>
                </div>
                <div className="pl-9">
                  {Array.isArray(project.objectives) ? (
                    <ul className="space-y-3">
                      {project.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-lg leading-relaxed">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground text-lg leading-relaxed">{project.objectives}</p>
                  )}
                </div>
              </motion.section>

              {/* Key Activities */}
              <motion.section variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Activity size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Key Activities</h2>
                </div>
                <div className="pl-9">
                  {Array.isArray(project.activities) ? (
                    <ul className="space-y-3">
                      {project.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-lg leading-relaxed">{act}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground text-lg leading-relaxed">{project.activities}</p>
                  )}
                </div>
              </motion.section>

              {/* Achievements (if present) */}
              {project.achievements && project.achievements.length > 0 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Trophy size={24} className="text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Major Achievements</h2>
                  </div>
                  <div className="pl-9">
                    <ul className="space-y-3">
                      {project.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-lg leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.section>
              )}
            </div>
          </div>
        </section>
      </motion.main>

    </MainLayout>
  );
};

export default ProjectDetails;