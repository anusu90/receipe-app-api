import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.tsx";
import { getTheme } from "./theme/index.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { apiClient } from "./ApiClient/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={apiClient}>
      <ThemeProvider theme={getTheme("light")}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
