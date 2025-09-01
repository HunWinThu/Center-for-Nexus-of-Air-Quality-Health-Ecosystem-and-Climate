import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Database, Globe, BookOpen, Users, ExternalLink, LucideIcon } from "lucide-react";

// Import publication cover image for Nepal report
import nepalReportCover from "@/assets/News&Events/image23.png";

interface Resource {
  title: string;
  description: string;
  type: string;
  format?: string;
  url?: string;
  downloadUrl?: string;
  image?: string;
  icon: LucideIcon;
}

const Resources = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
      }
    },
  };

  const resources = {
    databases: [
      {
        title: "Air Quality Database",
        description: "Comprehensive database of air quality measurements across Asia-Pacific region",
        type: "Database",
        format: "CSV, JSON",
        icon: Database
      },
      {
        title: "Emission Inventory Data",
        description: "Regional emission inventory data for various pollutants and sectors",
        type: "Dataset",
        format: "Excel, NetCDF",
        icon: FileText
      }
    ],
    tools: [
      {
        title: "Air Quality Monitoring Toolkit",
        description: "Guidelines and protocols for establishing air quality monitoring networks",
        type: "Toolkit",
        format: "PDF",
        icon: BookOpen
      },
      {
        title: "Policy Assessment Framework",
        description: "Framework for evaluating air quality policies and their effectiveness",
        type: "Framework",
        format: "PDF, Templates",
        icon: Users
      }
    ],
    reports: [
      {
        title: "State of Air for Nepal with the focus in Kathmandu Valley",
        description: "A comprehensive technical report led by the AIT team, published as part of the 5-year USAID-funded Clean Air project consortium. This assessment provides science-based evidence for Nepal to tackle air pollution problems through appropriate clean air measures. The report analyzes multiple data sources including ground-based and satellite monitoring, emissions inventories, model simulations, and reanalysis data, with a focus on PM2.5. Reviewed by recognized experts both inside and outside Nepal, including the Department of Environment.",
        type: "Technical Report",
        format: "PDF",
        image: nepalReportCover,
        downloadUrl: "#", // Replace with actual download link
        icon: FileText
      },
      {
        title: "Regional Air Quality Assessment 2024",
        description: "Annual assessment of air quality trends and patterns in the region",
        type: "Report",
        format: "PDF",
        icon: FileText
      },
      {
        title: "Health Impact Assessment Guidelines",
        description: "Methodology for assessing health impacts of air pollution",
        type: "Guidelines",
        format: "PDF",
        icon: BookOpen
      }
    ],
    links: [
      {
        title: "WHO Air Quality Guidelines",
        description: "World Health Organization air quality guidelines and resources",
        url: "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health",
        type: "External Link",
        icon: Globe
      },
      {
        title: "UNEP Air Quality Portal",
        description: "United Nations Environment Programme air quality resources",
        url: "https://www.unep.org/explore-topics/air",
        type: "Portal",
        icon: ExternalLink
      }
    ]
  };

  const ResourceCard = ({ resource, isExternal = false }: { resource: Resource, isExternal?: boolean }) => (
    <motion.div variants={cardVariants}>
      <Card className="hover:shadow-lg transition-shadow overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image section - Full display */}
          {resource.image && (
            <div className="md:w-1/3 w-full">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
            </div>
          )}
          
          {/* Content section */}
          <div className={`${resource.image ? 'md:w-2/3' : 'w-full'} flex flex-col`}>
            <CardHeader>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{resource.type}</p>
                  {!isExternal && resource.format && (
                    <p className="text-sm text-muted-foreground mt-1">Format: {resource.format}</p>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col pt-0">
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">{resource.description}</p>
              
              <Button 
                variant="default" 
                size="lg"
                className="w-full md:w-auto self-start px-8 py-3 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => {
                  if (isExternal && resource.url) {
                    window.open(resource.url, '_blank');
                  } else if (resource.downloadUrl) {
                    // Handle download - either open link or trigger download
                    if (resource.downloadUrl === "#") {
                      alert("Download link will be available soon!");
                    } else {
                      window.open(resource.downloadUrl, '_blank');
                    }
                  }
                }}
              >
                {isExternal ? (
                  <>
                    <ExternalLink className="h-5 w-5 mr-3" />
                    Visit Resource
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-3" />
                    Download Resource
                  </>
                )}
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Resources & Tools
            </h1>
            <p className="text-xl text-muted-foreground">
              Access our comprehensive collection of datasets, tools, reports, and resources 
              for air quality research and policy development.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section Separator */}
      <div className="border-t border-gray-200"></div>

      {/* Main Content - Tabbed Interface */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="reports" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-accent/50 p-2 rounded-lg mb-8">
              <TabsTrigger 
                value="reports" 
                className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                <FileText className="mr-2" size={16} />
                Reports & Guidelines
              </TabsTrigger>
              <TabsTrigger 
                value="databases" 
                className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                <Database className="mr-2" size={16} />
                Databases & Datasets
              </TabsTrigger>
              <TabsTrigger 
                value="tools" 
                className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                <BookOpen className="mr-2" size={16} />
                Tools & Frameworks
              </TabsTrigger>
              <TabsTrigger 
                value="links" 
                className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                <Globe className="mr-2" size={16} />
                External Resources
              </TabsTrigger>
            </TabsList>

            {/* Reports & Guidelines Tab */}
            <TabsContent value="reports" className="mt-8">
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {resources.reports.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </motion.div>
            </TabsContent>

            {/* Databases & Datasets Tab */}
            <TabsContent value="databases" className="mt-8">
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {resources.databases.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </motion.div>
            </TabsContent>

            {/* Tools & Frameworks Tab */}
            <TabsContent value="tools" className="mt-8">
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {resources.tools.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </motion.div>
            </TabsContent>

            {/* External Resources Tab */}
            <TabsContent value="links" className="mt-8">
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {resources.links.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} isExternal={true} />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

    </>
  );
};

export default Resources;