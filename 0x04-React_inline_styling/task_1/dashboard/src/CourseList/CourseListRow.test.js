import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toBe('2');
    expect(th.text()).toBe('First Cell');

    // Check for inline style
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toBe('First Cell');
    expect(th.at(1).text()).toBe('Second Cell');

    // Check for inline style on the tr element
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toBe('First Cell');
    expect(td.at(1).text()).toBe('Second Cell');

    // Check for inline style on the tr element
    const tr = wrapper.find('tr');
    expect(tr.prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
  });
});
