/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import * as yup from 'yup';

interface ValidationResult {
  values: Record<string, any>;
  errors: Record<string, { type: string; message: string }>;
}

export const useYupValidationResolver = (validationSchema: any) =>
  useCallback(
    async (data: Record<string, any>): Promise<ValidationResult> => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (
              allErrors: Record<string, { type: string; message: string }>,
              currentError: yup.ValidationError
            ) => ({
              ...allErrors,
              [currentError.path as string]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
