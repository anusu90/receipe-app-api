import { Navigate, Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export default function PublicApp() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
