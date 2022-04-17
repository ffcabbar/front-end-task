import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders description', async () => {
  render(<App />);
  await waitFor(() => {
    const titleElement = screen.getByRole('contentinfo');
    expect(titleElement).toBeInTheDocument();
  });
});
