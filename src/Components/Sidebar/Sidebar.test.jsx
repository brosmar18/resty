import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './index';

describe('Sidebar Component', () => {
  it('renders the sidebar', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('contains the main section with expected links', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    expect(screen.getByTestId('sidebar-main')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-link-home')).toHaveTextContent('Home');
    expect(screen.getByTestId('sidebar-link-history')).toHaveTextContent('History');
    expect(screen.getByTestId('sidebar-link-user')).toHaveTextContent('User');
  });

  it('contains the general section with expected links', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    expect(screen.getByTestId('sidebar-general')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-link-notes')).toHaveTextContent('Notes');
    expect(screen.getByTestId('sidebar-link-calendar')).toHaveTextContent('Calendar');
  });

  it('contains the maintenance section with expected links', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    expect(screen.getByTestId('sidebar-maintenance')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-link-settings')).toHaveTextContent('Settings');
  });
});
