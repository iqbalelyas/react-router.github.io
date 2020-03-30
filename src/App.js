import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Premium from './pages/Premium'
import DevSchool from './pages/DevSchool'

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link to="/" className="navbar-brand">
            DevGarage
          </Link>
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/premium" className="nav-item nav-link">
              Premium
            </Link>
            <Link to="devschool" className="nav-item nav-link">
              DevSchool
            </Link>
          </div>
        </nav>
        <div style={{ paddingTop: 50 }}>
          <Route path="/" exact component={Home}></Route>
          <Route path="/premium" component={Premium}></Route>
          <Route path="/devschool" component={DevSchool}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
