import { render, screen } from '@testing-library/react';
import MathsQuestion from './MathsQuestion';

test('renders maths question select input', () => {
  render(<MathsQuestion />);
  const mathsInput = screen.getByTestId('maths-question');
  expect(mathsInput).toBeInTheDocument();
});
