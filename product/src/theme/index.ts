import { createTheme, type PaletteMode } from "@mui/material";
import { lightPalette } from "./light";
import { darkPalette } from "./dark";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
  });
