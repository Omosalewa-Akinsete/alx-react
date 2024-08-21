import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem/>);
  });

  it('renders the correct HTML with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test"/>);
    expect(wrapper.html()).toContain('<li data-notification-type="default">test</li>');
  });

  it('renders the correct HTML with the html prop', () => {
    const wrapper = shallow(<NotificationItem html="<u>test</u>"/>);
    expect(wrapper.html()).toContain('<li data-notification-type="default"><u>test</u></li>');
  });
});
