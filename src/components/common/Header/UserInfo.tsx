'use client';

import { IUser } from '@/common/interfaces';
import { Template } from '@/components/template';
import {
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@nextui-org/react';
import { FC } from 'react';
import { useUserInfo } from './useUserInfo';

interface IProps {
  user: IUser;
}

export const UserInfo: FC<IProps> = ({ user }) => {
  const { items, onAction } = useUserInfo();

  return (
    <div className='flex items-center'>
      <Template.Dropdown placement='bottom-start'>
        <DropdownTrigger>
          <User
            as='button'
            avatarProps={{
              isBordered: true,
              src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            }}
            className='transition-transform'
            classNames={{
              description: 'hidden lg:block',
              name: 'hidden lg:block',
            }}
            description={user.email}
            name={user.fullName}
          />
        </DropdownTrigger>
        <DropdownMenu
          onAction={onAction}
          aria-label='User Actions'
          variant='flat'
        >
          {items.map((item) => (
            <DropdownItem
              key={item.key}
              color={item.key === 'logout' ? 'danger' : 'default'}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Template.Dropdown>
    </div>
  );
};
