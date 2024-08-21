import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from './Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList'; // Import CourseList component

function App({ isLoggedIn = false }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header/>
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer/>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
