import { render, screen } from '@testing-library/react';
import Species from './Species';

test('renders header text', () => {
  render(<Species />);
  const speciesInput = screen.getByTestId('species');
  expect(speciesInput).toBeInTheDocument();
});
