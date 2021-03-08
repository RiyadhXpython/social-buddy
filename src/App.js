import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Home">Home2</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/post/:id">
          <PostDetail/>
        </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
