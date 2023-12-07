// AuthForm.test.js
import '@testing-library/jest-dom'; // Import the jest-dom extension
import { render, screen } from '@testing-library/react';
import { AuthForm } from './AuthForm';

// Mock the useAuthForm hook
jest.mock('./useAuthForm', () => ({
  useAuthForm: jest.fn(() => ({
    toggleVisibility: jest.fn(),
    onSubmit: jest.fn(),
    handleSubmit: jest.fn(),
    isLoading: false,
    isVisible: false,
  })),
}));

describe('AuthForm🧪', () => {
  test('renders AuthForm component for login type', () => {
    render(<AuthForm type='login' />);

    // Check if Email and Password inputs are rendered
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // Check if Login button is rendered
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();

    // Check if "Don't have an account?" text is rendered
    const noAccountText = screen.getByText(/don't have an account/i);
    expect(noAccountText).toBeInTheDocument();

    // Check if Register link is rendered
    const registerLink = screen.getByRole('link', { name: /register/i });
    expect(registerLink).toBeInTheDocument();
  });

  test('renders AuthForm component for register type', () => {
    render(<AuthForm type='register' />);

    // Check if Full Name, Email, and Password inputs are rendered
    const fullNameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    expect(fullNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // Check if Register button is rendered
    const registerButton = screen.getByRole('button', { name: /register/i });
    expect(registerButton).toBeInTheDocument();

    // Check if "Already have an account?" text is rendered
    const haveAccountText = screen.getByText(/already have an account/i);
    expect(haveAccountText).toBeInTheDocument();

    // Check if Login link is rendered
    const loginLink = screen.getByRole('link', { name: /login/i });
    expect(loginLink).toBeInTheDocument();
  });
});
