  import React from 'react'
  import './Trailers.css'
  import { MdClose } from "react-icons/md";

  const Lijes = ({handleLijesClick})=>{
    return(
      <div className="main-vimeo">
            <div>
              <MdClose className = "close" onClick = {handleLijesClick }/>
            </div>
            
              <iframe src="https://player.vimeo.com/video/927493581?h=dbf5283da2" 
              frameborder="0" 
              allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
              </iframe>

          </div>

      )
  }
  export default Lijes;