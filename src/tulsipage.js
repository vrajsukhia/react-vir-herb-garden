import React from "react";
import Card from "./2dimage";
import tulsi3dAnimation from './tulsi3d_animation.mp4';

const TulsiPage = () => {
  return (
    <Card
      imageSrc="https://www.shutterstock.com/image-photo/tulsi-holy-basil-tree-garden-600nw-1901055034.jpg"
      videoSrc={tulsi3dAnimation}
      backButtonUrl="/"
    />
  );
};

export default TulsiPage;