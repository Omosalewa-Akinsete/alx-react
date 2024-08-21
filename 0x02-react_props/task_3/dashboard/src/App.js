import React from 'react';
import './App.css';
import Notifications from './Notifications'; // Import the Notifications component
import Header from './Header/Header'; // Import the Header component
import Footer from './Footer/Footer'; // Import the Footer component
import Login from './Login/Login'; // Import the Login component

function App() {
  return (
    <>
      <Notifications/> {/* Add Notifications component before div.App */}
      <div className="App">
        <Header/> {/* Replace header code with Header component */}
        <div className="App-body">
          <Login/> {/* Replace login code with Login component */}
        </div>
        <Footer/> {/* Replace footer code with Footer component */}
      </div>
    </>
  );
}

export default App;
