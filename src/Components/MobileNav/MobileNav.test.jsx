import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MobileNav from './index';
import { navLinks } from '@/Constants';

describe('MobileNav Component', () => {
  it('renders the mobile navigation trigger', async () => {
    render(
      <Router>
        <MobileNav />
      </Router>
    );
    expect(screen.getByTestId('mobile-nav-trigger')).toBeInTheDocument();
  });

  it('opens the mobile navigation content when the trigger is clicked', async () => {
    render(
      <Router>
        <MobileNav />
      </Router>
    );
    fireEvent.click(screen.getByTestId('mobile-nav-trigger'));
    const content = await screen.findByTestId('mobile-nav-content');
    expect(content).toBeInTheDocument();
  });

});
