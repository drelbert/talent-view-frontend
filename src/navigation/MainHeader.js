import React from "react";
import { Link } from "@reach/router";
import "./Navigation.css";

const MainHeader = function () {
  return (
    <header className="main-header">
      <h1 className="main-navigation__title">
        <Link to="/">Talent View</Link>
      </h1>
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <li>Data</li>
          </Link>
          <Link to="/users">
            <li className="nav-links">Users</li>
          </Link>

          <Link to="/projects">
            <li className="nav-links">Projects</li>
          </Link>

          <Link to="/auth">
            <li className="nav-links">Authenticate </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
