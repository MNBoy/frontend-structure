import { ButtonProps, Button as NxUiButton } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface IProps extends ButtonProps {
  children: React.ReactNode;
}

export const Button: FC<IProps> = ({ children, ...rest }) => {
  return (
    <NxUiButton
      color='primary'
      className={clsx('px-10', rest.className)}
      {...rest}
    >
      {children}
    </NxUiButton>
  );
};
