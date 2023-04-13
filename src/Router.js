import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { SignIn, SignUp, TodoList, Error } from "./screen/@page";
import PrivateRoute from "./screen/@page/Route/PrivateRoute";
import PublicRoute from "./screen/@page/Route/PublicRoute";
import PATH from "./service/util/path";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route
            path={PATH.HOME}
            element={<Navigate to={PATH.SIGN_IN} replace />}
          />
          <Route path={PATH.SIGN_IN} element={<SignIn />} />
          <Route path={PATH.SIGN_UP} element={<SignUp />} />
          <Route path={PATH.NOT_FOUND} element={<Error />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={PATH.TODO} element={<TodoList />} />
          <Route path={PATH.NOT_FOUND} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
