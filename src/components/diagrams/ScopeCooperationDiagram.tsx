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
              top: "7px",
              left: "132px", 
              right: "132px",
              bottom: "-16px",
              borderRadius: "50%"            }}
          />

          {/* Overlapping Venn Diagram Circles */}
          <div className="absolute inset-0 z-60 flex items-center justify-center -translate-y-5">
            <div className="relative w-[540px] h-[440px]">
            {/* Air Pollution - Blue (left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute w-[320px] h-[320px] z-21"
              style={{ 
                top: "0px",
                left: "0px"
              }}
            >
              <div className="w-full h-full rounded-full bg-blue-500 opacity-85 shadow-xl flex items-center justify-center">
                <div className="text-center text-white -translate-x-8">
                  <h4 className="font-bold text-xl mb-1">Air Quality</h4>
                  <p className="text-lg">Air pollution</p>
                  <p className="text-lg">engineering</p>
                  <p className="text-lg">& management</p>
                </div>
              </div>
            </motion.div>

            {/* Climate - Green (right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="absolute w-[320px] h-[320px] z-22"
              style={{ 
                top: "0px",
                right: "0px"
              }}
            >
              <div className="w-full h-full rounded-full bg-green-500 opacity-85 shadow-xl flex items-center justify-center">
                <div className="text-center text-white translate-x-8">
                  <h4 className="font-bold text-xl mb-1">Climate</h4>
                  <p className="text-lg">Meteorology &</p>
                  <p className="text-lg">Science of</p>
                  <p className="text-lg">Climate Change</p>
                </div>
              </div>
            </motion.div>

            {/* Planetary Health - Red (bottom center) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute w-[320px] h-[320px] z-23"
              style={{ 
                top: "200px",
                left: "20%",
                transform: "translateX(-50%)"
              }}
            >
              <div className="w-full h-full rounded-full bg-red-500 opacity-85 shadow-xl flex items-center justify-center">
                <div className="text-center text-white translate-y-8">
                  <h4 className="font-bold text-xl mb-1">Planetary Health</h4>
                  <p className="text-lg">Air pollution effects</p>
                  <p className="text-lg">on health & ecosystem</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Adjusted Organization Boxes */}
        {/* Top Organization Box - centered on screen */}
        <div className="absolute inset-0 z-30 flex items-start justify-center pt-0" style={{ marginTop: '-40px' }}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="bg-yellow-200 border-2 border-yellow-400 w-96 h-28 rounded-lg text-center shadow-lg flex items-center justify-center">
              <p className="font-bold text-gray-800 text-xl leading-tight">WMO, CCAC, IGES, RIFS, RICARDO</p>
            </div>
            <div className="border border-purple-300 w-80 h-30 rounded-lg mt-2 shadow-lg flex items-center justify-start pl-3" style={{ backgroundColor: '#25a05b' }}>
              <div className="text-left text-white">
                <p className="text-lg leading-tight">• Co-benefits of emission reduction</p>
                <p className="text-lg leading-tight">• Co-control: GHG, SLCF,</p>
                <p className="text-lg leading-tight ml-3">air pollutants</p>
                <p className="text-lg leading-tight">• Air pollution meteorology/</p>
                <p className="text-lg leading-tight ml-3">climatology</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Left Side Universities Box */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute left-4 z-30"
          style={{ top: "376px", transform: "translateY(-50%)" }}
        >
          <div className="bg-yellow-200 border-2 border-yellow-400 w-80 h-28 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold text-gray-800 text-xl leading-tight">CAA, IRD, IIASA, Universities</p>
              <p className="text-lg text-gray-600 leading-tight">(Clarkson, PKU, Colorado, Emory, etc.)</p>
            </div>
          </div>
        </motion.div>

        {/* Left Side AIT: EEM Box - aligned with AIT: Energy */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute z-30"
          style={{ left: "210px", top: "250px", transform: "translateY(-50%)" }}
        >
          <div className="bg-blue-100 border border-blue-300 w-44 h-20 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold text-blue-700 text-lg leading-tight">AIT: EEM, InterLab,</p>
              <p className="font-bold text-blue-700 text-lg leading-tight">RRC.AP</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side AIT Energy - aligned with AIT: EEM horizontally */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute right-56 z-30"
          style={{ right: "210px", top: "250px", transform: "translateY(-50%)", display: "flex", alignItems: "center" }}
        >
          <div className="bg-blue-100 border border-blue-300 w-44 h-20 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold text-blue-700 text-lg leading-tight">AIT: Energy</p>
              <p className="font-bold text-blue-700 text-lg leading-tight">Climate Change</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Left Effects - moved further top-right */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-64 left-48 z-30"
        >
          <div className="border border-purple-300 w-72 h-28 rounded-lg shadow-lg flex items-center justify-start pl-3" style={{ backgroundColor: '#8b5cf6' }}>
            <div className="text-left text-white">
              <p className="text-lg leading-tight">• Human: Toxic pollutants</p>
              <p className="text-lg leading-tight">• Ecosystem: phytotoxic </p>
              <p className="text-lg leading-tight ml-2">pollutants, acid deposition</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right Effects - aligned with AIT: Energy box vertically */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-64 right-48 z-30"
        >
          <div className="border border-purple-300 w-72 h-28 rounded-lg shadow-lg flex items-center justify-start pl-3" style={{ backgroundColor: '#a58260' }}>
            <div className="text-left text-white">
              <p className="text-lg leading-tight">• Climate intensification of</p>
              <p className="text-lg leading-tight ml-3">wildfires (extreme events) and</p>
              <p className="text-lg leading-tight ml-3">health effects</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Center Organizations - centered using flex */}
        <div className="absolute inset-0 z-30 flex items-end justify-center pb-0" style={{ marginBottom: '-50px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="space-y-2 flex flex-col items-center"
          >
            <div className="bg-blue-100 border border-blue-300 w-44 h-20 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-blue-700 text-lg leading-tight">AIT: Food & Water:</p>
                <p className="font-bold text-blue-700 text-lg leading-tight">Crops & Aquaculture</p>
              </div>
            </div>
            <div className="bg-yellow-200 border-2 border-yellow-400 w-96 h-28 rounded-lg text-center shadow-lg flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-gray-800 text-xl leading-tight">Human: WHO, Canberra, SINICA</p>
                <p className="font-bold text-gray-800 text-xl  leading-tight">Ecosystem: EANET, York University</p>
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
            d="M 660 195 L 660 360"
            stroke="#1e7a47"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead1)"
          />
          
          {/* Arrow from left purple box to left intersection */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            d="M 420 564 L 590 475"
            stroke="#7c3aed"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead2)"
          />
          
          {/* Arrow from right purple box to right intersection */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            d="M 840 536 L 720 485"
            stroke="#8b6b4a"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead3)"
          />
          
          {/* Arrow marker definitions */}
          <defs>
            {/* Blue-Green arrow marker (top) */}
            <marker
              id="arrowhead1"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#1e7a47"
              />
            </marker>
            
            {/* Red-Blue arrow marker (left) */}
            <marker
              id="arrowhead2"
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
            
            {/* Red-Green arrow marker (right) */}
            <marker
              id="arrowhead3"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#8b6b4a"
              />
            </marker>
          </defs>
        </svg>

        {/* Legend Sections Positioned Around Diagram */}
        
        {/* Top Right: International Organizations */}
                <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="absolute z-40 bg-white border-2 border-yellow-400 rounded-lg shadow-lg p-4 max-w-sm"
          style={{ top: "-50px", right: "-200px" }}
        >
          <div className="border-l-4 border-yellow-400 pl-4">
            <h4 className="font-bold text-yellow-600 text-xl mb-1">International Organizations</h4>
            <div className="flex flex-col space-y-1 text-base">
              <div className="flex"><span className="font-semibold text-yellow-600 w-16 text-left mr-1">WMO</span><span>: World Meteorological</span></div>
              <div className="flex"><span className="font-semibold text-yellow-600 w-16 text-left mr-1"></span><span className="ml-2">Organization</span></div>
              <div className="flex"><span className="font-semibold text-yellow-600 w-16 text-left mr-1">CCAC</span><span>: Climate & Clean Air Coalition</span></div>
              <div className="flex"><span className="font-semibold text-yellow-600 w-16 text-left mr-1">IGES</span><span>: Institute for Global</span></div>
              <div className="flex"><span className="font-semibold text-yellow-600 w-16 text-left mr-1"></span><span className="ml-2">Environmental Strategies</span></div>
              <div className="flex"><span className="font-semibold text-yellow-600 w-16 text-left mr-1">RIFS</span><span>: Research Institute for Future</span></div>
              <div className="flex"><span className="font-semibold text-yellow-600 w-16 text-left mr-1"></span><span className="ml-2">Studies</span></div>
              <div className="flex"><span className="font-semibold text-yellow-600 w-16 text-left mr-1">RICARDO</span><span>: Ricardo Energy & Environment</span></div>
            </div>
          </div>
        </motion.div>

        {/* Top Left: Research Institutions & Universities */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute z-40 bg-white border-2 border-yellow-500 rounded-lg shadow-lg p-4 max-w-sm"
          style={{ top: "-50px", left: "-200px" }}
        >
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-bold text-yellow-700 text-xl mb-1">Research Institutions & Universities</h4>
            <div className="flex flex-col space-y-1 text-base">
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1">CAA</span><span>: Clean Air Asia (Philippines)</span></div>
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1">IRD</span><span>: Institute of Research for</span></div>
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1"></span><span className="ml-2">Development (France)</span></div>
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1">IIASA</span><span>: International Institute for Applied</span></div>
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1"></span><span className="ml-2">Systems Analysis (Austria)</span></div>
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1">PKU</span><span>: Peking University (China)</span></div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Left: Health & Environment Organizations */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="absolute z-40 bg-white border-2 border-yellow-500 rounded-lg shadow-lg p-4 max-w-sm"
          style={{ bottom: "-50px", left: "-200px" }}
        >
          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-bold text-yellow-700 text-xl mb-1">Health & Environment Organizations</h4>
            <div className="flex flex-col space-y-1 text-base">
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1">WHO</span><span>: World Health Organization</span></div>
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1">EANET</span><span>: Acid Deposition Monitoring</span></div>
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1"></span><span className="ml-2">Network in East Asia</span></div>
              <div className="flex"><span className="font-semibold text-yellow-700 w-16 text-left mr-1">SINICA</span><span>: Academia Sinica</span></div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right: Asian Institute of Technology (AIT) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="absolute z-40 bg-white border-2 border-blue-400 rounded-lg shadow-lg p-4 max-w-sm"
          style={{ bottom: "-50px", right: "-200px" }}
        >
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="font-bold text-blue-600 text-xl mb-1">Asian Institute of Technology (AIT)</h4>
            <div className="flex flex-col space-y-1 text-base">
              <div className="flex"><span className="font-semibold text-blue-600 w-16 text-left mr-1">AIT</span><span>: Asian Institute of Technology</span></div>
              <div className="flex"><span className="font-semibold text-blue-600 w-16 text-left mr-1">EEM</span><span>: Energy, Environment & Climate</span></div>
              <div className="flex"><span className="font-semibold text-blue-600 w-16 text-left mr-1"></span><span className="ml-2">Change</span></div>
              <div className="flex"><span className="font-semibold text-blue-600 w-16 text-left mr-1">RRC.AP</span><span>: Regional Resource Centre for Asia</span></div>
              <div className="flex"><span className="font-semibold text-blue-600 w-16 text-left mr-1"></span><span className="ml-2">and the Pacific</span></div>
            </div>
          </div>
        </motion.div>

        {/* Middle Right: Technical Terms */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="absolute z-40 bg-white border-2 border-green-500 rounded-lg shadow-lg p-4 max-w-sm"
          style={{ top: "45%", right: "-200px" }}
        >
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-green-600 text-xl mb-1">Technical Terms</h4>
            <div className="flex flex-col space-y-1 text-base">
              <div className="flex"><span className="font-semibold text-green-600 w-16 text-left mr-1">GHG</span><span>: Greenhouse Gases</span></div>
              <div className="flex"><span className="font-semibold text-green-600 w-16 text-left mr-1">SLCF</span><span>: Short-Lived Climate Forcers</span></div>
            </div>
          </div>
        </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ScopeCooperationDiagram;