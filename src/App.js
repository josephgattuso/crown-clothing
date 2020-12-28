import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <Router>
      <Link to="/crown-clothing">Home</Link>
      <Link to="/crown-clothing/hats">Hats</Link>
      <Switch>
        <Route exact path="/crown-clothing" component={HomePage} />
        <Route path="/crown-clothing/hats" component={HatsPage} />
      </Switch>
    </Router>
  );
}

export default App;
