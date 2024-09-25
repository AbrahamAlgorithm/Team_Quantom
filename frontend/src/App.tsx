import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SignupPage from "./pages/authentication/SignupPage";
import LoginPage from "./pages/authentication/LoginPage";
import { Toaster } from "react-hot-toast";
import Homepage from "./pages/Homepage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/auth" element={<Outlet />}>
          <Route index element={<Navigate to="register" replace />} />

          <Route path="register" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>

      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            color: "#000",
            fontSize: "0.8rem",
          },
        }}
      />
    </>
  );
};

export default App;
