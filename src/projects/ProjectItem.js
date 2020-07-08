import React from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import "./Projects.css";

const ProjectItem = function (props) {
  return (
    <li className="project-item">
      <Card className="project-item__content">
        <div className="project-item__info">
          <h2>{props.title}</h2>
          <h4>Lead: {props.lead}</h4>
          <p>Description: {props.description}</p>
        </div>
        <div className="project-item__actions">
          <Button to={`/projects/${props.id}`}>UPDATE</Button>
          <Button danger>ARCHIVE</Button>
        </div>
      </Card>
    </li>
  );
};

export default ProjectItem;
