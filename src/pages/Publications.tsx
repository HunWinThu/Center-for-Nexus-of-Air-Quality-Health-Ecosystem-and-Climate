import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

// Publication cover images by year
import cover2026_1 from '@/assets/Publication _book_cover/2026/cover2026_1.png';

import cover2025_1 from '@/assets/Publication _book_cover/2025/2025_1.png';
import cover2025_2 from '@/assets/Publication _book_cover/2025/2025_2.png';
import cover2025_3 from '@/assets/Publication _book_cover/2025/2025_3.png';
import cover2025_4 from '@/assets/Publication _book_cover/2025/2025_4.png';

import cover2024_1 from '@/assets/Publication _book_cover/2024/2024_1.png';
import cover2024_2 from '@/assets/Publication _book_cover/2024/2024_2.png';
import cover2024_3 from '@/assets/Publication _book_cover/2024/2024_3.png';
import cover2024_4 from '@/assets/Publication _book_cover/2024/2024_4.png';
import cover2024_5 from '@/assets/Publication _book_cover/2024/2024_5.png';

import cover2023_1 from '@/assets/Publication _book_cover/2023/2023_1.png';
import cover2023_2 from '@/assets/Publication _book_cover/2023/2023_2.png';
import cover2023_3 from '@/assets/Publication _book_cover/2023/2023_3.png';
import cover2023_4 from '@/assets/Publication _book_cover/2023/2023_4.png';
import cover2023_5 from '@/assets/Publication _book_cover/2023/2023_5.png';
import cover2023_6 from '@/assets/Publication _book_cover/2023/2023_6.png';

import cover2022_1 from '@/assets/Publication _book_cover/2022/2022_1.png';
import cover2022_2 from '@/assets/Publication _book_cover/2022/2022_2.png';
import cover2022_3 from '@/assets/Publication _book_cover/2022/2022_3.png';
import cover2022_4 from '@/assets/Publication _book_cover/2022/2022_4.png';
import cover2022_5 from '@/assets/Publication _book_cover/2022/2022_5.png';


const coverImages: Record<string, (string | undefined)[]> = {
  '2026': [cover2026_1],
  '2025': [cover2025_1, cover2025_2, cover2025_3, cover2025_4],
  '2024': [cover2024_1, cover2024_2, cover2024_3, cover2024_4, cover2024_5],
  '2023': [cover2023_1, cover2023_2, cover2023_3, cover2023_4, cover2023_5, cover2023_6],
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
  2026: [
    {
      title: 'Statistics in Environmental Monitoring and Assessment',
      authors: 'Kim Oanh, N. T., et al.',
      journal: 'TBD',
      doi: 'https://doi.org/10.1201/9781003597216-1',
      cite: 'Kim Oanh, N. T., et al. (2026). Statistics in Environmental Monitoring and Assessment. doi:10.1201/9781003597216-1',
    },
  ],
  2025: [
    {
      title: 'The truth about co-benefits: a multidimensional feasibility assessment for Thailand and beyond',
      authors: 'Zusman, E., Akahoshi, K., Hanaoka, T., Malley, C. S., Wangwongwatana, S., Onmek, N., Paw-armart, I., Kim Oanh, N. T., Huy, L. N., Kuylenstierna, J. C. I.',
      journal: 'Environmental Research Communications, 7(2), 025009.',
      doi: 'https://doi.org/10.1088/2515-7620/adae5e',
      cite: 'Zusman, E., Akahoshi, K., Hanaoka, T., Malley, C. S., Wangwongwatana, S., Onmek, N., Paw-armart, I., Kim Oanh, N. T., Huy, L. N., Kuylenstierna, J. C. I. (2025). The truth about co-benefits: a multidimensional feasibility assessment for Thailand and beyond. Environmental Research Communications, 7(2), 025009. doi:https://doi.org/10.1088/2515-7620/adae5e',
      image: cover2025_1,
    },
    {
      title: 'Characterization and quantification of atmospheric emissions of dioxins, dl-PCBs and polycyclic aromatic hydrocarbons from municipal solid waste open burning in Southeast Asia',
      authors: 'Kim Oanh, N. T., Thiemjarat, C., Mekwichai, P., Hang, N. T., Permadi, D. A., Chow, J. C., & Vinh, T. H.',
      journal: 'Waste Management, 201(3), 114779.',
      doi: 'https://doi.org/10.1016/j.wasman.2025.114779',
      cite: 'Kim Oanh, N. T., Thiemjarat, C., Mekwichai, P., Hang, N. T., Permadi, D. A., Chow, J. C., & Vinh, T. H. (2025). Characterization and quantification of atmospheric emissions of dioxins, dl-PCBs and polycyclic aromatic hydrocarbons from municipal solid waste open burning in Southeast Asia. Waste Management, 201(3), 114779. doi:https://doi.org/10.1016/j.wasman.2025.114779',
    },
    {
      title: 'A Survey-Based Emission Inventory of Greenhouse Gases Released from Rice Production on Consolidated Land in the Red River Delta of Vietnam',
      authors: 'Dinh Thi Hai Van, N. T., Kim Oanh, N. T., & Bich Yen',
      journal: 'Atmosphere, 16(7), 794–794.',
      doi: 'https://doi.org/10.3390/atmos16070794',
      cite: 'Dinh Thi Hai Van, N. T., Kim Oanh, N. T., & Bich Yen (2025). A Survey-Based Emission Inventory of Greenhouse Gases Released from Rice Production on Consolidated Land in the Red River Delta of Vietnam. Atmosphere, 16(7), 794–794. doi:https://doi.org/10.3390/atmos16070794',
    },
    {
      title: 'Air Quality Improvement Program in Thailand: Sources of Air Pollution in Chiang Mai in 2022 - Main Sources and Measures to Mitigate Air Pollution',
      authors: 'Andre, J.-M., Bedrune, Q., Braish, T., Cuniasse, B., Hercule, J., Kamar, R., Mazin, V., Mercier, A., Moukhtar, S., Robert, C., Lai Nguyen Huy, Ekbordin Winijkul, & Nguyen Thi Kim Oanh',
      journal: 'Technical Report, Agence Française de Développement (AFD)',
      doi: 'https://www.researchgate.net/publication/388951708',
      cite: 'Andre, J.-M., Bedrune, Q., Braish, T., Cuniasse, B., Hercule, J., Kamar, R., Mazin, V., Mercier, A., Moukhtar, S., Robert, C., Lai Nguyen Huy, Ekbordin Winijkul, & Nguyen Thi Kim Oanh. (2025). Air Quality Improvement Program in Thailand: Sources of Air Pollution in Chiang Mai in 2022 - Main Sources and Measures to Mitigate Air Pollution. Technical Report, Agence Française de Développement (AFD). https://www.researchgate.net/publication/388951708',
      image: cover2025_4,
    },
  ],
  2024: [
    {
      title: 'In-depth analysis of ambient air pollution changes due to the COVID-19 pandemic in the Asian Monsoon region',
      authors: 'Latif, M. T., Purhanudin, N., Afandi, N. Z. M., Cambaliza, M. O. L., Halim, N. D. A., Hawari, N. S. S. L., Hien, T. T., Hlaing, O. M. T., Jansz, W. R. L. H., Khokhar, M. F., Lestari, P., Lung, S.-C. C., Naja, M., Oanh, N. T. K., Othman, M., Salam, A., Salim, P. M., Song, C.-K., Fujinawa, T., Tanimoto, H., Yu, L. E., & Crawford, J. H.',
      journal: 'Science of The Total Environment, 941, 173145.',
      doi: 'https://doi.org/10.1016/j.scitotenv.2024.173145',
      cite: 'Latif, M. T., Purhanudin, N., Afandi, N. Z. M., Cambaliza, M. O. L., Halim, N. D. A., Hawari, N. S. S. L., Hien, T. T., Hlaing, O. M. T., Jansz, W. R. L. H., Khokhar, M. F., Lestari, P., Lung, S.-C. C., Naja, M., Oanh, N. T. K., Othman, M., Salam, A., Salim, P. M., Song, C.-K., Fujinawa, T., Tanimoto, H., Yu, L. E., & Crawford, J. H. (2024). In-depth analysis of ambient air pollution changes due to the COVID-19 pandemic in the Asian Monsoon region. Science of The Total Environment, 941, 173145. doi:https://doi.org/10.1016/j.scitotenv.2024.173145',
    },
    {
      title: 'Atmospheric Emissions from Electricity Generation in Southeast Asia: Development Trend and Policy Responses',
      authors: 'Kim Oanh, N. T., & Huy, L. N.',
      journal: 'Current Pollution Reports, 10(1), 54-69.',
      doi: 'https://doi.org/10.1007/s40726-023-00289-0',
      cite: 'Kim Oanh, N. T., & Huy, L. N. (2024). Atmospheric Emissions from Electricity Generation in Southeast Asia: Development Trend and Policy Responses. Current Pollution Reports, 10(1), 54-69. doi:https://doi.org/10.1007/s40726-023-00289-0',
    },
    {
      title: 'Comparative analysis of PM<sub>2.5</sub> levels in various microenvironments associated with common cooking practices in selected Asian countries',
      authors: 'Kim Oanh, N. T., Huy, L. N., Maneepatra, W., Winijkul, E., Giandomenico, A., Tantrakarnapa, K., Co, H. X., Cuong, D. M., Tsou, M. C. M., Hien, T. T., Chi, N. D. C., Ngan, T. A., & Lung, S.-C. C.',
      journal: 'Air Quality, Atmosphere & Health.',
      doi: 'https://doi.org/10.1007/s11869-024-01615-1',
      cite: 'Kim Oanh, N. T., Huy, L. N., Maneepatra, W., Winijkul, E., Giandomenico, A., Tantrakarnapa, K., Co, H. X., Cuong, D. M., Tsou, M. C. M., Hien, T. T., Chi, N. D. C., Ngan, T. A., & Lung, S.-C. C. (2024). Comparative analysis of PM<sub>2.5</sub> levels in various microenvironments associated with common cooking practices in selected Asian countries. Air Quality, Atmosphere & Health. doi:https://doi.org/10.1007/s11869-024-01615-1',
    },
    {
      title: 'Air Quality Improvement Program in Thailand (AQIP): Comprehensive Inventory Methodology Report for Chiang Mai Province, Thailand (2022)',
      authors: 'Andre, J.-M., Bedrune, Q., Braish, T., Cuniasse, B., Hercule, J., Kamar, R., Mazin, V., Mercier, A., Robert, C., Nguyen Huy Lai, Ekbordin Winijkul, & Nguyen Thi Kim Oanh',
      journal: 'Technical Report, Agence Française de Développement (AFD)',
      doi: 'https://www.citepa.org/wp-content/uploads/2025/03/AQIP-Comprehensive-Inventory-Methodology-Report_Rev00.pdf',
      cite: 'Andre, J.-M., Bedrune, Q., Braish, T., Cuniasse, B., Hercule, J., Kamar, R., Mazin, V., Mercier, A., Robert, C., Nguyen Huy Lai, Ekbordin Winijkul, & Nguyen Thi Kim Oanh. (2024). Air Quality Improvement Program in Thailand (AQIP): Comprehensive Inventory Methodology Report for Chiang Mai Province, Thailand (2022). Technical Report, Agence Française de Développement (AFD). https://www.citepa.org/wp-content/uploads/2025/03/AQIP-Comprehensive-Inventory-Methodology-Report_Rev00.pdf',
      image: cover2024_4,
    },
    {
      title: 'Air Quality Improvement Program in Thailand (AQIP): Roadmap Emission Sources and Policies Report - Sources of Air Pollution in Chiang Mai in 2022: Main Sources and Measures to Mitigate Air Pollution',
      authors: 'Andre, J.-M., Bedrune, Q., Braish, T., Cuniasse, B., Hercule, J., Kamar, R., Mazin, V., Mercier, A., Robert, C., Nguyen Huy Lai, Ekbordin Winijkul, & Nguyen Thi Kim Oanh',
      journal: 'Technical Report, Agence Française de Développement (AFD)',
      doi: 'https://www.citepa.org/wp-content/uploads/2025/03/AQIP-Roadmap-Emission-Sources-and-Policies-Report_Rev00.pdf',
      cite: 'Andre, J.-M., Bedrune, Q., Braish, T., Cuniasse, B., Hercule, J., Kamar, R., Mazin, V., Mercier, A., Robert, C., Nguyen Huy Lai, Ekbordin Winijkul, & Nguyen Thi Kim Oanh. (2024). Air Quality Improvement Program in Thailand (AQIP): Roadmap Emission Sources and Policies Report - Sources of Air Pollution in Chiang Mai in 2022: Main Sources and Measures to Mitigate Air Pollution. Technical Report, Agence Française de Développement (AFD). https://www.citepa.org/wp-content/uploads/2025/03/AQIP-Roadmap-Emission-Sources-and-Policies-Report_Rev00.pdf',
      image: cover2024_5,
    },
  ],
  2023: [
    {
      title: 'Bi-decadal trend of atmospheric emissions from thermal power plants in Mainland Southeast Asia: Implications on acid deposition and climate change Mitigation',
      authors: 'Ha Chi, N. N., Kim Oanh, N. T., Winijkul, E., Xue, W., & Nguyen, L. T.',
      journal: 'Journal of Environmental Management, 348, 119252.',
      doi: 'https://doi.org/10.1016/j.jenvman.2023.119252',
      cite: 'Ha Chi, N. N., Kim Oanh, N. T., Winijkul, E., Xue, W., & Nguyen, L. T. (2023). Bi-decadal trend of atmospheric emissions from thermal power plants in Mainland Southeast Asia: Implications on acid deposition and climate change Mitigation. Journal of Environmental Management, 348, 119252. doi:https://doi.org/10.1016/j.jenvman.2023.119252',
    },
    {
      title: 'Analysis of atmospheric emissions associated with on-road and inland waterway transport in Vietnam: Past, current and future control scenarios',
      authors: 'Huy, L. N., Kim Oanh, N. T., Huong, C. T. D., & Huyen, T. T.',
      journal: 'Atmospheric Pollution Research, 14(8), 101810.',
      doi: 'https://doi.org/10.1016/j.apr.2023.101810',
      cite: 'Huy, L. N., Kim Oanh, N. T., Huong, C. T. D., & Huyen, T. T. (2023). Analysis of atmospheric emissions associated with on-road and inland waterway transport in Vietnam: Past, current lyckand future control scenarios. Atmospheric Pollution Research, 14(8), 101810. doi:https://doi.org/10.1016/j.apr.2023.101810',
    },
    {
      title: 'Chemical composition and potential sources of PM<sub>2.5</sub> in Hanoi',
      authors: 'Makkonen, U., Vestenius, M., Huy, L. N., Anh, N. T. N., Linh, P. T. V., Thuy, P. T., Phuong, H. T. M., Nguyen, H., Thuy, L. T., Aurela, M., Hellén, H., Loven, K., Kouznetsov, R., Kyllönen, K., Teinilä, K., & Kim Oanh, N. T.',
      journal: 'Atmospheric Environment, 299, 119650.',
      doi: 'https://doi.org/10.1016/j.atmosenv.2023.119650',
      cite: 'Makkonen, U., Vestenius, M., Huy, L. N., Anh, N. T. N., Linh, P. T. V., Thuy, P. T., Phuong, H. T. M., Nguyen, H., Thuy, L. T., Aurela, M., Hellén, H., Loven, K., Kouznetsov, R., Kyllönen, K., Teinilä, K., & Kim Oanh, N. T. (2023). Chemical composition and potential sources of PM<sub>2.5</sub> in Hanoi. Atmospheric Environment, 299, 119650. doi:https://doi.org/10.1016/j.atmosenv.2023.119650',
    },
    {
      title: 'Air quality management status and needs of countries in South Asia and Southeast Asia',
      authors: 'Verma, R. L., Kim Oanh, N. T., Winijkul, E., Huy, L. N., Pawarmart, I., Laowagul, W., Sooktawee, S., Permadi, D. A., Khan, M. F., Gunawardhana, L., & Patdu, M. K.',
      journal: 'APN Science Bulletin, 13(1), 130-152.',
      doi: 'https://doi.org/10.30852/sb.2023.2222',
      cite: 'Verma, R. L., Kim Oanh, N. T., Winijkul, E., Huy, L. N., Pawarmart, I., Laowagul, W., Sooktawee, S., Permadi, D. A., Khan, M. F., Gunawardhana, L., & Patdu, M. K. (2023). Air quality management status and needs of countries in South Asia and Southeast Asia. APN Science Bulletin, 13(1), 130-152. doi:https://doi.org/10.30852/sb.2023.2222',
    },
    {
      title: 'Health risk assessment of BTEX exposure at roadside and on-road traveling route in Bangkok Metropolitan Region',
      authors: 'Kongpran, J., Kim Oanh, N. T., & Hang, N. T.',
      journal: 'Journal of Environmental Exposure Assessment, 2(8), 1-16.',
      doi: 'https://dx.doi.org/10.20517/jeea.2022.38',
      cite: 'Kongpran, J., Kim Oanh, N. T., & Hang, N. T. (2023). Health risk assessment of BTEX exposure at roadside and on-road traveling route in Bangkok Metropolitan Region. Journal of Environmental Exposure Assessment, 2(8), 1-16. doi:https://dx.doi.org/10.20517/jeea.2022.38',
    },
    {
      title: 'State of Air in Nepal with focus in Kathmandu Valley',
      authors: 'Nguyen Thi Kim Oanh, Lai Nguyen Huy, Ram Lal Verma, Maheswar Rupakheti, Eri Saikawa, Didin Agustian Permadi, Ekbordin Winijkul, Uddhav Guragain, Bhushan Tuladhar, & Shreesha Nankhwa',
      journal: 'USAID-Nepal.',
      doi: 'https://doi.org/10.5281/zenodo.13335444',
      cite: 'Nguyen Thi Kim Oanh, Lai Nguyen Huy, Ram Lal Verma, Maheswar Rupakheti, Eri Saikawa, Didin Agustian Permadi, Ekbordin Winijkul, Uddhav Guragain, Bhushan Tuladhar, & Shreesha Nankhwa. (2023). State of Air in Nepal with focus in Kathmandu Valley. USAID-Nepal. https://doi.org/10.5281/zenodo.13335444',
      image: cover2023_6,
    },
  ],
  2022: [
    {
      title: 'Chemical characteristics and deposition amounts of carbonaceous species and inorganic ions in precipitation in the Bangkok Metropolitan Region',
      authors: 'Huo, M. Q., Sato, K., Oanh, N. T. K., Mettasitthikorn, M., Leamlaem, M., Permadi, D. A., Narita, D., Garivait, H., Laogul, W., & Akimoto, H.',
      journal: 'Atmospheric Environment, 291, 119393.',
      doi: 'https://doi.org/10.1016/j.atmosenv.2022.119393',
      cite: 'Huo, M. Q., Sato, K., Oanh, N. T. K., Mettasitthikorn, M., Leamlaem, M., Permadi, D. A., Narita, D., Garivait, H., Laogul, W., & Akimoto, H. (2022). Chemical characteristics and deposition amounts of carbonaceous species and inorganic ions in precipitation in the Bangkok Metropolitan Region. Atmospheric Environment, 291, 119393. doi:https://doi.org/10.1016/j.atmosenv.2022.119393',
    },
    {
      title: 'The Airborne and Satellite Investigation of Asian Air Quality (Asia-Aq): An Opportunity for International Collaboration',
      authors: 'Crawford, J. H., Travis, K. R., Judd, L. M., Lefer, B. L., Dibb, J. E., Kim, J., Park, R., Lee, G., Chang, L., Simpas, J. B. B., Cambaliza, M. O. L., Macatangay, R. C., Surapipith, V., Thongboonchoo, N., Oanh, N. T. K., Hien, T. T., Ly, B. T., Salam, A., Ghude, S. D., Latif, M. T., Yu, L. E., Tanimoto, H., & Kanaya, Y.',
      journal: 'IGARSS 2022 – 2022 IEEE International Geoscience and Remote Sensing Symposium.',
      doi: 'https://doi.org/10.1109/IGARSS46834.2022.9884827',
      cite: 'Crawford, J. H., Travis, K. R., Judd, L. M., Lefer, B. L., Dibb, J. E., Kim, J., Park, R., Lee, G., Chang, L., Simpas, J. B. B., Cambaliza, M. O. L., Macatangay, R. C., Surapipith, V., Thongboonchoo, N., Oanh, N. T. K., Hien, T. T., Ly, B. T., Salam, A., Ghude, S. D., Latif, M. T., Yu, L. E., Tanimoto, H., & Kanaya, Y. (2022). The Airborne and Satellite Investigation of Asian Air Quality (Asia-Aq): An Opportunity for International Collaboration. IGARSS 2022 – 2022 IEEE International Geoscience and Remote Sensing Symposium. doi:https://doi.org/10.1109/IGARSS46834.2022.9884827',
      image: cover2022_2,
    },
    {
      title: 'Large spatio-temporal variations of size-resolved particulate matter and volatile organic compounds in urban area with heavy traffic',
      authors: 'Phuc, N. H., & Kim Oanh, N. T.',
      journal: 'Environmental Science and Pollution Research, 29(15), 21491-21507.',
      doi: 'https://doi.org/10.1007/s11356-021-16921-9',
      cite: 'Phuc, N. H., & Kim Oanh, N. T. (2022). Large spatio-temporal variations of size-resolved particulate matter and volatile organic compounds in urban area with heavy traffic. Environmental Science and Pollution Research, 29(15), 21491-21507. doi:https://doi.org/10.1007/s11356-021-16921-9',
    },
    {
      title: 'Research Priorities of Applying Low-Cost PM<sub>2.5</sub> Sensors in Southeast Asian Countries',
      authors: 'Lung, S.-C. C., Thi Hien, T., Cambaliza, M. O. L., Hlaing, O. M. T., Oanh, N. T. K., Latif, M. T., Lestari, P., Salam, A., Lee, S.-Y., Wang, W.-C. V., Tsou, M.-C. M., Cong-Thanh, T., Cruz, M. T., Tantrakarnapa, K., Othman, M., Roy, S., Dang, T. N., & Agustian, D.',
      journal: 'International Journal of Environmental Research and Public Health, 19(3), 1522.',
      doi: 'https://doi.org/10.3390/ijerph19031522',
      cite: 'Lung, S.-C. C., Thi Hien, T., Cambaliza, M. O. L., Hlaing, O. M. T., Oanh, N. T. K., Latif, M. T., Lestari, P., Salam, A., Lee, S.-Y., Wang, W.-C. V., Tsou, M.-C. M., Cong-Thanh, T., Cruz, M. T., Tantrakarnapa, K., Othman, M., Roy, S., Dang, T. N., & Agustian, D. (2022). Research Priorities of Applying Low-Cost PM<sub>2.5</sub> Sensors in Southeast Asian Countries. International Journal of Environmental Research and Public Health, 19(3), 1522. doi:https://doi.org/10.3390/ijerph19031522',
    },
    {
      title: 'Effects of length-to-diameter ratio, pinewood sawdust, and sodium lignosulfonate on quality of rice straw pellets produced via a flat die pellet mill',
      authors: 'Dao, C. N., Salam, A., & Oanh, N. T. K.',
      journal: 'Renewable Energy, 181, 1140-1154.',
      doi: 'https://doi.org/10.1016/j.renene.2021.09.088',
      cite: 'Dao, C. N., Salam, A., & Oanh, N. T. K. (2022). Effects of length-to-diameter ratio, pinewood sawdust, and sodium lignosulfonate on quality of rice straw pellets produced via a flat die pellet mill. Renewable Energy, 181, 1140-1154. doi:https://doi.org/10.1016/j.renene.2021.09.088',
    },
  ],
};

const Publications = () => {
  const [copiedIndex, setCopiedIndex] = useState<string>('');

  const handleCopy = (text: string, id: string) => {
    // Strip HTML tags for clipboard
    const plainText = text.replace(/<[^>]*>/g, '');
    navigator.clipboard.writeText(plainText);
    toast.success('Citation copied to clipboard!');
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(''), 2000); // Reset after 2 seconds
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Hero Section - matching website style */}
      <section className="pt-20 pb-4 bg-white">
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
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Recently Publications
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Publications Content */}
      <section className="pt-4 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Iterate through years in descending order (2026, 2025, 2024, 2023, 2022) */}
            {['2026', '2025', '2024', '2023', '2022'].map((year, yearIndex) => (
              <div key={year}>
                {/* Separator line between years (not before first year) */}
                {yearIndex > 0 && <div className="border-t-2 border-primary/20 my-12"></div>}
                
                {/* Year heading */}
                <motion.h2 
                  variants={cardVariants}
                  className="text-3xl md:text-4xl font-bold text-primary mb-6"
                >
                  {year}
                </motion.h2>
                
                {/* Publications for this year */}
                <div className="space-y-6">
                  {publications[year].map((pub, index) => {
                    const pubId = `${year}-${index}`;
                    return (
                      <motion.div
                        key={pubId}
                        variants={cardVariants}
                        className="group pb-6 mb-6 border-b border-border last:border-b-0"
                      >
                        <div className="flex gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-32 md:w-40">
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
                          
                          <div className="flex-1 min-w-0">
                            <Link to={pub.doi} target="_blank" rel="noopener noreferrer" className="block mb-2">
                              <h3 
                                className="text-xl font-semibold text-primary underline leading-tight hover:text-primary/80 transition-colors"
                                dangerouslySetInnerHTML={{ __html: pub.title }}
                              />
                            </Link>
                            
                            <div className="text-base text-foreground mb-4">
                              Publication category: {
                                /symposium|conference|proceedings|igarss/i.test(pub.journal) 
                                  ? 'Conference Paper' 
                                  : /usaid|technical report/i.test(pub.journal) 
                                  ? 'Technical Report' 
                                  : 'Journal Article'
                              }
                            </div>

                            <div className="mb-4">
                              <div className="text-base text-foreground mb-2">
                                Published Year: {year}
                              </div>
                              <div className="text-base text-foreground mb-2">
                                Authors: {pub.authors}
                              </div>
                              <div className="text-base text-foreground italic mb-2">
                                <span dangerouslySetInnerHTML={{ __html: `Journal Title, Volume (Issue), Page: ${pub.journal}` }} />
                              </div>
                              <div className="text-base text-foreground">
                                {pub.doi.includes('citepa.org') ? 'Link' : 'DOI'}: <Link to={pub.doi} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{pub.doi}</Link>
                              </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-border">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                  <span className="text-base font-semibold text-foreground">Cite: </span>
                                  <span 
                                    className="text-base text-foreground"
                                    dangerouslySetInnerHTML={{ __html: `'' ${pub.cite}` }}
                                  />
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="flex-shrink-0"
                                  onClick={() => handleCopy(pub.cite, pubId)}
                                >
                                  {copiedIndex === pubId ? <Check className="text-primary" size={20} /> : <Copy className="text-primary" size={20} />}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Separator line before ResearchGate section */}
          <div className="border-t-2 border-primary/20 my-12"></div>

          {/* ResearchGate Section - matching website style */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-8"
          >
            <div className="rounded-lg p-4 text-center">
              <h2 className="text-3xl text-primary mb-4">
                Find More Previous Research Publications on
                <br />
                <Link 
                  to="https://www.researchgate.net/profile/Nguyen-Thi-Oanh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-bold underline"
                >
                  ResearchGate
                </Link>
              </h2>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default Publications;