// import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
