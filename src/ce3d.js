import React from "react";
import ce from './ce.glb'
import ThreeModelViewer from "./3dimage"
const Ce3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={ce}
    backButtonUrl="/"
    cameraPosition={[0, 0, 2]}
    />
  );
};

export default Ce3d;