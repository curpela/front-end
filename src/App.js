import React from "react";
import Nav from "./components/layout/Nav";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
