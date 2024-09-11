import React from "react";
import gar from './gar3d.glb'
import ThreeModelViewer from "./3dimage"
const Gar3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={gar}
    backButtonUrl="/"
     cameraPosition={[0,0,9]}

    />
  );
};

export default Gar3d;