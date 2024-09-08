import React from "react";
import tul from './tulsi.glb'
import ThreeModelViewer from "./3dimage"
const Tul3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={tul}
    backButtonUrl="/"
    cameraPosition={[0, 0, 9]}
    />
  );
};

export default Tul3d;