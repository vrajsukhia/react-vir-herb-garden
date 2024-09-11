import React from "react";
import carol from './carol.glb'
import ThreeModelViewer from "./3dimage"
const Carol3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={carol}
    backButtonUrl="/"
    cameraPosition={[0, 0, 2.5]}
    />
  );
};

export default Carol3d;