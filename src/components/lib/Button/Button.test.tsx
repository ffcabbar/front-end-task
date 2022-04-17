import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
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

test('matches snapshot', () => {
  const tree = renderer.create(<Button children="Kuehne Nagel" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('matches snapshot correctly when there are no props', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
