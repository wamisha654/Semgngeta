import React from 'react';
import './Home.css'
import vid from './video.mp4'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import {Link} from 'react-router-dom';
const Home = () =>{
	return(
      
    <div className="home">
     <div className="content">
      <h1>SEMAGNGETA AYCHILUHEM</h1>
      <h2>FILM DIRECTOR AND PRODUCER</h2>
     </div>
    <div className = "front-butt">
      <Link to = "/portfolio"><button>Explore</button></Link>
      <button>Contact</button>
    </div>   
       <video autoPlay loop muted playsInline type="video/mp4" className="back-video">
         <source src={vid} width = "100%" height = "100vh"/>
       </video>
     <div className="container">
         <a href="https://www.instagram.com/semagngeta?igsh=dGRqaHZxMG5xdnhz"><FiInstagram /></a>
         <a href="https://www.facebook.com/SemagngetaA"><FaFacebookF /></a>
         <a href="https://www.linkedin.com/in/semagngeta"><FaLinkedin /></a>
         <a href=""><FaTwitter /></a>
      </div>  
    </div>
      
		)
}
export default Home;