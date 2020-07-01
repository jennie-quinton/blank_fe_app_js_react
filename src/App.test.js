import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hellow world', () => {
  const { getByText } = render(<App />);
  const helloWorldElement = getByText(/Hello world/i);
  expect(helloWorldElement).toBeInTheDocument();
});
