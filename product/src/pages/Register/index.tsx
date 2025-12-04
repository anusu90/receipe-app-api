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

import { useRegister } from "./hooks/useRegister";

export function Register() {
  const { palette } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register: handleRegister, loadingRegister } = useRegister();

  const handleSubmit = () => {
    handleRegister({ name, email, password });
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
      <Typography variant="h6">Register</Typography>
      <TextField
        label="Name"
        type="text"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
        {loadingRegister ? <CircularProgress size={20} /> : "Register"}
      </Button>

      <Typography variant="body2">
        Already have an account?{" "}
        <Link href="/login" color="primary" sx={{ textDecoration: "none" }}>
          Login
        </Link>
      </Typography>
    </Box>
  );
}
