import React, { useContext } from "react";
import Input from "../shared/Input";
// import { useNavigate } from "@reach/router";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "..//shared/utilities/validators";
import { useForm } from "../shared/hooks/form";
import ErrorModal from "../shared/ErrorModal";
import LoadingSpinner from "../shared/LoadingSpinner";
import Button from "../shared/Button";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";
import "./Projects.css";

const NewProject = function () {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
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

  const projectAddHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:5000/api/projects",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          lead: formState.inputs.lead.value,
          creator: auth.userId,
        }),
        { "Content-Type": "application/json" }
      );
      // Will redirect to a diff page
      // eslint-disable-next-line no-empty
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="wrapper">
        <div className="row">
          <form className="project-form" onSubmit={projectAddHandler}>
            {isLoading && <LoadingSpinner asOverlay />}
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
              validators={[VALIDATOR_MINLENGTH(1)]}
              errorText="Please enter project lead"
              onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
              ADD PROJECT
            </Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewProject;
