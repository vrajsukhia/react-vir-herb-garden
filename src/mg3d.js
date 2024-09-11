import React from "react";
import mg from './mg.glb'
import ThreeModelViewer from "./3dimage"
const Mg3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={mg}
    backButtonUrl="/"
    cameraPosition={[0, 0, 2]}
    />
  );
};

export default Mg3d;