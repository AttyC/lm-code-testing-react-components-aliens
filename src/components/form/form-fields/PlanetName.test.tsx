import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';

test('renders planet name input', () => {
  render(<PlanetName />);
  const planetInput = screen.getByTestId('planet');
  expect(planetInput).toBeInTheDocument();
});
