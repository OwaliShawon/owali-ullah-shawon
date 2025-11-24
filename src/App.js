import AOS from 'aos';
import 'aos/dist/aos.css';
import { Suspense, useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop';
import LeftSidebar from './components/common/LeftSidebar';
import RightSidebar from './components/common/RightSidebar';

// Lazy load pages for better performance
const AboutPage = lazy(() => import('./pages/About/About'));
const BlogsPage = lazy(() => import('./pages/Blogs/Blogs'));
const ConnectPage = lazy(() => import('./pages/Connect/Connect'));
const HomePage = lazy(() => import('./pages/Home/Home'));
const SkillsPage = lazy(() => import('./pages/Skills/Skills'));
const WorksPage = lazy(() => import('./pages/Works/Works'));
const ExperiencePage = lazy(() => import('./pages/Experience/Experience'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFound'));

// Modern loading component
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner" role="status" aria-label="Loading content">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    });
    
    // Refresh AOS on route changes
    return () => AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <ScrollToTop />
      <main role="main">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="works" element={<WorksPage />} />
            <Route path="blogs" element={<BlogsPage />} />
            <Route path="connect" element={<ConnectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;

