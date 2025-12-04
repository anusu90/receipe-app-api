import {
  Box,
  Button,
  CircularProgress,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

import { useLogin } from "./hooks/useLogin";

export function Login() {
  const { palette } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login: handleLogin, loadingLogin } = useLogin();

  const handleSubmit = () => {
    handleLogin({ email, password });
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
      <Typography variant="h6">Login</Typography>
      <TextField
        label="Email"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        {loadingLogin ? <CircularProgress size={20} /> : "Login"}
      </Button>

      <Typography variant="body2">
        Don't have an account?{" "}
        <Link href="/register" color="primary" sx={{ textDecoration: "none" }}>
          Register
        </Link>
      </Typography>
    </Box>
  );
}
