import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const Filter = ({ children }) => {
  console.log("Filter is initialized");

  let isLoggedIn = Math.random() * 10 > 2 ? true : false;

  //let isLoggedIn = true;
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  console.log(Outlet);
  return <> {children}</>;
};

export default Filter;
