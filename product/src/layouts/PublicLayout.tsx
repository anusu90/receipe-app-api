import { Box } from "@mui/material";
import { Outlet } from "react-router";

export function PublicAppLayout() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Outlet />
    </Box>
  );
}
