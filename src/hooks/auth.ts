import { ILoginUserAuth, IRegisterUserAuth, authApi } from '@/services/auth';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useUserRegister = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<any, any, IRegisterUserAuth, any>;
}) => {
  return useMutation({
    mutationKey: ['register-user'],
    mutationFn: ({ payload }: IRegisterUserAuth) =>
      authApi.register({ payload }),
    ...mutationOptions,
  });
};

export const useUserLogin = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<any, any, ILoginUserAuth, any>;
}) => {
  return useMutation({
    mutationKey: ['login-user'],
    mutationFn: ({ payload }: ILoginUserAuth) => authApi.login({ payload }),
    ...mutationOptions,
  });
};
