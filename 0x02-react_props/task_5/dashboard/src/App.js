import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from './Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList'; // Import CourseList component

function App({ isLoggedIn = false }) {
  // Create a new array named listNotifications
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'default', html: { __html: '<strong>Meeting at 3pm</strong>' } }
  ];

  // Create a new array named listCourses
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  return (
    <>
      <Notifications displayDrawer listNotifications={listNotifications}/>
      <div className="App">
        <Header/>
        <div className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login/>}
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
