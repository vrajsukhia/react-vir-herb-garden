import React from "react";
import ff from './ff.glb'
import ThreeModelViewer from "./3dimage"
const Ff3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={ff}
    backButtonUrl="/"
    cameraPosition={[0, 0, 100]}
    />
  );
};

export default Ff3d;