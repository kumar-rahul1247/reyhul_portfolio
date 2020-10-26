import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './containers/home/home';
import About from './containers/about/about';
import Skills from './containers/skills/skills';
import Projects from './containers/projects/projects';
import Contact from './containers/contacts/contacts';


import ParticleEffect from "./components/SpecialEffectComponent/ParticleEffect";

import Particles from "react-tsparticles";

function App() {
  
  return (
    <div className="App">
      {/* <ParticleEffect/> */}
      
        <Navbar />
      <Home />
      <About /> 
      <Skills />
      <Projects/>
      <Contact/>
      

      
    </div>
  );
}

export default App;
