import React, { useEffect, useRef } from 'react';
import './vbg.css';
import v1 from "./v1.mp4";

const VideoBackground = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const handlePlay = () => {
            video.muted = false;
        };
        video.addEventListener('play', handlePlay);
        return () => {
            video.removeEventListener('play', handlePlay);
        };
    }, []);

    return (
        <div className="a">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="video-background"
            >
                <source src={v1} type="video/mp4" />
            </video>
            <header className="header">
                <div className="humburger">
                    <i className="bx bx-menu"></i>
                </div>
                <ul className="menu">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">New</li>
                    <li className="menu-item">Contacts</li>
                </ul>
                <div className="search">
                    <i className="bx bx-search"></i>
                </div>
            </header>
            <main className="main">
                <h1>virtual <span>herbal garden</span></h1>
                <div className="feature">
                    <div className="feature-card">
                        <h2>2d view</h2>
                        <p>2d view is available for all the plants...</p>
                    </div>
                    <div className="feature-card">
                        <h2>3d view</h2>
                        <p>3d view is available for all the plants...</p>
                    </div>
                    <div className="feature-card">
                        <h2>Vr view</h2>
                        <p>vr view is available for all the plants...</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VideoBackground;