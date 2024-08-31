import { render, screen } from '@testing-library/react';
import App from './App';

test('logout when control+h keys are pressed', () => {
  const logOutMock = jest.fn();
  render(<App logOut={logOutMock} />);

  fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

  expect(logOutMock).toHaveBeenCalled();
  expect(window.alert).toHaveBeenCalledWith('Logging you out');
});
