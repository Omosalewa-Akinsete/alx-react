import React from 'react';
import PropTypes from 'prop-types';

// Define the CourseShape
const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});

const CourseComponent = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <p>Course ID: {course.id}</p>
      <p>Credits: {course.credit}</p>
    </div>
  );
};

// Use CourseShape in propTypes
CourseComponent.propTypes = {
  course: CourseShape.isRequired,
};

export default CourseComponent;
