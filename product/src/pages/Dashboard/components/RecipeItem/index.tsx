import { Box, Typography, useTheme } from "@mui/material";
import type { Recipe } from "../../DashboardService";

type Props = {
  recipe: Recipe;
};

export function RecipeItem({ recipe }: Props) {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        border: `1px solid ${palette.divider}`,
        p: 0.5,
        borderRadius: 2,
        textAlign: "left",
      }}
    >
      <Typography variant="body1">{recipe.title}</Typography>
      <Typography variant="body2">{recipe.description}</Typography>
    </Box>
  );
}
