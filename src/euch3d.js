import React from "react";
import euc from './ecu.glb'
import ThreeModelViewer from "./3dimage"
const Euch3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={euc}
    backButtonUrl="/"
    cameraPosition={[0, 0, 1.2]}
    />
  );
};

export default Euch3d;