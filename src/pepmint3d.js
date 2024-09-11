import React from "react";
import pep from './pepmint.glb'
import ThreeModelViewer from "./3dimage"
const Pepmint3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={pep}
    backButtonUrl="/"
    cameraPosition={[0, 0, 0.3]}
    />
  );
};

export default Pepmint3d;