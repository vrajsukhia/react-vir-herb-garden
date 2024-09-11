import React from "react";
import gr from './gr.glb'
import ThreeModelViewer from "./3dimage"
const Gr3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={gr}
    backButtonUrl="/"
    cameraPosition={[0, 0, 0.5]}
    />
  );
};

export default Gr3d;