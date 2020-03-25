import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import particleOpt from "./particlesOpt";
import particlesVideo from "./particles.mp4";

function App() {
  return (
    <div>
      <video src="./particles.mp4" muted="" autoPlay=""></video>
      <h1>
        <span>C</span>
        <span>onsue</span>lo<span> San</span>na
      </h1>
      <Particles params={particleOpt} />
    </div>
  );
}

export default App;
