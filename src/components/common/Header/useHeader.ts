import { PATHS } from '@/common/constants';
import { Tools } from '@/common/utils';
import { useGetProfile } from '@/hooks/user';
import { useAuthStore } from '@/lib';
import { useEffect } from 'react';

const items = [
  {
    label: 'Home',
    href: PATHS.HOME,
  },
];

export const useHeader = () => {
  const { setToken, setUser, user, token } = useAuthStore();

  const { data: profileData, isLoading } = useGetProfile({
    queryOptions: {
      enabled: token !== null,
    },
  });

  useEffect(() => {
    if (!user && !isLoading && profileData) {
      setUser(profileData);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!token) {
      const storedCredentials = Tools.getUserCredentials();
      if (storedCredentials.token) {
        setToken(storedCredentials.token);
      }
    }
  }, []);

  return { items, user, isLoading };
};
