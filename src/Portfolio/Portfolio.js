import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';
import Navigation from '../Navigation/Navigation.js';
import List from '../Contact/List.js';
import vid from './video.mp4';
import VimeoPlayer from '@vimeo/player';

const Portfolio = () => {
  const [showVimeo, setShowVimeo] = useState(false);
  const vimeoRef = useRef(null);

  const handleVimeoClick = () => {
    setShowVimeo(true);
  };

  useEffect(() => {
    if (showVimeo) {
      const player = new VimeoPlayer(vimeoRef.current, {
        url: 'https://vimeo.com/658078904',
        autoplay: true,
      });

      return () => {
        // Clean up the player instance when component unmounts
        player.destroy().catch((error) => console.error('Error destroying player', error));
      };
    }
  }, [showVimeo]);

  return (
    <div className="Portfolio">
      <Navigation />
      <div className="trailer-liya">
        <div className="wanaw">
          <h2>ሊያ | Liya</h2>
          <p>
            This is the first trailer for a TV Series I've been working on for the past two years.
            After years of training her body, mind, and soul, Liya, a stubborn and brave young girl, comes back to her hometown to punish those who wronged her.
          </p>
          <button onClick={handleVimeoClick}>
            Watch Trailer
          </button>
          {showVimeo && <div ref={vimeoRef}></div>}
        </div>
      </div>
      <div className="trailer-lijes">
        <div className="wanaw">
          <h2> ልጄስ? | Lijes</h2>
          <p>
            This is the teaser trailer for a 42 episodes TV series I created for Canal+, titled, "Lijes" (translated as: Where is my child).
            An illiterate but clever farmer, Gezahegn, travels to a mysterious town called Dibab in search of his missing Son.
          </p>
          <a href="https://vimeo.com/921436172">
            <button>
              Watch Trailer
            </button>
          </a>
        </div>
      </div>
      <List />
    </div>
  );
};

export default Portfolio;
