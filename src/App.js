import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./containers/HomePage";
import PortfolioPage from "./containers/PortfolioPage";
import ProfilePage from "./containers/ProfilePage";
import NavBar from "./containers/NavBar";

import Particle from "./components/Particle";

function App() {
  return (
    <div id="particles-js">
      <Particle />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/skills" />
        <Route path="/contact" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
