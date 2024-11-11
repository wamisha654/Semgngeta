import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './NavigationHome.css';

const NavigationHome = () => {
  const [sidebar, setSidebar] = useState(false);

  // Toggle function to open or close sidebar
  const showSidebar = () => setSidebar(!sidebar);

  // Dedicated function to close sidebar
  const closeSidebar = () => setSidebar(false);

  return (
    <div className="home-navigation">
      <div className="home-nav">
        <div>
          <div className={`bar ${sidebar ? 'hidden' : ''}`}>
            <FaBars onClick={showSidebar} />
          </div>
          <nav className={sidebar ? 'third-nav-menu active' : 'third-nav-menu'}>
            <MdClose className="tag-close" onClick={closeSidebar} />
            <Link to="/portfolio" onClick={closeSidebar}>Portfolio</Link>
            <Link to="/about" onClick={closeSidebar}>About</Link>
            <Link to="/contact" onClick={closeSidebar}>Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationHome;
