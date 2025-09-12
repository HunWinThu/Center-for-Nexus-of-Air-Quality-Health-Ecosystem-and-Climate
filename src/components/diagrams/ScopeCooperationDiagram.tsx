import { motion } from "framer-motion";

const ScopeCooperationDiagram = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative w-full h-[800px] overflow-x-auto lg:overflow-visible">
        <div className="relative min-w-[1000px] h-[800px]">
          {/* Overlapping Venn Diagram Circles */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="relative w-[400px] h-[320px]">
            {/* Air Pollution - Blue (left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute w-[240px] h-[240px] z-21"
              style={{ 
                top: "0px",
                left: "0px"
              }}
            >
              <div className="w-full h-full rounded-full bg-blue-500 opacity-70 shadow-xl flex items-center justify-center">
                <div className="text-center text-white -translate-x-8">
                  <h4 className="font-bold text-lg mb-1">Air Pollution</h4>
                  <p className="text-base">AQ engineering</p>
                  <p className="text-base">& management</p>
                </div>
              </div>
            </motion.div>

            {/* Climate - Green (right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="absolute w-[240px] h-[240px] z-22"
              style={{ 
                top: "0px",
                right: "0px"
              }}
            >
              <div className="w-full h-full rounded-full bg-green-500 opacity-70 shadow-xl flex items-center justify-center">
                <div className="text-center text-white translate-x-8">
                  <h4 className="font-bold text-lg mb-1">Climate</h4>
                  <p className="text-base">Meteorology &</p>
                  <p className="text-base">Science of</p>
                  <p className="text-base">Climate Change</p>
                </div>
              </div>
            </motion.div>

            {/* Planetary Health - Red (bottom center) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute w-[240px] h-[240px] z-23"
              style={{ 
                top: "150px",
                left: "20%",
                transform: "translateX(-50%)"
              }}
            >
              <div className="w-full h-full rounded-full bg-red-500 opacity-70 shadow-xl flex items-center justify-center">
                <div className="text-center text-white translate-y-8">
                  <h4 className="font-bold text-lg mb-1">Planetary Health</h4>
                  <p className="text-base">Air pollution effects</p>
                  <p className="text-base">on health & ecosystem</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Adjusted Organization Boxes */}
        {/* Top Organization Box - centered above circles using flex */}
        <div className="absolute inset-0 z-30 flex items-start justify-center pt-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-yellow-200 border-2 border-yellow-400 px-4 py-2 rounded-lg text-center shadow-lg">
              <p className="font-bold text-gray-800 text-lg">WMO, CCAC, IGES, RIFS, RICARDO</p>
            </div>
            <div className="bg-purple-100 border border-purple-300 px-4 py-3 rounded-lg mt-2 text-base text-purple-700 shadow-lg text-center">
              <p>• Co-benefits of emission reduction</p>
              <p>• Co-control: GHG, SLCF, air pollutants</p>
              <p>• Air pollution meteorology/climatology</p>
            </div>
          </motion.div>
        </div>

        {/* Left Side Organizations - adjusted position */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute left-20 top-1/4 transform -translate-y-1/2 z-30 space-y-4"
        >
          <div className="bg-yellow-200 border-2 border-yellow-400 px-4 py-3 rounded-lg shadow-lg">
            <p className="font-bold text-gray-800 text-lg">CAA, IRD, IIASA, Universities</p>
            <p className="text-base text-gray-600">(Clarkson, PKU, Colorado,</p>
            <p className="text-base text-gray-600">Emory, etc.)</p>
          </div>
          <div className="bg-blue-100 border border-blue-300 px-4 py-2 rounded-lg shadow-lg">
            <p className="font-bold text-blue-700 text-lg">AIT: EEM, InterLab,</p>
            <p className="font-bold text-blue-700 text-lg">RRC.RP</p>
          </div>
        </motion.div>

        {/* Right Side AIT Energy - adjusted position */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute right-20 top-1/4 transform -translate-y-1/2 z-30"
        >
          <div className="bg-blue-100 border border-blue-300 px-4 py-2 rounded-lg shadow-lg">
            <p className="font-bold text-blue-700 text-lg">AIT: Energy</p>
            <p className="font-bold text-blue-700 text-lg">Climate Change</p>
          </div>
        </motion.div>

        {/* Bottom Left Effects - centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-44 left-20 z-30"
        >
          <div className="bg-purple-100 border border-purple-300 px-4 py-3 rounded-lg text-base text-purple-700 shadow-lg text-center">
            <p>• Human: Toxic pollutants</p>
            <p>• Ecosystem: phytotoxic pollutants, acid</p>
            <p>deposition</p>
          </div>
        </motion.div>

        {/* Bottom Right Effects - centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-44 right-20 z-30"
        >
          <div className="bg-purple-100 border border-purple-300 px-4 py-3 rounded-lg text-base text-purple-700 shadow-lg text-center">
            <p>• Climate intensification of</p>
            <p>wildfires (extreme events) and</p>
            <p>health effects</p>
          </div>
        </motion.div>

        {/* Bottom Center Organizations - centered using flex */}
        <div className="absolute inset-0 z-30 flex items-end justify-center pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="space-y-3 flex flex-col items-center"
          >
            <div className="bg-yellow-200 border-2 border-yellow-400 px-4 py-2 rounded-lg text-center shadow-lg">
              <p className="font-bold text-gray-800 text-base">Human: WHO, Canberra, SINICA</p>
              <p className="font-bold text-gray-800 text-base">Ecosystem: EANET, York University</p>
            </div>
            <div className="bg-blue-100 border border-blue-300 px-4 py-2 rounded-lg text-center shadow-lg">
              <p className="font-bold text-blue-700 text-base">AIT: Food & Water: Crops & Aquaculture</p>
            </div>
          </motion.div>
        </div>

        {/* Arrow SVG Layer */}
        <svg className="absolute inset-0 w-full h-full z-25 pointer-events-none">
          {/* Arrow from top purple box to center intersection */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            d="M 580 120 L 580 350"
            stroke="#7c3aed"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          
          {/* Arrow from left purple box to left intersection */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            d="M 380 535 L 550 440"
            stroke="#7c3aed"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          
          {/* Arrow from right purple box to right intersection */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            d="M 840 530 L 600 420"
            stroke="#7c3aed"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          
          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#7c3aed"
              />
            </marker>
          </defs>
        </svg>
        </div>
      </div>
    </div>
  );
};

export default ScopeCooperationDiagram;