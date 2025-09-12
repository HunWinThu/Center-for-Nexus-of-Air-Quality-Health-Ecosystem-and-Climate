import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { LoadingProvider } from "@/components/common/LoadingProvider";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { MainLayout } from "@/components/layout/MainLayout";
import { ROUTES } from "@/constants";

// Page imports
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ProjectDetails from "./pages/ProjectDetails";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Publications from "./pages/Publications";
import Resources from "./pages/Resources";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import Contact from "./pages/Contact";
import LaunchingEvent from "./pages/LaunchingEvent";
import OurThematicAreas from "./pages/OurThematicAreas";
import Committee from "./pages/AdvisoryCommittee";
import NotFound from "./pages/NotFound";

// Simple admin page
import SimpleAdminLogin from "./pages/admin/SimpleAdminLogin";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter 
        basename={import.meta.env.PROD ? "/Center-for-Nexus-of-Air-Quality-Health-Ecosystem-and-Climate" : ""}
        future={{
          v7_startTransition: true,
        }}
      >
        <ThemeProvider defaultTheme="light" storageKey="air-quality-theme">
          <LoadingProvider>
            <TooltipProvider>
              <Routes>
                {/* Simple Admin Route */}
                <Route path="/admin" element={<SimpleAdminLogin />} />
                
                {/* Main Website Routes */}
                <Route element={<MainLayout>
                  <Outlet />
                </MainLayout>}>
                  <Route path={ROUTES.HOME} element={<Index />} />
                  <Route path={ROUTES.ABOUT} element={<About />} />
                  <Route path={ROUTES.PROJECTS} element={<Blog />} />
                  <Route path="/project/:id" element={<ProjectDetails />} />
                  <Route path={ROUTES.NEWS} element={<News />} />
                  <Route path="/news/:id" element={<NewsDetails />} />
                  <Route path={ROUTES.PUBLICATIONS} element={<Publications />} />
                  <Route path={ROUTES.RESOURCES} element={<Resources />} />
                  <Route path={ROUTES.TEAM} element={<Team />} />
                  <Route path="/team/:slug" element={<TeamMember />} />
                  <Route path={ROUTES.OUR_THEMATIC_AREAS} element={<OurThematicAreas />} />
                  <Route path={ROUTES.CONTACT} element={<Contact />} />
                  <Route path={ROUTES.LAUNCHING_EVENT} element={<LaunchingEvent />} />
                  <Route path={ROUTES.COMMITTEE} element={<Committee />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </LoadingProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
