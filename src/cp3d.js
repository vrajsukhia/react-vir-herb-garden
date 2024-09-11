import React from "react";
import cp from './cp.glb'
import ThreeModelViewer from "./3dimage"
const Cp3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={cp}
    backButtonUrl="/"
    cameraPosition={[0, 0, 1]}
    />
  );
};

export default Cp3d;