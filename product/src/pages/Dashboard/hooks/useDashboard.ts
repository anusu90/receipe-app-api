import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../DashboardService";

export const useDashboard = () => {
  const {
    data: recipes,
    isLoading: isLoadingRecipes,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });

  return { recipes, isLoadingRecipes, error };
};
