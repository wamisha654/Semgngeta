import React from 'react';
import './List.css'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const List = () =>{
	return(
     
     <div className = "list">
     	<div className="elements">
         <a href="https://www.instagram.com/semagngeta?igsh=dGRqaHZxMG5xdnhz"><FiInstagram /></a>
         <a href="https://www.facebook.com/SemagngetaA"><FaFacebookF /></a>
         <a href="https://www.linkedin.com/in/semagngeta"><FaLinkedin /></a>
         <a href=""><FaTwitter /></a>
        </div> 
        <p>© Semgngeta Aychiluhem Filmmaker</p> 
     </div>

	);
}
export default List;