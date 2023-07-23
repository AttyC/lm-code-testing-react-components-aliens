import { render, screen } from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';

test('renders reason for sparing textarea', () => {
  render(<ReasonForSparing />);
  const reasonInput = screen.getByTestId('reason');
  expect(reasonInput).toBeInTheDocument();
});
