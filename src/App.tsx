import { useEffect, Suspense, lazy } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import "./index.css";

// Lazy load heavy components
const ServicesSection = lazy(() =>
  import("./components/ServicesSection").then((module) => ({
    default: module.default,
  })),
);
const ProjectsSection = lazy(() =>
  import("./components/ProjectsSection").then((module) => ({
    default: module.default,
  })),
);
const ContactSection = lazy(() =>
  import("./components/ContactSection").then((module) => ({
    default: module.default,
  })),
);

// Loading fallback component
const SectionLoader = () => (
  <div className="py-20 bg-gradient-to-b from-lightBg to-gray-50 dark:from-darkBg dark:to-gray-900 flex items-center justify-center">
    <div className="animate-pulse">
      <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
    </div>
  </div>
);

function App() {
  // Handle initial scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          {/* Background overlay for dark mode */}
          <div className="app-overlay" />

          {/* Content wrapper */}
          <div className="app-content">
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <Suspense fallback={<SectionLoader />}>
                <ServicesSection />
              </Suspense>
              <Suspense fallback={<SectionLoader />}>
                <ProjectsSection />
              </Suspense>
              <Suspense fallback={<SectionLoader />}>
                <ContactSection />
              </Suspense>
            </main>
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
