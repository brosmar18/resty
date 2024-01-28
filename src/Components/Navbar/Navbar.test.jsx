import { render, screen } from '@testing-library/react';
import Navbar from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import { navLinks } from '@/Constants';

describe('Navbar Component', () => {
  it('renders the Navbar component', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('displays the logo', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByTestId('navbar-logo')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    navLinks.forEach(link => {
      expect(screen.getByTestId(`navbar-link-${link.label}`)).toBeInTheDocument();
    });
  });

  it('renders social media icons', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByTestId('navbar-icon-github')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-icon-linkedin')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-icon-instagram')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-icon-facebook')).toBeInTheDocument();
  });
});
