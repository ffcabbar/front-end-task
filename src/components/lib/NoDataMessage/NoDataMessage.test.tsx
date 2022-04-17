import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { NoDataMessage } from './NoDataMessage';

test('renders component', () => {
  render(<NoDataMessage children="Kuehne Nagel" />);
  const spanElement = screen.getByText(/Kuehne Nagel/i);
  expect(spanElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const tree = renderer.create(<NoDataMessage children="Kuehne Nagel" />).toJSON();
  expect(tree).toMatchSnapshot();
});
