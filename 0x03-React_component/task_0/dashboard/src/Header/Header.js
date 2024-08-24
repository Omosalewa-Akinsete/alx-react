import React from 'react';
import logo from '../holberton-logo.jpg'; // Adjust the path if needed
import './Header.css'; // Create a corresponding CSS file for the header if necessary

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;
