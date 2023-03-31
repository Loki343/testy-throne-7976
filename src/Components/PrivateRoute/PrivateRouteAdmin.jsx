import { Navigate } from "react-router-dom";

const PrivateRouteAdmin = ({ children }) => {
  if (!localStorage.getItem("adminAuth")) {
    return <Navigate to="/signinadmin" />;
  }

  return children;
};

export default PrivateRouteAdmin;
