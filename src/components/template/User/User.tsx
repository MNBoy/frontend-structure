import { User as NxUiUser, UserProps } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface I_Props extends UserProps {}

export const User: FC<I_Props> = ({ ...rest }) => {
  return <NxUiUser className={clsx(rest.className)} {...rest} />;
};
