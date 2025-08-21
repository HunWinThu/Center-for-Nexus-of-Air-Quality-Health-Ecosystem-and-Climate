import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';


import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

// Team member images
import kim from '@/assets/prof.Kim.jpeg';
import huy from '@/assets/dr.huy.jpg';
import ktoo from '@/assets/Ms. Ktoo.jpg';
import Huyen from '@/assets/Dr. Truong Thi Huyen.jpg';
import Nguyen from '@/assets/ms-chi.jpg';
import Dang from '@/assets/dang.jpeg';
import Hun from '@/assets/Hun Win Thu.jpg';
import May from '@/assets/May.jpg';
import Pant from '@/assets/Ms. Keishu Pant.jpg';

import teamPlaceholder from '@/assets/team-placeholder.jpg';

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const coreTeam = [
  {
    id: 1,
    name: 'Prof. Dr. Nguyen Thi Kim Oanh',
    role: 'Director',
    department: 'Doctor of Engineering in Environmental Technology and Management, AIT',
    bio: "Prof. Nguyen Thi Kim Oanh, a distinguished professor and the founding director of the Center for Nexus of Air Quality, Health, Ecosystem, and Climate at the Asian Institute of Technology (AIT), is internationally recognized for her pioneering work on air pollution and climate in Asia, with a focus on the ASEAN region. With over 35 years of experience in research, education, consultancy, and capacity building, she has led the characterization of air pollution in Asian developing countries through field measurements, emission inventories, and modeling studies at urban, national, and regional scales. She has been recognized among the top 2% most cited scientists globally in Meteorology and Atmospheric Sciences (2021) and has received numerous international awards for her impact on environmental science and policy. As Principal Investigator(PI) or Co-PI, Prof. Kim Oanh has conducted more than 65 regional collaborative research projects, working closely with government agencies and international organizations to deliver science-based recommendations that have influenced environmental policy and public health improvements across the region. Her academic contributions are equally remarkable mentoring over 150 Master’s graduates, 16 PhD graduates, 13 international exchange students, and serving on committees for more than 30 PhD and 160 Master’s students from diverse fields. Prof. Kim Oanh is an active leader in the global atmospheric science community, serving as a member of the Science Panel of the Asia Pacific Clean Air Partnership (APCAP) since 2018, the WMO-GAW-ARCH working group since 2023, and holding past leadership roles including the Scientific Steering Committee of IGAC (2015–2018), co-chair of the IGAC Monsoon Asia and Oceania Networking Group (2016–2019), and vice-chair of the WMO–UNEP Integrated Assessment of Black Carbon and Tropospheric Ozone (2011). She also contributed as a WHO expert in the Global Air Quality Guidelines update (2021) and as a lead author of UNEP’s “Atmospheric Pollution in the Asia Pacific: Science-Based Solutions” (2019). Her lifelong dedication continues to shape regional and global approaches to improving air quality, protecting climate, and safeguarding public health.\n\nProf. Nguyen Thi Kim Oanh earned her Doctor of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand in 1994. She holds a Master of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand (1991) and a Diploma of Engineering from the Odessa Hydrometeorology Institute, Ukraine (1978).",
    Expertise: 'Air pollution monitoring; Dispersion modeling and receptor modeling; Emission inventory and projection; Emission control; Exposure assessment; Effects of air pollution on ecosystem; Meteorology and climate science; Climate co-benefits assessment; Industrial environmental management',
    specialties: ['Air Quality', 'Emission Inventory', 'Environmental Health'],
    image: kim,
    viewprofile: 'kim.oanh@ait.ac.th',
    researchgate: 'https://www.researchgate.net/profile/Nguyen-Thi-Oanh',
  },
  {  id: 2,
    name: 'Dr. Lai Nguyen Huy',
    role: 'Manager',
    department: 'Doctor of Engineering in Environmental Technology and Management, AIT',
    bio: 'Dr. Lai Nguyen Huy, an Air Quality Specialist and Research Specialist at the Asian Institute of Technology (AIT), has over ten years of professional experience in research, consultancy, and capacity building in atmospheric sciences. He is recognized for his expertise in air pollution data systems, including emission inventories, monitoring, modeling, and source apportionment, with a focus on Southeast Asia. Throughout his career, Dr. Lai has contributed to more than 22 research projects funded by prominent organizations such as UNEP, AFD, USAID, and the World Bank, serving as Co-PI, or key technical expert. His work spans air quality management, climate–air quality interaction, and co-benefit analysis, combining scientific rigor with practical policy applications. Actively engaging with government agencies, international organizations, and research networks, Dr. Lai has played a pivotal role in strengthening regional capacity for evidence-based environmental policy. His contributions have advanced understanding of air pollution issues and informed strategies for protecting human health, ecosystems, and the climate.\n\nDr. Lai Nguyen Huy earned his Doctor of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand in 2021. He holds a Master of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand (2015) and a Bachelor of Engineering in Biotechnology from the International University – Vietnam National University, Ho Chi Minh City, Vietnam (2012).',
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
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',

  },


    {
    id: 5,
    name: 'Mr. Ha Quang Dang',
    role: 'Research Assistant',
    department: 'Bachelor of Engineering in Environmental Engineering, Hanoi University of Science and Technology (HUST),',
    bio: 'Mr. Ha Quang Dang, a Research Assistant at the Asian Institute of Technology (AIT), is an emerging environmental engineer with hands-on experience in air pollution monitoring, source apportionment, and environmental data analysis. He holds a Bachelor of Engineering in Environmental Engineering from Hanoi University of Science and Technology (HUST), Vietnam, graduating in 2024 with a strong academic record. At AIT, he contributes to the Kathmandu Clean Air Program (K-CAP) / USAID Clean Air project, conducting PM₂.₅ monitoring, receptor modeling, and road dust composition analysis for Kathmandu and Nepal. His research background includes developing emission maps for rice straw burning in Vietnam, satellite-based environmental data analysis, and participation in international projects such as the GreenUs Project under the Erasmus+ Programme and the CASA Project. Mr. Dang has also undertaken professional training and internships in Italy, Greece, Poland, Thailand, and Vietnam, enhancing his skills in circular economy, waste management, and environmental engineering solutions. Proficient in Python, Java, and data analysis tools, and fluent in Vietnamese and English with working knowledge of Japanese, he brings technical expertise, adaptability, and a collaborative spirit to regional environmental research initiatives.\n\nMr. Ha Quang Dang earned his Bachelor of Engineering in Environmental Engineering from the Hanoi University of Science and Technology (HUST), Vietnam in 2024.',
    Expertise: 'Research Assistant_Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Dang,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',

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
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',

  },
  {
    id: 4,
    name: 'Dr. Nguyen Nhat Ha Chi',
    role: 'Associate Member',
    department: 'Doctor of Philosophy in Environmental Technology and Management, AIT',
    bio: 'Dr. Ha Chi Nguyen Nhat, an Air Quality Specialist, brings advanced expertise in air quality modeling and environmental impact assessment. Her scholarly contributions include modeling PM₂.₅ for health impact assessment, and she has co-authored studies on emission inventories and atmospheric pollutants over urban regions in Southeast Asia. Dr. Ha Chi combines rigorous scientific research with practical application, supporting AIT’s efforts to integrate science-based solutions into air quality policy and protection of human and ecological health. Her contributions continue to strengthen the Center’s analytical capacity and regional leadership in atmospheric science.\n\nDr. Ha Chi earned her Doctor of Philosophy in Environmental Technology and Management from the Asian Institute of Technology, Thailand in 2024. She holds a Master of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand (2018) and a Bachelor of Science in Environmental Science from the University of Natural Science, National University, Ho Chi Minh City, Vietnam (2012).',
    Expertise: 'Air quality and meteorology modeling; Emission inventory',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: Nguyen,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
    researchgate: 'https://www.researchgate.net/profile/Ha-Chi-Nguyen-Nhat'


  },

  {
  id: 7,
  name: 'Ms. May Hnin Aye',
  role: 'Associate Member',
  department: 'Master of Science in Remote Sensing & GIS',
  bio: 'Ms. May Hnin Aye, a Geographic Information Systems (GIS) Analyst at the Asian Institute of Technology (AIT), specializes in remote sensing and geospatial analysis for environmental monitoring and land management. At the Center, she provides technical support in developing methodological frameworks to assess primary forest loss due to fires in Laos. Her responsibilities include sourcing, processing, and analyzing satellite data to monitor land-use and land-cover changes, with a particular focus on detecting and quantifying forest and agricultural land cover loss caused by fire events. With a strong foundation in both geography and technology, Ms. May Hnin Aye applies her expertise to produce high-quality geospatial intelligence products that inform research, policy, and conservation strategies. She is proficient in drone mapping, photogrammetry, and geospatial data analysis, and integrates advanced GIS and remote sensing tools to support decision-making processes in environmental and resource management. Her work combines technical precision with a commitment to addressing real-world environmental challenges through innovative spatial analysis approaches. Before joining the Center, she worked as a Program Assistant at the Unified Program of AIT, gaining valuable experience in academic coordination and technical support.\n\nMs. May earned her Master of Science in Remote Sensing and Geographic Information System from the Asian Institute of Technology, Thailand in 2024, a Master of Arts in Physical Geography from the University of Yangon, Myanmar in 2020, and a Bachelor of Arts in Geography from the University of Yangon, Myanmar. Her passion for the intersection of geography, technology, and environmental sustainability continues to drive her professional growth and contributions to the field.',
  Expertise: 'Remote Sensing and GIS Analyst',
  specialties: ['Emission Inventory', 'Air Quality Management'],
  image: May,
  viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
},
  {
  id: 8,
  name: 'Ms. Keishu Pant',
  role: 'PhD Candidate',
  department: 'Student',
  bio: 'Specializes in emission inventory and air quality management.',
  Expertise: 'Research Assistant_Air pollution monitoring',
  specialties: ['Emission Inventory', 'Air Quality Management'],
  alignTop: true,
  image: Pant,
  viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
},
];

const Team = () => {
  // Animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      rotateY: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const staggeredContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
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
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated researchers and professionals at AIT working to improve air quality and environmental health.
            </p>
          </div>
        </div>
      </section>

      {/* Team Directory (Tabs) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row - Top 2 Members */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto"
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {coreTeam.slice(0, 2).map((member) => (
              <motion.div key={member.id} variants={cardVariants} whileHover="hover" style={{ transformStyle: "preserve-3d" }}>
                <Card className="group hover:shadow-2xl transition-all duration-500 bg-background border border-border relative overflow-hidden">
                  <CardContent className="p-6 relative z-10">
                    <div className="text-center mb-4">
                      <motion.div
                        className="relative overflow-hidden mb-4 mx-auto"
                        style={{ width: 224, height: 288 }}
                        variants={imageVariants}
                        whileHover="hover"
                      >
                        <motion.img
                          src={member.image || teamPlaceholder}
                          alt={`${member.name} - ${member.role}`}
                          loading="lazy"
                          className={`w-full h-full border border-border bg-background object-cover ${member.alignTop ? 'object-top' : ''}`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      <Link to={`/team/${slugify(member.name)}`} state={{ member }} className="hover:underline">
                        <motion.h3 
                          className="text-xl font-semibold text-primary mb-1"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          {member.name}
                        </motion.h3>
                      </Link>
                      <p className="text-lg font-bold text-muted-foreground">{member.role}</p>
                      {member.department && (
                        <p className="text-sm text-muted-foreground">{member.department}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Remaining Members - 3 columns */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggeredContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {coreTeam.slice(2).map((member) => (
              <motion.div key={member.id} variants={cardVariants} whileHover="hover" style={{ transformStyle: "preserve-3d" }}>
                <Card className="group hover:shadow-2xl transition-all duration-500 bg-background border border-border relative overflow-hidden">
                  <CardContent className="p-6 relative z-10">
                    <div className="text-center mb-4">
                      <motion.div
                        className="relative overflow-hidden mb-4 mx-auto"
                        style={{ width: 224, height: 288 }}
                        variants={imageVariants}
                        whileHover="hover"
                      >
                        <motion.img
                          src={member.image || teamPlaceholder}
                          alt={`${member.name} - ${member.role}`}
                          loading="lazy"
                          className={`w-full h-full border border-border bg-background object-cover ${member.alignTop ? 'object-top' : ''}`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      <Link to={`/team/${slugify(member.name)}`} state={{ member }} className="hover:underline">
                        <motion.h3 
                          className="text-xl font-semibold text-primary mb-1"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          {member.name}
                        </motion.h3>
                      </Link>
                      <p className="text-lg font-bold text-muted-foreground">{member.role}</p>
                      {member.department && (
                        <p className="text-sm text-muted-foreground">{member.department}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;