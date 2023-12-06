import { Textarea as NxUiTextarea, TextAreaProps } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IProps extends TextAreaProps {
  errors?: any;
  control?: Control<any>;
}

export const Textarea: FC<IProps> = ({ control, errors, ...rest }) => {
  if (control && rest.name) {
    return (
      <Controller
        name={rest.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <NxUiTextarea
            {...rest}
            onChange={onChange}
            classNames={{
              inputWrapper:
                'focus-within:outline-primary min-h-[100px] resize-y overflow-hidden',
            }}
            className={clsx(rest.className)}
            isInvalid={!!errors[`${rest.name}`]?.message}
            errorMessage={errors[`${rest.name}`]?.message}
          />
        )}
      />
    );
  }

  return (
    <NxUiTextarea
      {...rest}
      classNames={{
        inputWrapper:
          'focus-within:outline-primary min-h-[100px] resize-y overflow-hidden',
      }}
      className={clsx(rest.className)}
    />
  );
};
