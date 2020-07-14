import React, { useState } from "react";
import useHookDropdown from "./useHookDropdown";

let TEAM = ["SB", "DC", "London", "Bergen", "Lompoc"];
let POSITIONS = ["Dev", "Legal", "Design", "Sales"];

const SearchParams = function () {
  // setting state
  const [name, setName] = useState("Enter Name");
  // this is a hook: useState, allows for stateful logic
  // useState sets the first state as "Enter Name"
  // note the array destructuring [ ] above

  // name is the current state
  // setName is the updater for that state via the setTeam function below

  // use console.log("team state", team); to output the updated state

  const [positions, setPositions] = useState([]);

  const [team, TeamDropdown] = useHookDropdown("Team", "SB", TEAM);
  const [postion, PositionDropdown] = useHookDropdown(
    "Position",
    "Dev",
    POSITIONS
  );

  return (
    <div className="search-params">
      <form>
        <label htmlFor="team">
          Name
          <input
            id="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <TeamDropdown />
        <PositionDropdown />
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default SearchParams;
