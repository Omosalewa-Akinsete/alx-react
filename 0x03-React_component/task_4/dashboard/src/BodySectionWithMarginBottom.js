import React from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'; // Import the CSS file

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props}/>
    </div>
  );
};

export default BodySectionWithMarginBottom;
