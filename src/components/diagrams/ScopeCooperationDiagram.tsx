import { motion } from "framer-motion";

const ScopeCooperationDiagram = () => {
  return (
    <div className="w-full max-w-none ml-0 mr-32 pl-0 pr-4" style={{ position: 'relative', isolation: 'isolate' }}>
      <div className="relative w-full h-[900px] overflow-x-auto lg:overflow-visible" style={{ contain: 'layout style' }}>
        <div className="relative min-w-[1200px] h-[900px]" style={{ position: 'relative', contain: 'layout' }}>
          
          {/* Dotted Oval covering the whole diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute border-4 border-dashed border-gray-400 z-10"
            style={{
              top: "80px",
              left: "152px", 
              right: "152px",
              bottom: "72px",
              borderRadius: "50%"
            }}
          />

          {/* Overlapping Venn Diagram Circles */}
          <div className="absolute inset-0 z-20 flex items-center justify-center -translate-y-8">
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
        {/* Top Organization Box - centered on screen */}
        <div className="absolute inset-0 z-30 flex items-start justify-center pt-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="bg-yellow-200 border-2 border-yellow-400 w-52 h-24 rounded-lg text-center shadow-lg flex items-center justify-center">
              <p className="font-bold text-gray-800 text-base leading-tight">WMO, CCAC, IGES, RIFS, RICARDO</p>
            </div>
            <div className="bg-purple-100 border border-purple-300 w-64 h-20 rounded-lg mt-2 shadow-lg flex items-center justify-start pl-3">
              <div className="text-left text-purple-700">
                <p className="text-sm leading-tight">• Co-benefits of emission reduction</p>
                <p className="text-sm leading-tight">• Co-control: GHG, SLCF, air pollutants</p>
                <p className="text-sm leading-tight">• Air pollution meteorology/climatology</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Left Side Organizations - positioned at exact middle of rectangle's left side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute left-12 z-30 flex gap-6 items-center"
          style={{ top: "376px", transform: "translateY(-50%)" }}
        >
          <div className="bg-yellow-200 border-2 border-yellow-400 w-52 h-24 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold text-gray-800 text-base leading-tight">CAA, IRD, IIASA, Universities</p>
              <p className="text-sm text-gray-600 leading-tight">(Clarkson, PKU, Colorado, Emory, etc.)</p>
            </div>
          </div>
          <div className="bg-blue-100 border border-blue-300 w-40 h-16 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold text-blue-700 text-base leading-tight">AIT: EEM, InterLab,</p>
              <p className="font-bold text-blue-700 text-base leading-tight">RRC.AP</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side AIT Energy - aligned with AIT: EEM horizontally */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute right-56 z-30"
          style={{ top: "376px", transform: "translateY(-50%)" }}
        >
          <div className="bg-blue-100 border border-blue-300 w-40 h-16 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold text-blue-700 text-base leading-tight">AIT: Energy</p>
              <p className="font-bold text-blue-700 text-base leading-tight">Climate Change</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Left Effects - moved further top-right */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-64 left-56 z-30"
        >
          <div className="bg-purple-100 border border-purple-300 w-64 h-20 rounded-lg shadow-lg flex items-center justify-start pl-3">
            <div className="text-left text-purple-700">
              <p className="text-sm leading-tight">• Human: Toxic pollutants</p>
              <p className="text-sm leading-tight">• Ecosystem: phytotoxic pollutants, acid deposition</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right Effects - aligned with AIT: Energy box vertically */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-64 right-56 z-30"
        >
          <div className="bg-purple-100 border border-purple-300 w-64 h-20 rounded-lg shadow-lg flex items-center justify-start pl-3">
            <div className="text-left text-purple-700">
              <p className="text-sm leading-tight">• Climate intensification of</p>
              <p className="text-sm leading-tight">wildfires (extreme events) and</p>
              <p className="text-sm leading-tight">health effects</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Center Organizations - centered using flex */}
        <div className="absolute inset-0 z-30 flex items-end justify-center pb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="space-y-3 flex flex-col items-center"
          >
            <div className="bg-blue-100 border border-blue-300 w-40 h-16 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-blue-700 text-base leading-tight">AIT: Food & Water:</p>
                <p className="font-bold text-blue-700 text-base leading-tight">Crops & Aquaculture</p>
              </div>
            </div>
            <div className="bg-yellow-200 border-2 border-yellow-400 w-52 h-24 rounded-lg text-center shadow-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-gray-800 text-base leading-tight">Human: WHO, Canberra, SINICA</p>
                <p className="font-bold text-gray-800 text-base  leading-tight">Ecosystem: EANET, York University</p>
              </div>
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
            d="M 660 220 L 660 370"
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
            d="M 478 564 L 620 460"
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
            d="M 840 566 L 700 460"
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