import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SignupPage from "./pages/authentication/SignupPage";
import LoginPage from "./pages/authentication/LoginPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">DocTrim</h1>
            <p className="text-gray-600">Upload your PDF to get started!</p>
          </div>
        }
      />

      <Route path="/auth" element={<Outlet />}>
        <Route index element={<Navigate to="register" replace />} />

        <Route path="register" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
