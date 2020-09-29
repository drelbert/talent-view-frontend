import React, { useState, useCallback } from "react";
import { render } from "react-dom"; // just importing the render module, this syntax is similar to destructuring
import { Router, Redirect } from "@reach/router";
import Data from "./Data";
import MainHeader from "./navigation/MainHeader";
import Users from "./users/Users";
import NewProject from "./projects/NewProject";
import UserProjects from "./projects/UserProjects";
import UpdateProject from "./projects/UpdateProject";
import Auth from "./users/Auth";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  // adding a new state, then initialize with useState
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  // login/logout functions wrapped with useCallback to limit re-creation
  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Router>
        <Data path="/" />
        <Users path="/users" />
        <UserProjects path="/:userId/projects" />
        <NewProject path="/projects/new" />
        <UpdateProject path="/projects/:projectId" />
        <Redirect from="/auth" to="/" noThrow />
      </Router>
    );
  } else {
    routes = (
      <Router>
        <Data path="/" />
        <Auth path="/auth" />
        <Redirect from="/" to="/auth" />
      </Router>
    );
  }

  // parens allow JS to keep compiling
  return (
    <div>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <MainHeader />
        <main>{routes}</main>
      </AuthContext.Provider>
    </div>
  );
};

render(<App />, document.getElementById("root"));
