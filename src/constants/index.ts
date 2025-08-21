// Constants used throughout the application

export const SITE_CONFIG = {
  name: 'Air Quality Nexus Center',
  description: 'A leading Center in conducting and implementing application research with the aim to gain multiple benefits from reducing air pollution.',
  baseUrl: 'https://hunwinthu.github.io/air-quality-nexus-center',
  contact: {
    email: 'airqualitynexus@ait.ac.th',
    phone: '+66 9-9797-6360',
    address: 'Asian Institute of Technology, 58 Moo 9, Km. 42, Paholyothin Highway, Klong Luang, Pathum Thani 12120, Thailand',
    mapUrl: 'https://maps.app.goo.gl/UA82JeVX5uKR2Stg6'
  },
  social: {
    twitter: 'https://twitter.com/airqualitynexus',
    facebook: 'https://facebook.com/airqualitynexus',
    linkedin: 'https://linkedin.com/company/airqualitynexus',
    instagram: 'https://instagram.com/airqualitynexus'
  }
};

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  },
  cardVariants: {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  }
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  WHAT_WE_DO: '/what-we-do',
  BLOG: '/blog',
  NEWS: '/news',
  ACTIVITIES: '/activities',
  PUBLICATIONS: '/publications',
  RESOURCES: '/resources',
  TEAM: '/team',
  CONTACT: '/contact',
  LAUNCHING_EVENT: '/launching-event',
  COMMITTEE: '/committee'
};
