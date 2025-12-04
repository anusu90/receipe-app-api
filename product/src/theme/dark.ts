import { type PaletteOptions } from "@mui/material";

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#90caf9",
    light: "#c3fdff",
    dark: "#5d99c6",
    contrastText: "#000000",
  },
  secondary: {
    main: "#ce93d8",
    light: "#ffc4ff",
    dark: "#9c64a6",
    contrastText: "#000000",
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255,255,255,0.7)",
  },
  divider: "rgba(255,255,255,0.12)",
};
