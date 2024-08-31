import React from 'react';
import { getFullYear, getFooterCopy } from '../utils';
import '../Footer.css'; // Import the necessary CSS file

function Footer() {
  return (
    <footer className="App-footer">
      <p>{getFooterCopy(true)} - {getFullYear()}</p>
    </footer>
  );
}

export default Footer;
