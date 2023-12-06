import { DropdownProps, Dropdown as NxUiDropdown } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface I_Props extends DropdownProps {}

export const Dropdown: FC<I_Props> = ({ ...rest }) => {
  return (
    <NxUiDropdown className={clsx(rest.className)} {...rest}>
      {rest.children}
    </NxUiDropdown>
  );
};
