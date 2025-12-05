import { client } from "../../apiClient/client";

export type Recipe = {
  id: string;
  title: string;
  description: string;
  user: {
    name: string;
  };
};

export function getRecipes() {
  return client<Recipe[], void>({
    url: "/recipes/",
    method: "GET",
  });
}
