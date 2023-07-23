import { render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

test('renders submit button', () => {
  render(<SubmitButton />);
  const submitButton = screen.getByTestId('submit-button');
  expect(submitButton).toBeInTheDocument();
});
