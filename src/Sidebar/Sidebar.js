import React from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";



const Sidebar = ({showSidebar}) =>{
	return(
     <div className = "sidebar">
        <div className = "close-tag">
        	<MdClose className = "tag-close" onClick = {showSidebar}/>
        </div>
     	
     	<div className = "sidebar-menu">
     		   <Link to = "/portfolio" onClick = {showSidebar}>Portfolio</Link>
            <Link to = "/about" onClick = {showSidebar}>About</Link>
            <Link to = "/" onClick = {showSidebar}>News</Link>
            <Link to = "/contact" onClick = {showSidebar}>Contact</Link>
     	</div>
        
     </div>
		)
}
export default Sidebar;