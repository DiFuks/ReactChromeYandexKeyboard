import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
		name: /Кнопка 1/i
	});
  expect(buttonElement).toBeInTheDocument();
});
