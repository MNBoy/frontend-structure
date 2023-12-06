import { InputProps, Input as NxUiInput } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IProps extends InputProps {
  errors?: any;
  control?: Control<any>;
}

export const Input: FC<IProps> = ({ control, errors, ...rest }) => {
  if (control && rest.name) {
    return (
      <Controller
        name={rest.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <NxUiInput
            {...rest}
            onChange={onChange}
            classNames={{
              inputWrapper: 'focus-within:outline-primary',
            }}
            value={value}
            size='sm'
            className={clsx(rest.className)}
            isInvalid={!!errors[`${rest.name}`]?.message}
            errorMessage={errors[`${rest.name}`]?.message}
          />
        )}
      />
    );
  }

  return (
    <NxUiInput
      {...rest}
      classNames={{
        inputWrapper: 'focus-within:outline-primary',
      }}
      size='sm'
      className={clsx(rest.className)}
    />
  );
};
