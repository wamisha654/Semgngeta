import React from 'react'
import './About.css'
import List from '../Contact/List.js';

const About = () =>{
	return(
	 <div>
	 	<div className = "about">
      <div className="about-txt">
          <div className="abt-img"></div>
      	<h1>“For me, it’s all about capturing the moment and sharing beautiful cinematic experiences that resonate life”</h1>
      	<p>I work as a multi-award winning freelance filmmaker, director, editor and cinematographer based in the South West of UK.  I’m available to work from Bristol, London or Worldwide on Commercial, Corporate or TV video projects.<br /><br />

           Often I see images and have ideas that I would like to share with others. This is how my films come about.  I enjoy experimenting so my work covers a wide range of subjects, styles and techniques: documentaries, shorts, promotional, music videos, experimental and more!<br /><br />

           This website features a portfolio of some of my recent commercial and personal projects.  Please feel free to contact me to discuss any commissions or collaboration enquiries you may have.</p>
      </div>
      
     </div>
     <List />
	 </div>	
     
		)
}

export default About;