import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }
  else {
    return <Navigate to="/" replace />
  }

  // 8:09:56 return isAuthenticated ? (<Outlet/>) : (<Navigate to="/" replace/>);
};

export default ProtectedRoute;