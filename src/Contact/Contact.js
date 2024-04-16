import React from 'react'
import cont from './cont.mp4'
import './Contact.css'
import List from './List.js'

const Contact = () =>{
	return(
	   <div >
	     <div className = "contact">
	     	<div>
	      <video autoPlay loop muted playsInline type="video/mp4" className="contact-video">
           <source src={cont}/>
          </video>
	     </div>
	     <div className = "contact-h">
	       <h1>Contact</h1>
	     </div>
	     <div className = "contact-p">
	       <section>Please feel free to contact to discuss any Filmmaking, TV, Commercial, Corporate commissions or collaboration projects.</section>
	       <p> semagngeta@guzofilms.com </p>
	       <p>+251 91 185 4742</p>
	     </div>
	     </div>
	     
         <List />
		 
	   </div>
	);
	
}
export default Contact;