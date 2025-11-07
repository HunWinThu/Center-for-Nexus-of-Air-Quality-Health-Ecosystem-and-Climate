import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HexagonItem {
  title: string;
  position:
    | "top"
    | "topLeft"
    | "topRight"
    | "center"
    | "bottom"
    | "bottomLeft"
    | "bottomRight";
  bgColor?: string;
  x: number; // SVG x coordinate
  y: number; // SVG y coordinate
  size: "normal" | "large"; // Size variant
}

export const HexagonGrid = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items: HexagonItem[] = [
    {
      title: "Air Quality Nexus",
      position: "center",
      bgColor: "",
      x: 450,
      y: 400,
      size: "large",
    },
    {
      title: "AQ Monitoring, Chemical Analysis, SA",
      position: "top",
      bgColor: "bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600",
      x: 450,
      y: 140, 
      size: "normal",
    },
    {
      title: "Integrated Air Pollution Control: Demonstration",
      position: "bottom",
      bgColor: "bg-conic-180 from-blue-700 via-blue-50 to-blue-700",
      x: 450,
      y: 660, 
      size: "normal",
    },
    {
      title: "Impact Assessment: Health and Ecosystem",
      position: "topLeft",
      bgColor: "bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600",
      x: 220,
      y: 270, 
      size: "normal",
    },
    {
      title: "Emission Inventory and Emission Projection",
      position: "topRight",
      bgColor: "bg-conic-180 from-indigo-700 via-indigo-50 to-indigo-700",
      x: 680,
      y: 270,
      size: "normal",
    },
    {
      title: "Meteorology and Climate Science",
      position: "bottomLeft",
      bgColor: "bg-conic-180 from-purple-600 via-purple-50 to-purple-600",
      x: 220,
      y: 530,
      size: "normal",
    },
    {
      title: "Dispersion Modeling",
      position: "bottomRight",
      bgColor: "bg-conic-180 from-purple-700 via-purple-50 to-purple-700",
      x: 680,
      y: 530,
      size: "normal",
    },
  ];

  // Gradients for SVG <defs>
  const getGradient = (position: string) => {
    const gradients = {
      center: { from: "#1e3a8a", via: "#3b82f6", to: "#1e3a8a" },
      top: { from: "#3f6433", via: "#5a8f4a", to: "#3f6433" },
      bottom: { from: "#1d4ed8", via: "#60a5fa", to: "#1d4ed8" },
      topLeft: { from: "#0d9488", via: "#2dd4bf", to: "#0d9488" },
      topRight: { from: "#3f6433", via: "#5a8f4a", to: "#3f6433" },
      bottomLeft: { from: "#1e40af", via: "#3b82f6", to: "#1e40af" },
      bottomRight: { from: "#0369a1", via: "#38bdf8", to: "#0369a1" },
    };
    return gradients[position as keyof typeof gradients] || gradients.center;
  };

  return (
    <div className="py-0 -mb-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 900 900"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
          >
            {/* Gradients */}
            <defs>
              {[
                "center",
                "top",
                "bottom",
                "topLeft",
                "topRight",
                "bottomLeft",
                "bottomRight",
              ].map((pos) => {
                const grad = getGradient(pos);
                return (
                  <linearGradient
                    key={pos}
                    id={`${pos}Gradient`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={grad.from} />
                    <stop offset="50%" stopColor={grad.via} />
                    <stop offset="100%" stopColor={grad.to} />
                  </linearGradient>
                );
              })}
            </defs>

            {/* Hex items */}
            {items.map((item, index) => {
              const size = item.size === "large" ? 300 : 260; // Further increased: center 180→220, surrounding 160→190
              const radius = size / 2;

              // Centered flat-top hexagon around (0,0)
              const hexPoints = [
                [radius * 0.5, -radius * 0.866], // top-right
                [radius, 0], // right
                [radius * 0.5, radius * 0.866], // bottom-right
                [-radius * 0.5, radius * 0.866], // bottom-left
                [-radius, 0], // left
                [-radius * 0.5, -radius * 0.866], // top-left
              ]
                .map(([x, y]) => `${x},${y}`)
                .join(" ");

              return (
                // 1) Positioning stays on a plain <g> via SVG transform attribute
                <g key={index} transform={`translate(${item.x}, ${item.y})`}>
                  {/* Hexagon background - rotates on hover */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0.6, rotate: -180 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            transition: {
                              duration: 0.4,
                              delay: index * 0.1,
                              ease: "easeOut",
                            }
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.6,
                    }}
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "50% 50%",
                    }}
                  >
                    {/* Hexagon polygon */}
                    <polygon points={hexPoints} fill={`url(#${item.position}Gradient)`} />
                  </motion.g>

                  {/* Text - stays static, no rotation */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <foreignObject
                      x={-radius}
                      y={-radius}
                      width={size}
                      height={size}
                      pointerEvents="none"
                    >
                      <div className="flex items-center justify-center h-full px-2">
                        <span
                          className={`text-white font-bold text-center leading-tight ${
                            item.size === "large" ? "text-3xl" : "text-xl"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                    </foreignObject>
                  </motion.g>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};
