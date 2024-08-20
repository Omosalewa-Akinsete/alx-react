import React from 'react';
import logo from './holberton-logo.jpg'; // Make sure the logo image is in the correct path
import './App.css';
import {getFullYear, getFooterCopy} from './utils';
import { Notifications } from './Notifications';

function App() {
  return (
    <div className="App">
      <Notifications/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"/>
        <br/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"/>
        <br/>
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
