import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './views/landingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
