import React from 'react';
import logo from './logo.svg';
import { Helmet } from 'react-helmet'
import './App.css';

function App() {

  return (   
    <div className="App">
      <title>Task Scheduler</title>
      <header className="App-header">
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
          Lol
        </a>
      </header>
    </div>
  );
}

export default App;
