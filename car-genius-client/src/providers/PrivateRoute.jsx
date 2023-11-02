import { Navigate } from "react-router-dom";
import { useAuthHook } from "./Hooks/useAuthHook";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthHook();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
