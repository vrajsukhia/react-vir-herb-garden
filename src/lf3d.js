import React from "react";
import lf from './lf.glb'
import ThreeModelViewer from "./3dimage"
const Lf3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={lf}
    backButtonUrl="/"
    cameraPosition={[0, 0, 3]}
    />
  );
};

export default Lf3d;