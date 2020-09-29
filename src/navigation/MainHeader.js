import React, { useContext } from "react";
import { Link } from "@reach/router";
import { AuthContext } from "../shared/context/auth-context";
import "./Navigation.css";

const MainHeader = function () {
  const auth = useContext(AuthContext);
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
          {auth.isLoggedIn && (
            <Link to="/users">
              <li className="nav-links">Users</li>
            </Link>
          )}
          {auth.isLoggedIn && (
            <Link to="/projects/new">
              <li className="nav-links">Add Project</li>
            </Link>
          )}
          {!auth.isLoggedIn && (
            <Link to="/auth">
              <li className="nav-links">Authenticate </li>
            </Link>
          )}
          {auth.isLoggedIn && (
            <Link to="/auth">
              <li>
                <button onClick={auth.logout}>Logout</button>
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

// {`/${auth.userId}/projects `}
