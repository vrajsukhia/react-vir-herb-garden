import React from "react";
import mus from './mus.glb'
import ThreeModelViewer from "./3dimage"
const Mus3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={mus}
    backButtonUrl="/"
    cameraPosition={[0, 0, 1]}
    />
  );
};

export default Mus3d;