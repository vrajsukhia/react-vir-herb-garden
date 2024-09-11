import React from "react";
import Card from "./2dimage";
import la from "./laa3d_animation.mp4"
const LavenderPage = () => {
  return (
    <Card
      imageSrc="https://cdn.shopify.com/s/files/1/0573/3993/6868/t/6/assets/lavender-herb-1667488792930.jpg?v=1667488793"
      videoSrc={la}
      backButtonUrl="/"
    />
  );
};

export default LavenderPage;