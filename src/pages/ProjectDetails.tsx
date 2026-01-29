import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, DollarSign, Clock, Users, Target, Activity, Trophy, ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Import images
import capacityImg from '@/assets/capacity.jpg';
import riceStrawBurningImg from '@/assets/rice-straw-burning.jpg';
import governmentImg from '@/assets/government.jpg';
import higQualityImg from '@/assets/hig-quality.jpg';
import coBenefitsImg from '@/assets/co-benefits.png';
import afdWorkPackages from '@/assets/project_detail/afd.png';
import forestFireImg from '@/assets/project_detail/forest_fire.png';
import forestFireworkImg from '@/assets/project_detail/ff_research.png';
import openburning from '@/assets/project_detail/open_waste burning.png';
import laos from '@/assets/Laos_neighbours.png';
import canbrathe from '@/assets/project_detail/canbrethe.png';
import canbratheWorkPackage from '@/assets/project_detail/canbrethe_work_package.png';
import healHaze from '@/assets/project_detail/heal-haze.png';
import healHazeWork from '@/assets/project_detail/heal-haze_work.png';
import usaidWork from '@/assets/project_detail/usaid_work.png';
import c1 from '@/assets/project_detail/c1.png';
import c2 from '@/assets/project_detail/c2.png';
import c3 from '@/assets/project_detail/c3.png';
import c4 from '@/assets/project_detail/c4.png';
import c5 from '@/assets/project_detail/c5.png';
import c6 from '@/assets/project_detail/c6.png';
import c7 from '@/assets/project_detail/c7.png'; 
import c8 from '@/assets/project_detail/c8.png'; 
import c9 from '@/assets/project_detail/c9.png'; 
import c10 from '@/assets/project_detail/c10.png'; 
import p1_1 from '@/assets/project_detail/p1.jpg'; 
import p1_2 from '@/assets/project_detail/p2.jpg'; 
import p1_3 from '@/assets/project_detail/p3.jpg';
import p1_4 from '@/assets/project_detail/p4.jpg'; 
import p1_5 from '@/assets/project_detail/p5.jpg'; 
import p1_6 from '@/assets/project_detail/p6.jpg'; 
import ce1 from '@/assets/image8.jpeg'; 
import ce2 from '@/assets/project_detail/canbreathe_e2.png'; 
import ce4 from '@/assets/project_detail/canbreathe_e4.png'; 
import ce5 from '@/assets/project_detail/canbreathe_e5.png'; 
import ce6 from '@/assets/project_detail/canbreathe_e6.png'; 
import ce7 from '@/assets/project_detail/canbreathe_e7.jpeg'; 
import m2  from '@/assets/Event/m2.png';
import m22 from '@/assets/Event/m22.png';
import m42 from '@/assets/Event/m42.png';







interface Project {
  id: number;
  title: string;
  sponsor: string;
  partners: string;
  duration: string;
  objectives: string | string[];
  activities: string | string[];
  achievements?: string[];
  image: string;
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Project data (same as in Blog.tsx)
  const projects: {
    ongoing: Project[];
    completed: Project[];
    upcoming: Project[];
  } = {
    ongoing: [
      {
        id: 1,
        title: 'Air Quality Improvement Program in Thailand (AQIP-Thailand)',
        sponsor: 'Agence Française de Développement (AFD)',
        partners: 'Egis, AirParif, Citepa',
        duration: '2023-2026',
        objectives: [
          'The overall objective of this project is to support Thailand and at the local scale by supporting Chiang Mai provinces in their efforts to develop and implement policies and projects in order to improve air quality.',
          'The specific objectives of the project are:',
          'To strengthen the current air quality management system',
          'To build up the capacities and sharp competencies of local Thai agencies',
          'To provide technical support and recommendations to implement "quick win" measures to reduce air pollution',
          'To assess the feasibility of the introduction of zero-emission vehicles such as electric bus in a widespread urban area',
          'To have a better knowledge and monitoring of the air quality'
        ],
        activities: [
          '1. Strengthening of the air quality management system',
          '1.1. Audit of different existing emission inventories and modelling tools: This task assesses the needs of the Pollution Control Department (PCD) in terms of capacity building on emission inventory, on modelling tools, and to adapt the training sessions to their needs.',
          '1.2. Critical analysis of the existing tools: The conclusions of the audit (1.1) are presented in a document including a mapping of the existing tools and short- and medium-term improvements.',
          '1.3. Based on the results of the audit of the existing emission inventory and modelling tools, provide the capacity building sessions for the PCD on emission inventory and modelling tools.',
          '1.4. Training capacity building sessions for the PCD on the tools and methods to assess the spatial representativeness of monitoring stations.',
          '1.5. Organize workshops to address the spatial representativeness of stations of the existing PCD\'s network.',
          '1.6. Guidelines to assess the spatial representativeness of the PCD\'s monitoring network.',
          '1.7. Training sessions for the PCD on the environmental data integration tools and related statistical models for the calculation of the population-mean annual exposure.',
          '2. Capacity-building at the national/regional scale',
          '2.1. Organization of a study tour on the articulation of air quality management at the local, national, and regional scales.',
          '2.2. Organization of workshop to define the future role of the PCD and other organizations.',
          '3. Support to develop activities led by the Office of Transport and Planning (OTP)',
          '3.1. Capacity building to the three Ministries on European regulation, implementation, and enforcement of emission standards for on-road vehicles and industrial sites.',
          '3.2. Support to the Ministry of Transport in the drafting of the decree aiming at accelerating the renewal of the vehicle fleet towards the Euro 5 and Euro 6 norms.',
          '3.3. Planning for the deployment of electric buses in Chiang Mai.',
          '4. Support to develop activities led by Chiang Mai Municipalities',
          '4.1. Compilation of emission inventory for key sources in Chiang Mai province.',
          '4.2. Conducting surveys for assessing the composition of the vehicle fleets in Chiang Mai.'
        ],
        image: governmentImg
      },
      {
        id: 3,
        title: 'Assessment of agricultural and forest burning emissions in Lao PDR (Forest Fire Emission- Lao)',
        sponsor: 'The World Bank Group (WBG)',
        partners: 'Lao PDR',
        duration: '2025',
        objectives: [
          'This study aims to analyze the biomass open burning (BOB) situation and its association with air pollution emissions and ambient levels in the Lao PDR by using information from several data sources and the application of technical tools.',
          'The specific objectives and main activities performed of the objectives are as presented below.',
          '1. To understand the context of BOB in Lao PDR in conjunction with other countries in mainland Southeast Asia, an extensive literature review of swidden agriculture, BOB types, BOB emissions (forest fires and crop residue open burning [CROB]) in the region, and transboundary air pollution is required.',
          '2. To investigate the air pollution levels in the Lao PDR, both spatial (national, zone, and provinces) and temporal distribution (annual, seasonal, and monthly), by using satellite products of hotspots and relevant air pollution indicators for 2022, 2023, and 2024. This task involves the deployment of a consistent methodology with the FAO\'s study (Tattaris and others 2023) and obtains decadal time series of the parameters, 2015-2024, for similar columnar parameters of Aerosol Optical Depth (AOD), O₃, SO₂, NO₂, Ultra-violet Aerosol Index (UVAI), and active fire hotspots.',
          '3. To quantify the emissions from BOB, focusing on forest fires and CROB. This task involves 3 sub-tasks:',
          '3.1. Compilation and scrutinization of the available emission factors (EFs) of forest fires and CROB for key air pollutants (CO, SOₓ, NOₓ, NMVOC, NH₃), PM₁₀, PM₂.₅, and short-lived climate forcers (SLCFs) of BC, OC, and GHGs (CO₂, CH₄, N₂O). This study gives priority to the local measurement EFs in the country and in Southeast Asia.',
          '3.2. Compilation of the activity data and development of an emission inventory (EI) for BOB, including forest fires and CROB, in the Lao PDR for 2022. The emission estimates cover the key air pollutants, PM, SLCFs, and GHGs.',
          '3.3. Application of QA/QC to ensure the quality of EI data. This study conducted QA/QC measures, including QA/QC of the activity data and EFs. The emissions estimates produced by this study are compared and evaluated against other available databases for 2022.',
          '4. To develop a methodology framework for analyzing the change in forest land cover (forest loss) and the gain/change in agricultural land cover in association with forest fires. This task involves developing and testing a method for a forest fire-prone area of the North zone of the Lao PDR.',
          '5. To provide a menu of recommendations, based on the findings in the previous tasks, prioritizing BOB emission control measures that lead to air quality improvements and simultaneously mitigate emissions of climate forcers of GHGs and SLCFs.'
        ],
        activities: [],
        image: forestFireImg
      },
      {
        id: 4,
        title: 'Deliver training programme for implementing decrees for reducing open waste burning and air pollution',
        sponsor: 'Climate and Clean Air Coalition, United Nations Environment Programme',
        partners: 'Clean Air Asia, Ministry of Environment of Cambodia',
        duration: '2025-2027',
        objectives: [
          'The overall objective of this project is to support Cambodia in effectively reducing open burning and improving air quality through an action plan and training program. Clean Air Asia will merge its strengths in stakeholder engagement, capacity building, and science-based policy guidance with AirQC technical expertise in air quality and solid waste management and data analysis to effectively implement this project with the Ministry of Environment of Cambodia.',
          'Outcomes:',
          '1. Federal, provincial, district, communal, and village level authorities have strengthened their capacity to enforce regulations for reducing municipal waste open burning, and air pollution',
          '2. By project completion or soon after, the national government of Cambodia endorses an action plan to reduce all types of waste burning to meet its 50 per cent reduction target by 2030.',
          'Outputs:',
          'Output 1:',
          '1.1. Training needs assessment of federal, provincial, district, communal, and village level authorities regarding the ban for open waste burning and requirements for enforcement.',
          '1.2. Training modules and materials covering the regulations, including enforcement procedures, developed for enforcement authorities.',
          '1.3. Technical guidelines on alternatives to municipal waste open burning are developed.',
          '1.4. Training-of-Trainers delivered to participants in the selected provinces.',
          'Output 2:',
          '2.1. Detailed action plan to reduce municipal waste open burning.',
          '2.2. Consultation meetings with federal, provincial, district, communal, and village level authorities regarding the ban on municipal waste open burning and requirements for enforcement.'
        ],
        activities: [
          '1.1.1. Conduct stakeholder mapping and Knowledge, Attitude, and Practices (KAP) survey for stakeholders at various levels of the government.',
          '1.2.1. Develop training modules based on the KAP survey results, existing resources from the CCAC Air Quality Management Exchange (AQMx) platform, and other related materials.',
          '1.3.1. Develop a technical guideline outlining alternatives to open burning based on the results of the KAP survey and desk research of best practices and case studies.',
          '1.4.1. Conduct a one-day Training-of-Trainers using the training materials and modules, and technical guidelines.',
          '1.4.2. Conduct regular online technical sessions to support the one-day Training-for-Trainers.',
          '2.1.1. Compilation, analysis, and discussion meeting on the knowledge database on the air pollution and short-lived climate pollutants (SLCP) emission profile of waste management strategies.',
          '2.1.2. Facilitate visioning and target setting for the action plan.',
          '2.1.3. Conduct a prioritization workshop to determine the content of the action plan.',
          '2.1.4. Develop the detailed action plan.',
          '2.2.1. Conduct a consultation meeting to present and validate the first draft of the action plan.',
          '2.2.2. Conduct a project closing event to present the finalized action plan.'
        ],
        image: openburning
      },
      {
        id: 7,
        title: 'Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (CANBREATHE)',
        sponsor: 'Wellcome Trust',
        partners: 'Host: University of Canberra (Australia), Collaborating Parties: Australia (University of Tasmania, University of Sydney, Charles Darwin University, Queensland University of Technology, Curtin University, and NSW Department of Climate Change, Energy, the Environment and Water), Thailand (Air Quality Nexus Center at AIT, Mahidol University, Chiang Mai University, Climate Change and Environmental Research Center, and Geo-Informatics and Space Technology Development Agency), Indonesia (Climate Change Research Centre, University of Indonesia, Institute of Technology National in Bandung, and Kopernik), Lao PDR (National University of Laos and University of Health Sciences of Laos), Cambodia (The Institute of Technology of Cambodia), and Greece (Technical University of Crete), and International Organization (Jagun Alliance Aboriginal Corporation)',
        duration: '2025-2028',
        objectives: [
          'This transdisciplinary research project CANBREATHE, involving partners from Australia, Thailand, Indonesia, and Laos, aims to assess and communicate the health impacts of wildfire smoke attributable to anthropogenic climate change in five heavily affected regions of Southeast Asia and Australia, in order to inform climate and health policy and empower disadvantaged populations.',
          'The specific objectives are to:',
          'Estimate the burden of wildfire smoke on population health under current and future conditions.',
          'Understand and influence public perceptions of wildfire health impacts and association with climate change, particularly among disadvantaged and priority populations.',
          'Build skills and resilience, using innovative and impactful communication techniques.',
          'Inform and influence climate and health policy development through deep engagement with key policy stakeholders and targeted communication.',
          'Strengthen cross-sectoral engagement and collaboration across Southeast Asia and Australia, to build capacity and capability for assessing and communicating wildfire smoke impacts.'
        ],
        activities: [],
        image: canbrathe
      },
      {
        id: 8,
        title: 'Climate Change Adaptation to Smoke Haze for Improved Child Health in Southeast Asia (HEAL-HAZE)',
        sponsor: 'NHMRC e-ASIA 2023 Joint Research Program',
        partners: 'Australia (University of Canberra, University of Tasmania, University of Sydney, Curtin University, University of New South Wales, Commonwealth Scientific and Industrial Research Organisation, and New South Wales Health), Thailand (Air Quality Nexus Center (AirQC) at AIT, Mahidol University, Chiang Mai University, and Thai Pollution Control Department), Indonesia (University of Indonesia, National Institute of Technology Bandung, and Kopernik), Cambodia (Institute of Technology of Cambodia, and Cambodian Ministry of Health) and Laos (National University of Laos, University of Health Sciences, and Ministry of Health)',
        duration: '2024-2027',
        objectives: [
          'This interdisciplinary research project, "HEAL-HAZE", involving partners from Australia, Thailand, Indonesia, Cambodia, and Laos, aims to assess the effectiveness of climate change adaptation interventions for strengthening community resilience to smoke haze in Southeast Asia and increasing their adoption and implementation in the region to protect children\'s health.',
          'The specific objectives of the project are to:',
          'Assess the burden of wildfire smoke (PM₂.₅) on children\'s health in four heavily affected countries of Southeast Asia under current conditions and future climate change scenarios.',
          'Understand public perceptions of existing adaptation measures for reducing children\'s exposure to wildfire smoke, and of the barriers and enablers for their effective implementation.',
          'Evaluate key interventions for reducing children\'s exposure to wildfire smoke, including early warning systems, clean air rooms in schools and nurseries, and targeted public health information.',
          'Strengthen cross-sectoral engagement, training and collaboration across Southeast Asia and Australia to build capacity and capability for dealing effectively with smoke haze exposure and raising awareness of related health impacts for children in the context of climate change.'
        ],
        activities: [],
        image: healHaze
      }
    ],
    completed: [
      {
        id: 5,
        title: 'USAID Clean Air (K-CAP or Swachchha Hawa)',
        sponsor: 'U.S. Agency for International Development (USAID)',
        partners: 'Family Health International (FHI 360), Air Quality Nexus Center (AirQC) at the Asian Institute of Technology (AIT), Energy Policy Institute at the University of Chicago (EPIC), Environment and Public Health Organization (ENPHO), and One to Watch (OTW)',
        duration: '2022-2025',
        objectives: [
          'USAID Clean Air is a five-year initiative (November 8, 2021–November 7, 2026) that aims to improve air quality in the Kathmandu Valley to approach national ambient air quality standards, leading to improved health and educational outcomes.',
          'The main objectives of the projects are to:',
          'Improve GoN capacity at all levels and willingness to drive evidence-based policy formulation, enforcement, and implementation that influences air quality.',
          'Improve civil society and citizen engagement and knowledge on air pollution issues to advance public interest and GoN and private sector accountability for improving air quality.',
          'Enhance private sector involvement and investment in addressing air pollution issues.'
        ],
        activities: [
          'Core Activities of AirQC:',
          '1. Providing technical guidance to assess and strengthen existing air quality data management and sharing systems in Kathmandu Valley (KV)/Nepal;',
          '2. Supporting data compilation and analysis on air pollution in program areas to inform program priorities and interventions;',
          '3. Develop a workable emissions inventory (EI) calculator, provide EI data, and build air quality modeling capacity;',
          '4. Potentially using existing data from outside KV/Nepal to account for transboundary air pollution (some key sources of air pollution could be from outside of the KV);',
          '5. Supporting the establishment of a consortium of scientists, researchers, and policymakers focused on atmospheric research in Nepal;',
          '6. Holding workshops/training to address identified capacity gaps, particularly for enabling improved and quality evidence generation and use.'
        ],
        achievements: [
          'Major Achievements led by AIT:',
          '1. Publication of the final peer-reviewed technical report "State of Air in Nepal with focus in Kathmandu Valley", or SoAR report. It is accessed at https://zenodo.org/records/13335444.',
          '2. Critical analysis of ambient air quality monitoring data. The results were included in the SoAR report and presented at different workshops and CARN (Consortium for Atmospheric Research for Nepal) meetings.',
          '3. Development of an Excel-based workable calculator/model of emissions inventories (EI) for KV. EI results for the base year 2019 were presented at the CARN meeting. AirQC also provided the template and instructions to the Department of Environment (DOE) officers in the 6th training in Kathmandu in November 2024. The template was used by four Master\'s students at local universities in Nepal to estimate emissions from key sources in KV for the year 2023.',
          '4. Application of the air quality modeling system for analysis of air pollution in KV. Two Master\'s students, jointly supervised by AirQC and Tribhuvan University (TU), have done research on modeling approaches.',
          '5. Performance evaluation of low-cost sensors for air quality monitoring in KV and Nepal. One Master\'s student, jointly supervised by AIT and TU, conducts research on this research topic.',
          '6. Within AIT-CARN, we proposed receptor modeling for source apportionment of PM₂.₅ and particle-bound polycyclic aromatic hydrocarbons in KV using a full year of measurement data (2024-2025). A Ph D student was recruited to conduct the research on the topic and collected air samples for chemical analysis and source apportionment.',
          '7. Road dust samples collected for silt content determination, which is required input for road dust emissions calculation for KV.',
          '8. Establishment of CARN with 5 meetings (222 participants/105 females).',
          '9. Co-organization and key training personnel for seven capacity-building programs for local stakeholders of Nepal on air quality management (203 participants/103 females).',
          '10. Co-organization of four workshops on different topics related to air quality management (205 participants/99 females).'
        ],
        image: capacityImg
      }
    ],
    upcoming: [
      {
        id: 6,
        title: 'Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (CANBREATHE)',
        sponsor: 'Wellcome Trust',
        partners: 'Australia, Thailand, Indonesia, Cambodia, and Laos',
        duration: '2025-2028',
        objectives: [
          'Estimate burden of wildfire smoke on population health',
          'Understand public perceptions of wildfire health impacts',
          'Build skills and resilience',
          'Inform climate and health policy development'
        ],
        activities: 'Apply climate attribution modelling and storylines to assess the influence of climate change on extreme wildfires and related health impacts',
        image: coBenefitsImg
      }
    ]
  };

  // Find project by ID
  const allProjects = [...projects.ongoing, ...projects.completed, ...projects.upcoming];
  const project = allProjects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-1 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Button onClick={() => navigate('/projects')}>
          Back to Projects
        </Button>
      </div>
    );
  }

  // Event Card (similar to Resources format, with Read More / Read Less)
  interface EventItem {
    id: string;
    title: string;
    description: string;
    image?: string;
  }

  const EventCard = ({ item, compactImages = false }: { item: EventItem; compactImages?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 300;
    const shouldTruncate = item.description.length > maxLength;
    const displayText = isExpanded || !shouldTruncate
      ? item.description
      : item.description.substring(0, maxLength) + '...';

    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle 
            className="text-xl font-bold text-gray-900"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
        </CardHeader>
        <CardContent className="space-y-4">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="float-left w-80 mr-6 mb-4 rounded-lg object-cover"
            />
          )}
          
          <div className="space-y-4">
            <div 
              className="text-gray-700 leading-relaxed [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_li]:mb-2"
              dangerouslySetInnerHTML={{ __html: displayText }}
            />
            
            {shouldTruncate && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
              >
                {isExpanded ? (
                  <>
                    Read Less <ChevronUp className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            )}
          </div>
          
          <div className="clear-both"></div>
        </CardContent>
      </Card>
    );
  };

  // Placeholder events for projects with Events section (you can update title, text, image later)
  const events: EventItem[] =
    project.id === 7
      ? [
          {
            id: 'ev-4',
            title: 'Public Seminar "ENVIFAIR 2025 X RCCC UI" at the University of Indonesia, 25<sup>th</sup> September 2025',
            description:
              `On 26<sup>th</sup> June 2025, Prof. Kim Oanh and Dr. Lai Nguyen Huy, representatives of AirQC participated in the high-level regional policy dialogue in Vientiane, Lao PDR, which was co-hosted by the University of Canberra (Australia), National University of Laos, and the University of Health Sciences Laos. <br></br>The workshop brought together over 40 delegates to introduce two projects for which the AirQC is the key partner: Climate change adaptation to smoke haze for improved child health in Southeast Asia (<a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a>) and Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (<a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a>). The workshop provided key opportunities to understand the social, political and economic barriers to mitigation which empowered the health sector to deal with smoke-haze from biomass open burning.`,
            image: ce1,
          },
          {
            id: 'ev-2',
            title: 'Policy Dialogue Workshop on Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia in Bangkok, Thailand',
            description:
              `On 17<sup>th</sup> June 2025, Prof. Kim Oanh and Dr. Lai Nguyen Huy, representatives of AirQC, participated in the policy dialogue workshop on <strong>Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia</strong> held in Bangkok, Thailand. Policy dialogue is an important work package of <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a>.<br></br>This joint workshop aimed to engage policymakers and other stakeholders to prioritize solutions against haze pollution for affected communities and schools, co-create a platform for policy dialogue and knowledge exchange, and identify opportunities for regional cooperation on tackling the health impacts of air pollution and climate change.<br></br>Prof. Kim Oanh, Director of AirQC, delivered a keynote presentation on <strong>Overview of Smoke Haze Pollution from Wildfires and Agricultural Burning in Southeast Asia.</strong> The AirQC team actively participated in the discussion groups, which aimed to systematically map existing interventions and policies; engage multi-sectoral stakeholders to prioritize adaptation solutions; identify implementation challenges, barriers, and enablers; co-design adaptation interventions tailored to regional needs; empower the health sector to deal with smoke haze; and understand the social, political, and economic barriers to mitigation.`,
            image: ce2,
          },
          {
            id: 'ev-3',
            title: 'Regional Policy Workshop “Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia”',
            description:
              `On 24<sup>th</sup> September 2025, the Air Quality Nexus Center (AirQC) team participated in the Regional Policy Workshop on Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia, co-organized by the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects. The workshop, held in Jakarta and co-hosted by the <strong>HEAL National Research Network at the University of Canberra,</strong> brought together experts, policymakers, and regional partners from across Southeast Asia and Australia, including representatives from the <strong>University of Indonesia, Clean Air Asia, Bicara Udara, NAFAS, Kopernik</strong>, and other key organizations.<br></br>The event aimed to strengthen regional collaboration on addressing the transboundary haze problem and its impacts on climate and public health. It provided a platform for dialogue and knowledge exchange on inclusive approaches to empower vulnerable communities, promote local adaptation strategies, and integrate cross-sectoral policies for emissions reduction and health equity. Key themes of the workshop included community resilience, health impacts of haze pollution, and opportunities for regional cooperation to support evidence-based policymaking for cleaner air in Southeast Asia.<br></br>Prof. Nguyen Thi Kim Oanh, Director of AirQC, served as a panelist in the session on "Regional Cooperation on Tackling Health Effects of Forest Fires." She emphasized the importance of strengthening regional collaboration to reduce biomass open burning and address the associated transboundary haze phenomena. Prof. Kim also underscored the need for coordinated scientific research, shared data, and capacity-building initiatives to support sustainable policy actions across the region. Details of the event can be found at <a href='https://www.linkedin.com/posts/healthy-environments-and-lives-national-research-network_canbreathe-healhaze-airpollution-activity-7377193248529797120-Kzpr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA4s_y0BnLpqcLSByHM-1AKn5x8aH4fVXAw' style='color: hsl(105 33% 30%); text-decoration: underline;'>Healthy Environments and Lives National Research Network – LinkedIn</a>.`,
            image: m2,
          },
          {
            id: 'ev-4',
            title: 'Public Seminar “ENVIFAIR 2025 X RCCC UI” at the University of Indonesia, 25<sup>th</sup> September 2025',
            description:
              `The AirQC team participated in the Public Seminar "ENVIFAIR 2025 X RCCC UI", which was organized by the Research Center for Climate Change (RCCC) and Faculty of Public Health, Universitas Indonesia, Depok, as a part of the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects.<br></br>Prof. Kim Oanh and Dr. Huy also provided insights in the interviews conducted by the university student union, highlighting the needs for science-based information for policy making and the AirQC activities within these two projects.`,
            image: ce4,
          },
          {
            id: 'ev-5',
            title: 'Field visit and Participation in the Public Seminar at Universitas Sriwijaya, in Palembang, Indonesia',
            description:
              `On 23<sup>rd</sup> September 2025, Prof. Nguyen Thi Kim Oanh and Dr. Lai Nguyen Huy (AirQC's team) participated in a policy workshop in Jakarta, Indonesia, organized under the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects. <br></br>During the workshop, presented the prototype of a DIY air purifier designed for Clean Air Room interventions and organized a panel discussion on "Community Empowerment for Environmental Health and Health Equity," sharing experiences and lessons learned alongside <strong>Bicara Udara, Clean Air Asia, and Nafas</strong>.<br></br>The workshop aimed to promote multi-country collaboration and strengthen regional actions to improve community health resilience against air pollution. It served as a platform for dialogue among partners from <strong>Australia, Thailand, Cambodia, Laos, and Indonesia</strong>, encouraging knowledge exchange and capacity building for practical clean-air solutions.<br></br>Following the workshop, the AirQC team joined international partners in field visits to <strong>SD Muhammadiyah 1 School, Bappeda Litbang</strong>, and the <strong>Silaberanti Community</strong> in Palembang to identify suitable sites for implementing the Clean Air Room interventions.<br></br>The international project team also conducted a <strong>public seminar at Universitas Sriwijaya</strong>, engaging local stakeholders and academic partners to enhance collaboration and ensure the successful implementation of the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> initiatives.`,
            image: ce5,
          },
          {
            id: 'ev-6',
            title: `5<sup>th</sup> International Forum on Transboundary Air Pollution in Commemoration of the International Day of Clean Air for Blue Skies`,
            description:
              `On 8<sup>th</sup> September 2025, Prof. Nguyen Thi Kim Oanh, Director of the Air Quality Nexus Center (AirQC), participated in the <em>5<sup>th</sup> International Forum on Transboundary Air Pollution in Commemoration of the International Day of Clean Air for Blue Skies.</em> The event was organized by the <strong>Ministry of Foreign Affairs (MOFA)</strong> of the Republic of Korea, with participation from policymakers, researchers, and representatives of international organizations working on regional air quality and environmental management.<br></br>The forum aimed to strengthen regional cooperation on air pollution mitigation and promote the implementation of integrated policies addressing the environmental and health impacts of transboundary pollution. It provided a platform for dialogue among key stakeholders to exchange knowledge, discuss technical and policy challenges, and identify collaborative strategies to achieve cleaner air in the Asia-Pacific region.<br></br>Prof. Kim Oanh delivered an online presentation titled "Wildfire Emissions in Southeast Asia: Multiple Effects on Regional Air Quality, Ecosystem, and Health." Her talk highlighted the need for an <strong>airshed management approach</strong> to effectively address transboundary air pollution challenges. She also shared insights from the Center's ongoing research under the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects, emphasizing their contributions to improving regional understanding of wildfire impacts and promoting evidence-based solutions for cleaner air. Details of the event can be found at <a href='https://www.mofa.go.kr/eng/brd/m_5676/view.do?seq=322958' style='color: hsl(105 33% 30%); text-decoration: underline;'>Ministry of Foreign Affairs, Republic of Korea.</a>`,
            image: ce6,
            
          },
          {
            id: 'ev-7',
            title: "Public Seminar on \"Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia\"",
            description:
              `On 18<sup>th</sup> June 2025, the AirQC (AirQC) hosted the public seminar on "Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia". This hybrid event brought together regional and international experts to discuss health risks from wildfire smoke and haze under climate change.<br></br>The event is within the framework of <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> and <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> projects. Before the public seminar happened, Dr. Lai Nguyen Huy presented an overview of the AirQC, highlighting its key research areas and projects.<br></br>The event focused on climate attribution, health assessments, and adaptation for vulnerable groups. Key presentations covered early warning systems, health effects, and interventions like clean air rooms. The seminar also promoted policy dialogue and science-based regional planning. Prof. Kim Oanh, Director of AirQC, was also the panelist of the event, sharing her valuable insight on the situation of wildfire in Southeast Asia and its effects.<br></br>On the same date, AirQC hosted the guests to a guided laboratory tour of AIT's research facilities, including the Environmental Engineering and Management (EEM) Ambient Laboratory, Air Quality Modeling Laboratory, and the EEM Main Laboratory.<br></br>The details of the public seminar can be found at <br></br><a href='https://ait.ac.th/event/public-seminar-wildfire-smoke-health-impacts-and-adaptation-in-southeast-asia-and-australia/' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://ait.ac.th/event/public-seminar-wildfire-smoke-health-impacts-and-adaptation-in-southeast-asia-and-australia/</a>`,
            image: m22,
            
          },
        ]
      : project.id === 8
      ? [
          {
            id: 'ev-7',
            title: "Healthy Environment and Lives (HEAL) 2025 Conference",
            description:
              `From 3<sup>rd</sup> to 6<sup>th</sup> November 2025, the Air Quality Nexus Center (AirQC) participated in the Healthy Environment and Lives (HEAL) 2025 Conference, a four-day hybrid event focused on the urgent health, climate, and environmental challenges facing Australia, the Asia-Pacific region, and the world.<br></br>The conference theme, "Weaving Diverse Knowledges into Climate Action for Better Health," brought together international experts, policymakers, researchers, and community leaders across multiple hubs and virtual platforms. The event aimed to highlight scientific evidence, community-led initiatives, and integrated policy approaches to address climate-related health impacts.<br></br>On 3<sup>rd</sup> November 2025, Prof. Nguyen Thi Kim Oanh, Director of AirQC, served as a panelist in the session "Scientific Evidence and Policy on Wildfire Smoke–Related Health Impacts." She shared insights on the health risks of wildfire smoke, the need for evidence-based policy frameworks, and the importance of regional collaboration to reduce exposure and strengthen public health resilience.<br></br>The full conference program and details are available here: <a href='https://vepimg.b8cdn.com/uploads/vjfnew/19538/uploads/vjf/content/misc/1762201689HEAL_2025_Conference_Program.pdf' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL 2025 Conference Program</a>`,
            image: m42,
          },
          {
            id: 'ev-4',
            title: 'Public Seminar "ENVIFAIR 2025 X RCCC UI" at the University of Indonesia, 25<sup>th</sup> September 2025',
            description:
              `The AirQC team participated in the Public Seminar "ENVIFAIR 2025 X RCCC UI", which was organized by the Research Center for Climate Change (RCCC) and Faculty of Public Health, Universitas Indonesia, Depok, as a part of the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects.<br></br>Prof. Kim Oanh and Dr. Huy also provided insights in the interviews conducted by the university student union, highlighting the needs for science-based information for policy making and the AirQC activities within these two projects.`,
            image: ce4,
          },
          {
            id: 'ev-3',
            title: 'Regional Policy Workshop "Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia"',
            description:
              `On 24<sup>th</sup> September 2025, the Air Quality Nexus Center (AirQC) team participated in the Regional Policy Workshop on Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia, co-organized by the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects. The workshop, held in Jakarta and co-hosted by the <strong>HEAL National Research Network at the University of Canberra,</strong> brought together experts, policymakers, and regional partners from across Southeast Asia and Australia, including representatives from the <strong>University of Indonesia, Clean Air Asia, Bicara Udara, NAFAS, Kopernik</strong>, and other key organizations.<br></br>The event aimed to strengthen regional collaboration on addressing the transboundary haze problem and its impacts on climate and public health. It provided a platform for dialogue and knowledge exchange on inclusive approaches to empower vulnerable communities, promote local adaptation strategies, and integrate cross-sectoral policies for emissions reduction and health equity. Key themes of the workshop included community resilience, health impacts of haze pollution, and opportunities for regional cooperation to support evidence-based policymaking for cleaner air in Southeast Asia.<br></br>Prof. Nguyen Thi Kim Oanh, Director of AirQC, served as a panelist in the session on "Regional Cooperation on Tackling Health Effects of Forest Fires." She emphasized the importance of strengthening regional collaboration to reduce biomass open burning and address the associated transboundary haze phenomena. Prof. Kim also underscored the need for coordinated scientific research, shared data, and capacity-building initiatives to support sustainable policy actions across the region. Details of the event can be found at <a href='https://www.linkedin.com/posts/healthy-environments-and-lives-national-research-network_canbreathe-healhaze-airpollution-activity-7377193248529797120-Kzpr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA4s_y0BnLpqcLSByHM-1AKn5x8aH4fVXAw' style='color: hsl(105 33% 30%); text-decoration: underline;'>Healthy Environments and Lives National Research Network – LinkedIn</a>.`,
            image: m2,
          },
          {
            id: 'ev-5',
            title: 'Field visit and Participation in the Public Seminar at Universitas Sriwijaya, in Palembang, Indonesia',
            description:
              `On 23<sup>rd</sup> September 2025, Prof. Nguyen Thi Kim Oanh and Dr. Lai Nguyen Huy (AirQC's team) participated in a policy workshop in Jakarta, Indonesia, organized under the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects. <br></br>During the workshop, presented the prototype of a DIY air purifier designed for Clean Air Room interventions and organized a panel discussion on "Community Empowerment for Environmental Health and Health Equity," sharing experiences and lessons learned alongside <strong>Bicara Udara, Clean Air Asia, and Nafas</strong>.<br></br>The workshop aimed to promote multi-country collaboration and strengthen regional actions to improve community health resilience against air pollution. It served as a platform for dialogue among partners from <strong>Australia, Thailand, Cambodia, Laos, and Indonesia</strong>, encouraging knowledge exchange and capacity building for practical clean-air solutions.<br></br>Following the workshop, the AirQC team joined international partners in field visits to <strong>SD Muhammadiyah 1 School, Bappeda Litbang</strong>, and the <strong>Silaberanti Community</strong> in Palembang to identify suitable sites for implementing the Clean Air Room interventions.<br></br>The international project team also conducted a <strong>public seminar at Universitas Sriwijaya</strong>, engaging local stakeholders and academic partners to enhance collaboration and ensure the successful implementation of the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> initiatives.`,
            image: ce5,
          },
          {
            id: 'ev-6',
            title: `5<sup>th</sup> International Forum on Transboundary Air Pollution in Commemoration of the International Day of Clean Air for Blue Skies`,
            description:
              `On 8<sup>th</sup> September 2025, Prof. Nguyen Thi Kim Oanh, Director of the Air Quality Nexus Center (AirQC), participated in the <em>5<sup>th</sup> International Forum on Transboundary Air Pollution in Commemoration of the International Day of Clean Air for Blue Skies.</em> The event was organized by the <strong>Ministry of Foreign Affairs (MOFA)</strong> of the Republic of Korea, with participation from policymakers, researchers, and representatives of international organizations working on regional air quality and environmental management.<br></br>The forum aimed to strengthen regional cooperation on air pollution mitigation and promote the implementation of integrated policies addressing the environmental and health impacts of transboundary pollution. It provided a platform for dialogue among key stakeholders to exchange knowledge, discuss technical and policy challenges, and identify collaborative strategies to achieve cleaner air in the Asia-Pacific region.<br></br>Prof. Kim Oanh delivered an online presentation titled "Wildfire Emissions in Southeast Asia: Multiple Effects on Regional Air Quality, Ecosystem, and Health." Her talk highlighted the need for an <strong>airshed management approach</strong> to effectively address transboundary air pollution challenges. She also shared insights from the Center's ongoing research under the <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> projects, emphasizing their contributions to improving regional understanding of wildfire impacts and promoting evidence-based solutions for cleaner air. Details of the event can be found at <a href='https://www.mofa.go.kr/eng/brd/m_5676/view.do?seq=322958' style='color: hsl(105 33% 30%); text-decoration: underline;'>Ministry of Foreign Affairs, Republic of Korea.</a>`,
            image: ce6,
          },
          {
            id: 'ev-1',
            title: 'Regional Policy Dialogue Workshop in Vientiane, Lao PDR',
            description:
              `On 26<sup>th</sup> June 2025, Prof. Kim Oanh and Dr. Lai Nguyen Huy, representatives of AirQC participated in the high-level regional policy dialogue in Vientiane, Lao PDR, which was co-hosted by the University of Canberra (Australia), National University of Laos, and the University of Health Sciences Laos. <br></br>The workshop brought together over 40 delegates to introduce two projects for which the AirQC is the key partner: Climate change adaptation to smoke haze for improved child health in Southeast Asia (<a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a>) and Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (<a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a>). The workshop provided key opportunities to understand the social, political and economic barriers to mitigation which empowered the health sector to deal with smoke-haze from biomass open burning.`,
            image: ce1,
          },
          {
            id: 'ev-8',
            title: "Public Seminar on \"Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia\"",
            description:
              `On 18<sup>th</sup> June 2025, the AirQC (AirQC) hosted the public seminar on "Wildfire Smoke: Health Impacts and Adaptation in Southeast Asia and Australia". This hybrid event brought together regional and international experts to discuss health risks from wildfire smoke and haze under climate change.<br></br>The event is within the framework of <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a> and <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> projects. Before the public seminar happened, Dr. Lai Nguyen Huy presented an overview of the AirQC, highlighting its key research areas and projects.<br></br>The event focused on climate attribution, health assessments, and adaptation for vulnerable groups. Key presentations covered early warning systems, health effects, and interventions like clean air rooms. The seminar also promoted policy dialogue and science-based regional planning. Prof. Kim Oanh, Director of AirQC, was also the panelist of the event, sharing her valuable insight on the situation of wildfire in Southeast Asia and its effects.<br></br>On the same date, AirQC hosted the guests to a guided laboratory tour of AIT's research facilities, including the Environmental Engineering and Management (EEM) Ambient Laboratory, Air Quality Modeling Laboratory, and the EEM Main Laboratory.<br></br>The details of the public seminar can be found at <br></br><a href='https://ait.ac.th/event/public-seminar-wildfire-smoke-health-impacts-and-adaptation-in-southeast-asia-and-australia/' style='color: hsl(105 33% 30%); text-decoration: underline;'>https://ait.ac.th/event/public-seminar-wildfire-smoke-health-impacts-and-adaptation-in-southeast-asia-and-australia/</a>`,
            image: m22,
          },
          {
            id: 'ev-2',
            title: 'Policy Dialogue Workshop on Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia in Bangkok, Thailand',
            description:
              `On 17<sup>th</sup> June 2025, Prof. Kim Oanh and Dr. Lai Nguyen Huy, representatives of AirQC, participated in the policy dialogue workshop on <strong>Tackling the Health Impacts of Haze Pollution in Southeast Asia and Australia</strong> held in Bangkok, Thailand. Policy dialogue is an important work package of <a href='https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/' style='color: hsl(105 33% 30%); text-decoration: underline;'>HEAL-HAZE</a> and <a href='https://healnetwork.org.au/projects/canbreathe/' style='color: hsl(105 33% 30%); text-decoration: underline;'>CANBREATHE</a>.<br></br>This joint workshop aimed to engage policymakers and other stakeholders to prioritize solutions against haze pollution for affected communities and schools, co-create a platform for policy dialogue and knowledge exchange, and identify opportunities for regional cooperation on tackling the health impacts of air pollution and climate change.<br></br>Prof. Kim Oanh, Director of AirQC, delivered a keynote presentation on <strong>Overview of Smoke Haze Pollution from Wildfires and Agricultural Burning in Southeast Asia.</strong> The AirQC team actively participated in the discussion groups, which aimed to systematically map existing interventions and policies; engage multi-sectoral stakeholders to prioritize adaptation solutions; identify implementation challenges, barriers, and enablers; co-design adaptation interventions tailored to regional needs; empower the health sector to deal with smoke haze; and understand the social, political, and economic barriers to mitigation.`,
            image: ce2,
          },
        ]
      : project.id === 5
      ? [
          {
            id: 'ev-1',
            title: 'Update this title (Event 1)',
            description:
              'Brief description of USAID Clean Air event. Replace this placeholder text with your actual content.',
            image: c7,
          },
          {
            id: 'ev-2',
            title: 'Update this title (Event 2)',
            description:
              'Another event entry for the Events list. You can adjust images and text anytime.',
            image: c1,
          },
        ]
      : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-10 bg-background"
    >
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <Button
            variant="ghost"
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground h-8"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Button>
        </div>

        {/* Hero Section with Title and Image */}
        <section className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="max-w-6xl mx-auto">
              {/* Project Title */}
              <motion.h1 
                className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center"
                variants={itemVariants}
              >
                {project.id === 7 ? (
                  <>
                    Climate Attribution of Wildfire Smoke Impacts on Priority Population Health in Southeast Asia and Australia (
                    <a 
                      href="https://healnetwork.org.au/projects/canbreathe/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      CANBREATHE
                    </a>
                    )
                  </>
                ) : project.id === 8 ? (
                  <>
                    Climate Change Adaptation to Smoke Haze for Improved Child Health in Southeast Asia (
                    <a 
                      href="https://healnetwork.org.au/projects/tackling-the-health-impact-of-smoke-haze-in-southeast-asia-heal-haze/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      HEAL-HAZE
                    </a>
                    )
                  </>
                ) : (
                  project.title
                )}
              </motion.h1>
              
              {/* Hero Image */}
              <motion.div 
                className="w-full flex justify-center mb-2"
                variants={imageVariants}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`max-w-full h-auto rounded-lg ${project.image === forestFireImg ? 'max-h-[500px] object-contain' : 'max-h-[600px] object-cover'}`}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-2">
          <div className="max-w-6xl mx-auto space-y-2">
            {/* Key Info List */}
            <motion.div 
              className="p-6 rounded-lg"
              variants={itemVariants}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <DollarSign size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Funding: </span>
                    <span className="text-muted-foreground">{project.sponsor}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Duration: </span>
                    <span className="text-muted-foreground">{project.duration}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Partners: </span>
                    <span className="text-muted-foreground">{project.partners}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Sections */}
            <div className="space-y-6">
              {/* Objectives */}
              <motion.section variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">Objectives</h2>
                <div className="p-6">
                  {Array.isArray(project.objectives) ? (
                    <ul className="space-y-4">
                      {project.objectives.map((obj, i) => {
                        // For project 1, show bullets for all objectives
                        // For project 5, show bullets only for items 2-4 (the 3 main objectives)
                        // For project 7, show bullets only for items 2-6 (the 5 specific objectives)
                        // For project 8, show bullets only for items 2-5 (the 4 specific objectives)
                        const showBullet = project.id === 1 || (project.id === 5 && i >= 2) || (project.id === 7 && i >= 2) || (project.id === 8 && i >= 2);
                        return (
                          <li key={i} className={`text-muted-foreground text-lg leading-relaxed ${showBullet ? 'flex items-start gap-3' : ''}`}>
                            {showBullet && (
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            )}
                            <span>{obj}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground text-lg leading-relaxed">{project.objectives}</p>
                  )}
                </div>
              </motion.section>

              {/* Overall Work Packages */}
              {project.id === 1 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">Overall work packages</h2>
                  <div className="p-6 flex justify-center">
                    <img 
                      src={afdWorkPackages} 
                      alt="Overall work packages"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                </motion.section>
              )}

              {/* Project's Overall Framework for CANBREATHE */}
              {project.id === 7 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">Project's overall framework</h2>
                  <div className="p-6 flex justify-center">
                    <img 
                      src={canbratheWorkPackage} 
                      alt="Project's overall framework"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="p-6 space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Details of Work Packages</h3>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP1: Multi-Sectoral Engagement & Communication</h4>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-medium text-foreground">Task 1.1 Policy engagement and prioritization</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Systematically map climate and health, wildfire smoke prevention, and health protection policies for priority populations in Southeast Asia and Australia.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Conduct in-depth interviews with key policymakers.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Organize four policy dialogues in national capitals, hold co-design workshops to identify and prioritize evidence needs, and organize four integration workshops on translation and implementation.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">Task 1.2 Community engagement and co-design</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Use a cross-sectional approach to assess community perceptions of climate change and its health impacts, and related environmental health literacy needs.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Conduct in-depth interviews with community leaders, Indigenous rangers, and health practitioners, and focus group discussions (FGDs).</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">Task 1.3 Citizen science and community empowerment</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Install low-cost air quality sensors at 60 households (in each region) to illustrate community exposure to wildfire smoke.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Demonstrate construction of DIY air purifiers and provide the necessary materials.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP2: Climate Attribution Modelling</h4>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-medium text-foreground">Task 2.1 Climate modelling with/without anthropogenic forcing</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Perform a combined data analysis and modelling study, using 'end-to-end' attribution assessment, based on the World Weather Attribution group's probabilistic extreme event attribution analysis methods.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Perform large ensembles of climate model simulations from at least three Coupled Model Intercomparison Project Phase 6 (CMIP6) models. The simulations will represent three climate scenarios: (A) unperturbed pre-industrial with natural forcing only, (B) current with anthropogenic forcing, and (C) future close to the 2°C warming threshold (SSP2-4.5 by 2070).</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">Task 2.2 Wildfire emissions and burnt areas</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Calculate burnt area and wildfire emissions for the three scenarios using the INFERNO global fire model.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Compare and scale using emissions estimates for specific wildfire events will be obtained from the Global Fire Emissions Database (GFED3) and other satellite products.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP3: Air Pollution Assessment</h4>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-medium text-foreground">Task 3.1 Air pollution modelling</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Apply the Weather Research and Forecasting (WRF) model coupled with selected chemical transport models (CTM), i.e., CMAQ and Chem/CAMx, to assess regional and urban-scale air quality, respectively.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Evaluate model performance for current climate simulations using ground-level measurements.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP4: Indigenous Knowledge Systems</h4>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-medium text-foreground">Task 4.1 Storylines, connection to Country and health equity</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Systematically engage Indigenous peoples and organizations in: (a) assessing wildfire impacts on Indigenous communities, (b) exploring Indigenous forest fire management practices in the climate change context, and (c) integrating Indigenous knowledge structures into storylines comprising Indigenous knowledge traditions, to shape climate and health policy.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Organize culturally safe yarning circles (informal focus groups) that tease out information through storytelling.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">Task 4.2 Climate and health communication</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Develop culturally sensitive climate and health messaging for Indigenous peoples, and produce four videos/podcasts communicating strength-based Indigenous approaches to fire management, caring for Country, climate change adaptation and health.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Prepare commission Indigenous artwork and run school poster competitions.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP5: Health Impact Analysis, Valuation & Visualization</h4>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-medium text-foreground">Task 5.1 Health impact analysis and attribution</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>To quantify quantitative health impact assessments (HIAs), including uncertainty analysis for estimating: (a) current and future wildfire smoke impacts with/without climate change, (b) cause-specific health burdens for children at birth and 0-5 years (stillbirth, preterm birth, fetal growth restriction), and for pregnant women (e.g. gestational hypertension).</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">Task 5.2 Economic cost of health impacts</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Review economic policy instruments used to constrain slash-and-burn agriculture and deforestation, and facilitate Indigenous practices for wildfire prevention.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Perform an economic valuation using our cost-of-illness method, including hospitalization, mortality and lost productivity associated with smoke exposure.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">Task 5.3 Data visualization and dissemination</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Develop an innovative relational geospatial database to store wildfire smoke exposure and health indicators.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Develop an online interactive dashboard for retrieving database information and visualizing smoke- and health-related indicators.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}

              {/* Project's Overall Framework for HEAL-HAZE */}
              {project.id === 8 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">Project Overall Framework</h2>
                  <div className="p-6 flex justify-center">
                    <img 
                      src={healHazeWork} 
                      alt="Project Overall Framework"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP2: Multi-Sectoral Engagement</h4>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-medium text-foreground">Task 2.1 Policy Engagement</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Systematically map relevant climate change adaptation, smoke haze prevention, and health protection policies and interventions for children in Southeast Asia, as well as policy stakeholders in affected regions in Thailand, Indonesia, Cambodia, and Laos.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Conduct in-depth interviews with key policy-makers from the Ministries of Health, Education, and Environmental Protection and four policy workshops, to prioritize adaptation solutions for affected communities and schools, identify implementation challenges, and co-design interventions.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">Tasks 2.2 Community Engagement and Awareness Raising</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Use a cross-sectional mixed methods approach to assess community perceptions of climate change and related impacts of wildfires and smoke haze on children's health.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Determine environmental health literacy needs, and the understanding and acceptability of adaptation measures, such as early warning systems, low-cost sensors, and clean air rooms.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Use FGD and the survey questionnaire will assess the perceived effects of smoke exposure on children's physical and mental health, including respiratory symptoms, stress and anxiety, cognitive function, and acceptability of health protection measures, such as health warnings and clean air rooms.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP3: Air Quality Modelling</h4>
                      <div className="ml-4">
                        <ul className="space-y-2">
                          <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span>To assess transboundary, regional and local air quality, the Weather Research and Forecasting (WRF) model coupled with selected chemical transport models (CTM), i.e., CMAQ, and Chem/CAMx.</span>
                          </li>
                          <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span>Quantify emissions from all major anthropogenic sources, including biomass open burning based on well-established emissions inventory methodology.</span>
                          </li>
                          <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span>Evaluate the performance of modeling results using ground-based data.</span>
                          </li>
                          <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span>Assess future air quality for future climate conditions and various emission control scenarios that will be developed following the national roadmaps.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP4: Health Impact Analysis</h4>
                      <div className="ml-4">
                        <ul className="space-y-2">
                          <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span>Conduct quantitative health impact assessments (HIA), including uncertainty analysis, to estimate: (a) the health burden attributable to current smoke haze in Southeast Asia using high spatial resolution air pollution maps (WP3), appropriately aggregated baseline health and population data, and air pollution and health concentration-response functions (CRF) for a range of health outcomes from the literature.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP5: Evaluation of Adaptation Solutions</h4>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-medium text-foreground">Task 5.1 Early Warning System</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Develop an automated meteorological classification using regional weather station data from Northern Thailand to successfully predict smoke haze in Chiang Mai.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Develop health messaging and exposure reduction advice for smoke haze episodes of different intensities and durations targeted to children.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">Task 5.2 Clean Air Rooms</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>To assess the effectiveness of these interventions, we will evaluate smoke exposure in 20 nursery rooms in Chiang Mai (Thailand), and 20 classrooms in Palembang (Indonesia) over the smoke haze season.</span>
                            </li>
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>Monitor, including indoor and outdoor air quality (PM₂.₅, PM₁₀), temperature, and relative humidity, and conduct semi-structured interviews with teachers, students and parents, and manual record classroom structure (e.g. size, doors, windows, and other openings), occupancy (e.g. number of students), and compliance with the intervention over time to estimate students' exposure reduction.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">Task 5.3 Implementation of interventions</p>
                          <ul className="ml-4 space-y-2 mt-2">
                            <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              <span>This implementation process will be informed by in-depth interviews and workshops with policymakers and community leaders (Task 2.1), surveys and FGDs with school communities, and ongoing engagement with local, national, and international organizations and potential funders.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">WP6: Community of Practice</h4>
                      <div className="ml-4">
                        <ul className="space-y-2">
                          <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span>Work collaboratively to strengthen research capacity and capability in key areas.</span>
                          </li>
                          <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span>Establish an online HEAL-HAZE Community of Practice, expanding on the Australian HEAL Network online platform and effective methods for sustained cross-sectoral policy and community engagement.</span>
                          </li>
                          <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span>Develop and deliver online training materials and webinars.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}

              {/* USAID Clean Air Framework */}
              {project.id === 5 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">USAID Clean Air Framework</h2>
                  <div className="p-6 flex justify-center">
                    <img 
                      src={usaidWork} 
                      alt="USAID Clean Air Framework"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Core Activities of AirQC:</h3>
                    <ul className="space-y-3">
                      <li className="text-muted-foreground text-lg leading-relaxed">
                        1. Providing technical guidance to assess and strengthen existing air quality data management and sharing systems in Kathmandu Valley (KV)/Nepal;
                      </li>
                      <li className="text-muted-foreground text-lg leading-relaxed">
                        2. Supporting data compilation and analysis on air pollution in program areas to inform program priorities and interventions;
                      </li>
                      <li className="text-muted-foreground text-lg leading-relaxed">
                        3. Develop a workable emissions inventory (EI) calculator, provide EI data, and build air quality modeling capacity;
                      </li>
                      <li className="text-muted-foreground text-lg leading-relaxed">
                        4. Potentially using existing data from outside KV/Nepal to account for transboundary air pollution (some key sources of air pollution could be from outside of the KV);
                      </li>
                      <li className="text-muted-foreground text-lg leading-relaxed">
                        5. Supporting the establishment of a consortium of scientists, researchers, and policymakers focused on atmospheric research in Nepal;
                      </li>
                      <li className="text-muted-foreground text-lg leading-relaxed">
                        6. Holding workshops/training to address identified capacity gaps, particularly for enabling improved and quality evidence generation and use.
                      </li>
                    </ul>
                  </div>
                </motion.section>
              )}
              
              {project.id === 3 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">Research Overall Methodology</h2>
                  <div className="p-6 flex justify-center">
                    <img 
                      src={forestFireworkImg} 
                      alt="Overall work packages"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                </motion.section>
              )}

              {/* Key Activities -> Events (skip for USAID Clean Air id=5 to avoid duplicate Events heading) */}
              {project.id !== 3 && project.id !== 5 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                    {project.id === 5 || project.id === 7 || project.id === 8 ? 'Events' : 'Key Activities'}
                  </h2>
                  <div className="p-6">
                    {Array.isArray(project.activities) ? (
                      <ul className="space-y-4">
                        {project.activities.map((act, i) => {
                          const isThreeLevelItem = act.match(/^\d+\.\d+\.\d+\./);
                          const isTwoLevelItem = act.match(/^\d+\.\d+\./) && !isThreeLevelItem;
                          
                          return (
                            <li 
                              key={i} 
                              className={`text-muted-foreground text-lg leading-relaxed ${isTwoLevelItem ? 'ml-8' : ''}`}
                            >
                              {act}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-lg leading-relaxed">{project.activities}</p>
                    )}
                  </div>

                  {/* Events list styled like Resources (only for projects using Events) */}
                  {(project.id === 5 || project.id === 7 || project.id === 8) && events.length > 0 && (
                    <div className="p-6 space-y-6">
                      {events.map((item) => (
                        <EventCard key={item.id} item={item} compactImages={project.id === 7 || project.id === 8} />)
                      )}
                    </div>
                  )}
                </motion.section>
              )}

              {/* Publications Section (for project 1 only) */}
              {project.id === 1 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">Publications</h2>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="text-lg leading-relaxed flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <Link to="/resources#aqip-sources-report" className="font-semibold text-foreground hover:text-primary transition-colors">
                          Air Quality Improvement Program in Thailand: Sources of Air Pollution in Chiang Mai in 2022 - Main Sources and Measures to Mitigate Air Pollution
                        </Link>
                      </li>
                      <li className="text-lg leading-relaxed flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <Link to="/resources#aqip-inventory-report" className="font-semibold text-foreground hover:text-primary transition-colors">
                          Air Quality Improvement Program in Thailand (AQIP): Comprehensive Inventory Methodology Report for Chiang Mai Province, Thailand (2022)
                        </Link>
                      </li>
                      <li className="text-lg leading-relaxed flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <Link to="/resources#aqip-roadmap-report" className="font-semibold text-foreground hover:text-primary transition-colors">
                          Air Quality Improvement Program in Thailand (AQIP): Roadmap Emission Sources and Policies Report - Sources of Air Pollution in Chiang Mai in 2022: Main Sources and Measures to Mitigate Air Pollution
                        </Link>
                      </li>
                    </ul>
                  </div>
                </motion.section>
              )}

              {/* Gallery Section (for project 1 only) */}
              {project.id === 1 && (
                <motion.section variants={itemVariants} className="space-y-2 -mt-2 -mb-2">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">Gallery</h2>
                  <div className="p-3 md:p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                      <figure className="group rounded-xl overflow-hidden shadow bg-background/80 backdrop-blur-md transition-all duration-300 hover:shadow-lg animate-enter">
                        <img src={p1_1} alt="Gallery Image 1" className="w-full h-56 md:h-64 object-cover transition-transform duration-300" />
                      </figure>
                      <figure className="group rounded-xl overflow-hidden shadow bg-background/80 backdrop-blur-md transition-all duration-300 hover:shadow-lg animate-enter">
                        <img src={p1_2} alt="Gallery Image 2" className="w-full h-56 md:h-64 object-cover transition-transform duration-300" />
                      </figure>
                      <figure className="group rounded-xl overflow-hidden shadow bg-background/80 backdrop-blur-md transition-all duration-300 hover:shadow-lg animate-enter">
                        <img src={p1_3} alt="Gallery Image 3" className="w-full h-56 md:h-64 object-cover transition-transform duration-300" />
                      </figure>
                      <figure className="group rounded-xl overflow-hidden shadow bg-background/80 backdrop-blur-md transition-all duration-300 hover:shadow-lg animate-enter">
                        <img src={p1_4} alt="Gallery Image 4" className="w-full h-56 md:h-64 object-cover object-left transition-transform duration-300" />
                      </figure>
                      <figure className="group rounded-xl overflow-hidden shadow bg-background/80 backdrop-blur-md transition-all duration-300 hover:shadow-lg animate-enter">
                        <img src={p1_5} alt="Gallery Image 5" className="w-full h-56 md:h-64 object-cover transition-transform duration-300" />
                      </figure>
                      <figure className="group rounded-xl overflow-hidden shadow bg-background/80 backdrop-blur-md transition-all duration-300 hover:shadow-lg animate-enter">
                        <img src={p1_6} alt="Gallery Image 6" className="w-full h-56 md:h-64 object-cover transition-transform duration-300" />
                      </figure>
                    </div>
                  </div>
                </motion.section>
              )}

              {/* Achievements (if present) */}
              {project.achievements && project.achievements.length > 0 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">
                    {project.id === 5 ? 'Major Achievements led by AIT' : 'Major Achievements'}
                  </h2>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {project.achievements.map((ach, i) => (
                        <li key={i} className="text-muted-foreground text-lg leading-relaxed">
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.section>
              )}

              {/* Events Section (for project 5 only) */}
              {project.id === 5 && (
                <motion.section variants={itemVariants} className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2">Events</h2>
                  <div className="p-6 space-y-6">
                    {/* Consortium for Atmospheric Research of Nepal (CARN) Subtitle */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Consortium for Atmospheric Research of Nepal (CARN)</h3>
                      <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Established the "Consortium for Atmospheric Research of Nepal (CARN)" within the USAID Clean Air framework with the support of local organizations and experts in Kathmandu Valley (KV). The Consortium aims to create and strengthen a network among the air quality and atmospheric researchers in Nepal to timely provide science-based information for policy making to effectively improve air quality in the country.
                    </p>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      The involvement is on a voluntary basis and includes:
                    </p>
                    
                    <ul className="space-y-2 ml-6">
                      <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <span>Researchers from local universities, research organizations, and the private sector;</span>
                      </li>
                      <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <span>Technical staff and policymakers from the national and local governments dealing with air pollution problems;</span>
                      </li>
                      <li className="text-muted-foreground text-lg leading-relaxed flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <span>International researchers who have profound experience in atmospheric research in Nepal and beyond.</span>
                      </li>
                    </ul>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Totally, five CARN meetings were organized in KV during Apr 2023 – Jan 2025, with the active participation of different stakeholders (academia, government, NGO, etc.). The 1st CARN meeting was on 4 Apr 2023 (total 59 participants/24 females), the 2nd CARN meeting on 11 Jul 2023 (total 20 participants/8 females), the 3rd CARN meeting on 13 Oct 2023 (total 33 participants/17 females), the 4th CARN meeting on 12 Apr 2024 (total 24 participants/15 females), and the 5th CARN meeting on 13 Nov 2024 (total 86 participants/41 females).
                    </p>
                    
                    {/* CARN Event Images Grid - 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      <img src={c7} alt="CARN Event 7" className="w-full h-64 object-cover rounded-lg shadow-md" />
                      <img src={c1} alt="CARN Event 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
                      <img src={c2} alt="CARN Event 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
                      <img src={c4} alt="CARN Event 4" className="w-full h-64 object-cover rounded-lg shadow-md" />
                      <img src={c5} alt="CARN Event 5" className="w-full h-64 object-cover rounded-lg shadow-md" />
                      <img src={c6} alt="CARN Event 6" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    </div>
                      </div>
                    </div>

                    {/* Training Workshops Subtitle */}
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Training Workshops by the Asian Institute of Technology within the USAID Clean Air</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          The AIT team supports strengthening the local capacity by co-organizing different training programs for stakeholders of Nepal on different aspects of air quality management (emission inventory development, receptor modeling, statistical sampling design, air quality modeling, PM₂.₅ monitoring, air quality monitoring, and development of the Clean Air Action Plan). In total, five wide-audience capacity-building and two focus-audience hands-on training programs were proposed by AIT, co-organized with the local USAID Clean Air team during Apr 2023 – Nov 2024, with a total number of participants of 203 (103 females, sharing 51%). The AIT experts played important roles as the key training personnel of these training workshops. An online evaluation form was delivered before and after each wide-audience capacity-building training workshop. Based on the evaluation of the participants from all wide-audience capacity-building training workshops, the knowledge, understanding, and skills of the participants for different aspects of air quality management were improved substantially after the workshops.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                      <img src={c8} alt="CARN Event 7" className="w-full h-64 object-cover rounded-lg shadow-md" />
                      <img src={c9} alt="CARN Event 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
                      <img src={c10} alt="CARN Event 2" className="w-full h-64 object-cover rounded-lg shadow-md" />                   
                    </div>
                      </div>
                    </div>

                    
                  </div>
                </motion.section>
              )}
            </div>
          </div>
        </section>
      </motion.div>
  );
};

export default ProjectDetails;