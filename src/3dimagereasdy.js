import React, { useState } from 'react';

function IframeEmbed() {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Initial color

  const handleIframeClick = () => {
    // Toggle background color between black and white
    setBackgroundColor(prevColor => prevColor === 'white' ? 'black' : 'white');
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0, 
      overflow: 'hidden',
      backgroundColor: backgroundColor // Apply background color state
    }}>
      <iframe
        src="https://3dwarehouse.sketchup.com/embed/5eac1381-91b1-4640-9e1d-09a13a2ab307?token=VhpR0cJxlyI=&binaryName=s21"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        width="100%"
        height="100%"
        allowFullScreen
        title="Embedded 3D Model"
        style={{ 
          border: 'none', 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          top: 0, 
          left: 0,
          cursor: 'pointer' // Indicate that iframe is clickable
        }}
        onClick={handleIframeClick} // Change background color on click
      ></iframe>
      
      {/* Cover branding or name on the right side */}
      <div style={{
        position: 'absolute',
        left:0,
        top: 0,
        width: '200px', // Adjust width to cover branding
        height: '100%', 
        backgroundColor: 'black', // Black background
        opacity: 1, // No opacity, fully opaque
        zIndex: 10 // Ensure overlay is above the iframe
      }}></div>
      <div style={{
        position: 'absolute',
        right:0,
        top: 0,
        width: '200px', // Adjust width to cover branding
        height: '100%', 
        backgroundColor: 'black', // Black background
        opacity: 1, // No opacity, fully opaque
        zIndex: 10 // Ensure overlay is above the iframe
      }}></div>
 
    </div>
  );
}

export default IframeEmbed;
