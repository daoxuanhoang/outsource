import { useUser } from "hooks";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { checkAuth } = useUser();

  return checkAuth() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
