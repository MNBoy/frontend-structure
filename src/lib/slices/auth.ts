import { IUser } from '@/common/interfaces';
import { StateCreator } from 'zustand';

export interface IAuthSlice {
  token: string | null;
  setToken: (token: string | null) => void;

  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const createAuthSlice: StateCreator<IAuthSlice> = (set, get) => ({
  token: null,
  setToken: (token: string | null) => {
    set({ token });
  },

  user: null,
  setUser: (user: IUser | null) => {
    set({ user });
  },
});
