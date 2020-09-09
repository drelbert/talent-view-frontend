import React from "react";
import User from "./User";
import Card from "../shared/Card";
import "./Users.css";

function UserList(props) {
  if (props.items.length == 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Yet</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          <User
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            projects={user.projects.length}
          />
        );
      })}
    </ul>
  );
}

export default UserList;
