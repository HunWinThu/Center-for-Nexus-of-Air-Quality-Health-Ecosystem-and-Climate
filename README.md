# Center for Nexus of Air Quality, Health, Ecosystem, and Climate

<div align="center">
  <img src="./public/AQC_logo.ico" alt="Air Quality Nexus Center Logo" width="100" height="100">
  
  **Official Website for the Air Quality Nexus Center at Asian Institute of Technology (AIT)**
  
  [![Live Site](https://img.shields.io/badge/Live%20Site-Visit-blue)](https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/)
  [![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-Private-red)]()
</div>

## 🌍 About the Center

The **Center for Nexus of Air Quality, Health, Ecosystem, and Climate** (Air Quality Nexus Center) is a leading research institute at the Asian Institute of Technology dedicated to conducting and implementing application research with the aim to gain multiple benefits from reducing air pollution through improvement of health of human and ecosystem, and protection of the climate system.

## ✨ Project Overview

This is a modern, professional website built for the Air Quality Nexus Center, showcasing the center's research, team, publications, news, and international collaborations. The site features cutting-edge web technologies, responsive design, and comprehensive content management.

## 🚀 Key Features

### 📋 Content Management
- **Dynamic News & Events System** - Real-time updates from Supabase database
- **Team Directory** - Comprehensive profiles for researchers and staff
- **Publications Showcase** - Research papers, reports, and academic contributions
- **Interactive Thematic Areas** - Hexagonal grid visualization of research focus areas

### 🎨 User Experience
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Lazy Loading** - Performance-optimized image and component loading
- **SEO Optimized** - Structured data, meta tags, and semantic HTML

### 🔧 Modern Architecture
- **Component-Based Design** - Reusable UI components with shadcn/ui
- **Type Safety** - Full TypeScript implementation
- **State Management** - Zustand for global state, React Query for server state
- **Error Handling** - Comprehensive error boundaries and loading states

### 🌐 Integrations
- **Supabase Backend** - Database, authentication, and file storage
- **EmailJS** - Contact form submissions and email notifications
- **GitHub Pages** - Automated deployment and hosting

## 🛠️ Technologies Used

### Frontend Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | Core UI framework |
| **TypeScript** | 5.5.3 | Type safety and developer experience |
| **Vite** | 5.4.19 | Build tool and development server |
| **Tailwind CSS** | 3.4.11 | Utility-first CSS framework |
| **Framer Motion** | 12.23.12 | Animation and transitions |

### UI Components
- **shadcn/ui** - Modern component library built on Radix UI
- **Lucide React** - Beautiful, customizable icons
- **Embla Carousel** - Touch-friendly carousels
- **React Hook Form** - Efficient form handling

### Backend & Data
- **Supabase** - Backend-as-a-Service for database and authentication
- **React Query** - Server state management and caching
- **Zustand** - Lightweight state management

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── assets/                 # Images, logos, and static files
│   ├── partners/          # Partner organization logos
│   ├── News&Events/       # Event and news images
│   └── ...
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── common/           # Shared components (ErrorBoundary, LoadingProvider)
│   ├── layout/           # Layout components (Header, Footer, MainLayout)
│   └── thematic/         # Specialized components for thematic areas
├── data/                 # Static data files
│   ├── allSharedNewsData.ts  # News and events data
│   └── newsData.ts       # Detailed news information
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── pages/                # Page components
├── services/             # API services and external integrations
├── store/                # State management
└── types/                # TypeScript type definitions
```

## 🚦 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HunWinThu/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate.git
   cd Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:8080`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

This project is configured for deployment to **GitHub Pages** with automatic builds.

### Production Build
```bash
npm run build
```

### Preview Build Locally
```bash
npm run preview
```

The live site is available at: [https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/](https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/)

## 📊 Features Overview

### 🏠 Homepage
- Hero section with center mission
- Vision and mission statements with glass-blur design
- Latest news and upcoming events
- Team photo gallery
- Strategic partners showcase
- International collaborators

### 👥 Team Section
- Interactive team directory
- Detailed member profiles with research expertise
- Professional photos and biographies
- Contact information and research links

### 📰 News & Events
- Dynamic content management
- Event calendar integration
- Image galleries for events
- Category-based filtering

### 🔬 Research Areas
- Interactive hexagonal grid visualization
- Detailed descriptions of thematic areas
- Modal popups with research details

### 📚 Publications & Resources
- Research papers and reports
- Academic contributions
- Resource downloads

## 🤝 Contributing

This project is maintained by the Air Quality Nexus Center team. For internal contributions:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Contact & Support

**Air Quality Nexus Center**  
Asian Institute of Technology (AIT)  
58 Moo 9, Km. 42, Paholyothin Highway  
Klong Luang, Pathum Thani 12120, Thailand  

- **Email:** airqualitynexus@ait.ac.th
- **Phone:** +66 9-9797-6360
- **Website:** [Visit our site](https://hunwinthu.github.io/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate/)

## 📄 License

This project is private and proprietary to the Air Quality Nexus Center at AIT.

---

<div align="center">
  <p><strong>🌱 Built with care for a cleaner, healthier future 🌍</strong></p>
  <p><em>Advancing air quality research through technology and collaboration</em></p>
</div>