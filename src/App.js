import './App.css';
import Home from './Home/Home.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';
import List from './Contact/List.js';
import Navigation from './Navigation/Navigation.js';
import About from './About/About.js';
import Sidebar from './Sidebar/Sidebar.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
         
        <Navigation /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<Sidebar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
