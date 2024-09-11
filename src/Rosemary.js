import React from "react";
import rose from './rosemary.glb'
import ThreeModelViewer from "./3dimage"
const Rosemary3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={rose}
    backButtonUrl="/"
    cameraPosition={[0, 0, 0.5]}
    />
  );
};

export default Rosemary3d;