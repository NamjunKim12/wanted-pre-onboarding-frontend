import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { SignIn, SignUp, TodoList } from "./screen/@page";
import PrivateRoute from "./screen/@page/Route/PrivateRoute";
import PublicRoute from "./screen/@page/Route/PublicRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Navigate to="/signIn" replace />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<>잘못된 페이지입니다.</>} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<TodoList />} />
          <Route path="*" element={<>잘못된 페이지입니다.</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
