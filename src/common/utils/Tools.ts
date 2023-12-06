import toast from 'react-hot-toast';

export const Tools = {
  setUserCredentials: (token: string): string => {
    localStorage.setItem('USER_AUTH_TOKEN', token);
    return token;
  },
  clearUserCredentials: () => {
    localStorage.removeItem('USER_AUTH_TOKEN');
  },
  getUserCredentials: (): { token: string | null } => {
    const token = localStorage.getItem('USER_AUTH_TOKEN');
    return { token };
  },
  capitalizeFirstLetter: (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  objectToQueryString: (object = {}, withQuestionMark = true) => {
    const filteredObject: any = Object.fromEntries(
      Object.entries(object).filter((item) => item[1] || item[1] === false)
    );
    const query = new URLSearchParams(filteredObject).toString();

    return query && withQuestionMark ? `?${query}` : query;
  },
  validationErrorHandler: (
    setError: any,
    errors: {
      field: string;
      message: string;
    }[]
  ) => {
    if (errors) {
      errors.forEach((errorField) => {
        setError(errorField.field, {
          type: 'custom',
          message: errorField.message,
        });
      });
    }
  },
  apiErrorHandler: (error: any) => {
    toast.error(error || 'Something went wrong!');
    if (error) console.error(error);
  },
};
