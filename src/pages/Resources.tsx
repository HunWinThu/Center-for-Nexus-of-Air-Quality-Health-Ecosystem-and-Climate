import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Database, Globe, BookOpen, Users, ExternalLink, LucideIcon } from "lucide-react";

interface Resource {
  title: string;
  description: string;
  type: string;
  format?: string;
  url?: string;
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
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
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
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <resource.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{resource.type}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-muted-foreground mb-4 flex-1">{resource.description}</p>
          {!isExternal && resource.format && (
            <p className="text-sm text-muted-foreground mb-4">Format: {resource.format}</p>
          )}
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => {
              if (isExternal && resource.url) {
                window.open(resource.url, '_blank');
              }
            }}
          >
            {isExternal ? (
              <>
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Resource
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        animate="visible"
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Databases & Datasets */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Databases & Datasets</h2>
            <p className="text-muted-foreground text-lg">
              Curated datasets and databases for air quality research and analysis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.databases.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </motion.section>

        {/* Section Separator */}
        <div className="border-t border-gray-200 mb-16"></div>

        {/* Tools & Frameworks */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Tools & Frameworks</h2>
            <p className="text-muted-foreground text-lg">
              Practical tools and frameworks to support air quality monitoring and policy development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.tools.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </motion.section>

        {/* Section Separator */}
        <div className="border-t border-gray-200 mb-16"></div>

        {/* Reports & Guidelines */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Reports & Guidelines</h2>
            <p className="text-muted-foreground text-lg">
              Research reports, assessment guidelines, and best practice documentation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.reports.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </motion.section>

        {/* Section Separator */}
        <div className="border-t border-gray-200 mb-16"></div>

        {/* External Links */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">External Resources</h2>
            <p className="text-muted-foreground text-lg">
              Links to important external resources and partner organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.links.map((resource, index) => (
              <ResourceCard key={index} resource={resource} isExternal={true} />
            ))}
          </div>
        </motion.section>
      </div>

    </>
  );
};

export default Resources;