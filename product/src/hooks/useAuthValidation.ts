import { useEffect, useState } from "react";
import { client } from "../apiClient/client";
import { useAuthStore } from "../stores/authStore";

type ValidateTokenArgs = {
  token: string;
};

type ValidateTokenResponse = {
  valid: boolean;
} & { code: string; detail: string };

export const useAuthValidation = () => {
  const { getAccessToken, logout } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const validateToken = async ({ token }: ValidateTokenArgs) => {
    const response = await client<ValidateTokenResponse, ValidateTokenArgs>({
      url: "/user/verify-token/",
      method: "POST",
      payload: {
        token: token,
      },
    });

    const isTokenValid = response?.valid;

    if (!isTokenValid) {
      useAuthStore.getState().logout();
      return;
    }
  };

  useEffect(() => {
    const accessToken = getAccessToken();

    if (!accessToken) return;

    try {
      setIsLoading(true);
      validateToken({ token: accessToken });
    } catch (error) {
      console.error(error);
      logout();
    } finally {
      setIsLoading(false);
    }
  }, [getAccessToken, logout]);

  return { isLoading };
};
