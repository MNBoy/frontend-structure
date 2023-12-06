import axiosInstance from './axiosInstance';
const Server = axiosInstance();

const baseUrl = '/auth';

// Interfaces
export interface IRegisterUserAuth {
  payload: {
    fullName: string;
    email: string;
    password: string;
  };
}
export interface ILoginUserAuth {
  payload: {
    email: string;
    password: string;
  };
}

export const authApi = {
  register: ({ payload }: IRegisterUserAuth) => {
    const url = `${baseUrl}/register`;
    return Server({
      url,
      method: 'POST',
      body: payload,
    });
  },
  login: ({ payload }: ILoginUserAuth) => {
    const url = `${baseUrl}/login`;
    return Server({
      url,
      method: 'POST',
      body: payload,
    });
  },
};
