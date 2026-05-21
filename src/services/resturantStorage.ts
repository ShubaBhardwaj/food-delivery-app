import * as SecureStore from "expo-secure-store";

const ACCESS_KEY = "access_token";
const REFRESH_KEY = "refresh_token";
const USER_KEY = "user";

type User = {
  _id: string;
  username: string;
  email: string;
  role: string;
};

export const tokenStore = {
  getAccessKey: async () => {
    return await SecureStore.getItemAsync(ACCESS_KEY);
  },

  getRefreshKey: async () => {
    return await SecureStore.getItemAsync(REFRESH_KEY);
  },

  getUserKey: async () => {
    return await SecureStore.getItemAsync(USER_KEY);
  },

  set: async ({
    accessToken,
    refreshToken,
    user,
  }: {
    accessToken: string;
    refreshToken: string;
    user: User;
  }) => {
    if (accessToken) {
      await SecureStore.setItemAsync(ACCESS_KEY, accessToken);
    }

    if (refreshToken) {
      await SecureStore.setItemAsync(REFRESH_KEY, refreshToken);
    }

    if (user) {
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));
    }
  },

  clear: async () => {
    await SecureStore.deleteItemAsync(ACCESS_KEY);
    await SecureStore.deleteItemAsync(REFRESH_KEY);
    await SecureStore.deleteItemAsync(USER_KEY);
  },
};