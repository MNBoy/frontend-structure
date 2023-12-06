import { PATHS } from '@/common/constants';
import { IUser } from '@/common/interfaces';
import { Schema, Tools, useYupValidationResolver } from '@/common/utils';
import { useUserLogin, useUserRegister } from '@/hooks/auth';
import { useAuthStore } from '@/lib';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

interface IInputs {
  fullName: string;
  email: string;
  password: string;
}

interface IProps {
  type: 'login' | 'register';
}

export const useAuthForm = ({ type }: IProps) => {
  const router = useRouter();
  const { setToken, setUser } = useAuthStore();

  const [isVisible, setIsVisible] = useState(false);

  const { mutate: registerUser, isPending: isRegisterLoading } =
    useUserRegister({
      mutationOptions: {
        onSuccess: (data) => {
          if (data.error === 'Validation Error')
            return Tools.validationErrorHandler(
              setError,
              data?.meta?.errorFields
            );

          if (data.error) return Tools.apiErrorHandler(data.error);

          // Set Credentials
          const { token, user } = data.data;
          setCredentials({ token, user });
        },
      },
    });

  const { mutate: loginUser, isPending: isLoginLoading } = useUserLogin({
    mutationOptions: {
      onSuccess: (data) => {
        if (data.error === 'Validation Error')
          return Tools.validationErrorHandler(
            setError,
            data?.meta?.errorFields
          );

        if (data.error) return Tools.apiErrorHandler(data.error);

        // Set Credentials
        const { token, user } = data.data;
        setCredentials({ token, user });

        router.push(PATHS.HOME);
      },
    },
  });

  const validationSchema = yup.object({
    ...(type === 'register' && {
      fullName: Schema.REQUIRED,
    }),
    email: Schema.EMAIL,
    password: Schema.PASSWORD,
  });

  const {
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<IInputs>({
    resolver: useYupValidationResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    if (type === 'register') {
      registerUser({
        payload: data,
      });
    } else {
      loginUser({
        payload: data,
      });
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const setCredentials = ({ token, user }: { token: string; user: IUser }) => {
    Tools.setUserCredentials(token);
    setToken(token);
    setUser(user);
  };

  return {
    toggleVisibility,
    onSubmit,
    handleSubmit,
    isLoading: isLoginLoading || isRegisterLoading,
    control,
    errors,
    isVisible,
  };
};
