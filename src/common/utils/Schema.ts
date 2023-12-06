import * as yup from 'yup';
yup.setLocale({
  mixed: {
    required: 'This field is required',
  },
});

export const Schema = {
  REQUIRED: yup.string().required(),
  EMAIL: yup.string().required().email(),
  PASSWORD: yup.string().required().min(8).max(20),
};
