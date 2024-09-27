import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PublicRouter = ({ children }) => {
   const {state} = useContext(AuthContext)
     console.log("entre a private", state?.logged);

  return state?.logged === false ? children : <Navigate to="/*"/>
};

export default PublicRouter;
