import { create } from "zustand";
import { combine, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type User = {
  name: string;
  email: string;
};

type AuthStoreState = {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
};

type AuthStoreActions = {
  getUser: () => User | null;
  getAccessToken: () => string | null;
  getRefreshToken: () => string | null;
  getIsAuthenticated: () => boolean;
  logout: () => void;
  setAccessToken: (accessToken: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setRefreshToken: (refreshToken: string) => void;
  setUser: (user: User) => void;
};

type AuthStore = AuthStoreState & AuthStoreActions;

const initialState: AuthStoreState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authStore = immer<AuthStore>(
  combine(initialState, (set, get) => ({
    getUser: () => get().user,
    getAccessToken: () => get().accessToken,
    getRefreshToken: () => get().refreshToken,
    getIsAuthenticated: () => get().isAuthenticated,
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
    setAccessToken: (accessToken) => set({ accessToken }),
    setRefreshToken: (refreshToken) => set({ refreshToken }),
    setUser: (user) => set({ user }),
    logout: () =>
      set({
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
        user: null,
      }),
  }))
);

export const useAuthStore = create<AuthStore>()(
  persist(authStore, { name: "auth" })
);
