import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import SessionListPage from "./pages/SessionListPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <div className="row justify-content-center py-3">
          <div className="col-10">
            <Switch>
              <Route path="/sessions">
                <SessionListPage/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">EA Team1 Project</a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sessions">Sessions</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default App;
