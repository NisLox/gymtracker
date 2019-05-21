import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tracker from './tracker.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Will Burgess
        </p>
        <Tracker />
      </header>
    </div>
  );
}

export default App;
