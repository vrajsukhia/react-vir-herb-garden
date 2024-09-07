import React, { useEffect, useRef } from 'react';
import { ImagePanorama, Viewer, MODES } from 'panolens';
import './360d.css';
import image1 from './image1.jpeg';

const ThreeScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      console.error('Container not found');
      return;
    }
    const panorama = new ImagePanorama(image1);
    const viewer = new Viewer({
      container: container,
      autoHideInfospot: false,
      output: 'console',
      viewIndicator: true,
      autoRotate: true,
      autoRotateSpeed: 0.5,
      cameraFov: 75,
      controlBar: true,
    });

    viewer.add(panorama);
    panorama.addEventListener('enter-fade-start', () => {
      try {
        viewer.enableEffect(MODES.VR);
      } catch (error) {
        console.error('Error enabling VR mode:', error);
      }
    });
    return () => {
     viewer.dispose();      
    };
  }, []);

  return (
    <div className="main-container">
      <div className="three-scene-section" ref={containerRef}></div>
      <p className="welcome-text">Hi, Welcome to Virtual Herbal Garden</p>
    </div>
  );
};

export default ThreeScene;
