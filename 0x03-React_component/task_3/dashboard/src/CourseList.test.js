import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList/>);
    const rows = wrapper.find(CourseListRow);
    expect(rows.length).toBe(5);

    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');
    expect(rows.at(0).prop('isHeader')).toBe(true);

    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(1).prop('textSecondCell')).toBe('Credit');
    expect(rows.at(1).prop('isHeader')).toBe(true);

    expect(rows.at(2).prop('textFirstCell')).toBe('ES6');
    expect(rows.at(2).prop('textSecondCell')).toBe('60');
    expect(rows.at(2).prop('isHeader')).toBe(false);

    expect(rows.at(3).prop('textFirstCell')).toBe('Webpack');
    expect(rows.at(3).prop('textSecondCell')).toBe('20');
    expect(rows.at(3).prop('isHeader')).toBe(false);

    expect(rows.at(4).prop('textFirstCell')).toBe('React');
    expect(rows.at(4).prop('textSecondCell')).toBe('40');
    expect(rows.at(4).prop('isHeader')).toBe(false);
  });
  
  it('renders correctly with an empty array or no listCourses property', () => {
    const wrapper = shallow(<CourseList listCourses={[]}/>);
    expect(wrapper.find(CourseListRow).length).toBe(0);
  });

  it('renders courses correctly when listCourses is passed', () => {
    const courses = [
      { id: 1, name: 'Course 1', credit: 50 },
      { id: 2, name: 'Course 2', credit: 30 },
    ];
    const wrapper = shallow(<CourseList listCourses={courses}/>);
    expect(wrapper.find(CourseListRow).length).toBe(courses.length + 2); // Header rows + course rows
  });
});
