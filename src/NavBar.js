import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const navStyle = {
    display: "inline-block",
    width: "25%",
    padding: "12px",
    margin: "0 4% 6px",
    color: "black",
    textAlign: "left",
  };

  return (
    <div>
      <NavLink to ="/"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Home
      </NavLink>
    </div>
  )
};

export default NavBar