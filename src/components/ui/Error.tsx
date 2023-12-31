import React from "react";
import {IErrorProps} from "../../interfaces/error";

const Error = ({message}: IErrorProps) => {
  return (
    <div className="flex items-center">
      <div className="relative bg-red-200 max-w-xl px-4 py-2 text-red-800 rounded shadow w-full">
        <span className="block text-sm font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Error;
