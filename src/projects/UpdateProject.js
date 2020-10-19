import React, { useEffect, useState, useContext } from "react";
import { useParams, navigate } from "@reach/router";
import Button from "../shared/Button";
import Input from "../shared/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../shared/utilities/validators";
import { useForm } from "../shared/hooks/form";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";
import Card from "../shared/Card";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorModal from "../shared/ErrorModal";
import "./Projects.css";

const UpdateProject = function () {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedProject, setLoadedProject] = useState();
  const projectId = useParams().projectId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      lead: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // function to send the request and fetch the data
  useEffect(() => {
    const fetchProject = async () => {
      // catching errors
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/projects/${projectId}`
        );
        setLoadedProject(responseData.project);
        setFormData(
          {
            title: {
              value: responseData.project.title,
              isValid: true,
            },
            description: {
              value: responseData.project.description,
              isValid: true,
            },
            lead: {
              value: responseData.project.lead,
              isValid: true,
            },
          },
          true
        );
        // eslint-disable-next-line no-empty
      } catch (err) {}
    };
    fetchProject();
  }, [sendRequest, projectId, setFormData]);

  const projectUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/projects/${projectId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          lead: formState.inputs.lead.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      navigate("/" + auth.userId + "/projects");
      // eslint-disable-next-line no-empty
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedProject && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Project not found</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedProject && (
        <form className="project-form" onSubmit={projectUpdateSubmitHandler}>
          <Input
            id="title"
            element="textarea"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required title"
            onInput={inputHandler}
            initialValue={loadedProject.title}
            initialValid={true}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter required description"
            onInput={inputHandler}
            initialValue={loadedProject.description}
            initialValid={true}
          />
          <Input
            id="lead"
            element="input"
            label="Lead"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter required lead"
            onInput={inputHandler}
            initialValue={loadedProject.lead}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PROJECT
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateProject;
