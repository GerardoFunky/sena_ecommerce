import {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { endpoints } from "./endpoints";

// Local storage keys
const TOKEN_KEY = "auth_token";
const REFRESH_TOKEN_KEY = "refresh_token";

/**
 * Configure request and response interceptors for an Axios instance
 * @param client - Axios instance to configure
 */
export const setupInterceptors = (client: AxiosInstance): void => {
  // Add request interceptor
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      // Add auth token to requests if available
      const token = localStorage.getItem(TOKEN_KEY);
      if (token && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      // Log requests in development
      if (process.env.NODE_ENV === "development") {
        console.log(
          `🌐 API REQUEST: ${config.method?.toUpperCase()} ${config.url}`
        );
      }

      return config;
    },
    (error: AxiosError) => {
      // Handle request errors
      console.error("🚫 Request Error:", error);
      return Promise.reject(error);
    }
  );

  // Add response interceptor
  client.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      // Log successful responses in development
      if (process.env.NODE_ENV === "development") {
        console.log(
          `✅ API RESPONSE (${response.status}):`,
          response.config.url
        );
      }

      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

      // Handle 401 Unauthorized errors (token expired)
      if (error.response?.status === 401 && !originalRequest._retry) {
        // Only try to refresh token once
        originalRequest._retry = true;

        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
        if (refreshToken) {
          try {
            // Attempt to get new access token
            const response = await client.post(endpoints.auth.refreshToken, {
              refresh_token: refreshToken,
            });

            const { token, refresh_token } = response.data;

            // Store new tokens
            localStorage.setItem(TOKEN_KEY, token);
            localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);

            // Update authorization header
            if (originalRequest.headers) {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
            }

            // Retry the original request
            return client(originalRequest);
          } catch (refreshError) {
            // If refresh fails, logout user
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(REFRESH_TOKEN_KEY);

            // Redirect to login page if in browser environment
            if (typeof window !== "undefined") {
              window.location.href = "/auth/login?session=expired";
            }

            return Promise.reject(refreshError);
          }
        }
      }

      // Handle network errors
      if (error.code === "ECONNABORTED" || error.message === "Network Error") {
        console.error("🔌 Network Error: The server is unreachable");
      }

      // Log API errors in development
      if (process.env.NODE_ENV === "development") {
        console.error("🚫 API Error Response:", {
          status: error.response?.status,
          url: originalRequest.url,
          message: error.response?.data?.message || error.message,
        });
      }

      return Promise.reject(error);
    }
  );
};
