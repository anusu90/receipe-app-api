import { login as loginService } from "../LoginService";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { mutate: login, isPending: loadingLogin } = useMutation({
    mutationFn: loginService,
    onError: (error) => {
      console.error(error);
    },
  });

  return { login, loadingLogin };
};
