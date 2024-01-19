import { render, screen } from '@testing-library/react';
import Form from './index';

describe('Form Component', () => {
  it('renders correctly', () => {
    render(<Form handleApiCall={() => {}} />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

});
