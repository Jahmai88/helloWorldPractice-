import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jaibhow Links
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        <a
        
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained"
          href="https://www.nba.com/"
          target="_blank"
          rel="noopener noreferrer"
          Color="secondary"
          >nba</Button>
          <button type=">submit">submit</button>
      </header>
    </div>
  );
}

export default App;
