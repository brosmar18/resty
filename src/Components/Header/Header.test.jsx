import { render, screen, fireEvent } from '@testing-library/react';
import Header from './index';

describe('Header Component', () => {
  it('renders the header', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('contains logo', () => {
    render(<Header />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    ['home', 'history', 'help'].forEach((item) => {
      expect(screen.getByTestId(`nav-link-${item}`)).toBeInTheDocument();
    });
  });

  it('toggles mobile menu on click', () => {
    render(<Header />);
    fireEvent.click(screen.getByTestId('menu-icon'));
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
  });

  

});
