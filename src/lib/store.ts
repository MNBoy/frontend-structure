import { create } from 'zustand';
import { IAuthSlice, createAuthSlice } from './slices';

type AppAuthState = IAuthSlice;

export const useAuthStore = create<AppAuthState>()((...a) => ({
  ...createAuthSlice(...a),
}));
