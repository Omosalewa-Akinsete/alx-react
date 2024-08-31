import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  it('logs mount and unmount for pure HTML element', () => {
    const WrappedComponent = () => <p />; // Pure HTML element
    const Component = WithLogging(WrappedComponent);
    const wrapper = shallow(<Component />);

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith('Component is mounted on componentDidMount()');
    expect(console.log).toHaveBeenCalledWith('Component is going to unmount on componentWillUnmount()');
  });

  it('logs mount and unmount for Login component', () => {
    const Login = () => <div>Login component</div>;
    Login.displayName = 'Login'; // Set display name for Login component
    const Component = WithLogging(Login);
    const wrapper = shallow(<Component />);

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
