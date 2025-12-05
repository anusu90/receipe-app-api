import { useMutation } from "@tanstack/react-query";
import { addRecipeService } from "../AddRecipeService";
import { apiClient } from "../../../../../apiClient";

type Props = {
  handleResetForm: () => void;
};

export const useAddRecipe = ({ handleResetForm }: Props) => {
  const { mutate: addRecipe, isPending: loadingAddRecipe } = useMutation({
    mutationFn: addRecipeService,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      apiClient.invalidateQueries({ queryKey: ["recipes"] });
      handleResetForm();
    },
  });

  return { addRecipe, loadingAddRecipe };
};
