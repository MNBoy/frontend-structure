'use client';

import { PATHS } from '@/common/constants';
import { Template } from '@/components/template';
import { Eye, EyeSlash } from 'iconsax-react';
import Link from 'next/link';
import { FC } from 'react';
import { useAuthForm } from './useAuthForm';

interface IProps {
  type: 'login' | 'register';
}

export const AuthForm: FC<IProps> = ({ type }) => {
  const {
    toggleVisibility,
    onSubmit,
    handleSubmit,
    isLoading,
    control,
    errors,
    isVisible,
  } = useAuthForm({ type });

  return (
    <div className='w-5/6 lg:w-1/3 flex flex-col gap-y-4 items-center'>
      {type === 'register' && (
        <>
          <Template.Input
            control={control}
            errors={errors}
            label='Full Name'
            name='fullName'
          />
        </>
      )}
      <Template.Input
        control={control}
        errors={errors}
        label='Email'
        name='email'
      />
      <Template.Input
        control={control}
        errors={errors}
        label='Password'
        name='password'
        type={isVisible ? 'text' : 'password'}
        endContent={
          <button className='focus:outline-none' onClick={toggleVisibility}>
            {!isVisible ? (
              <Eye className='text-default-400 pointer-events-none' />
            ) : (
              <EyeSlash className='text-default-400 pointer-events-none' />
            )}
          </button>
        }
      />
      <Template.Button
        isLoading={isLoading}
        className='w-full'
        onClick={handleSubmit(onSubmit)}
        type='submit'
      >
        {type === 'login' ? 'Login' : 'Register'}
      </Template.Button>
      <div className='flex items-center gap-x-1 text-sm'>
        <p>
          {type === 'login'
            ? "Don't have an account?"
            : 'Already have an account?'}
        </p>
        <Link
          className='underline'
          href={type === 'login' ? PATHS.AUTH.REGISTER : PATHS.AUTH.LOGIN}
        >
          {type === 'login' ? 'Register' : 'Login'}
        </Link>
      </div>
    </div>
  );
};
