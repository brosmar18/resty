import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form Component', () => {
  it('renders correctly', () => {
    render(<Form handleApiCall={() => {}} />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('changes URL input correctly', () => {
    render(<Form handleApiCall={() => {}} />);
    const urlInput = screen.getByTestId('url-input');
    fireEvent.change(urlInput, { target: { value: 'https://test.com' } });
    expect(urlInput.value).toBe('https://test.com');
  });

  it('changes method on button click', () => {
    render(<Form handleApiCall={() => {}} />);
    const postButton = screen.getByTestId('post-method');
    fireEvent.click(postButton);
    expect(postButton.className).toContain('active');
  });

  it('renders textarea for POST and PUT methods', () => {
    const { rerender } = render(<Form handleApiCall={() => {}} />);
    
    // Test for POST method
    fireEvent.click(screen.getByTestId('post-method'));
    expect(screen.getByTestId('body-textarea')).toBeInTheDocument();
    
    // Test for PUT method
    rerender(<Form handleApiCall={() => {}} />);
    fireEvent.click(screen.getByTestId('put-method'));
    expect(screen.getByTestId('body-textarea')).toBeInTheDocument();
  });

});
