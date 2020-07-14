/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import ReactDOM from "react-dom";

import "./Shared.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
