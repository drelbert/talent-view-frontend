import React, { useEffect, useState } from "react";
import { useParams } from "@reach/router";
import ProjectList from "./ProjectList";
import ErrorModal from "../shared/ErrorModal";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useHttpClient } from "../shared/hooks/http-hook";
import "./Projects.css";

const UserProjects = function () {
  const [loadedProjects, setLoadedProjects] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/projects/user/${userId}`
        );
        setLoadedProjects(responseData.projects);
        // eslint-disable-next-line no-empty
      } catch (err) {}
    };
    fetchProjects();
  }, [sendRequest, userId]);

  const projectDeletedHandler = (deletedProjectId) => {
    setLoadedProjects((updatedProjects) =>
      updatedProjects.filter((project) => project.id !== deletedProjectId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedProjects && (
        <ProjectList
          items={loadedProjects}
          onDeleteProject={projectDeletedHandler}
        />
      )}
    </React.Fragment>
  );
};

export default UserProjects;
