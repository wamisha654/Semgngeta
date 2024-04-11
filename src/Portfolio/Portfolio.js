import React from 'react';
import './Portfolio.css'
import  Navigation from '../Navigation/Navigation.js'
import List from '../Contact/List.js'
import vid from './video.mp4'

const Portfolio = () =>{
	return(
      <div className = "Portfolio">
        <Navigation />
        <div className="trailer-liya">
        <div className = "wanaw">
          <h2>ሊያ - Liya</h2>
          <p>This is the first trailer for a TV Series I've been working on for the past two years.

           After years of training her body, mind, and soul, Liya, a stubborn and brave young girl, comes back to her hometown to punish those who wronged her. </p>
          <a href={vid}><button>
            Watch Trailer
          </button>
          </a>
        </div>
        </div> 
          
        <List />      
      </div>
		)
}
export default Portfolio;