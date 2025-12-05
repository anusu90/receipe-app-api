import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useAddRecipe } from "./hooks/useAddRecipe";

export function AddRecipe() {
  const { palette } = useTheme();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleResetForm = () => {
    setTitle("");
    setDescription("");
  };

  const { addRecipe, loadingAddRecipe } = useAddRecipe({ handleResetForm });

  const handleAddRecipe = () => {
    addRecipe({ title, description });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "400px",
        border: `1px solid ${palette.divider}`,
        p: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6">Add Recipe</Typography>
      <TextField
        label="Title"
        type="text"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        type="text"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddRecipe}
      >
        {loadingAddRecipe ? <CircularProgress size={20} /> : "Add Recipe"}
      </Button>
    </Box>
  );
}
