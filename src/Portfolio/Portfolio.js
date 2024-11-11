import React, { useState } from 'react';
import './Portfolio.css';
import Liya from './Liya.js';
import Lijes from './Lijes.js';
import Navigation from '../Navigation/Navigation.js';
import List from '../Contact/List.js';

const Portfolio = () => {
  const [showLiya, setShowLiya] = useState(false);
  const [showLijes, setShowLijes] = useState(false);

  const handleLiyaClick = () => {
    setShowLiya(!showLiya);
  };

  const handleLijesClick = () => {
    setShowLijes(!showLijes);
  };

  return (
    <div className="Portfolio">
      <div className="trailer-liya">
        <div className="wanaw">
          <h2>ሊያ | Liya</h2>
          <p>
            This is the first trailer for a TV Series I've been working on for the past two years.
            After years of training her body, mind, and soul, Liya, a stubborn and brave young girl, comes back to her hometown to punish those who wronged her.
          </p>
          <button onClick={handleLiyaClick}>
            Watch Trailer
          </button>
        </div>
      </div>
      
      <div className = {showLiya? 'display active' : 'display'}>
        {showLiya && <Liya handleLiyaClick = {handleLiyaClick} />}
      </div>
      
      <div className="trailer-lijes">
        <div className="wanaw">
          <h2> ልጄስ? | Lijes</h2>
          <p>
            This is the teaser trailer for a 42 episodes TV series I created for Canal+, titled, "Lijes" (translated as: Where is my child).
            An illiterate but clever farmer, Gezahegn, travels to a mysterious town called Dibab in search of his missing Son.
          </p>
          <button onClick={handleLijesClick}>
            Watch Trailer
          </button>
        </div>
      </div>
      
      <div className = {showLijes? 'display active' : 'display'}>
        {showLijes && <Lijes handleLijesClick = {handleLijesClick} />}
      </div>
      
      <List />
    </div>
  );
};

export default Portfolio;
