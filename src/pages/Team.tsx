import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';


import { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

// Team member images
import kim from '@/assets/Prof.Kim_photo.jpg';
import huy from '@/assets/dr.huy.jpg';
import ktoo from '@/assets/Ms. Ktoo.jpg';
import Huyen from '@/assets/Dr. Truong Thi Huyen.jpg';
import Nguyen from '@/assets/ms-chi.jpg';
import Dang from '@/assets/dang.jpeg';
import Hun from '@/assets/Hun Win Thu.jpg';
import May from '@/assets/May.jpg';
import Pant from '@/assets/Ms. Keishu Pant.jpg';
import Natawat from '@/assets/Natawat.jpeg';
import researchGateLogo from '@/assets/icons/researchgate.svg';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const coreTeam = [
  {
    id: 1,
    name: 'Prof. Dr. Nguyen Thi Kim Oanh',
    role: 'Director',
    department: 'Doctor of Engineering in Environmental Technology and Management, AIT',
    bio: "Prof. Nguyen Thi Kim Oanh, a distinguished emeritus professor at the Asian Institute of Technology (AIT), is the founding director of the Air Quality Nexus Center of AIT. Under her leadership, the center conducts cutting-edge research and implementation projects with a focus on the interconnections between key scientific concerns regionally and globally: Air Quality, Human Health, Ecosystem Health, and Climate. Professor Kim Oanh has over 35 years’ working experience in research, education, consultancy, and capacity building, and is internationally recognized for her work on air pollution and climate in Asia. She has been recognized with a Highly Ranked Scholar - Lifetime in the Environment (Systems) by ScholarGPS (Powering Scholarly Analytics) and being listed in the top 2% globally most cited scientists in the field of “Meteorology and Atmospheric Sciences” in 2020, 2021 & 2022. Her research has a significant impact on environmental policy and public health in the region. Professor Kim Oanh has worked closely with government agencies and international organizations to provide science-based recommendations to improve air quality. She currently serves as a Lead Author for the Intergovernmental Panel on Climate Change (IPCC) 2027 Methodology Report on Inventories for Short-lived Climate Forcers (IPCC-2027-SLCFs), and a member of the WMO GAW-ARCH (World Meteorological Organization, AiR Pollution - Climate Change -Health Effects Nexus) Working Group to support the implementation of Global Atmosphere Watch Science and Implementation Plan (GAW SIP), 2023-2027.",
    Expertise: 'Air pollution monitoring; Dispersion modeling and receptor modeling; Emission inventory and projection; Emission control; Exposure assessment; Effects of air pollution on ecosystem; Meteorology and climate science; Climate co-benefits assessment; Industrial environmental management',
    specialties: ['Air Quality', 'Emission Inventory', 'Environmental Health'],
    image: kim,
    viewprofile: 'kimoanh@ait.asia',
    researchgate: 'https://www.researchgate.net/profile/Nguyen-Thi-Oanh',
  },
  {  id: 2,
    name: 'Dr. Lai Nguyen Huy',
    role: 'Manager',
    department: 'Doctor of Engineering in Environmental Technology and Management, AIT',
    bio: 'Lai Nguyen Huy obtained his Bachelor of Engineering in Biotechnology (2012) from International University – Vietnam National University in Ho Chi Minh City, Vietnam; Master of Engineering (2015) and Doctor of Engineering (2021) in Environmental Engineering and Management from Asian Institute of Technology, Thailand. He started his work as a technical manager assistant at Intron Life Science, Ltd. Company in Ho Chi Minh City, Vietnam in 2013. He then moved to AIT to pursue his research interests on the environment, focusing on air pollution. He got a number of awards and prizes in scholarships for Bachelor, Master and Doctor’s programs as well as internships, and awards such as ISIAQ Student Conference Support Award winner for the Healthy Buildings 2017 Asia conference, 2015 Student Paper Award at West Coast Section of the Air & Waste Management with the paper titled “Development of national industrial emission inventory for Vietnam” at the Raleigh Convention Center in Raleigh, North Carolina, USA on June 22-25, 2015, and the Robert B. Banks prize for the most outstanding academic performance in the field of Environmental Engineering and Management at AIT. He has extensive experience and professional networking capacity and has been serving as a research specialist and manager of the Air Quality Nexus Center at AIT. He is also the co-leader for various regional collaboration research projects. His research interests lie in the area of using technical tools (monitoring, modeling, and emission inventory) and non-technical tools to help countries in developing adaptable data-driven systems in order to form the appropriate national clean air action plans, implementations, and evaluation, supporting public awareness raising, and enhancing national and international cooperation to beat air pollution in the region.',
    Expertise: 'Air pollution data systems (Inventory, Modelling, Monitoring, Source apportionment) with focus on Southeast Asia countries, Air pollution effect assessment (crops, acid deposition), Climate and air quality interaction, Co-benefit analysis.',
    specialties: ['Air Pollution Modeling', 'Monitoring', 'Data Analysis'],
    image: huy,
    viewprofile: 'lainguyenhuy@ait.asia',
    researchgate: 'https://www.researchgate.net/profile/Lai-Huy-2',

  },

    {
    id: 3,
    name: 'Ms. Khing Thwe Oo',
    role: 'Research Associate',
    department: 'Master of Engineering in Environmental Engineering and Management, AIT',
    bio: 'Ms. Khing Thwe Oo, a Research Associate at the Asian Institute of Technology (AIT), has over a decade of experience in environmental and social impact assessments, project management, and climate change risk analysis. She is internationally recognized for her expertise in air pollution research, particularly in air quality monitoring, emission inventories, and source apportionment, with a focus on Myanmar and Southeast Asia. Her professional portfolio includes solid and hazardous waste management, environmental policy evaluation, and the implementation of environmental management plans. She has coordinated and contributed to numerous national and regional projects funded by organizations such as AFD, USAID, Sida, ADB, JICA, World Bank and the Norwegian Environment Agency (NEA), working closely with government bodies, NGOs, and international agencies. From 2019 to 2022, she served as Environment Safeguard Consultant at the Asian Development Bank (ADB) Myanmar Resident Mission, supporting the country’s environmental safeguard system and capacity building for government agencies. A certified Environmental Management System (EMS) Lead Auditor and a registered engineer with the Myanmar Engineering Council, Ms. Khing combines technical knowledge with strong stakeholder engagement and capacity-building skills. Her work has significantly contributed to advancing environmental governance, improving community resilience, and shaping sustainable development policies in the region.\n\nMs. Khing Thwe Oo earned her Master of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand in 2014. She also holds a Master of Engineering in Chemical Engineering (2012), a Bachelor of Engineering in Chemical Engineering (2009), and a Bachelor of Technology in Chemical Engineering (2008) from the Technology University Mandalay, Myanmar. Additionally, she obtained a Diploma in Food and Chemical Engineering from the Associateship of Government Technical Mandalay, Myanmar in 2005.',
    Expertise: ' 	Administration; Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: ktoo,

  },


    {
    id: 5,
    name: 'Mr. Ha Quang Dang',
    role: 'Research Assistant',
    department: 'Bachelor of Engineering in Environmental Engineering, Hanoi University of Science and Technology (HUST),',
    bio: 'Mr. Ha Quang Dang, a Research Assistant at the Asian Institute of Technology (AIT), is an emerging environmental engineer with hands-on experience in air pollution monitoring, source apportionment, and environmental data analysis. He holds a Bachelor of Engineering in Environmental Engineering from Hanoi University of Science and Technology (HUST), Vietnam, graduating in 2024 with a strong academic record. At AIT, he contributes to the Kathmandu Clean Air Program (K-CAP) / USAID Clean Air project, conducting PM₂.₅ monitoring, receptor modeling, and road dust composition analysis for Kathmandu and Nepal. His research background includes developing emission maps for rice straw burning in Vietnam, satellite-based environmental data analysis, and participation in international projects such as the GreenUs Project under the Erasmus+ Programme and the CASA Project. Mr. Dang has also undertaken professional training and internships in Italy, Greece, Poland, Thailand, and Vietnam, enhancing his skills in circular economy, waste management, and environmental engineering solutions. Proficient in Python, Java, and data analysis tools, and fluent in Vietnamese and English with working knowledge of Japanese, he brings technical expertise, adaptability, and a collaborative spirit to regional environmental research initiatives.\n\nMr. Ha Quang Dang earned his Bachelor of Engineering in Environmental Engineering from the Hanoi University of Science and Technology (HUST), Vietnam in 2024.',
    Expertise: 'Research Assistant_Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    imageScale: 1.35,
    imagePosition: '0 20%',
    image: Dang,

  },

    {
    id: 6,
    name: 'Mr. Hun Win Thu',
    role: 'Research Assistant & IoT Engineer',
    department: 'Master of Engineering in Telecommunications, AIT',
    bio: 'Mr. Hun Win Thu, a Research Assistant and IoT Engineer at the Asian Institute of Technology (AIT), applies his expertise in telecommunications, IoT systems, and ICT solutions to support air pollution research and management projects across Southeast Asia. He is experienced in deploying and maintaining air quality monitoring networks, integrating sensor-based systems for real-time data acquisition, and configuring cloud platforms for remote monitoring, data visualization, and analysis. His technical skills include configuring LAN/WAN networks, troubleshooting routers, switches, wireless controllers, and firewalls, as well as developing automated workflows to streamline data management and reporting for research teams. At AIT’s Center, he is responsible for maintaining and updating the Center’s website, managing ICT infrastructure, and providing IoT technical support for projects such as air quality monitoring, emission inventories, and pollution source tracking. He works closely with researchers to design and implement low-cost sensor systems, ensure reliable data transmission, and optimize the performance of monitoring devices in the field. Proficient in tools like Cisco Packet Tracer, Wireshark, and various microcontroller platforms (Arduino, ESP32), he also leverages automation tools such as Make.com, Google Sheets, and Apps Script to enhance project efficiency.\n\nMr. Hun Win Thu earned his Master of Engineering in Telecommunications from the Asian Institute of Technology, Thailand in 2023, with a thesis on “Smart Energy Meter Monitoring for Real-Time Bill Payments Calculation.” He also holds a Bachelor of Engineering in Electronic and Communications (2020) and a Bachelor of Technological in Electronic and Communications (2017) from the Technological University Mandalay, Myanmar, where his undergraduate projects focused on robotic control systems and communication technologies.',
    Expertise: 'Research Assistant_ICT Support and IoT Engineer',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Hun,

  },
  {
  id: 8,
  name: 'Ms. Keishu Pant',
  role: 'TU Student',
  department: 'Student',
  bio: 'Specializes in emission inventory and air quality management.',
  Expertise: 'Research Assistant_Air pollution monitoring',
  specialties: ['Emission Inventory', 'Air Quality Management'],
  alignTop: true,
  image: Pant,
},

  {
  id: 8,
  name: 'Mr. Natawat Samranjai',
  role: 'AIT, Master Student',
  department: 'Student',
  bio: '',
  Expertise: 'Research Assistant_Air pollution monitoring',
  specialties: ['Emission Inventory', 'Air Quality Management'],
  alignTop: true,
  image: Natawat,
},
];

const Team = () => {
  // Enhanced animation variants with elegant lazy loading
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggeredContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  useEffect(() => {
    const title = 'AQC Team | Air Quality Nexus Center (AIT)';
    document.title = title;
    const desc = 'Meet the AQC core team and advisory committee at AIT—experts in air quality, emissions, modeling and environmental health.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.href);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-primary mb-6"
              variants={titleVariants}
            >
              Our Team
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeUpVariants}
              transition={{ delay: 0.2 }}
            >
              Meet the dedicated researchers and professionals at AirQC working to improve air quality and environmental health.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Directory - SMARTS Style Layout */}
      <section className="pt-4 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Leadership Team Section */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >            
            {coreTeam.slice(0, 2).map((member) => (
              <motion.div 
                key={member.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Photo on the left */}
                  <motion.div
                    className="flex-shrink-0 w-64 h-80 overflow-hidden"
                    variants={imageVariants}
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        loading="lazy"
                        className={`w-full h-full object-cover border border-border shadow-lg ${member.alignTop ? 'object-top' : ''}`}
                        style={member.imageScale ? { 
                          transform: `scale(${member.imageScale})`, 
                          transformOrigin: member.alignTop ? 'top' : (member.imagePosition || 'center'),
                          objectPosition: member.imagePosition || undefined
                        } : (member.imagePosition ? { objectPosition: member.imagePosition } : undefined)}
                      />
                    ) : (
                      <Avatar className="w-64 h-80 text-xl border border-border">
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    )}
                  </motion.div>

                  {/* Bio content on the right */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xl font-semibold text-primary mb-4">
                      {member.role}
                    </p>
                    
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {member.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-justify leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      {member.viewprofile && (
                        <a 
                          href={member.viewprofile.includes('@') ? `mailto:${member.viewprofile}` : member.viewprofile}
                          className="text-primary hover:underline text-sm"
                        >
                          ✉️ {member.viewprofile}
                        </a>
                      )}
                      {member.researchgate && (
                        <a 
                          href={member.researchgate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                        >
                          <img src={researchGateLogo} alt="ResearchGate" className="w-4 h-4" />
                          <span className="text-sm" style={{ color: '#00D0AF' }}>ResearchGate</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Research Team Section */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >            
            {coreTeam.slice(2).map((member) => (
              <motion.div 
                key={member.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Photo on the left */}
                  <motion.div
                    className="flex-shrink-0 w-64 h-80 overflow-hidden"
                    variants={imageVariants}
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        loading="lazy"
                        className={`w-full h-full object-cover border border-border shadow-lg ${member.alignTop ? 'object-top' : ''}`}
                        style={member.imageScale ? { 
                          transform: `scale(${member.imageScale})`, 
                          transformOrigin: member.alignTop ? 'top' : (member.imagePosition || 'center'),
                          objectPosition: member.imagePosition || undefined
                        } : (member.imagePosition ? { objectPosition: member.imagePosition } : undefined)}
                      />
                    ) : (
                      <Avatar className="w-64 h-80 text-xl border border-border">
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    )}
                  </motion.div>

                  {/* Bio content on the right */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xl font-semibold text-primary mb-4">
                      {member.role}
                    </p>
                    
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {member.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-justify leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      {member.viewprofile && (
                        <a 
                          href={member.viewprofile.includes('@') ? `mailto:${member.viewprofile}` : member.viewprofile}
                          className="text-primary hover:underline text-sm"
                        >
                          ✉️ {member.viewprofile}
                        </a>
                      )}
                      {member.researchgate && (
                        <a 
                          href={member.researchgate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                        >
                          <img src={researchGateLogo} alt="ResearchGate" className="w-4 h-4" />
                          <span className="text-sm" style={{ color: '#00D0AF' }}>ResearchGate</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="border-t border-gray-200"></div>

      {/* Associated Members and Consultants Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
              variants={titleVariants}
            >
              Associated Members and Consultants
            </motion.h2>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Assoc. Prof. Binod Pokharel</span>, Tribhuvan University, Nepal.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Assoc. Prof. Didin Agustian Permadi</span>, Head of Center for Research and Community Development, National Institute of Technology (ITENAS), Indonesia.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Assoc. Prof. Ekbordin Winijkul</span>, Head of Department of Water Resources and Environmental Engineering (WREE), AIT, Thailand.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Assoc. Prof. Thi Phuoc Lai Nguyen</span>, Development Planning Management and Innovation, Department of Development and Sustainability.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Dr. Anish Ghimire</span>, Environmental Engineering and Management, WREE, AIT, Thailand.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Prof. Eri Saikawa</span>, Winship Distinguished Research Professor of Environmental Sciences and Director, Emory Climate Talks, Emory University, GA, USA.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Assoc. Prof. Ha Thanh Dong</span>, Aquaculture and Aquatic Resources Management (AARM), Department of Food, Agriculture, and Natural Resources, AIT, Thailand.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Dr. Maheswar Rupakheti</span>, Research Group Leader at Research Institute for Sustainability, Helmholtz Centre Potsdam, Germany.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Assoc. Prof. Prapat Pongkiatkul</span>, Environmental Engineering Department, King Mongkut's University of Technology Thonburi (KMUTT), Thailand.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Prof. Rejina Maskey Byanju</span>, Tribhuvan University, Nepal.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Assoc. Prof. Salvatore G.P. Virdis</span>, Remote Sensing & GIS (RSGIS), Department of Information & Communication Technologies, AIT, Thailand.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-semibold">Dr. Vanisa Surapipith</span>, Head of Air Pollution Cluster, Regional Resource Centre for Asia and the Pacific, Asian Institute of Technology (AIT RRC.AP), Thailand.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;