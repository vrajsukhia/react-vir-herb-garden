import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import React from 'react';
import Slider from './Slider';
import'./index.css';
import 'swiper/css';
import TulsiPage from './tulsipage';
import MustardPage from './mustardpage';
import LavenderPage from './lavenderPage';
import EchinaceaPage from './echinaceaPage';
import './Slider.css';
import ThreeScene from "./360d";
import  Lav3d from "./lavender3d"
import Tul3d from './tulsi3d'
import Carol3d from "./carol3d"
import Neem3d from './neem3d';
import Gar3d from './gar3d';
import Euch3d from './euch3d';
import Mint3d from './mint';
import Sage3d from './sage';
import Gin3d from './gin3d';
import Rosemary3d from './Rosemary';
import At3d from './At';
import Dand3d from "./dand3d";
import Lf3d from "./lf3d" 
import Gr3d from './gr3d';
import Mg3d from "./mg3d";
import Cp3d from "./cp3d"
import Conf3d from "./conf3d";
import Ce3d from "./ce3d";
import Thy3d from "./thy3d"
import Bt3d from "./bt3d"
import Basil3d from './basil3d';
import Ff3d from './ff3d';
import Pepmint3d from './pepmint3d';
import Sp3d from './sp3d';
import Mus3d from './mus3d';
import Ap from './card';
import VideoBackground from './vbg'


function Home() {
  return (
    <>
    <VideoBackground />
      <Slider />
      <div className="three-scene-section">
        <ThreeScene />
      </div>
      <div className="ap-section">
        <Ap /> 
      </div>
    </>
  );
} 
function App() {
  return (
  <Router>
    <div className="App">
      <main>
          <div className="slider-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tulsi-2d-view" element={<TulsiPage />} />
              <Route path="/mustard-2d-view" element={<MustardPage />} />
              <Route path="/lavender-2d-view" element={<LavenderPage />} />
              <Route path="/echinacea-2d-view" element={<EchinaceaPage />} />
              <Route path="/lav3d" element={<Lav3d/>} />
              <Route path="/tul3d" element={<Tul3d/>} />
              <Route path="/carol3d" element={<Carol3d/>} />   
              <Route path="/neem3d" element={<Neem3d/>} /> 
              <Route path="/gar3d" element={<Gar3d/>} />
              <Route path="/euca3d" element={<Euch3d/>} />
               <Route path="/sage3d" element={<Sage3d/>} />  
               <Route path="/gin3d" element={<Gin3d/>} />
               <Route path="/mint3d" element={<Mint3d/>} />
               <Route path="/rosemary3d" element={<Rosemary3d/>} />
               <Route path="/At" element={<At3d/>} />
               <Route path="/dand3d" element={<Dand3d/>} />
               <Route path='/lf3d'element={<Lf3d/> } />
               <Route path='/mg3d'element={<Mg3d/> } />               
              <Route path='/gr3d'element={<Gr3d/> } />
              <Route path='/conf3d'element={<Conf3d/> } /> 
              <Route path='/cp3d'element={<Cp3d/> } />
              <Route path='/ce3d'element={<Ce3d/> } />
              <Route path='/thy3d'element={<Thy3d/> } />
              <Route path='/bt3d'element={<Bt3d/> } />
              <Route path='/basil3d'element={<Basil3d/> } />
              <Route path='/pepmint3d'element={<Pepmint3d/> } />
              <Route path='/ff3d'element={<Ff3d/> } />
              <Route path='/mus3d'element={<Mus3d/> } />
              <Route path='/sp3d'element={<Sp3d/> } />
              <Route path="/ap" element={<Ap />} />
            </Routes>
          </div>
        </main>
      </div>
      </Router>
  );
}

export default App;
