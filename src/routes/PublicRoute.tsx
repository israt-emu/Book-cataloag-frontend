import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {IProps} from "./PrivateRoute";

const PublicRoute = ({children}: IProps) => {
  const isLoggedIn = useAuth();
  console.log(isLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/allbooks" />;
};
export default PublicRoute;
