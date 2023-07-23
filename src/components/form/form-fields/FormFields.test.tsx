import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import MathsQuestion from './MathsQuestion';
import ReasonForSparing from './ReasonForSparing';
import SubmitButton from './SubmitButton';

describe('form field components should render form fields', () => {
  test('renders species input', () => {
    render(<SpeciesName />);
    const speciesInput = screen.getByTestId('species');
    expect(speciesInput).toBeInTheDocument();
  });
  test('renders planet input', () => {
    render(<PlanetName />);
    const planetInput = screen.getByTestId('planet');
    expect(planetInput).toBeInTheDocument();
  });
  test('renders maths question select input', () => {
    render(<MathsQuestion />);
    const mathsInput = screen.getByTestId('maths-question');
    expect(mathsInput).toBeInTheDocument();
  });
  test('renders reason for sparing textarea', () => {
    render(<ReasonForSparing />);
    const reasonInput = screen.getByTestId('reason');
    expect(reasonInput).toBeInTheDocument();
  });
  test('renders submit button', () => {
    render(<SubmitButton />);
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
  });
});
