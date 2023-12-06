import axiosInstance from './axiosInstance';
const Server = axiosInstance();

const baseUrl = '/users';

export interface IEditProfile {
  payload: {
    fullName: string;
    email: string;
    description: string;
    gender: 'male' | 'female';
    tags: string[];
  };
}

export const userApi = {
  getProfile: () => {
    const url = `${baseUrl}/profile`;
    return Server({
      url,
      method: 'GET',
    });
  },
  editProfile: ({ payload }: IEditProfile) => {
    const url = `${baseUrl}/profile`;
    return Server({
      url,
      method: 'PUT',
      body: payload,
    });
  },
};
