import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./containers/HomePage";

import Particle from "./components/Particle";

function App() {
  return (
    <div id="particles-js">
      <Particle />

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/portfolio" />
        <Route path="/profile" />
        <Route path="/skills" />
        <Route path="/contact" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
