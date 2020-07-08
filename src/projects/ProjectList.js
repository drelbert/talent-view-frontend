import React from "react";
import ProjectItem from "./ProjectItem";
import Card from "../shared/Card";
import "./Projects.css";

const ProjectList = function (props) {
  if (props.elements.length === 0) {
    return (
      <div className="project-list center">
        <Card>
          <h1>No Projects Yet</h1>
          <button>CREATE</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="project-list">
      {props.elements.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          lead={project.lead}
          team={project.team}
          creatorId={project.creator}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
