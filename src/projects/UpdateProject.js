import React from "react";
import { useParams } from "@reach/router";
import Button from "../shared/Button";
import Input from "../shared/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../shared/utilities/validators";
import { useForm } from "../shared/hooks/form";
import "./Projects.css";

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

const UpdateProject = function () {
  const projectId = useParams().projectId;

  const [formState, inputHandler, setFormData] = useForm(
    {
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

  const projectToUpdate = TEMP_PROJECTS.find((p) => p.id === projectId);

  setFormData(
    {
      description: {
        value: projectToUpdate.description,
        isValid: true,
      },
      lead: {
        value: projectToUpdate.lead,
        isValid: true,
      },
    },
    true
  );

  const projectUpdateSubmitHandler = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formState.inputs);
  };

  if (!projectToUpdate) {
    return (
      <div className="center">
        <h2>Project not found</h2>
      </div>
    );
  }
  return (
    <form className="project-form" onSubmit={projectUpdateSubmitHandler}>
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter required description"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Input
        id="lead"
        element="input"
        label="Lead"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter required lead"
        onInput={inputHandler}
        initialValue={formState.inputs.lead.value}
        initialValid={formState.inputs.lead.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PROJECT
      </Button>
    </form>
  );
};

export default UpdateProject;
