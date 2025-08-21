import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './HexagonGrid.css';

interface HexagonItem {
  title: string;
  position: 'top' | 'topLeft' | 'topRight' | 'center' | 'bottom' | 'bottomLeft' | 'bottomRight';
  bgColor?: string;
  onClick?: () => void;
}

export const HexagonGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const items: HexagonItem[] = [
    {
      title: "AirQC",
      position: 'center',
      bgColor: ''
    },
    {
      title: "AQ Monitoring, Chemical Analysis, SA",
      position: 'top',
      bgColor: 'bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600'
    },
    {
      title: "Integrated Air Pollution Control: Demonstration",
      position: 'bottom',
      bgColor: 'bg-conic-180 from-blue-700 via-blue-50 to-blue-700'
    },
    {
      title: "Impact Assessment: Health and Ecosystem",
      position: 'topLeft',
      bgColor: 'bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600'
    },
    {
      title: "Emission Inventory and Emission Projection",
      position: 'topRight',
      bgColor: 'bg-conic-180 from-indigo-700 via-indigo-50 to-indigo-700'
    },
    {
      title: "Meteorology and Climate Science",
      position: 'bottomLeft',
      bgColor: 'bg-conic-180 from-purple-600 via-purple-50 to-purple-600'
    },
    {
      title: "Dispersion Modeling",
      position: 'bottomRight',
      bgColor: 'bg-conic-180 from-purple-700 via-purple-50 to-purple-700'
    }
  ];

  const handleClick = (position: string) => {
    if (position !== 'center') {
      console.log(`Clicked ${position} hexagon`);
      // Add your click handling logic here
    }
  };

  const renderHexagon = (item: HexagonItem) => (
    <div 
      className={`hexagon-container ${item.position}`}
      onClick={() => handleClick(item.position)}
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
    </div>
  );
};
