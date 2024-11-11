import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './Navigation.css'
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar.js'
const Navigation = () =>{
  const location = useLocation();
  if (location.pathname === '/') {
    return null; // don't render navigation on the home page
  }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
	return(
      <div className = "Navigation">
        <div className = "nav">
      		<Link className = "title" to = "/">SEMAGNGETA</Link>
          <div className="bars">
             <div className = {`barss ${sidebar ? 'hidden' : ''}`}>
                <FaBars onClick = {showSidebar} />
             </div>
             <nav className = {sidebar? 'second-nav-menu active' : 'second-nav-menu'}>
               <Sidebar showSidebar={showSidebar}/>
             
             </nav>
          </div>
      	</div> 
      	<nav className = "nav-menu">
      		<Link to = "/portfolio">Portfolio</Link>
      		<Link to = "/about">About</Link>
      		{/*<Link to = "/">News</Link>*/}
      		<Link to = "/contact">Contact</Link>
      	</nav>
      </div>
		);
}
export default Navigation;