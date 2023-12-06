import { PATHS } from '@/common/constants';
import { Tools } from '@/common/utils';
import { useAuthStore } from '@/lib';
import { useRouter } from 'next/navigation';
import { Key } from 'react';

const items = [
  {
    label: 'Profile',
    key: 'profile',
  },
  {
    label: 'Logout',
    key: 'logout',
  },
];

export const useUserInfo = () => {
  const router = useRouter();
  const { setToken, setUser } = useAuthStore();

  const removeCredentials = () => {
    Tools.clearUserCredentials();
    setToken(null);
    setUser(null);
  };

  const onAction = (key: Key) => {
    switch (key) {
      case 'profile':
        router.push(PATHS.PROFILE);
        break;

      case 'logout':
        removeCredentials();
        router.push(PATHS.HOME);
        break;

      default:
        break;
    }
  };

  return { items, onAction };
};
