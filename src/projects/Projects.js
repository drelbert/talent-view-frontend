import React from "react";
import NewProject from "./NewProject";
import UserProjectsAll from "./UserProjectsAll";
import "./Projects.css";

const Projects = function () {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="one">
          <NewProject />
        </div>
        <div className="two">
          <UserProjectsAll />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
