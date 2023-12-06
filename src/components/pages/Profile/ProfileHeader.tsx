'use client';

import { Template } from '@/components/template';
import { useAuthStore } from '@/lib';

export const ProfileHeader = () => {
  const { user } = useAuthStore();

  return (
    <>
      <div className='h-20 lg:h-28 w-full bg-secondary-background' />
      <div className='-mt-10 lg:-mt-14 flex flex-col items-center gap-y-2 lg:items-start lg:px-10'>
        <Template.User
          avatarProps={{
            isBordered: true,
            src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            className: 'w-24 h-24 lg:w-32 lg:h-32',
          }}
          className='transition-transform'
          classNames={{
            name: 'hidden lg:block text-lg font-medium ml-1 mt-10',
            description: 'hidden lg:block text-[14px] ml-1',
          }}
          description={user?.email}
          name={user?.fullName}
        />
        <span className='font-medium text-lg lg:hidden mr-2'>
          {user?.fullName}
        </span>
      </div>
    </>
  );
};
