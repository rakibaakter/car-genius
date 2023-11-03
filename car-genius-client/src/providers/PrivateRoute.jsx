import { Navigate, useLocation } from "react-router-dom";
import { useAuthHook } from "./Hooks/useAuthHook";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthHook();
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoute;
