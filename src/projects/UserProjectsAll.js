import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import ErrorModal from "../shared/ErrorModal";
import LoadingSpinner from "../shared/LoadingSpinner";

const UserProjectsAll = function () {
  // managing response data by setting up state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedProjects, setLoadedProjects] = useState();

  useEffect(() => {
    // creating an IIFE to use async await
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://localhost:5000/api/projects/allProjects"
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedProjects(responseData.projects);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    // hey, callsite!
    sendRequest();
  }, []);

  const errorHandler = function () {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedProjects && <ProjectList items={loadedProjects} />}
    </React.Fragment>
  );
};

export default UserProjectsAll;
