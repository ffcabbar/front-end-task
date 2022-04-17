import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

test('renders component', () => {
  render(<Badge children="Kuehne Nagel" />);
  const divElement = screen.getByText(/Kuehne Nagel/i);
  expect(divElement).toBeInTheDocument();
});
