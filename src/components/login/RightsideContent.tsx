import React from "react";
import login from "../../assets/login.jpg";
const RightsideContent = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-5 md:mt-0 w-1/2">
      <img className="object-cover" src={login} alt="" />
    </div>
  );
};

export default RightsideContent;
