import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders species name input', () => {
  render(<SpeciesName />);
  const speciesInput = screen.getByTestId('species');
  expect(speciesInput).toBeInTheDocument();
});
