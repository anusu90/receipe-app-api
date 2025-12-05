import { useAuthStore } from "../../../stores/authStore";
import { login as loginService } from "../LoginService";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { setIsAuthenticated, setAccessToken, setRefreshToken } =
    useAuthStore();

  const { mutate: login, isPending: loadingLogin } = useMutation({
    mutationFn: loginService,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (loginResponse) => {
      const { access, refresh } = loginResponse ?? {};

      if (access && refresh) {
        setIsAuthenticated(true);
        setAccessToken(access);
        setRefreshToken(refresh);
      }
    },
  });

  return { login, loadingLogin };
};
