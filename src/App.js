import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './containers/home/home';
import About from './containers/about/about';
import Skills from './containers/skills/skills';
import Projects from './containers/projects/projects';

import WavyCard from "./components/SpecialEffectComponent/WavyCard";
import FlipCard from "./components/SpecialEffectComponent/FlipCard";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects/>
      {/* <WavyCard /> */}
      <div style={{ position: 'relative', margin: 200 }}>
        {/* <FlipCard/> */}
       
      </div>


      {/* <Skillbar name="React" percent="95%" percentToshow/>
      <WavyCard/> */}
    </div>
  );
}

export default App;
