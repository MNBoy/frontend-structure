'use client';

import { Template } from '@/components/template';
import { SelectItem } from '@nextui-org/react';
import useProfileInfo from './useProfileInfo';

export const ProfileInfo = () => {
  const {
    GENDER_OPTIONS,
    TAGS_OPTIONS,
    control,
    errors,
    isLoading,
    handleSubmit,
    onSubmit,
  } = useProfileInfo();

  return (
    <section className='w-full px-4 lg:px-10 mt-10'>
      <div className='flex flex-col lg:flex-row gap-y-4 lg:gap-x-40'>
        <div>
          <h1 className='font-medium'>Public Profile</h1>
          <p className='text-on-surface text-sm font-light'>
            This will be displayed on your profile.
          </p>
        </div>
        <div className='flex flex-col gap-y-4 lg:flex-1'>
          <Template.Input
            control={control}
            errors={errors}
            name='fullName'
            label='Full Name'
          />
          <Template.Input
            control={control}
            errors={errors}
            name='email'
            label='Email'
          />
          <Template.Select
            control={control}
            errors={errors}
            name='gender'
            label='Gender'
          >
            {GENDER_OPTIONS.map((gender) => (
              <SelectItem key={gender.value} value={gender.value}>
                {gender.label}
              </SelectItem>
            ))}
          </Template.Select>
          <Template.Select
            control={control}
            errors={errors}
            selectionMode='multiple'
            name='tags'
            label='Tags'
          >
            {TAGS_OPTIONS.map((tag) => (
              <SelectItem key={tag.value} value={tag.value}>
                {tag.label}
              </SelectItem>
            ))}
          </Template.Select>
          <Template.Textarea
            control={control}
            errors={errors}
            name='description'
            label='Description'
          />
        </div>
      </div>
      <Template.Button
        isLoading={isLoading}
        className='mt-10 float-right w-full lg:w-60'
        onClick={handleSubmit(onSubmit)}
        type='submit'
        color='secondary'
      >
        Save Changes
      </Template.Button>
    </section>
  );
};
