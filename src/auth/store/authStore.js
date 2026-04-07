import { create } from 'zustand';
import { saveToken, removeToken, getToken } from '../storage/authStorage';

export const useAuthStore = create((set) => ({
  token: null,
  isAuthenticated: false,

  login: async (token) => {
    await saveToken(token);

    set({
      token,
      isAuthenticated: true,
    });
  },

  logout: async () => {
    await removeToken();

    set({
      token: null,
      isAuthenticated: false,
    });
  },

  loadUser: async () => {
    const token = await getToken();

    if (token) {
      set({
        token,
        isAuthenticated: true,
      });
    }
  },
}));