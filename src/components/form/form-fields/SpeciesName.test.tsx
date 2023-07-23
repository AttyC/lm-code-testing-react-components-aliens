import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders header text', () => {
  render(<SpeciesName />);
  const speciesInput = screen.getByTestId('species');
  expect(speciesInput).toBeInTheDocument();
});
