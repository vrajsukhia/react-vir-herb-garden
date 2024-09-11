import React from "react";
import sag from './sage.glb'
import ThreeModelViewer from "./3dimage"
const Sage3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={sag}
    backButtonUrl="/"
    cameraPosition={[0, 0, 2]}
    />
  );
};

export default Sage3d;