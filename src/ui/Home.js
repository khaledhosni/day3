import React from "react";
import SideMenu from "./util/SideMenu";

const Home = () => {
  return (
    <div>
      <SideMenu />
      <h1 style={{ background: "red", color: "white" }}>
        {" "}
        Welcome To Home Pgae
      </h1>
    </div>
  );
};

export default Home;
