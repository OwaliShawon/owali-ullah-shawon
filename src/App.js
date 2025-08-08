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
const AboutPage = lazy(() => import('./pages/About/About'));
const BlogsPage = lazy(() => import('./pages/Blogs/Blogs'));
const ConnectPage = lazy(() => import('./pages/Connect/Connect'));
const HomePage = lazy(() => import('./pages/Home/Home'));
const SkillsPage = lazy(() => import('./pages/Skills/Skills'));
const WorksPage = lazy(() => import('./pages/Works/Works'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
  <LeftSidebar />
  <RightSidebar />
      <ScrollToTop />
      <Suspense fallback={<div className="container py-5 text-center text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="connect" element={<ConnectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
