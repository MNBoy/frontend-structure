// UserInfo.test.js
import '@testing-library/jest-dom'; // Import the jest-dom extension
import { render, screen } from '@testing-library/react';
import { UserInfo } from './UserInfo';
import { UserSkeleton } from './UserSkeleton';

// Mock the useUserInfo hook
jest.mock('./useUserInfo', () => ({
  useUserInfo: jest.fn(() => ({
    items: [
      {
        label: 'Logout',
        key: 'logout',
      },
    ],
    onAction: jest.fn(),
  })),
}));

const mockUser = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  description: 'Lorem ipsum dolor sit amet',
  gender: 'male',
  tags: ['tag1', 'tag2'],
  emailActive: true,
  deleted: false,
  _id: 'user-id-123',
  createdAt: '2023-01-01T00:00:00.000Z',
  updatedAt: '2023-01-02T00:00:00.000Z',
};

describe('UserInfo🧪', () => {
  test('renders user skeleton component', () => {
    render(<UserSkeleton />);

    // Check if the skeleton element are present
    const skeletonElements = screen.getByTestId('user-skeleton');
    expect(skeletonElements).toBeInTheDocument();
  });
  test('renders UserInfo component with user information and dropdown menu', () => {
    render(<UserInfo user={mockUser} />);

    // Check if user information is rendered
    const userNameElement = screen.getByText(/john doe/i);
    const userEmailElement = screen.getByText(/john.doe@example.com/i);
    expect(userNameElement).toBeInTheDocument();
    expect(userEmailElement).toBeInTheDocument();

    // Check if the dropdown trigger button is present
    const dropdownTriggerButton = screen.getByRole('button', {
      name: /john doe/i,
    });
    expect(dropdownTriggerButton).toBeInTheDocument();

    // Check if the dropdown menu is initially closed
    const dropdownMenu = screen.queryByLabelText('User Actions');
    expect(dropdownMenu).not.toBeInTheDocument();
  });
});
