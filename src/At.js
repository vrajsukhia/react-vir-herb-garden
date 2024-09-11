import React from "react";
import at from './At.glb'
import ThreeModelViewer from "./3dimage"
const At3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={at}
    backButtonUrl="/"
    cameraPosition={[0, 3, 2]}
    />
  );
};

export default At3d;