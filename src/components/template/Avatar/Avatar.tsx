import { AvatarProps, Avatar as NxUiAvatar } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface I_Props extends AvatarProps {}

export const Avatar: FC<I_Props> = ({ ...rest }) => {
  return (
    <NxUiAvatar
      imgProps={{
        draggable: false,
      }}
      className={clsx(rest.className)}
      {...rest}
    />
  );
};
