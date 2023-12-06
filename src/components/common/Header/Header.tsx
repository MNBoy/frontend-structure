'use client';

import { PATHS } from '@/common/constants';
import { Template } from '@/components/template';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { UserInfo } from './UserInfo';
import { UserSkeleton } from './UserSkeleton';
import { useHeader } from './useHeader';

export const Header = () => {
  const pathname = usePathname();

  const { items, user, isLoading } = useHeader();

  const renderAuthContent = () => {
    if (isLoading) {
      return <UserSkeleton />;
    } else if (user) {
      return <UserInfo user={user} />;
    }

    return (
      <>
        <NavbarItem>
          <Template.Button
            as={Link}
            href={PATHS.AUTH.REGISTER}
            variant='light'
            className='text-on-surface data-[hover]:bg-transparent'
          >
            Register
          </Template.Button>
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Template.Button as={Link} href={PATHS.AUTH.LOGIN}>
            Login
          </Template.Button>
        </NavbarItem>
      </>
    );
  };

  return (
    <Navbar isBordered>
      <NavbarBrand as={Link} href={PATHS.HOME}>
        <Logo />
        <p className='font-bold text-inherit'>
          {process.env.NEXT_PUBLIC_SITE_NAME}
        </p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {items.map((item) => (
          <NavbarItem isActive={pathname === item.href} key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>{renderAuthContent()}</NavbarContent>
    </Navbar>
  );
};
