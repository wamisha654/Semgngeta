import React from 'react';
import './Home.css'
import vid from './video.mp4'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";
import {Link} from 'react-router-dom';
const Home = () =>{
	return(
      
    <div className="home">
     <div className="content">
      <h1>SEMAGNGETA AYCHILUHEM</h1>
      <h2>WRITER | DIRECTOR | PRODUCER</h2>
     </div>
    <div className = "front-butt">
      <Link to = "/portfolio"><button>Explore</button></Link>
      <Link to = "/contact"><button>Contact</button></Link>
    </div>   
       <video autoPlay loop muted playsInline type="video/mp4" className="back-video">
         <source src={vid} />
       </video>
     <div className="container">
         <a href="https://vimeo.com/semagngeta" target="_blank"><FaVimeoV /></a>
         <a href="https://www.instagram.com/semagngeta?igsh=dGRqaHZxMG5xdnhz" target="_blank"><FiInstagram /></a>
         <a href="https://www.facebook.com/SemagngetaA" target="_blank"><FaFacebookF /></a>
         <a href="https://www.linkedin.com/in/semagngeta" target="_blank"><FaLinkedin /></a>
         
      </div>  
    </div>
      
		)
}
export default Home;