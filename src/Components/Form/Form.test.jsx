import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form Component', () => {
  const setup = async () => {
    render(<Form handleApiCall={() => {}} />);
    fireEvent.click(screen.getByTestId('form-trigger')); // Open the dialog
    await screen.findByTestId('form-content'); // Wait for the form content to be visible
  };

  it('renders the URL input correctly', async () => {
    await setup();
    expect(screen.getByTestId('url-input')).toBeInTheDocument();
  });

  it('changes URL input correctly', async () => {
    await setup();
    const urlInput = screen.getByTestId('url-input');
    fireEvent.change(urlInput, { target: { value: 'https://test.com' } });
    expect(urlInput.value).toBe('https://test.com');
  });

  it('changes method on button click', async () => {
    await setup();
    const methodButton = screen.getByTestId('post-method');
    fireEvent.click(methodButton);
    expect(methodButton).toHaveClass('active');
  });

  it('renders textarea for POST and PUT methods', async () => {
    await setup();

    // Check for POST method
    fireEvent.click(screen.getByTestId('post-method'));
    let textarea = screen.getByTestId('body-textarea');
    expect(textarea).toBeInTheDocument();

    // Check for PUT method
    fireEvent.click(screen.getByTestId('put-method'));
    textarea = screen.getByTestId('body-textarea');
    expect(textarea).toBeInTheDocument();
  });
});
