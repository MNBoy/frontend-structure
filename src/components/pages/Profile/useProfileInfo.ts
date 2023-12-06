import { Schema, Tools, useYupValidationResolver } from '@/common/utils';
import { useEditProfile } from '@/hooks/user';
import { useAuthStore } from '@/lib';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const GENDER_OPTIONS = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];

// Todo: These tags should get from api
const TAGS_OPTIONS = [
  {
    label: 'FrontEnd',
    value: 'front_end',
  },
  {
    label: 'BackEnd',
    value: 'back_end',
  },
  {
    label: 'Node.js',
    value: 'nodejs',
  },
];

interface IInputs {
  fullName: string;
  email: string;
  description: string;
  gender: 'male' | 'female';
  tags: string;
}

const useProfileInfo = () => {
  const { user } = useAuthStore();

  const { mutate: editProfile, isPending: isLoading } = useEditProfile({
    mutationOptions: {
      onSuccess: (data) => {
        if (data.error === 'Validation Error')
          return Tools.validationErrorHandler(
            setError,
            data?.meta?.errorFields
          );

        if (data.error) return Tools.apiErrorHandler(data.error);

        // Todo: Update user info
        console.log(
          '🚀 ~ file: useProfileInfo.ts:32 ~ useProfileInfo ~ data:',
          data
        );
      },
    },
  });

  // Set initial data
  useEffect(() => {
    if (user) {
      setValue('fullName', user.fullName);
      setValue('email', user.email);
      setValue('gender', user.gender);
      setValue('tags', user.tags.join(','));
      setValue('description', user.description);
    }
  }, [user]);

  const validationSchema = yup.object({
    fullName: Schema.REQUIRED,
    email: Schema.EMAIL,
    gender: Schema.REQUIRED,
    tags: Schema.REQUIRED,
    description: Schema.REQUIRED,
  });
  const {
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IInputs>({
    resolver: useYupValidationResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    const payload = {
      ...data,
      tags: data.tags.split(','),
    };
    editProfile({
      payload,
    });
  };

  return {
    GENDER_OPTIONS,
    TAGS_OPTIONS,
    control,
    errors,
    isLoading,
    handleSubmit,
    onSubmit,
  };
};

export default useProfileInfo;
