import React from "react";
import bt from './bt.glb'
import ThreeModelViewer from "./3dimage"
const Bt3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={bt}
    backButtonUrl="/"
    cameraPosition={[0, 0, 0.9]}
    />
  );
};

export default Bt3d;