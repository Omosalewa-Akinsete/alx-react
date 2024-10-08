import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'; // Import Aphrodite
import Notifications from './Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList'; // Import CourseList component
import BodySectionWithMarginBottom from './BodySection/BodySectionWithMarginBottom'; // Import BodySectionWithMarginBottom component

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
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications displayDrawer listNotifications={this.listNotifications}/>
        <div className={css(styles.app)}>
          <Header/>
          <div className={css(styles.body)}>
            <BodySectionWithMarginBottom title="Course list">
              {isLoggedIn ? <CourseList listCourses={this.listCourses}/> : <Login/>}
            </BodySectionWithMarginBottom>
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login/>
            </BodySectionWithMarginBottom>
            <BodySection title="News from the School">
              <p>Some random text goes here...</p>
            </BodySection>
          </div>
          <Footer className={css(styles.footer)}/>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, sans-serif',
    margin: '0',
    padding: '0',
    backgroundColor: '#fff',
  },
  body: {
    padding: '20px',
    minHeight: '75vh',
  },
  footer: {
    padding: '10px 0',
    textAlign: 'center',
    borderTop: '1px solid #e6e6e6',
    fontSize: '12px',
    fontStyle: 'italic',
  },
});

export default App;
