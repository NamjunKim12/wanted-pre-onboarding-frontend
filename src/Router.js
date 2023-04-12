import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { SignIn, SignUp } from "./screen/@page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signIn" replace />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
