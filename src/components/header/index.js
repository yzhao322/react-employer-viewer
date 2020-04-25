import React from "react";
import "./style.css";

function Header(props) {
  return <h2 className="header">{props.children}</h2>;
}

export default Header;