import React from "react";
import ba from './basil.glb'
import ThreeModelViewer from "./3dimage"
const Basil3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={ba}
    backButtonUrl="/"
    cameraPosition={[0, 0, 1]}
    />
  );
};

export default Basil3d;