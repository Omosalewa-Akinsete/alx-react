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
    expect(wrapper.find('p').text()).toBe('No new notification for now');
  });

  it('renders notifications correctly when listNotifications is passed', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = shallow(<Notifications listNotifications={notifications}/>);
    expect(wrapper.find(NotificationItem).length).toBe(notifications.length);
  });

  it('renders the correct message when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]}/>);
    expect(wrapper.find('p').text()).toBe('No new notification for now');
    expect(wrapper.find('p').text()).not.toBe('Here is the list of notifications');
  });
  
  it('calls console.log with the correct message when markAsRead is called', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications />);
    wrapper.instance().markAsRead(1); // Assuming markAsRead takes an id parameter
    expect(spy).toHaveBeenCalledWith('Marking notification as read with id: 1');
    spy.mockRestore();
  });

  it('does not rerender when updating props with the same list', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    const instance = wrapper.instance();

    const shouldComponentUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');

    wrapper.setProps({ listNotifications: notifications });

    expect(shouldComponentUpdateSpy).not.toHaveBeenCalled();
  });

  it('rerenders when updating props with a longer list', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
    ];
    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    const instance = wrapper.instance();

    const shouldComponentUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');

    const newNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    wrapper.setProps({ listNotifications: newNotifications });

    expect(shouldComponentUpdateSpy).toHaveBeenCalled();
  });
});
