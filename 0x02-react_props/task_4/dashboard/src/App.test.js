import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import CourseList from './CourseList/CourseList'; // Import CourseList component

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  describe('when isLoggedIn is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not display Login component', () => {
      expect(wrapper.find(Login).length).toBe(0);
    });

    it('displays CourseList component', () => {
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });
});
