import axios from "axios";
import SuperTokens from "supertokens-website";

SuperTokens.addAxiosInterceptors(axios);

const client = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // Response interceptor: Handle token expiration
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      // eslint-disable-next-line no-console
      console.log("Response Interceptor Triggered");
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // eslint-disable-next-line no-console
          console.log("Refreshing access token...");
          const refreshResponse = await instance.post("/api/login/refresh", {
            withCredentials: true,
          });

          // eslint-disable-next-line no-console
          console.log("refreshResponse", refreshResponse);

          if (refreshResponse.status === 200) {
            return instance(originalRequest);
          }
        } catch (refreshError) {
          // eslint-disable-next-line no-console
          console.error("Token refresh failed:", refreshError);
          // userStore.removeAuthTokens();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export default client;
