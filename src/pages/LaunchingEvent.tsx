
import { useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
//import homeImg from '@/assets/Laung.jpg';
//import partners1 from '@/assets/partners-1.png';
//import partners4 from '@/assets/partners-4.jpeg';
//import Autoplay from 'embla-carousel-autoplay';


import Lohani from '@/assets/Advisory/Prof. Bindu N. Lohani.jpeg';


import Rupakheti from '@/assets/Advisory/Dr. Maheswar Rupakheti.jpg';
import Emberson from '@/assets/Advisory/Prof. Lisa Emberson.jpg';
import Vardoulakis from '@/assets/Advisory/Prof. Sotiris Vardoulakis.jpeg';
import Bond from '@/assets/Advisory/Prof. Tami C. Bond.jpg';
import Lung from '@/assets/Advisory/Dr. Shih-Chun Candice Lung.jpg';
import Zusman from '@/assets/Advisory/Dr. Eric Zusman.jpg';
import Saikawa from '@/assets/Advisory/Dr. Eri Saikawa.jpg';
import Broomfield from '@/assets/Advisory/Dr. Mark Broomfield.jpg';
import Mari from '@/assets/Advisory/Dr. Xavier Mari.jpeg';
import Casanova from '@/assets/Advisory/Ms. Dang Espita Casanova.jpeg';
import glynda from '@/assets/Advisory/Ms. glynda-bathan-baterina.jpg';
import kilmont from '@/assets/Advisory/Mr. klimont.jpg';
import teamGroupPhoto from '@/assets/team-group-photo.jpg';
import launching1 from '@/assets/Launching_Event/Launching_1.jpg';
import launching3 from '@/assets/Launching_Event/Launching-3.jpg';
import launching4 from '@/assets/Launching_Event/Launching-4.jpg';
import launching5 from '@/assets/Launching_Event/Launching-5.jpg';
import launching6 from '@/assets/Launching_Event/Launching-6.jpg';
import launching8 from '@/assets/Launching_Event/Launching_8.jpg';
import launching10 from '@/assets/Launching_Event/Launching-10.jpg';
import launching11 from '@/assets/Launching_Event/Launching-11.jpg';
import launching12 from '@/assets/Launching_Event/Launching-12.jpg';


const LaunchingEvent = () => {
  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 }
  };

  useEffect(() => {
    document.title = 'Launching Event | Air Quality Nexus';
    const description = 'Launching Event and expert quotes at Air Quality Nexus Center.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  const quotes = [
    {
      quote:
        'This Center is a catalyst for interdisciplinary collaboration—driving evidence-based solutions that protect both planetary and human well-being',
      name: 'Prof. Bindu N. Lohani',
      position:
        'Chancellor of University of Nepal<br/>Chair, Board of Clean Air Asia<br/>Member of AIT Board of Trustee',
      image: Lohani,
    },
    {
      quote:
        'Thank you for sharing the good news. It is a timely (actually much overdue) initiative. I hope Air Quality Nexus Center can serve a pivotal role in Asia and beyond in fostering a holistic nexus approach in understanding air pollution in the region and in designing evidence – informed policies to address air pollution and related issues.',
      name: 'Dr. Maheswar Rupakheti',
      position:
        'Research Group Leader, Research Institute for Sustainability Helmholtz Centre Potsdam (RIFS), Germany<br/>Vice Chair, WG-I, Intergovernmental Panel on Climate Change (IPCC)',
      image: Rupakheti,
    },
    {
      quote:
        'It is becoming ever more important to improve air quality across Asia - not only to protect human health but also to protect from damage to crop yields and nutrition since current air pollution concentrations, particularly of ground level ozone, are likely to be reducing crop yields by up to as much as 10% in polluted regions. Given the continued challenges around ensuring food security across Asia, cleaner air would encourage higher crop yields enhancing food supply, an important component of food security',
      name: 'Prof. Lisa Emberson',
      position:
        'Centre Director of the York office at the Stockholm Environment Institute (SEI)<br/>Professor of Environmental Science in the Environment & Geography Dept., University of York, UK',
      image: Emberson,
    },
    {
      quote:
        'The Air Quality Nexus Center at AIT is a timely and much needed initiative aiming to address the pressing challenges climate change and air pollution are posing on human health and ecosystems in the Asia-Pacific region and globally. Australian environmental health research, policy and practice will benefit from this international collaboration.',
      name: 'Prof. Sotiris Vardoulakis',
      position:
        'Director, NHMRC Healthy Environments and Lives (HEAL) National Research Network<br/>Professor of Environmental Public Health, University of Canberra, Australia',
      image: Vardoulakis,
    },
    {
      quote:
        'What Wonderful Recognition, Congratulations! Air Quality Nexus Center will be fantastic to have such a resource in Southeast Asia, under Prof. Kim Oanh’s Leadership!',
      name: 'Prof. Tami C. Bond',
      position:
        'Scott Presidential Chair in Energy, Environment and Health<br/>Professor, Mechanical Engineering; Joint Professor, Civil & Environmental Engineering; Affiliate; Systems Colorado University, Fort Collins, CO USA',
      image: Bond,
    },

    {
      quote:
        'Emory Climate Hub is excited to partner with the Center for Nexus of Air Quality, Health, Ecosystem and Climate, as we are interested in finding evidence-based solutions through an interdisciplinary framework. The center emphasizes an integrated approach necessary for a complicated problem that involves climate change, air quality, and human/ecosystem health.',
      name: 'Dr. Eri Saikawa',
      position: 'Winship Distinguished Research Professor, SAIKAWA LAB<br/>Professor, Emory University, USA',
      image: Saikawa,
    },
    {
      quote:
        'The Air Quality Nexus Center at AIT plays a pivotal role in Southeast Asia as an essential structure for addressing the region’s air pollution challenges. By adopting a holistic, multi-stakeholder approach, it fosters the dismantling of scientific and institutional silos — a necessary step to understand and mitigate the deeply intertwined and interdependent health, climate, economic, and social impacts of this critical issue.',
      name: 'Dr. Xavier Mari',
      position: 'IRD Representative, Thailand (Bangladesh-India-Myanmar-Nepal)',
      image: Mari,
    },
    {
      quote:
        'We at Ricardo have really appreciated the informed input from the Air Quality Nexus team in support of our work developing clean air solutions for Thailand and the Greater Mekong region. Your expertise across air quality, health, ecosystems and climate resilience has never been more important. We hope to continue working with the Center team in the future',
      name: 'Dr. Mark Broomfield',
      position: 'Technical Director, Air quality specialist<br/><a href="https://www.ricardo.com/en" target="_blank" rel="noopener noreferrer" className="hover:underline">Ricardo</a>, Leading environmental and engineering consultancy<br/>Ricardo was recently reappointed as the lead organisation on the collection and analysis for the UK government’s world leading emissions inventory, helping to improve air quality across the country.',
      image: Broomfield,
    },

    {
      quote:'Breathing clean air is a fundamental human right. We hold high expectations that this center will contribute to scientific breakthroughs and promote timely, effective actions to improve air quality across Asia',
      name: 'Dr. Shih-Chun Candice Lung',
      position: 'Deputy Director, Research Center for Environmental Changes (RCEC)<br/>Academia Sinica, Taiwan',
      image: Lung,
    },
    {
      quote:'The newly established Center for Nexus of Air Quality, Health, Ecosystem and Climate at AIT will play a pivotal role in advancing integrated research and policy solutions that address the interconnected challenges of climate change, air quality, and public health in Southeast Asia and beyond. By fostering cross-sectoral collaboration and data-driven innovation, the Center is uniquely positioned to make changes in the air and on the ground.',
      name: 'Dr. Eric Zusman',
      position: 'Research Director Center for Sustainability Governance <br/>Institute for Global Environmental Strategies (IGES), Japan',
      image: Zusman,
    },


    {
      quote:'Bringing air quality and climate research agenda under one umbrella is timely and essential to address the current and emerging local and regional challenges. Creating new opportunities for collaboration within the region will surely lead to more efficient use of resources, broader understanding of solutions and last but not least might enable more effective communication with the policy community. The Air Quality Nexus Center could support policy makers to co-design and recognize the benefits of regional actions.',
      name: 'Mr. Zbigniew Klimont',
      position: 'Research Group Leader and Principal Research Scholar<br/> Pollution Management Research Group<br/> Energy, Climate, and Environment Program<br/>International Institute for Applied Systems Analysis (IIASA)',
      image: kilmont,
    },
  ];

const gallery = [
  { src: launching3 },
  { src: launching4 },
  { src: launching5 },
  { src: launching8 },
  { src: launching6 },
  { src: launching1 },
  { src: launching10 },
  { src: launching11 },
  { src: launching12 },
]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={teamGroupPhoto}
            alt="Air Quality Nexus team group photo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
      </section>

      <section className="py-20 bg-[linear-gradient(to_right,white,#e0f2fe)]">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-800 via-green-400 to-sky-blue-600 bg-clip-text text-transparent">
              Launching Event
            </h1>

              <p className="text-2xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-700 via-green-400 to-sky-800 bg-clip-text text-transparent">
              Venue: Room B108, AIT Conference Center <br/>July 10, 2024
            </p>
            <p className="text-justify md:text-balance text-xl max-w-8xl mx-auto">
              On July 10, 2024, the Center for Nexus of Air Quality, Health, Ecosystem, and Climate known as the Air Quality Nexus Center hosted its official launching ceremony. Led by Distinguished Professor Nguyen Thi Kim Oanh as a Director, the Center aims to advance capacity building and cutting-edge research in atmospheric sciences, fostering multidisciplinary collaboration within the Center and with global partners. The Center focuses on tackling the urgent challenge of air pollution, particularly fine particulate matter (PM2.5), which poses serious health risks across Asia. It emphasizes integrated, multi-pollutant and multi-effect approaches to develop cost-effective solutions and support governments in implementing clean air policies.
The launch event featured insights from prominent experts and stakeholders, highlighting the Center’s commitment to driving impactful research and policy engagement to improve air quality, public health, ecosystems, and climate resilience in the region.
            </p>
          </div>

          <motion.div
            className="flex flex-col gap-12 md:gap-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          >
            {quotes.map((quote, index) => {
              const isEven = index % 2 === 0;
              const xFrom = isEven ? -120 : 120;
              const alignClass = isEven ? 'md:self-start' : 'md:self-end';
              const floatOffset = isEven ? 'md:-translate-y-2' : 'md:translate-y-2';
              return (
                <motion.div
                  key={index}
                  className={`w-full md:w-11/12 lg:w-10/12 ${alignClass} ${floatOffset}`}
                  initial={{ opacity: 0, x: xFrom, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 16 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-500 bg-grey/80 backdrop-blur-md border-/20 text-white transform hover:scale-105 will-change-transform" aria-label={`Quote from ${quote.name}`}>                    <CardContent className="p-6 md:p-8">
                      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}>
                        <img
                          src={quote.image}
                          alt={`${quote.name} - Launching Event testimonial`}
                          className="w-full md:w-80 lg:w-96 h-56 md:h-64 lg:h-72 object-cover rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className={isEven ? 'text-left' : 'text-left md:text-right'}>
                          <p className="text-xl md:text-2xl text-foreground mb-4 italic opacity-90 animate-fade-in">“{quote.quote}”</p>
                          <div className="mt-2">
                            <h3 className="text-lg== md:text-xl font-semibold text-foreground">{quote.name}</h3>
                            <p
                              className="text-sm text-muted-foreground"
                              dangerouslySetInnerHTML={{ __html: quote.position }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <section aria-labelledby="gallery-heading" className="mt-16">
            <header className="text-center mb-6">
              <h2 id="gallery-heading" className="text-5xl md:text-5xl font-bold text-foreground">Launching Event Gallery</h2>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {gallery.map((item, idx) => (
                <figure key={idx} className="group rounded-xl overflow-hidden shadow bg-background/80 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover-scale animate-enter">
                  <img src={item.src} loading="lazy" className="w-full h-56 md:h-64 object-cover transform transition-transform duration-300 group-hover:scale-[1.03]" />
                  {/* <figcaption className="p-3 text-sm text-muted-foreground">{item.alt}</figcaption> */}
                </figure>
              ))}
            </div>
          </section>
        </div>
      </section>

    </>
  );
};

export default LaunchingEvent;
