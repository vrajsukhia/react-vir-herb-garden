import React from "react";
import dan from './dand.glb'
import ThreeModelViewer from "./3dimage"
const Dand3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={dan}
    backButtonUrl="/"
    cameraPosition={[0, 0, 2]}
    />
  );
};

export default Dand3d;