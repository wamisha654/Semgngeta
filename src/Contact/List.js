import React from 'react';
import './List.css'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
const List = () =>{
	return(
     
     <div className = "list">
     	<div className="elements">
        <a href="https://vimeo.com/semagngeta" target="_blank"><FaVimeoV /></a>
         <a href="https://www.instagram.com/semagngeta?igsh=dGRqaHZxMG5xdnhz" target="_blank"><FiInstagram /></a>
         <a href="https://www.facebook.com/SemagngetaA" target="_blank"><FaFacebookF /></a>
         <a href="https://www.linkedin.com/in/semagngeta" target="_blank"><FaLinkedin /></a>
         <a href="mailto:semagngeta@guzofilms.com" target="_blank"><TfiEmail /></a>
        </div> 
        <p>© Semgngeta Aychiluhem Filmmaker</p> 
     </div>

	);
}
export default List;