import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../screens/login";
import Register from "../screens/register";
import AuthLayout from "../components/layouts/auth";
import MainLayout from "../components/layouts/main";
import Posts from "../screens/posts";

export default function MainRoutes() {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="/auth/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate replace to="/auth/login" />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Posts />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </>
      )}
    </Routes>
  );
}
