import React from 'react';
import './Liya.css';
import { MdClose } from "react-icons/md";
import List from '../../Contact/List.js';

//import '../Trailers.css'

const Lijes = () => {
  
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
    <div className="lijes-page">
      <h1>ልጄስ? | Lijes</h1>
      <section className="bts-section">
      <h2>Official Trailer</h2>
      <div className="main-vimeo">
        <iframe
          src="https://player.vimeo.com/video/658078904?h=6c39b26bd3"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Lijes Trailer"
        ></iframe>
      </div>
      </section>
  

      
    </div>
    <List />
  </div>
  );
};

export default Lijes;
