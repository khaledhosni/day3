import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div style={{ color: "white" }}>
      <nav>
        <ul>
          <li>
            <Link to={"/home"}> Home </Link>{" "}
          </li>
          <li>
            <Link to={"/users"}> Users </Link>{" "}
          </li>
          <li>
            <Link to={"/products"}> Products </Link>{" "}
          </li>
          <li>
            <Link to={"/about"}> About Us </Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
