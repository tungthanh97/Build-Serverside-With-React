import React from "react";
import "./App.css";
import { Router } from "./components/Router/Router";
import { Route } from "./components/Router/Route";
import Home from "./pages/Home";
import Audio from "./pages/Audio";

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/play">
        <Audio />
      </Route>
    </Router>
  );
}

export default App;
