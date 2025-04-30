import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { setupInterceptors } from "./interceptors";
import { API_BASE_URL } from "@/config/settings";

/**
 * Creates and configures an Axios instance for API requests
 *
 * @param config - Additional Axios configuration options
 * @returns Configured Axios instance
 */
export const createApiClient = (config?: AxiosRequestConfig): AxiosInstance => {
  const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    timeout: 30000, // 30 seconds timeout
    ...config,
  });

  // Apply request and response interceptors
  setupInterceptors(client);

  return client;
};

// Create default API client instance
const apiClient = createApiClient();

export default apiClient;

/**
 * Helper function to create a client with auth token
 * @param token - Authentication token
 * @returns Axios instance with auth header
 */
export const createAuthClient = (token: string): AxiosInstance => {
  return createApiClient({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
