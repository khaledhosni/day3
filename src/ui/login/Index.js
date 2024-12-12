import React from "react";
import { Navigate } from "react-router-dom";

const Index = () => {
  let isLoggedIn = Math.random() * 10 > 5 ? true : false;
  return (
    <div>
      {isLoggedIn ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />}
    </div>
  );
};

export default Index;
