import React from "react";
import con from './conf.glb'
import ThreeModelViewer from "./3dimage"
const Conf3d = () => {
  return (
    <ThreeModelViewer
     glbSrc={con}
    backButtonUrl="/"
    cameraPosition={[0, 1, 2]}
    />
  );
};

export default Conf3d;