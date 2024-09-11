import React from "react";
import sp from './sp.glb'
import ThreeModelViewer from "./3dimage"
const Sp3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={sp}
    backButtonUrl="/"
    cameraPosition={[0, 0, 30]}
    />
  );
};

export default Sp3d;