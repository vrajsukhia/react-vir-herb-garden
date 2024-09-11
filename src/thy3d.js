import React from "react";
import thy from './thy.glb'
import ThreeModelViewer from "./3dimage"
const Thy3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={thy}
    backButtonUrl="/"
    cameraPosition={[0, 0, 0.9]}
    />
  );
};

export default Thy3d;