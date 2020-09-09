/* eslint-disable no-empty */
import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";
import ErrorModal from "../shared/ErrorModal";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useHttpClient } from "../shared/hooks/http-hook";

function Users() {
  // setting state
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    // this is an IIFE
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users"
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };

    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />};
    </React.Fragment>
  );
}

export default Users;
