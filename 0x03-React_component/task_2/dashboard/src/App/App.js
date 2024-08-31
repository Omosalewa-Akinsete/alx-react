import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from './Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList'; // Import CourseList component

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {} // Default empty function for logOut
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn = false } = this.props;

    return (
      <>
        <Notifications displayDrawer listNotifications={this.listNotifications}/>
        <div className="App">
          <Header/>
          <div className="App-body">
            {isLoggedIn ? <CourseList listCourses={this.listCourses}/> : <Login/>}
          </div>
          <Footer/>
        </div>
      </>
    );
  }
}

export default App;
