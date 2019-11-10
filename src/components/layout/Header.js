import React from "react";
import { Link } from "react-router-dom";

const styles = {
  background: "black",
  color: "white",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none"
};

const Header = () => {
  return (
    <header style={styles}>
      <h1>To-Do</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      {" | "}
      <Link style={linkStyle} to="/about">
        About
      </Link>{" "}
      {" | "}
      <Link style={linkStyle} to="/contacts">
        Contacts
      </Link>
    </header>
  );
};

export default Header;
