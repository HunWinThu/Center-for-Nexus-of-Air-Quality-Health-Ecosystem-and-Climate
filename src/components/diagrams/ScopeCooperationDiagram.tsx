import { motion } from "framer-motion";
import React from "react";

/**
 * Responsive SVG: scales to parent width while preserving aspect ratio.
 * Author all positions in the 1000x800 viewBox space.
 */
const W = 1000;
const H = 800;

const fade = (delay = 0, y = 0) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

// Opacity-only (so it won't override your manual translate())
const fadePos = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay, duration: 0.6 } },
});

const grow = (delay = 0.8) => ({
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1, transition: { delay, duration: 0.8 } },
});

const ScopeCooperationDiagramSVG: React.FC = () => {
  return (
    <div className="w-full" style={{ overflowX: "auto" }}>
      <motion.svg
        role="img"
        aria-labelledby="title desc"
        width="100%"
        height="auto"
        viewBox={`0 0 ${W} ${H}`}
        initial="initial"
        animate="animate"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="title">AirQC Nexus Scope & Cooperation</title>
        <desc id="desc">
          Venn diagram of Air Quality, Climate, and Planetary Health with
          cooperating organizations and arrows showing relationships.
        </desc>

        {/* ====== Defs: markers & shadows ====== */}
        <defs>
          {/* Arrow markers */}
          <marker id="arrow1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#1e7a47" />
          </marker>
          <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#7c3aed" />
          </marker>
          <marker id="arrow3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#8b6b4a" />
          </marker>

          {/* Soft shadow filter for cards/circles */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.25" />
          </filter>

          {/* (Kept for reference) Dashed oval path */}
          <path id="dashedOval"
                d="M200,20 Q450,-40 700,20 Q860,180 700,640 Q450,700 200,640 Q40,480 200,20 Z" />
        </defs>

        {/* ====== Dotted oval covering the diagram ====== */}
        <motion.ellipse
          cx="500"
          cy="400"
          rx="410"
          ry="330"
          stroke="#9CA3AF"
          strokeWidth="3"
          strokeDasharray="8 6"
          fill="none"
          variants={fade(1.2)}
        />

        {/* ====== Venn circles ====== */}
        <g transform="translate(240,220)">
          {/* Left (Air Quality) */}
          <motion.g variants={grow(0.8)} filter="url(#shadow)">
            <circle cx="175" cy="125" r="110" fill="rgba(59,130,246,0.85)" />
            <g transform="translate(155,95)">
              <text x="0" y="0" textAnchor="middle" fontWeight="700" fontSize="20" fill="#fff">
                Air Quality
              </text>
              <text x="0" y="20" textAnchor="middle" fontSize="16" fill="#fff">Air pollution</text>
              <text x="0" y="38" textAnchor="middle" fontSize="16" fill="#fff">engineering</text>
              <text x="0" y="56" textAnchor="middle" fontSize="16" fill="#fff">&amp; management</text>
            </g>
          </motion.g>

          {/* Right (Climate) */}
          <motion.g variants={grow(1.0)} filter="url(#shadow)">
            <circle cx="335" cy="125" r="110" fill="rgba(34,197,94,0.85)" />
            <g transform="translate(350,95)">
              <text x="0" y="0" textAnchor="middle" fontWeight="700" fontSize="20" fill="#fff">Climate</text>
              <text x="0" y="20" textAnchor="middle" fontSize="16" fill="#fff">Meteorology &amp;</text>
              <text x="0" y="38" textAnchor="middle" fontSize="16" fill="#fff">Science of</text>
              <text x="0" y="56" textAnchor="middle" fontSize="16" fill="#fff">Climate Change</text>
            </g>
          </motion.g>

          {/* Bottom (Planetary Health) */}
          <motion.g variants={grow(1.2)} filter="url(#shadow)">
            <circle cx="260" cy="275" r="110" fill="rgba(239,68,68,0.85)" />
            <g transform="translate(260,275)">
              <text x="0" y="0" textAnchor="middle" fontWeight="700" fontSize="20" fill="#fff">
                Planetary Health
              </text>
              <text x="0" y="20" textAnchor="middle" fontSize="16" fill="#fff">Air pollution effects</text>
              <text x="0" y="38" textAnchor="middle" fontSize="16" fill="#fff">on health &amp; ecosystem</text>
            </g>
          </motion.g>
        </g>

        {/* ====== Top block (orgs + green pill) ====== */}
        <g transform="translate(300,40)">
          <motion.g variants={fade(0.2, -20)} filter="url(#shadow)">
            <rect x="0" y="0" width="380" height="80" rx="8" fill="#FEF08A" stroke="#F59E0B" strokeWidth="3" />
            <text x="190" y="48" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1F2937">
              WMO, CCAC, IGES, RIFS, RICARDO
            </text>
            <g transform="translate(35,90)">
              <rect x="0" y="0" width="310" height="100" rx="8" fill="#25a05b" stroke="#16a34a" strokeWidth="2" />
              <text x="15" y="22" fontSize="14" fill="#fff">• Co-benefits of emission reduction</text>
              <text x="15" y="40" fontSize="14" fill="#fff">• Co-control: GHG, SLCF, air pollutants</text>
              <text x="15" y="58" fontSize="14" fill="#fff">• Air pollution meteorology/climatology</text>
              <text x="15" y="76" fontSize="14" fill="#fff">• Health and ecosystem impact assessments</text>
            </g>
          </motion.g>
        </g>

        {/* ====== Left side box: Institutions & Universities ====== */}
        <motion.g variants={fade(0.4, 0)} filter="url(#shadow)">
          <g transform="translate(40,360)">
            <rect x="0" y="0" width="240" height="80" rx="8" fill="#FEF08A" stroke="#F59E0B" strokeWidth="3" />
            <text x="120" y="28" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1F2937">
              CAA, IRD, IIASA, CITEPA
            </text>
            <text x="120" y="48" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1F2937">
              Universities (PKU, CSU,
            </text>
            <text x="120" y="68" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1F2937">
              Emory, Clarkson…)
            </text>
          </g>
        </motion.g>

        {/* ====== AIT: EEM ====== */}
        <motion.g variants={fade(0.5, 0)} filter="url(#shadow)">
          <g transform="translate(180,300)">
            <rect x="0" y="0" width="130" height="46" rx="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="65" y="18" textAnchor="middle" fontWeight="700" fontSize="12" fill="#1D4ED8">
              AIT: EEM, InterLab,
            </text>
            <text x="65" y="34" textAnchor="middle" fontWeight="700" fontSize="12" fill="#1D4ED8">
              RRC.AP
            </text>
          </g>
        </motion.g>

        {/* ====== AIT: Energy ====== */}
        <motion.g variants={fade(0.6, 0)} filter="url(#shadow)">
          <g transform="translate(680,300)">
            <rect x="0" y="0" width="130" height="46" rx="8" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x="65" y="18" textAnchor="middle" fontWeight="700" fontSize="12" fill="#1D4ED8">
              AIT: Energy
            </text>
            <text x="65" y="34" textAnchor="middle" fontWeight="700" fontSize="12" fill="#1D4ED8">
              Climate Change
            </text>
          </g>
        </motion.g>

        {/* ====== Bottom left effects ====== */}
        <motion.g variants={fade(0.8, 20)} filter="url(#shadow)">
          <g transform="translate(170,480)">
            <rect x="0" y="0" width="195" height="60" rx="8" fill="#8b5cf6" stroke="#D8B4FE" />
            <text x="8" y="20" fontSize="14" fill="#fff">• Human: Toxic pollutants</text>
            <text x="8" y="35" fontSize="14" fill="#fff">• Ecosystem: phytotoxic</text>
            <text x="20" y="50" fontSize="14" fill="#fff">pollutants, acid deposition</text>
          </g>
        </motion.g>

        {/* ====== Bottom right effects ====== */}
        <motion.g variants={fade(1.0, 20)} filter="url(#shadow)">
          <g transform="translate(640,480)">
            <rect x="0" y="0" width="195" height="60" rx="8" fill="#a58260" stroke="#d1bfa8" />
            <text x="8" y="20" fontSize="14" fill="#fff">• Climate intensification of</text>
            <text x="20" y="35" fontSize="14" fill="#fff">wildfires (extreme events)</text>
            <text x="20" y="50" fontSize="14" fill="#fff">and health effects</text>
          </g>
        </motion.g>

        {/* ====== Bottom center (Food & Water + WHO block) ====== */}
        <motion.g variants={fade(1.2, 20)} filter="url(#shadow)">
          <g transform="translate(390,610)">
            <rect x="45" y="0" width="135" height="46" rx="8" fill="#DBEAFE" stroke="#93C5FD" />
            <text x="112" y="18" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1D4ED8">
              AIT: Food &amp; Water:
            </text>
            <text x="112" y="36" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1D4ED8">
              Crops &amp; Aquaculture
            </text>
            <g transform="translate(0,60)">
              <rect x="0" y="0" width="220" height="60" rx="8" fill="#FEF08A" stroke="#F59E0B" strokeWidth="3" />
              <text x="110" y="28" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1F2937">
                WHO, SINICA
              </text>
              <text x="110" y="47" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1F2937">
                EANET, CU, York
              </text>
            </g>
          </g>
        </motion.g>

        {/* ====== Arrows ====== */}
        <g>
          <motion.path
            variants={{
              initial: { pathLength: 0, opacity: 0 },
              animate: { pathLength: 1, opacity: 1, transition: { delay: 1.4, duration: 0.8 } },
            }}
            d="M 490 230 L 490 355"
            stroke="#1e7a47"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrow1)"
          />
          <motion.path
            variants={{
              initial: { pathLength: 0, opacity: 0 },
              animate: { pathLength: 1, opacity: 1, transition: { delay: 1.6, duration: 0.8 } },
            }}
            d="M 360 480 L 460 425"
            stroke="#7c3aed"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrow2)"
          />
          <motion.path
            variants={{
              initial: { pathLength: 0, opacity: 0 },
              animate: { pathLength: 1, opacity: 1, transition: { delay: 1.8, duration: 0.8 } },
            }}
            d="M 640 480 L 530 415"
            stroke="#8b6b4a"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrow3)"
          />
        </g>

        {/* ====== Legend callouts (no transform conflict) ====== */}
        {/* Top-right legend (moved slightly inward to avoid clipping) */}
        <g transform="translate(695,40)">
          <motion.g variants={fadePos(2.0)} filter="url(#shadow)">
            <rect x="0" y="0" width="300" height="150" rx="10" fill="#fff" stroke="#F59E0B" strokeWidth="1" />
            <g transform="translate(12,18)" fontSize="14">
              <text fontWeight="700" fill="#ca8a04">WMO</text><text x="72" y="0">: World Meteorological</text>
              <text x="79" y="16">Organization</text>
              <text y="34" fontWeight="700" fill="#ca8a04">CCAC</text><text x="72" y="34">: Climate &amp; Clean Air Coalition</text>
              <text y="52" fontWeight="700" fill="#ca8a04">IGES</text><text x="72" y="52">: Institute for Global</text>
              <text x="79" y="68">Environmental Strategies</text>
              <text y="86" fontWeight="700" fill="#ca8a04">RIFS</text><text x="72" y="86">: Research Institute for</text>
              <text x="79" y="102"> Sustainability</text>
              <text y="118" fontWeight="700" fill="#ca8a04">RICARDO</text><text x="72" y="118">: Global Consultancy</text>
            </g>
          </motion.g>
        </g>

        {/* Top-left legend */}
        <g transform="translate(3,90)">
          <motion.g variants={fadePos(2.2)} filter="url(#shadow)">
            <rect x="0" y="0" width="285" height="170" rx="10" fill="#fff" stroke="#F59E0B" strokeWidth="1" />
            <g transform="translate(12,18)" fontSize="14">
              <text fontWeight="700" fill="#a16207">CAA</text><text x="50" y="0">: Clean Air Asia</text>
              <text y="18" fontWeight="700" fill="#a16207">IRD</text><text x="50" y="18">: Institute of Research for</text>
              <text x="57" y="34">Development (France)</text>
              <text y="52" fontWeight="700" fill="#a16207">IIASA</text><text x="50" y="52">: International Institute for Applied</text>
              <text x="57" y="68">Systems Analysis (Austria)</text>
              <text y="86" fontWeight="700" fill="#a16207">CITEPA</text><text x="50" y="86">: Centre Interprofessionnel</text>
              <text x="57" y="102">Technique d’Études de la Pollution</text>
              <text x="57" y="118">Atmosphérique</text>
              <text y="134" fontWeight="700" fill="#a16207">PKU</text><text x="50" y="134">: Peking University (China)</text>
            </g>
          </motion.g>
        </g>

        {/* Bottom-right legend */}
        <g transform="translate(630,640)">
          <motion.g variants={fadePos(2.4)} filter="url(#shadow)">
            <rect x="0" y="0" width="280" height="120" rx="10" fill="#fff" stroke="#F59E0B" strokeWidth="1" />
            <g transform="translate(12,18)" fontSize="14">
              <text fontWeight="700" fill="#a16207">WHO</text><text x="50" y="0">: World Health Organization</text>
              <text y="18" fontWeight="700" fill="#a16207">UC</text><text x="50" y="18">: University of Canberra (Australia)</text>
              <text y="36" fontWeight="700" fill="#a16207">SINICA</text><text x="50" y="36">: Academia Sinica (Taiwan)</text>
              <text y="54" fontWeight="700" fill="#a16207">EANET</text><text x="50" y="54">: Acid Deposition Monitoring</text>
              <text x="57" y="70">Network in East Asia</text>
              <text y="88" fontWeight="700" fill="#a16207">York</text><text x="50" y="88">: York University (Canada)</text>
            </g>
          </motion.g>
        </g>
      </motion.svg>
    </div>
  );
};

export default ScopeCooperationDiagramSVG;
