import React from "react";
import Card from "./2dimage";
import Mus from "./mus3d_animation.mp4"

const MustardPage = () => {
  return (
    <Card
      imageSrc="https://c0.wallpaperflare.com/preview/187/659/824/plant-flower-pollen-blossom.jpg"
      videoSrc={Mus}
      backButtonUrl="/"
    />
  );
};

export default MustardPage;