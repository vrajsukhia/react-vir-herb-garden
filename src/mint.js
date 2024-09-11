import React from "react";
import mint from './mint.glb'
import ThreeModelViewer from "./3dimage"
const Mint3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={mint}
    backButtonUrl="/"
    cameraPosition={[0, 0, 0.5]}
    />
  );
};

export default Mint3d;