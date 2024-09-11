import React from "react";
import Card from "./2dimage";
import ec from "./ec3d_animation.mp4"
const EchinaceaPage = () => {
  return (
    <Card
      imageSrc="https://31159329.cdn6.editmysite.com/uploads/3/1/1/5/31159329/s406430371842430399_p117_i1_w650.jpeg"
      videoSrc={ec}
      backButtonUrl="/"
    />
  );
};

export default EchinaceaPage;