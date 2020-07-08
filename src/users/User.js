// presentation component
import React from "react";
import { Link } from "@reach/router";
import Card from "../shared/Card";
import Avatar from "./Avatar";
import "./Users.css";

function User(props) {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/projects`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>Role: {props.position}</h3>
            <h3>Team: {props.team}</h3>
            <h3>
              {props.projects} {props.projects == 1 ? "Project" : "Projects"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default User;

{
  /* <Link to={`/projects`}>
</Link> */
}
