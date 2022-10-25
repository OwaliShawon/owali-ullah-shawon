// import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutPage from './pages/About/About';
import BlogsPage from './pages/Blogs/Blogs';
import ConnectPage from './pages/Connect/Connect';
import HomePage from './pages/Home/Home';
import SkillsPage from './pages/Skills/Skills';
import WorksPage from './pages/Works/Works';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="connect" element={<ConnectPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
