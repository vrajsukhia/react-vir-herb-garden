import React from "react";
import lav from './lavender.glb'
import ThreeModelViewer from "./3dimage"
const Lav3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={lav}
    backButtonUrl="/"
    cameraPosition={[0, 0, 1]}
    />
  );
};

export default Lav3d;