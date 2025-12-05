import { client } from "../../../../apiClient/client";

export type AddRecipeArgs = {
  title: string;
  description: string;
};

export function addRecipeService(args: AddRecipeArgs) {
  return client({
    url: "/recipes/",
    method: "POST",
    payload: args,
  });
}
