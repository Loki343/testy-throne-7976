import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem('name')) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
