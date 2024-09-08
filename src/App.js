import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import React from 'react';
import Slider from './Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import'./index.css';
import TulsiPage from './tulsipage';
import MustardPage from './mustardpage';
import LavenderPage from './lavenderPage';
import EchinaceaPage from './echinaceaPage';
import './Slider.css';
import ThreeScene from "./360d";
import  Lav3d from "./lavender3d"
import Tul3d from './tulsi3d'
function Home() {
  return (
    <>
      <Slider />
      <div className="three-scene-section">
        <ThreeScene />
      </div>
    </>
  );
} 
function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="/" className="flex items-center text-white hover:underline">
           <FontAwesomeIcon icon={faHome} className="mr-3"/>            
            Home</a>
          <a href="/" className="text-white hover:underline">About</a>
          <a href="/" className="text-white hover:underline">Info</a>
            <form id="search-form">
              <input
                type="text"
                id="search-box"
                placeholder="Search..."
                className="px-3 py-2 rounded-l-lg border-none outline-none text-black"
              />
              <button
                type="submit"
                id="search-button"
                className="bg-gray-300 rounded-r-lg p-2 flex items-center justify-center hover:bg-gray-400"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
              </button>
            </form>
        </nav>
      </header>
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
            </Routes>
          </div>
        </main>
      </div>
      </Router>
  );
}

export default App;
