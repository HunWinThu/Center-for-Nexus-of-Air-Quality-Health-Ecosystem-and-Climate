import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import airqcHeroImage from '@/assets/airqc-hero.jpg';
import riceStrawBurningImage from '@/assets/rice-straw-burning-field.jpg';
import riceStrawBurning from '@/assets/rice-straw-burning.jpg';
import airPollutionResearch from '@/assets/air-pollution-research.png';
import teamGroupPhoto from '@/assets/team-group-photo.jpg';
import sliding1 from '@/assets/sliding/1.jpg';
import sliding2 from '@/assets/sliding/2.jpg';
import sliding3 from '@/assets/sliding/3.png';
import sliding4 from '@/assets/sliding/4.jpg';
import { motion } from 'framer-motion';
const About = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Carousel 
            className="w-full max-h-screen"
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            opts={{
              loop: true,
              align: "center" // Ensures images are centered
            }}
          >
            <CarouselContent className="w-full h-full">
              {[sliding1, sliding2, sliding3, sliding4].map((img, index) => (
                <CarouselItem key={index} className="flex justify-center items-center">
                  <div className="relative w-auto h-auto max-w-full max-h-[80vh]">
                    <img 
                      src={img} 
                      alt={`Slide ${index + 1}`}
                      className="object-contain max-w-full max-h-[80vh]"
                      style={{
                        width: "auto",
                        height: "auto"
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
          </Carousel>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Air Quality Nexus Center
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed bg-black/20 p-6 rounded-lg backdrop-blur-sm">
              A leading Center in conducting and implementing application research with the aim to gain multiple benefits from reducing air pollution through improvement of health of human and ecosystem, and protection of the climate system.
            </p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-3">
              <Badge 
                variant="outline" 
                className="mb-4 border-primary/90 text-primary text-4xl py-6 px-10 rounded-full"
              >
                Background
              </Badge>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <p className="text-justify text-xl leading-relaxed">
                Air pollution is one of the world's greatest environmental challenges facing humanity today. The negative effects of air pollution on human health, terrestrial and aquatic ecosystems, and climate are significant. The Health Effects Institute and Institute for Health Metrics and Evaluation (HEI & IHME, 2020) reported that 6.67 million global deaths and 213 million years of healthy life lost in 2019 were attributable to air pollution. The majority of these deaths occurred in Asian developing countries, including the Southeast Asia (SEA) region, because of excessive exposure to high levels of toxic air pollutants both indoors and outdoors.
              </p>
              
              <p className="text-justify text-xl leading-relaxed">
                Many air pollutants are phytotoxic, such as surface ozone and acidic gases of sulfur dioxide (SO₂) and nitrogen dioxide (NO₂), hence high levels of these pollutants cause adverse effects on forestry and agricultural crops. The deposition of atmospheric pollutants to the earth's surface causes acidification and eutrophication that causes adverse effects on terrestrial and aquatic life. Several toxic air pollutants have climate forcing effects, they are also known as short-lived climate forcers. In particular, black carbon (BC) particles of submicron size, can strongly absorb solar radiation, hence causing significant warming, i.e. with the Global Warming Potential (GWP) at about 2000 times CO₂ on a 20-year horizon. BC particles deposited on the land surface will be washed off to rivers and end up in the ocean. It is estimated that about 29-49 Gg/yr of the global annual flux of BC washed into the ocean annually and would remain there for hundreds of years to affect the marine ecosystems. BC is a strong short-lived climate pollutant (SLCP) hence reduction of BC emission brings in significant co-benefits to both air quality and the climate system.
              </p>
              
              <p className="text-justify text-xl leading-relaxed">
                The long-lived greenhouse gases (GHGs), e.g. carbon dioxide (CO₂), SLCPs, and ozone precursors of NOx and hydrocarbon (HCs), have the key common sources of combustion hence the emission reduction can bring in multiple benefits to health, the environment, and climate. The assessment conducted by UNEP-WMO (2011) highlighted that the emission reduction measures for BC (e.g. clean cooking, clean vehicle fleets or elimination of crop residue field burning, etc.) and methane (waste/landfill management, modified agricultural practices, and extraction and transport of fossil fuel) could simultaneously avoid the global temperature increase by almost 0.5°C by 2050, 2.5 million premature death, and 50 million tonnes of crop yield loss in the world annually. A more recent assessment by UNEP (2019) pointed out that the implementation of the selected 25 clean air measures would help 22% of the Asian population enjoy air quality within 2005-WHO-AQG (annual level 10 µg/m³) by 2030, cut down 45% of ozone-induced crop yield losses for four main crops of maize, rice, soy, and wheat collectively, and reduce CO₂ by almost 20% in 2030.
              </p>
            </div>

            {/* Rice Straw Burning Image */}
<div className="mt-16 flex flex-col items-center">
  <Card className="overflow-hidden">
    <div className="relative">
      <img 
        src={riceStrawBurningImage} 
        alt="Rice straw open burning at the rice field" 
        className="object-contain"
        style={{ 
          width: '800px', 
          height: '450px',
          maxWidth: '100%',
          maxHeight: '80vh'
        }}
      />
    </div>
  </Card>
  <p className="text-muted-foreground text-xl font-bold font-medium text-center mt-4 max-w-8xl">
    Figure 1: Rice straw open burning at the rice field in Pathumthani, Thailand (Photo taken on 30 August 2024)
  </p>
</div>
          </div>
        </div>
      </section>

      {/* Rationale Section */}
      <section className="py-10 bg-gradient-to-br from-accent/20 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-3">
              <Badge 
                variant="outline" 
                className="mb-4 border-primary/90 text-primary text-4xl py-6 px-10 rounded-full"
              >
                Rationale
              </Badge>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <p className="text-justify text-xl leading-relaxed">
                The Center will sustain and further develop the interdisciplinary atmospheric studies at AIT, from the atmospheric emissions to pollution concentration and deposition fluxes to the earth's surface. The assessment of multiple benefits of atmospheric emission reduction will be considered based on the effects on human health, ecosystems including agricultural crops and marine, and the climate system.
              </p>
              
              <p className="text-justify text-xl leading-relaxed">
                The Center's activities will make the atmospheric research at AIT to be better placed on the international agenda and further recognized. Additional projects will be secured by the funding support from donors and private sectors to strengthen the research capacity at AIT. The good reputation for interdisciplinary atmospheric studies, a hot topic presently, will increasingly attract students to enroll for study at AIT.
              </p>
              
              <p className="text-justify text-xl leading-relaxed">
                The human resources made available by the Center will also strengthen the research capacity in air quality at AIT. Presently, only one directly hired air pollution faculty member at AIT, as compared, for example, to a big team of faculty members in every leading university in Thailand. The additional human resources of professional staff from the Center will help to cover more research topics in the vast and ever-growing field of air pollution research. This would ensure that AIT will maintain its leading position in air pollution research which has been built up over the last 35 years. The Center is also aiming to strengthen environmental health studies that are not yet visibly incorporated into the current AIT academic programs. The Center will involve relevant faculty members in AIT in the activities and cover the time recovery cost. AIT students are involved in research activities to get exposed to real-life case studies while getting financial incentives through the student assistantship.
              </p>
              
              <p className="text-justify text-xl leading-relaxed">
                Currently, the impacts, for example, on health, acid rain, and crop damage are visible but not well quantified and investigated for Asian developing countries. Asia has experienced air pollution problems of long-range and transboundary transport nature, for example, the annually re-occurring forest fires in SEA, or acid rain precursors released from coal combustion in upwind territories would deposit in the downwind countries. For example, the atmospheric lifetime of BC ranges from a few days to one month, but after deposit to the oceans, BC may remain there for many years. The impact of BC after being deposited to the earth's surface is much less known than its direct impacts on health and climate. In Asia, there is yet a comprehensive research conducted to quantify the long-term impacts of BC to the marine ecosystems. There is a need for capacity building to understand and quantify the effects so that science-based cost-effective solutions can be recommended. This can be done through coordinated atmospheric research efforts in Asia. AIT, an international university in Asia, can play a leading role in this effort. With its strong research capacity as well as networking experience, the proposed Air Quality Nexus Center will serve to tackle these regional needs.
              </p>
              
              <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 mt-12">
                <p className="text-justify text-xl leading-relaxed font-medium text-foreground">
                  To continue and further develop the capacities and experience built over the years, it is proposed to establish the <strong>"Center for Nexus of Air Quality, Health, Ecosystem, and Climate"</strong> under AIT, or <strong>"Air Quality Nexus Center"</strong> for short. It will be an institution-wide Center, cooperating multidisciplinary and cutting-edge research areas of the schools and other AIT Centers to foster collaboration and strengthen AIT research and education capacity. The goal of the Air Quality Nexus Center is to serve as a focal point to build capacity and conduct cutting-edge research in atmospheric sciences in Asia and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;