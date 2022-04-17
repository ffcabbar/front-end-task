import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button', () => {
  render(<Button children="Kuehne Nagel" />);
  const buttonElement = screen.getByText(/Kuehne Nagel/i);
  expect(buttonElement).toBeInTheDocument();
});

test('handles onClick', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick} children="Kuehne Nagel" />);
  const buttonElement = screen.getByText('Kuehne Nagel');
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
