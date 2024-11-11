import React, {useState} from 'react';
import { MdClose } from "react-icons/md";
import './Navigation.css'
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
const Navigation = () =>{
  
  const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);
   const closeSidebar = () => setSidebar(false);
	return(
      <div className = "Navigation">
        <div className = "nav">     		
          <div >
             <div className = {`bars ${sidebar ? 'hidden' : ''}`}>
                <FaBars onClick = {showSidebar} />
             </div>
             <nav className = {sidebar? 'second-nav-menu active' : 'second-nav-menu'}>
               <MdClose className = "tag-close" onClick = {showSidebar}/>
               <Link to = "/" onClick = {closeSidebar}>Home</Link>
               <Link to = "/portfolio" onClick = {closeSidebar}>Portfolio</Link>
               <Link to = "/about" onClick = {closeSidebar}>About</Link>
               <Link to = "/contact" onClick = {closeSidebar}>Contact</Link>             
             </nav>
          </div>
      	</div> 
      	
      </div>
		);
}
export default Navigation;