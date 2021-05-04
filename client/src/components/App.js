import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

import Home from './pages/Home';
import Mortgage from './pages/Mortgage';
import Profile from './pages/Profile';
import Chatbot from './chatbot/Chatbot'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/mortgage" component={Mortgage}/>
          <Route exact path="/profile" component={Profile}/>
          <Chatbot />
        </div>
      </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
