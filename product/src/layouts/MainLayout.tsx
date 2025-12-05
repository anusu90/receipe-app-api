import { Box } from "@mui/material";
import { Outlet } from "react-router";
import TopNav from "./components/TopNav";

export function MainLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopNav />
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
