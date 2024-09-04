import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders BodySection component and passes props correctly', () => {
    const title = 'Test Title';
    const children = <p>Test Children Node</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    // Check if the component contains a BodySection component
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // Check if the props are passed correctly to the BodySection component
    expect(wrapper.find(BodySection).prop('title')).toEqual(title);
    expect(wrapper.find(BodySection).contains(children)).toEqual(true);
  });
});
