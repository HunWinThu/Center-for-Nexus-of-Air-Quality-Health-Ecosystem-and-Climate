import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen, ExternalLink, LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

// Import publication cover image for Nepal report
import nepalReportCover from "@/assets/News&Events/image23.png";

// Import publication cover images for AQIP Thailand reports
import aqipThailandCover from "@/assets/Publication _book_cover/2025/2025_4.png";
import cover2024_4 from '@/assets/Publication _book_cover/2024/2024_4.png';
import cover2024_5 from '@/assets/Publication _book_cover/2024/2024_5.png';

interface Resource {
  title: string;
  description: string;
  type: string;
  format?: string;
  url?: string;
  downloadUrl?: string;
  image?: string;
  icon: LucideIcon;
  id?: string;
}

const Resources = () => {
  // Handle anchor navigation on mount and hash change
  useEffect(() => {
    const scrollToAnchor = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    };

    scrollToAnchor();
    
    // Listen for hash changes
    window.addEventListener('hashchange', scrollToAnchor);
    
    return () => window.removeEventListener('hashchange', scrollToAnchor);
  }, []);

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
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const reports = [
    {
      id: "nepal-report",
      title: "State of Air for Nepal with the focus in Kathmandu Valley",
      description: "A comprehensive technical report led by the AIT team, published as part of the 5-year USAID-funded Clean Air project consortium. This assessment provides science-based evidence for Nepal to tackle air pollution problems through appropriate clean air measures. The report analyzes multiple data sources including ground-based and satellite monitoring, emissions inventories, model simulations, and reanalysis data, with a focus on PM₂.₅. Reviewed by recognized experts both inside and outside Nepal, including the Department of Environment.",
      type: "Technical Report",
      format: "PDF",
      image: nepalReportCover,
      downloadUrl: "https://zenodo.org/records/13335444/files/State%20of%20Air%20in%20Nepal%20final%20report.pdf?download=1",
      icon: FileText
    },
    {
      id: "aqip-sources-report",
      title: "Air Quality Improvement Program in Thailand: Sources of Air Pollution in Chiang Mai in 2022 - Main Sources and Measures to Mitigate Air Pollution",
      description: "As part of the AQIP project, an integrated gridded emission inventory has been developed for the province of Chiang Mai. This integrated emission inventory is the first one developed in the province. A set of air pollutants and GHGs are covered in a consistent method. The Gridded emission inventory details the location and magnitude of emissions across Chiang Mai province for the year 2022. To build this integrated air pollutants and GHGs inventory, the most appropriate methodologies were used based on EMEP/EEA, IPCC, and scientific papers/reports. Calculation of road transport emissions is based on a traffic survey and modelling carried out by EGIS that provide a better description of the composition of the vehicle fleet in circulation, and of traffic per vehicle type (passenger cars, light duty vehicles, heavy-duty vehicles and two-wheel vehicles). Road transport modelling by EGIS allows to assess the kilometers driven per vehicles and per main roads. For other sectors, agriculture, waste, industrial processes and product use (IPPU) and energy, cooperation between AIT and Citepa has enabled to collect the most appropriate data for the province. Nevertheless, in some cases when adequate data were not available, simplifications or assumptions were necessary. A detailed description of the methodology developed, and work plans for improving the inventory step by step are provided in a methodological guide: 'Comprehensive Inventory Methodology Report for Chiang Mai Province, Thailand (2022)'. It is crucial to maintain and regularly update this emission inventory on a periodic basis as it is a key instrument to defines policies and measures in the different sectors and measure the progress made from year to year in terms of emission reductions. The key emission sources of the different pollutants and GHG were identified. For particulate matters (the main air quality problem in the province) and their precursors (SO₂, NOₓ, NH₃) the main sources are: open biomass burning, road transport, agriculture, and the residential/commercial sectors. This report proposes several measures to reduce the impact of transport emissions, such as reducing the number of old heavy vehicles (buses, coaches, and trucks), which would significantly lower fine particulate emissions and NOₓ. Incentives to accelerate the renewal of passenger car and light-duty vehicle fleets would be effective, particularly following the release of the decree on Euro 5 vehicle and fuel standards in January 2024. Euro 5 vehicles are equipped with particle filters that substantially reduce emissions. Additionally, promoting walking, cycling, and public transportation can reduce not only air pollution but also GHG emission, noise pollution and urban heat islands. Modal shift is also one of the most efficient ways, with electric mobility, to reduce CO₂ emissions.",
      type: "Technical Report",
      format: "PDF",
      image: aqipThailandCover,
      downloadUrl: "https://www.researchgate.net/publication/388951708",
      icon: FileText
    },
    {
      id: "aqip-inventory-report",
      title: "Air Quality Improvement Program in Thailand (AQIP): Comprehensive Inventory Methodology Report for Chiang Mai Province, Thailand (2022)",
      description: "A spatialized emissions inventory was built for the Province of Chiang Mai. This report gives the detailed methodology used, the activity, the emission factors as well as the methodology for spatial attribution of the emissions for each sector. This methodology report aims at being a reference for emissions inventory building and should be the base for a regular update and improvement of the Chiang Mai Emissions Inventory (EI).",
      type: "Technical Report",
      format: "PDF",
      image: cover2024_4,
      downloadUrl: "https://www.citepa.org/wp-content/uploads/2025/03/AQIP-Comprehensive-Inventory-Methodology-Report_Rev00.pdf",
      icon: FileText
    },
    {
      id: "aqip-roadmap-report",
      title: "Air Quality Improvement Program in Thailand (AQIP): Roadmap Emission Sources and Policies Report - Sources of Air Pollution in Chiang Mai in 2022: Main Sources and Measures to Mitigate Air Pollution",
      description: "As part of the AQIP programme, an integrated gridded emission inventory has been developed for Chiang Mai province. This integrated emission inventory is the first one developed in the province and even in Thailand with such characteristics. A set of air pollutants and GHGs are covered in a consistent method. The gridded emission inventory details the location and magnitude of emissions across Chiang Mai province for the year 2022. The development of this inventory employed the most suitable methodologies, drawing on EMEP/EEA, IPCC guidelines, ABC-EIM and relevant scientific literature. Emission calculation for road transport is based on a traffic survey and modelling conducted by EGIS, which offers a better description of the in-use vehicle fleet composition (passenger cars, light duty vehicles, heavy-duty vehicles and two-wheel vehicles) and traffic pattern. This modeling enables accurate assessment of kilometers driven per vehicle type and along major roads.",
      type: "Technical Report",
      format: "PDF",
      image: cover2024_5,
      downloadUrl: "https://www.citepa.org/wp-content/uploads/2025/03/AQIP-Roadmap-Emission-Sources-and-Policies-Report_Rev00.pdf",
      icon: FileText
    },
  ];

  const ResourceCard = ({ resource, isExternal = false }: { resource: Resource, isExternal?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 300; // Character limit before truncating
    const shouldTruncate = resource.description.length > maxLength;
    const displayText = isExpanded || !shouldTruncate 
      ? resource.description 
      : resource.description.substring(0, maxLength) + "...";

    return (
      <motion.div variants={cardVariants} id={resource.id}>
        <Card className="hover:shadow-lg transition-shadow overflow-hidden scroll-mt-20">
        <div className="flex flex-col md:flex-row">
          {/* Image section - Reduced size */}
          {resource.image && (
            <div className="md:w-auto w-full flex-shrink-0">
              <div className="relative h-64 md:h-80 w-auto">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="h-full w-auto object-contain border-2 border-gray-300"
                />
              </div>
            </div>
          )}
          
          {/* Content section */}
          <div className={`${resource.image ? 'flex-1' : 'w-full'} flex flex-col`}>
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
              <div className="mb-6 flex-1">
                <p className="text-muted-foreground leading-relaxed">{displayText}</p>
                {shouldTruncate && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-primary hover:underline font-medium mt-2 text-sm"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
              
              <Button 
                variant="default" 
                size="lg"
                className="w-full md:w-auto self-start px-8 py-3 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
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
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        className="pt-20 pb-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
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
      <section className="pt-4 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reports & Guidelines Section - No Tabs */}
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {reports.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default Resources;