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

  it('should display the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('should not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });

  it('should display the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('should display div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });

  it('renders correctly with an empty listNotifications array', () => {
    const wrapper = shallow(<Notifications listNotifications={[]}/>);
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('renders correctly without passing the listNotifications property', () => {
    const wrapper = shallow(<Notifications/>);
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('renders the message "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]}/>);
    expect(wrapper.find('p').text()).toBe('No new notification for now');
  });

  it('does not render the message "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]}/>);
    expect(wrapper.find('p').text()).not.toBe('Here is the list of notifications');
  });
});
