import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

// Define the CourseShape propType
const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

// Set default props and prop types
CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

// Define styles using Aphrodite
const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    border: '1px solid #ccc',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#f5f5f5',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableData: {
    padding: '8px',
    textAlign: 'left',
  },
});

export default CourseList;
