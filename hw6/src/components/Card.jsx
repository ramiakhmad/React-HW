import React from 'react';
import './Card.css';

const Card = ({ appleBlue, xingBlue, googleBlue }) => {
  return (
    <div className="card">
      <div className="spotify-icon">
        <img src={new URL('../assets/spotify.svg', import.meta.url).href} alt="Spotify" />
      </div>
      <div className="text-container">
        <h2 className="title">LIFE IS WASTED ON THE LIVING</h2>
        <p className="subtitle green">sign in</p>
        <p className="subtitle green with">with</p>
        <div className="icons-frame">
          <div className={`icon-container ${appleBlue ? 'blue' : ''}`}>
            <img src={new URL('../assets/apple.svg', import.meta.url).href} alt="Apple" className="icon" />
          </div>
          <div className={`icon-container ${googleBlue ? 'blue' : ''}`}>
            <img src={new URL('../assets/google.svg', import.meta.url).href} alt="Google" className="icon" />
          </div>
          <div className={`icon-container ${xingBlue ? 'blue' : ''}`}>
            <img src={new URL('../assets/xing.svg', import.meta.url).href} alt="Xing" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;