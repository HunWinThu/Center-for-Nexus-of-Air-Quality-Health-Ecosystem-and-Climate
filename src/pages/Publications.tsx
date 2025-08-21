import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Book, BookOpen, Users, Calendar, Copy, Check, Quote } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

// Publication cover images by year
import cover2025_1 from '@/assets/Publication _book_cover/2025/2025_1.png';
import cover2025_2 from '@/assets/Publication _book_cover/2025/2025_2.png';
import cover2025_3 from '@/assets/Publication _book_cover/2025/2025_3.png';

import cover2024_1 from '@/assets/Publication _book_cover/2024/2024_1.png';
import cover2024_2 from '@/assets/Publication _book_cover/2024/2024_2.png';
import cover2024_3 from '@/assets/Publication _book_cover/2024/2024_3.png';

import cover2023_1 from '@/assets/Publication _book_cover/2023/2023_1.png';
import cover2023_2 from '@/assets/Publication _book_cover/2023/2023_2.png';
import cover2023_3 from '@/assets/Publication _book_cover/2023/2023_3.png';
import cover2023_4 from '@/assets/Publication _book_cover/2023/2023_4.png';
import cover2023_5 from '@/assets/Publication _book_cover/2023/2023_5.png';

import cover2022_1 from '@/assets/Publication _book_cover/2022/2022_1.png';
import cover2022_3 from '@/assets/Publication _book_cover/2022/2022_3.png';
import cover2022_4 from '@/assets/Publication _book_cover/2022/2022_4.png';
import cover2022_5 from '@/assets/Publication _book_cover/2022/2022_5.png';

const coverImages: Record<string, (string | undefined)[]> = {
  '2025': [cover2025_1, cover2025_2, cover2025_3],
  '2024': [cover2024_1, cover2024_2, cover2024_3],
  '2023': [cover2023_1, cover2023_2, cover2023_3, cover2023_4, cover2023_5],
  '2022': [cover2022_1, undefined, cover2022_3, cover2022_4, cover2022_5],
};

type Publication = {
  title: string;
  authors: string;
  journal: string;
  doi: string;
  cite: string;
  image?: string;
};

const publications: Record<string, Publication[]> = {
  2025: [
    {
      title: 'The truth about co-benefits: a multidimensional feasibility assessment for Thailand and beyond.',
      authors: 'Zusman, E., Akahoshi, K., Hanaoka, T., Malley, C. S., Wangwongwatana, S., Onmek, N., Paw-armart, I., Kim Oanh, N. T., Huy, L. N., Kuylenstierna, J. C. I. (2025).',
      journal: 'Environmental Research Communications, 7(2), 025009.',
      doi: 'https://doi.org/10.1088/2515-7620/adae5e',
      cite: 'Zusman, E., Akahoshi, K., Hanaoka, T., Malley, C. S., Wangwongwatana, S., Onmek, N., Paw-armart, I., Kim Oanh, N. T., Huy, L. N., Kuylenstierna, J. C. I. (2025). The truth about co-benefits: a multidimensional feasibility assessment for Thailand and beyond. Environmental Research Communications, 7(2), 025009. doi:https://doi.org/10.1088/2515-7620/adae5e',
      image: cover2025_1,
    },
    {
      title: 'Characterization and quantification of atmospheric emissions of dioxins, dl-PCBs and polycyclic aromatic hydrocarbons from municipal solid waste open burning in Southeast Asia.',
      authors: 'Kim Oanh, N. T., Thiemjarat, C., Mekwichai, P., Hang, N. T., Permadi, D. A., Chow, J. C., & Vinh, T. H. (2025).',
      journal: 'Waste Management, 201(3), 114779.',
      doi: 'https://doi.org/10.1016/j.wasman.2025.114779',
      cite: 'Kim Oanh, N. T., Thiemjarat, C., Mekwichai, P., Hang, N. T., Permadi, D. A., Chow, J. C., & Vinh, T. H. (2025). Characterization and quantification of atmospheric emissions of dioxins, dl-PCBs and polycyclic aromatic hydrocarbons from municipal solid waste open burning in Southeast Asia. Waste Management, 201(3), 114779. doi:https://doi.org/10.1016/j.wasman.2025.114779',
    },
    {
      title: 'A Survey-Based Emission Inventory of Greenhouse Gases Released from Rice Production on Consolidated Land in the Red River Delta of Vietnam.',
      authors: 'Dinh Thi Hai Van, N. T., Kim Oanh, N. T., & Bich Yen (2025).',
      journal: 'Atmosphere, 16(7), 794–794.',
      doi: 'https://doi.org/10.3390/atmos16070794',
      cite: 'Dinh Thi Hai Van, N. T., Kim Oanh, N. T., & Bich Yen (2025). A Survey-Based Emission Inventory of Greenhouse Gases Released from Rice Production on Consolidated Land in the Red River Delta of Vietnam. Atmosphere, 16(7), 794–794. doi:https://doi.org/10.3390/atmos16070794',
    },
  ],
  2024: [
    {
      title: 'In-depth analysis of ambient air pollution changes due to the COVID-19 pandemic in the Asian Monsoon region.',
      authors: 'Latif, M. T., Purhanudin, N., Afandi, N. Z. M., Cambaliza, M. O. L., Halim, N. D. A., Hawari, N. S. S. L., Hien, T. T., Hlaing, O. M. T., Jansz, W. R. L. H., Khokhar, M. F., Lestari, P., Lung, S.-C. C., Naja, M., Oanh, N. T. K., Othman, M., Salam, A., Salim, P. M., Song, C.-K., Fujinawa, T., Tanimoto, H., Yu, L. E., & Crawford, J. H. (2024).',
      journal: 'Science of The Total Environment, 941, 173145.',
      doi: 'https://doi.org/10.1016/j.scitotenv.2024.173145',
      cite: 'Latif, M. T., Purhanudin, N., Afandi, N. Z. M., Cambaliza, M. O. L., Halim, N. D. A., Hawari, N. S. S. L., Hien, T. T., Hlaing, O. M. T., Jansz, W. R. L. H., Khokhar, M. F., Lestari, P., Lung, S.-C. C., Naja, M., Oanh, N. T. K., Othman, M., Salam, A., Salim, P. M., Song, C.-K., Fujinawa, T., Tanimoto, H., Yu, L. E., & Crawford, J. H. (2024). In-depth analysis of ambient air pollution changes due to the COVID-19 pandemic in the Asian Monsoon region. Science of The Total Environment, 941, 173145. doi:https://doi.org/10.1016/j.scitotenv.2024.173145',
    },
    {
      title: 'Atmospheric Emissions from Electricity Generation in Southeast Asia: Development Trend and Policy Responses.',
      authors: 'Kim Oanh, N. T., & Huy, L. N. (2024).',
      journal: 'Current Pollution Reports, 10(1), 54-69.',
      doi: 'https://doi.org/10.1007/s40726-023-00289-0',
      cite: 'Kim Oanh, N. T., & Huy, L. N. (2024). Atmospheric Emissions from Electricity Generation in Southeast Asia: Development Trend and Policy Responses. Current Pollution Reports, 10(1), 54-69. doi:https://doi.org/10.1007/s40726-023-00289-0',
    },
    {
      title: 'Comparative analysis of PM2.5 levels in various microenvironments associated with common cooking practices in selected Asian countries.',
      authors: 'Kim Oanh, N. T., Huy, L. N., Maneepatra, W., Winijkul, E., Giandomenico, A., Tantrakarnapa, K., Co, H. X., Cuong, D. M., Tsou, M. C. M., Hien, T. T., Chi, N. D. C., Ngan, T. A., & Lung, S.-C. C. (2024).',
      journal: 'Air Quality, Atmosphere & Health.',
      doi: 'https://doi.org/10.1007/s11869-024-01615-1',
      cite: 'Kim Oanh, N. T., Huy, L. N., Maneepatra, W., Winijkul, E., Giandomenico, A., Tantrakarnapa, K., Co, H. X., Cuong, D. M., Tsou, M. C. M., Hien, T. T., Chi, N. D. C., Ngan, T. A., & Lung, S.-C. C. (2024). Comparative analysis of PM2.5 levels in various microenvironments associated with common cooking practices in selected Asian countries. Air Quality, Atmosphere & Health. doi:https://doi.org/10.1007/s11869-024-01615-1',
    },
  ],
  2023: [
    {
      title: 'Bi-decadal trend of atmospheric emissions from thermal power plants in Mainland Southeast Asia: Implications on acid deposition and climate change Mitigation.',
      authors: 'Ha Chi, N. N., Kim Oanh, N. T., Winijkul, E., Xue, W., & Nguyen, L. T. (2023).',
      journal: 'Journal of Environmental Management, 348, 119252.',
      doi: 'https://doi.org/10.1016/j.jenvman.2023.119252',
      cite: 'Ha Chi, N. N., Kim Oanh, N. T., Winijkul, E., Xue, W., & Nguyen, L. T. (2023). Bi-decadal trend of atmospheric emissions from thermal power plants in Mainland Southeast Asia: Implications on acid deposition and climate change Mitigation. Journal of Environmental Management, 348, 119252. doi:https://doi.org/10.1016/j.jenvman.2023.119252',
    },
    {
      title: 'Analysis of atmospheric emissions associated with on-road and inland waterway transport in Vietnam: Past, current and future control scenarios.',
      authors: 'Huy, L. N., Kim Oanh, N. T., Huong, C. T. D., & Huyen, T. T. (2023).',
      journal: 'Atmospheric Pollution Research, 14(8), 101810.',
      doi: 'https://doi.org/10.1016/j.apr.2023.101810',
      cite: 'Huy, L. N., Kim Oanh, N. T., Huong, C. T. D., & Huyen, T. T. (2023). Analysis of atmospheric emissions associated with on-road and inland waterway transport in Vietnam: Past, current lyckand future control scenarios. Atmospheric Pollution Research, 14(8), 101810. doi:https://doi.org/10.1016/j.apr.2023.101810',
    },
    {
      title: 'Chemical composition and potential sources of PM2.5 in Hanoi.',
      authors: 'Makkonen, U., Vestenius, M., Huy, L. N., Anh, N. T. N., Linh, P. T. V., Thuy, P. T., Phuong, H. T. M., Nguyen, H., Thuy, L. T., Aurela, M., Hellén, H., Loven, K., Kouznetsov, R., Kyllönen, K., Teinilä, K., & Kim Oanh, N. T. (2023).',
      journal: 'Atmospheric Environment, 299, 119650.',
      doi: 'https://doi.org/10.1016/j.atmosenv.2023.119650',
      cite: 'Makkonen, U., Vestenius, M., Huy, L. N., Anh, N. T. N., Linh, P. T. V., Thuy, P. T., Phuong, H. T. M., Nguyen, H., Thuy, L. T., Aurela, M., Hellén, H., Loven, K., Kouznetsov, R., Kyllönen, K., Teinilä, K., & Kim Oanh, N. T. (2023). Chemical composition and potential sources of PM2.5 in Hanoi. Atmospheric Environment, 299, 119650. doi:https://doi.org/10.1016/j.atmosenv.2023.119650',
    },
    {
      title: 'Air quality management status and needs of countries in South Asia and Southeast Asia.',
      authors: 'Verma, R. L., Kim Oanh, N. T., Winijkul, E., Huy, L. N., Pawarmart, I., Laowagul, W., Sooktawee, S., Permadi, D. A., Khan, M. F., Gunawardhana, L., & Patdu, M. K. (2023).',
      journal: 'APN Science Bulletin, 13(1), 130-152.',
      doi: 'https://doi.org/10.30852/sb.2023.2222',
      cite: 'Verma, R. L., Kim Oanh, N. T., Winijkul, E., Huy, L. N., Pawarmart, I., Laowagul, W., Sooktawee, S., Permadi, D. A., Khan, M. F., Gunawardhana, L., & Patdu, M. K. (2023). Air quality management status and needs of countries in South Asia and Southeast Asia. APN Science Bulletin, 13(1), 130-152. doi:https://doi.org/10.30852/sb.2023.2222',
    },
    {
      title: 'Health risk assessment of BTEX exposure at roadside and on-road traveling route in Bangkok Metropolitan Region.',
      authors: 'Kongpran, J., Kim Oanh, N. T., & Hang, N. T. (2023).',
      journal: 'Journal of Environmental Exposure Assessment, 2(8), 1-16.',
      doi: 'https://dx.doi.org/10.20517/jeea.2022.38',
      cite: 'Kongpran, J., Kim Oanh, N. T., & Hang, N. T. (2023). Health risk assessment of BTEX exposure at roadside and on-road traveling route in Bangkok Metropolitan Region. Journal of Environmental Exposure Assessment, 2(8), 1-16. doi:https://dx.doi.org/10.20517/jeea.2022.38',
    },
  ],
  2022: [
    {
      title: 'Chemical characteristics and deposition amounts of carbonaceous species and inorganic ions in precipitation in the Bangkok Metropolitan Region.',
      authors: 'Huo, M. Q., Sato, K., Oanh, N. T. K., Mettasitthikorn, M., Leamlaem, M., Permadi, D. A., Narita, D., Garivait, H., Laogul, W., & Akimoto, H. (2022).',
      journal: 'Atmospheric Environment, 291, 119393.',
      doi: 'https://doi.org/10.1016/j.atmosenv.2022.119393',
      cite: 'Huo, M. Q., Sato, K., Oanh, N. T. K., Mettasitthikorn, M., Leamlaem, M., Permadi, D. A., Narita, D., Garivait, H., Laogul, W., & Akimoto, H. (2022). Chemical characteristics and deposition amounts of carbonaceous species and inorganic ions in precipitation in the Bangkok Metropolitan Region. Atmospheric Environment, 291, 119393. doi:https://doi.org/10.1016/j.atmosenv.2022.119393',
    },
    {
      title: 'The Airborne and Satellite Investigation of Asian Air Quality (Asia-Aq): An Opportunity for International Collaboration.',
      authors: 'Crawford, J. H., Travis, K. R., Judd, L. M., Lefer, B. L., Dibb, J. E., Kim, J., Park, R., Lee, G., Chang, L., Simpas, J. B. B., Cambaliza, M. O. L., Macatangay, R. C., Surapipith, V., Thongboonchoo, N., Oanh, N. T. K., Hien, T. T., Ly, B. T., Salam, A., Ghude, S. D., Latif, M. T., Yu, L. E., Tanimoto, H., & Kanaya, Y. (2022).',
      journal: 'IGARSS 2022 – 2022 IEEE International Geoscience and Remote Sensing Symposium.',
      doi: 'Not available',
      cite: 'Crawford, J. H., Travis, K. R., Judd, L. M., Lefer, B. L., Dibb, J. E., Kim, J., Park, R., Lee, G., Chang, L., Simpas, J. B. B., Cambaliza, M. O. L., Macatangay, R. C., Surapipith, V., Thongboonchoo, N., Oanh, N. T. K., Hien, T. T., Ly, B. T., Salam, A., Ghude, S. D., Latif, M. T., Yu, L. E., Tanimoto, H., & Kanaya, Y. (2022). The Airborne and Satellite Investigation of Asian Air Quality (Asia-Aq): An Opportunity for International Collaboration. IGARSS 2022 – 2022 IEEE International Geoscience and Remote Sensing Symposium.',
    },
    {
      title: 'Large spatio-temporal variations of size-resolved particulate matter and volatile organic compounds in urban area with heavy traffic.',
      authors: 'Phuc, N. H., & Kim Oanh, N. T. (2022).',
      journal: 'Environmental Science and Pollution Research, 29(15), 21491-21507.',
      doi: 'https://doi.org/10.1007/s11356-021-16921-9',
      cite: 'Phuc, N. H., & Kim Oanh, N. T. (2022). Large spatio-temporal variations of size-resolved particulate matter and volatile organic compounds in urban area with heavy traffic. Environmental Science and Pollution Research, 29(15), 21491-21507. doi:https://doi.org/10.1007/s11356-021-16921-9',
    },
    {
      title: 'Research Priorities of Applying Low-Cost PM2.5 Sensors in Southeast Asian Countries.',
      authors: 'Lung, S.-C. C., Thi Hien, T., Cambaliza, M. O. L., Hlaing, O. M. T., Oanh, N. T. K., Latif, M. T., Lestari, P., Salam, A., Lee, S.-Y., Wang, W.-C. V., Tsou, M.-C. M., Cong-Thanh, T., Cruz, M. T., Tantrakarnapa, K., Othman, M., Roy, S., Dang, T. N., & Agustian, D. (2022).',
      journal: 'International Journal of Environmental Research and Public Health, 19(3), 1522.',
      doi: 'https://doi.org/10.3390/ijerph19031522',
      cite: 'Lung, S.-C. C., Thi Hien, T., Cambaliza, M. O. L., Hlaing, O. M. T., Oanh, N. T. K., Latif, M. T., Lestari, P., Salam, A., Lee, S.-Y., Wang, W.-C. V., Tsou, M.-C. M., Cong-Thanh, T., Cruz, M. T., Tantrakarnapa, K., Othman, M., Roy, S., Dang, T. N., & Agustian, D. (2022). Research Priorities of Applying Low-Cost PM2.5 Sensors in Southeast Asian Countries. International Journal of Environmental Research and Public Health, 19(3), 1522. doi:https://doi.org/10.3390/ijerph19031522',
    },
    {
      title: 'Effects of length-to-diameter ratio, pinewood sawdust, and sodium lignosulfonate on quality of rice straw pellets produced via a flat die pellet mill.',
      authors: 'Dao, C. N., Salam, A., & Oanh, N. T. K. (2022).',
      journal: 'Renewable Energy, 181, 1140-1154.',
      doi: 'https://doi.org/10.1016/j.renene.2021.09.088',
      cite: 'Dao, C. N., Salam, A., & Oanh, N. T. K. (2022). Effects of length-to-diameter ratio, pinewood sawdust, and sodium lignosulfonate on quality of rice straw pellets produced via a flat die pellet mill. Renewable Energy, 181, 1140-1154. doi:https://doi.org/10.1016/j.renene.2021.09.088',
    },
  ],
};

const Publications = () => {
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    toast.success('Citation copied to clipboard!');
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(-1), 2000); // Reset after 2 seconds
  };

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
      {/* Hero Section - matching website style */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUpVariants}>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our Publications
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              Explore our extensive library of peer-reviewed articles, showcasing our commitment to advancing air quality research and policy development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Publications Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="2024" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-accent/50 p-2 rounded-lg mb-8">
              {Object.keys(publications).map((year) => (
                <TabsTrigger 
                  key={year} 
                  value={year} 
                  className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  <Calendar className="mr-2" size={16} />
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(publications).map(([year, pubs]) => (
              <TabsContent key={year} value={year} className="mt-8">
                {pubs.length === 0 && (
                  <Card className="bg-gradient-to-br from-background to-accent/10 border-dashed border-primary/30">
                    <CardContent className="p-8 text-center">
                      <Badge variant="secondary" className="mb-2">Coming soon</Badge>
                      <h3 className="text-2xl font-semibold mb-2">Publications {year}</h3>
                      <p className="text-muted-foreground">We will add the {year} publications shortly.</p>
                    </CardContent>
                  </Card>
                )}
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {pubs.map((pub, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="group"
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10 border-2 border-transparent hover:border-primary/20 flex flex-col">
                        <CardContent className="p-6 flex-grow">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-28 md:w-40">
                                <AspectRatio ratio={3/4} className="rounded-md bg-muted/30 border border-border overflow-hidden">
                                  {(() => {
                                    const imgSrc = pub.image || coverImages[year]?.[index] || '/placeholder.svg';
                                    return (
                                      <img
                                        src={imgSrc}
                                        alt={`${pub.title} cover`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                      />
                                    );
                                  })()}
                                </AspectRatio>
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <Link to={pub.doi} target="_blank" rel="noopener noreferrer" className="block mb-4">
                                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                  {pub.title}
                                </h3>
                              </Link>
                              
                              <div className="text-sm text-muted-foreground mb-3">Published Year: {year}</div>
                              <div className="flex items-center text-muted-foreground mb-3">
                                <Users className="mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm">{pub.authors}</span>
                              </div>

                              <div className="flex items-center text-muted-foreground mb-3">
                                <BookOpen className="mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm">
                                  {/symposium|conference|proceedings|igarss/i.test(pub.journal) ? 'Conference Paper' : 'Journal Article'}
                                </span>
                              </div>
                              
                              <div className="flex items-center text-muted-foreground">
                                <Book className="mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm italic">{pub.journal}</span>
                              </div>

                              <div className="mt-4 bg-accent/20 p-4 rounded-md border border-accent/50">
                                <div className="flex items-center text-muted-foreground mb-2">
                                  <Quote className="mr-2 flex-shrink-0" size={16} />
                                </div>
                                <div className="flex items-start justify-between gap-2">
                                  <p className="text-sm text-foreground flex-1 pr-2">{pub.cite}</p>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="flex-shrink-0"
                                    onClick={() => handleCopy(pub.cite, index)}
                                  >
                                    {copiedIndex === index ? <Check className="text-green-500" size={20} /> : <Copy className="text-primary" size={20} />}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          {/* ResearchGate Section - matching website style */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-accent/30 to-background rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Find More Research on ResearchGate
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with our researchers and explore additional publications on their ResearchGate profiles.
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="https://www.researchgate.net/profile/Nguyen-Thi-Oanh" target="_blank" rel="noopener noreferrer">
                    Nguyen Thi Oanh
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="https://www.researchgate.net/profile/Lai-Huy-2" target="_blank" rel="noopener noreferrer">
                    Lai Huy
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="https://www.researchgate.net/profile/Ha-Chi-Nguyen-Nhat" target="_blank" rel="noopener noreferrer">
                    Ha-Chi-Nguyen-Nhat
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default Publications;