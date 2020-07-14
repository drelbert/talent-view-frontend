import React, { useState, useContext } from "react";
import Card from "../shared/Card";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { AuthContext } from "../shared/context/auth-context";
// import ErrorModal from "../shared/ErrorModal";
// import LoadingSpinner from "../shared/LoadingSpinner";
// import { useHttpClient } from "../shared/http-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  // VALIDATOR_MAX,
} from "../shared/utilities/validators";
import { useForm } from "../shared/form-hook";
// import { AuthContext } from "../shared/auth-context";
import "./Users.css";

const Auth = function Auth() {
  const auth = useContext(AuthContext);

  // managing state
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      // setting initial state
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = function switchMode() {
    if (!isLoginMode) {
      // changing state and rerender the component
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      // changing state and rerender the component
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    // changing state and rerender the component
    setIsLoginMode((preMode) => !preMode);
  };

  const authSubmitHandler = function authHandler(event) {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Plese enter a name"
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="pasword"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;
