import axios from 'axios';
import { useAuthStore } from '../features/auth/store/authStore';
import { showErrorToast } from  '../services/toastService';
const api = axios.create({
  baseURL: "http://192.168.0.120:8000",
  timeout: 5000,
  headers: {
  "Content-Type": "application/json"
}
});
console.log("apiClient...");

/* =======================
   REQUEST INTERCEPTOR
======================= */
api.interceptors.request.use(
  (config) => {
    try {
      const state = useAuthStore?.getState?.();

      const accessToken = state?.token ;
      // console.log("INTERCEPTOR TOKEN:", accessToken);
      // console.log("AUTH REQUIRED:", config.authRequired);

      if (accessToken && config.authRequired !== false) {
        config.headers = {
          ...(config.headers || {}),
          Authorization: `Bearer ${accessToken}`,
        };
      }
      // console.log('➡️ REQUEST:', {
      //   url: config.url,
      //   method: config.method,
      //   baseURL: config.baseURL,
      //   data: config.data,
      //   headers: config.headers,
      // });
      // console.log('➡️ REQUEST:', {headers: config.headers});
      // console.log('➡️ REQUEST:', config.method, config.baseURL + config.url);
      return config;
    } catch (err) {
      // console.error('🚨 Auth interceptor failed:', err);
      return config; // 🚑 NEVER block the request
    }
  },
  (error) => Promise.reject(error)
);

/* =======================
   RESPONSE INTERCEPTOR
======================= */
api.interceptors.response.use(
  // (response) => response.data,
  (response) => {
    console.log('✅ API Response:', {
      url: response.config?.url,
      method: response.config?.method,
      status: response.status,
      data: response.data,
    });

    return response.data;
  },
  async (error) => {
    const status = error.response?.status;

    // 🔒 Centralized 401 handling
    if (status === 401) {
      console.warn('🔒 401 → clearing auth session');
      const { logout } = useAuthStore.getState();
      await logout();
    }
    // 🚫 404 – Resource not found
    else if (status === 404) {
      showErrorToast(
        'Not found',
        'Requested resource was not found'
      );
    }
    // 🚫 404 – Resource not found
    else if (status === 500) {
      showErrorToast(
        'Server error',
        'Internal server error'
      );
    }
    // 🌐 Network error (no response)
    else if (!error.response) {
      showErrorToast(
        'Network error',
        'Please check your internet connection'
      );
    }
    // ⏱ Timeout
    else if (error.code === 'ECONNABORTED') {
      showErrorToast(
        'Request timeout',
        'Server is taking too long to respond'
      );
    }

    // ❗ Always normalize & throw AppError
    // throw normalizeError(error);
    return Promise.reject(error); // 🔥 REQUIRED
  }
);


export default api;