import { create } from 'zustand';
import { saveToken, removeToken, getToken } from '../services/authStorage';

export const useAuthStore = create((set) => ({
  token: null,
  isAuthenticated: false,
  isProfileVerified: null,

  login: async (token , isProfileVerified) => {
    await saveToken(token);
   // delete apiClient.defaults.headers.Authorization;

    set({
      token,
      isAuthenticated: true,
      isProfileVerified,
    });
  },

  logout: async () => {
    await removeToken();

    set({
      token: null,
      isAuthenticated: false,
      isProfileVerified: null,
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