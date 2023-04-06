import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Heading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>Hello, React!</h1>
      <Link to="/upload">upload</Link>
      <Link to="/list">list</Link>
      <Link to="/">home</Link>
    </div>
  );
}

export default Heading;
