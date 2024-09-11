import React from 'react';
import './2dimage.css'

const Card = ({ imageSrc, videoSrc, backButtonUrl }) => {
  return (
    <div className="Body">
      <div className="card" >    
      <div className="wra">
        <img src={imageSrc} className="c-i" alt="#" />
      </div>
      <video className="cl" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <button id="backButton" className="back-button" onClick={() => window.location.href = backButtonUrl}>X</button>
      </div> 
    </div>
  );
};

export default Card;