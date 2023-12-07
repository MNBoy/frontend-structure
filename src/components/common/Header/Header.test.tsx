// Header.test.js
import '@testing-library/jest-dom'; // Import the jest-dom extension
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

// Mock the useHeader hook
jest.mock('./useHeader', () => ({
  useHeader: jest.fn(() => ({
    items: [
      { href: '/home', label: 'Home' },
      { href: '/about', label: 'About' },
    ],
    user: null,
    isLoading: false,
  })),
}));

describe('Header🧪', () => {
  test('renders Header component with navigation items and logo', () => {
    render(<Header />);

    // Check if the logo is present
    const logoElement = screen.getByTestId('logo-svg');
    expect(logoElement).toBeInTheDocument();

    // Check if navigation items are rendered
    const homeNavItem = screen.getByRole('link', { name: /home/i });
    const aboutNavItem = screen.getByRole('link', { name: /about/i });
    expect(homeNavItem).toBeInTheDocument();
    expect(aboutNavItem).toBeInTheDocument();
  });
});
