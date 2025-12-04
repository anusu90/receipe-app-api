import { useMutation } from "@tanstack/react-query";
import { register as registerService } from "../RegisterService";

export const useRegister = () => {
  const { mutate: register, isPending: loadingRegister } = useMutation({
    mutationFn: registerService,
    onError: (error) => {
      console.error(error);
    },
  });

  return { register, loadingRegister };
};
