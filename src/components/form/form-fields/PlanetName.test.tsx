import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';

test('renders header text', () => {
  render(<PlanetName />);
  const planetInput = screen.getByTestId('planet');
  expect(planetInput).toBeInTheDocument();
});
