import React from "react";
import Input from "../shared/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "..//shared/utilities/validators";
import { useForm } from "../shared/hooks/form";
import Button from "../shared/Button";
import "./Projects.css";

const NewProject = function () {
  const [formState, inputHandler] = useForm(
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

  const projectAddHandler = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formState.inputs);
  };

  return (
    <form className="project-form" onSubmit={projectAddHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter valid description"
        onInput={inputHandler}
      />
      <Input
        id="lead"
        element="input"
        type="text"
        label="Lead"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter project lead"
        onInput={inputHandler}
      />
      <Button type="subit" disabled={!formState.isValid}>
        ADD PROJECT
      </Button>
    </form>
  );
};

export default NewProject;
