import React from "react";
import gin from './gin.glb'
import ThreeModelViewer from "./3dimage"
const Gin3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={gin}
    backButtonUrl="/"
    cameraPosition={[0, 0, 9]}
    />
  );
};

export default Gin3d;