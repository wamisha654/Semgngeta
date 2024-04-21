  import React from 'react'
  import './Trailers.css'
  import { MdClose } from "react-icons/md";

  const Liya = ({handleLiyaClick})=>{
    return(
      <div className="main-vimeo">
            <div>
              <MdClose className = "close" onClick = {handleLiyaClick }/>
            </div>
            
            <iframe 
             src="https://player.vimeo.com/video/658078904?h=6c39b26bd3" 
             frameborder="0" 
             allow="autoplay; fullscreen; picture-in-picture" 
             allowfullscreen
             ></iframe>
       </div>

      )
  }
  export default Liya;