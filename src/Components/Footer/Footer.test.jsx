import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  it('renders the footer', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  it('displays the correct copyright info', () => {
    render(<Footer />);
    const copyrightElement = screen.getByText(/RESTy by Bryan O. Garduno Gonzalez/i); 
    expect(screen.getByTestId('footer')).toContainElement(copyrightElement);
  });

});
