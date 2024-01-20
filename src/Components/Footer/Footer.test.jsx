import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  it('renders the footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('contains title RESTy', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer-title')).toHaveTextContent('RESTy');
  });

  it('displays copyright info', () => {
    render(<Footer />);
    expect(screen.getByTestId('copyright')).toHaveTextContent('© 2018');
    expect(screen.getByTestId('copyright')).toHaveTextContent('All rights reserved');
  });

  it('contains social media icons', () => {
    render(<Footer />);
    expect(screen.getByTestId('socials')).toBeInTheDocument();
  });
});
