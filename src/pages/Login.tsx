import React from "react";
import LoginForm from "../components/login/LoginForm";
import RightsideContent from "../components/login/Rightsidecontent";

const Login = () => {
  return (
    <div className="flex items-center w-10/12 mx-auto pt-12">
      <LoginForm />
      <RightsideContent />
    </div>
  );
};

export default Login;
