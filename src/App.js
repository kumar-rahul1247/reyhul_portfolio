import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './containers/home/home';
import About from './containers/about/about';
import Skills from './containers/skills/skills';
import Projects from './containers/projects/projects';
import Contact from './containers/contacts/contacts';


import WavyCard from "./components/SpecialEffectComponent/WavyCard";
//import FlipCard from "./components/SpecialEffectComponent/FlipCard";



function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About /> 
      <Skills />
      <Projects/>
      <Contact/>
      {/* <WavyCard /> */}
      <div style={{ position: 'relative'}}>
      {/* <FlipCard/> */}
       
      </div>


      {/* <Skillbar name="React" percent="95%" percentToshow/>
      <WavyCard/> */}
    </div>
  );
}

export default App;
