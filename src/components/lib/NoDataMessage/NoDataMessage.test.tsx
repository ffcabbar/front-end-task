import { render, screen } from '@testing-library/react';
import { NoDataMessage } from './NoDataMessage';

test('renders component', () => {
  render(<NoDataMessage children="Kuehne Nagel" />);
  const spanElement = screen.getByText(/Kuehne Nagel/i);
  expect(spanElement).toBeInTheDocument();
});
