import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useDashboard } from "./hooks/useDashboard";
import { AddRecipe } from "./components/AddRecipe";
import { RecipeItem } from "./components/RecipeItem";

export function Dashboard() {
  const { recipes, isLoadingRecipes } = useDashboard();

  if (isLoadingRecipes) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />;
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <h1>Dashboard</h1>
      <Grid container spacing={2}>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Typography variant="h6">Recipes</Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {recipes?.map((recipe) => (
              <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
          </Box>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <AddRecipe />
        </Grid>
      </Grid>
    </Box>
  );
}
