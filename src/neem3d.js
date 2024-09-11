import React from "react";
import neem from './neem.glb'
import ThreeModelViewer from "./3dimage"
const Neem3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={neem}
    backButtonUrl="/"
     cameraPosition={[0, 0, 1.2]}

    />
  );
};

export default Neem3d;