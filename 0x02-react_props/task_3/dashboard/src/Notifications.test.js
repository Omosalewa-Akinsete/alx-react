import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications/>);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper.find('li').length).toBe(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
  
  it('renders the first NotificationItem element with the correct html', () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper.find(NotificationItem).first().html()).toContain('<li data-notification-type="default">New course available</li>');
  });
});
