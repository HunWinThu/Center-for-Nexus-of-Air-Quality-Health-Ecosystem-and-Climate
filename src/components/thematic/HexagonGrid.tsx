import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ThematicModal } from './ThematicModal';
import './HexagonGrid.css';

// Import images for the modal
import monitoringImg from '@/assets/hig-quality.jpg';
import controlImg from '@/assets/government.jpg';
import healthImg from '@/assets/capacity.jpg';
import emissionImg from '@/assets/air-pollution-research.png';
import meteorologyImg from '@/assets/co-benefits.png';
import modelingImg from '@/assets/rice-straw-burning.jpg';

interface HexagonItem {
  title: string;
  position: 'top' | 'topLeft' | 'topRight' | 'center' | 'bottom' | 'bottomLeft' | 'bottomRight';
  bgColor?: string;
  onClick?: () => void;
  modalData?: {
    description: string;
    image: string;
    imageAlt: string;
  };
}

interface ModalState {
  isOpen: boolean;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  position: 'left' | 'right';
  hexagonRect: DOMRect | null;
}

export const HexagonGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    title: '',
    description: '',
    image: '',
    imageAlt: '',
    position: 'right',
    hexagonRect: null
  });
  
  const items: HexagonItem[] = [
    {
      title: "AirQC",
      position: 'center',
      bgColor: ''
    },
    {
      title: "AQ Monitoring, Chemical Analysis, SA",
      position: 'top',
      bgColor: 'bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600',
      modalData: {
        description: "Our comprehensive air quality monitoring program employs state-of-the-art equipment and methodologies to track pollutant concentrations across various environments. We conduct detailed chemical analysis of atmospheric samples, including PM2.5, PM10, ozone, nitrogen oxides, and volatile organic compounds. Our source apportionment studies help identify the major contributors to air pollution, enabling targeted intervention strategies. Through continuous monitoring networks and advanced analytical techniques, we provide real-time data and insights that inform policy decisions and public health recommendations.",
        image: monitoringImg,
        imageAlt: "Air quality monitoring equipment and chemical analysis"
      }
    },
    {
      title: "Integrated Air Pollution Control: Demonstration",
      position: 'bottom',
      bgColor: 'bg-conic-180 from-blue-700 via-blue-50 to-blue-700',
      modalData: {
        description: "We develop and demonstrate integrated approaches to air pollution control that address multiple pollutants simultaneously. Our demonstration projects showcase cost-effective technologies and practices that can be scaled up across different sectors. From industrial emission control systems to clean cooking technologies, we work with communities and governments to implement practical solutions. Our integrated approach considers economic feasibility, social acceptance, and environmental effectiveness to ensure sustainable long-term impact.",
        image: controlImg,
        imageAlt: "Integrated air pollution control demonstration projects"
      }
    },
    {
      title: "Impact Assessment: Health and Ecosystem",
      position: 'topLeft',
      bgColor: 'bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600',
      modalData: {
        description: "Our impact assessment research quantifies the effects of air pollution on human health and ecosystem services. We conduct epidemiological studies to understand the relationship between air quality and respiratory diseases, cardiovascular conditions, and other health outcomes. Our ecosystem research examines how air pollutants affect agricultural productivity, forest health, and biodiversity. Through advanced modeling and field studies, we provide evidence-based assessments that inform policy makers about the true costs of air pollution and the benefits of clean air initiatives.",
        image: healthImg,
        imageAlt: "Health and ecosystem impact assessment research"
      }
    },
    {
      title: "Emission Inventory and Emission Projection",
      position: 'topRight',
      bgColor: 'bg-conic-180 from-indigo-700 via-indigo-50 to-indigo-700',
      modalData: {
        description: "We develop comprehensive emission inventories that catalog pollutant sources across different sectors including transportation, industry, agriculture, and residential activities. Our projection models forecast future emission scenarios under various policy and development pathways. Using advanced methodologies and local activity data, we provide accurate estimates of current emissions and reliable projections for future planning. These inventories serve as fundamental inputs for air quality modeling and policy development at local, national, and regional scales.",
        image: emissionImg,
        imageAlt: "Emission inventory development and projection modeling"
      }
    },
    {
      title: "Meteorology and Climate Science",
      position: 'bottomLeft',
      bgColor: 'bg-conic-180 from-purple-600 via-purple-50 to-purple-600',
      modalData: {
        description: "Our meteorology and climate science research examines the complex interactions between weather patterns, climate change, and air quality. We study how meteorological conditions influence pollutant transport, transformation, and removal from the atmosphere. Our climate research investigates the co-benefits of air pollution control measures for climate change mitigation. Through advanced atmospheric science techniques, we provide insights into how changing climate conditions may affect future air quality and inform adaptation strategies for air pollution management.",
        image: meteorologyImg,
        imageAlt: "Meteorology and climate science research"
      }
    },
    {
      title: "Dispersion Modeling",
      position: 'bottomRight',
      bgColor: 'bg-conic-180 from-purple-700 via-purple-50 to-purple-700',
      modalData: {
        description: "We employ sophisticated atmospheric dispersion models to predict how pollutants move through the atmosphere from their sources to receptor locations. Our modeling capabilities include both local-scale dispersion for industrial sources and regional-scale transport for understanding transboundary pollution. These models help predict air quality impacts of proposed developments, evaluate the effectiveness of emission control strategies, and support emergency response planning. Our modeling work combines meteorological data, emission inventories, and advanced numerical techniques to provide accurate air quality forecasts and scenario assessments.",
        image: modelingImg,
        imageAlt: "Atmospheric dispersion modeling and air quality prediction"
      }
    }
  ];

  const handleClick = (item: HexagonItem, event: React.MouseEvent) => {
    if (item.position !== 'center' && item.modalData) {
      // Get the hexagon element's position
      const hexagonElement = event.currentTarget as HTMLElement;
      const rect = hexagonElement.getBoundingClientRect();
      
      // Determine popup position based on hexagon position
      // Right side hexagons (topRight, bottomRight) and bottom -> popup appears on right
      // Left side hexagons (topLeft, bottomLeft) and top -> popup appears on left
      const popupPosition = 
        item.position === 'topRight' || 
        item.position === 'bottomRight' || 
        item.position === 'bottom' 
          ? 'right' 
          : 'left';
      
      setModal({
        isOpen: true,
        title: item.title,
        description: item.modalData.description,
        image: item.modalData.image,
        imageAlt: item.modalData.imageAlt,
        position: popupPosition,
        hexagonRect: rect
      });
    }
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      title: '',
      description: '',
      image: '',
      imageAlt: '',
      position: 'right',
      hexagonRect: null
    });
  };

  const renderHexagon = (item: HexagonItem) => (
    <div 
      className={`hexagon-container ${item.position}`}
      onClick={(e) => handleClick(item, e)}
    >
      <div className={`hexagon ${item.bgColor || ''}`}>
        <div className="hexagon-content">
          <span className={`text-[#ffffff] font-bold ${item.position === 'center' ? 'text-5xl' : 'text-xl'}`}>
            {item.title}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-16">Core research activities</h2>
        <div className="relative h-[700px]">
          <div className="honeycomb-grid">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 0
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                {renderHexagon(item)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <ThematicModal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        description={modal.description}
        image={modal.image}
        imageAlt={modal.imageAlt}
        position={modal.position}
        hexagonRect={modal.hexagonRect}
      />
    </div>
  );
};
