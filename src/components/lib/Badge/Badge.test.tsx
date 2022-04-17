import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Badge } from './Badge';

test('renders component', () => {
  render(<Badge children="Kuehne Nagel" />);
  const divElement = screen.getByText(/Kuehne Nagel/i);
  expect(divElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const tree = renderer.create(<Badge children="Kuehne Nagel" />).toJSON();
  expect(tree).toMatchSnapshot();
});
