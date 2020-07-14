import React from "react";
import { useParams } from "@reach/router";
import ProjectList from "./ProjectList";

var TEMP_PROJECTS = [
  {
    id: "temp100",
    title: "Death Star UX Refresh",
    description: "Modernize weapons app with a user centric design.",
    lead: "Ingra",
    creatorId: "all805",
    team: "SB",
  },
  {
    id: "temp200",
    title: "Entertainment App for the Falcon",
    description:
      "Allow pilots and passengers to access and control content in flight.",
    lead: "Magnus",
    creatorId: "101",
    team: "DC",
  },
];
const UserProjects = function () {
  let id = useParams().id;
  let loadedProjects = TEMP_PROJECTS.filter(
    (project) => project.creatorId === id
  );

  return (
    <div>
      <ProjectList elements={loadedProjects} />;
    </div>
  );
};

export default UserProjects;
