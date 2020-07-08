import React from "react";
import { render } from "react-dom"; // just importing the render module, this syntax is similar to destructuring
import { Router } from "@reach/router";
import Data from "./Data";
import SearchParams from "./SearchParams";
import MainHeader from "./navigation/MainHeader";
import Users from "./users/Users";
import Projects from "./projects/Projects";
import UserProjects from "./projects/UserProjects";
import UpdateProject from "./projects/UpdateProject";

const App = () => {
  return (
    // parens allow JS to keep compiling
    <div>
      <MainHeader />
      <h2>Title</h2>
      <Router>
        <Data path="/" />
        <Users path="/users" />
        <UserProjects path="/:id/projects" />
        <Projects path="/projects" />
        <UpdateProject path="/projects/:projectId" />
        <SearchParams path="/search" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
