import { CircularProgress } from "@mui/material";
import { useAuthValidation } from "../hooks/useAuthValidation";
import { useAuthStore } from "../stores/authStore";
import { AuthenticatedApp } from "./AuthenticatedApp";
import PublicApp from "./PublicApp";

export default function AppContent() {
  const { getIsAuthenticated } = useAuthStore();

  const isAuthenticated = getIsAuthenticated();

  const { isLoading } = useAuthValidation();

  if (isLoading) {
    return <CircularProgress />;
  }

  return isAuthenticated ? <AuthenticatedApp /> : <PublicApp />;
}
