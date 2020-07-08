import React from "react";
import UsersList from "./UsersList";
import Magnus from "../users/images/101.jpg";
import Doris from "../users/images/the202.png";

function Users() {
  let USERS = [
    {
      id: "101",
      name: "Magus Modeloson",
      image: `${Magnus}`,
      projects: "1",
      position: "Dev",
      team: "SB",
    },
    {
      id: "the202",
      name: "Doris Ramsbottom",
      image: `${Doris}`,
      projects: "2",
      position: "The Law",
      team: "DC",
    },
    {
      id: "all805",
      name: "Ingra Ferndove",
      // image: `${Doris}`,
      projects: "4",
      position: "Lead Design",
      team: "SB",
    },
  ];

  return <UsersList elements={USERS} />;
}

export default Users;
