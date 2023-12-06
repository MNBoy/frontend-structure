import { IUser } from '@/common/interfaces';
import { IEditProfile, userApi } from '@/services/user';
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

export const useGetProfile = ({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<any, any, IUser, any>, 'queryKey'>;
}) => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => userApi.getProfile(),
    select: (result: any) => result.data.user as IUser,
    ...queryOptions,
  });
};

export const useEditProfile = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<any, any, IEditProfile, any>;
}) => {
  return useMutation({
    mutationKey: ['edit-profile'],
    mutationFn: ({ payload }: IEditProfile) => userApi.editProfile({ payload }),
    ...mutationOptions,
  });
};
