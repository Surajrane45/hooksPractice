import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./userlist";
import UserForm from "./userForm";
import { createUser, updateUser, deleteUser } from "../Actions";

function UserContainer(props) {
  const [username, setUsername] = useState("");
  const [job, setJob] = useState("");
  const dispatch = useDispatch();

  const users = useSelector((state) => state.get("users"));
  const error = useSelector((state) => state.get("error"));
  const isLoading = useSelector((state) => state.get("isLoading"));

  const fetchUsersList = () => {
    dispatch({ type: "FETCH_USER" });
  };

  const dispatchCreateUserRequest = useCallback(() => {
    dispatch(createUser(username, job));
  }, [dispatch, username, job]);

  const dispatchUpdateUserRequest = useCallback(() => {
    dispatch(updateUser(username, job));
  }, [dispatch, username, job]);

  const dispatchDeleteUserRequest = useCallback(() => {
    dispatch(deleteUser(username));
  }, [dispatch, username, job]);

  return (
    <div>
      <button onClick={fetchUsersList}>Fetch Users</button>
      <div>
        <UserForm
          username={username}
          job={job}
          setName={setUsername}
          setLastName={setJob}
          createUser={dispatchCreateUserRequest}
          updateUser={dispatchUpdateUserRequest}
          deleteUser={dispatchDeleteUserRequest}
        />
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <UserList users={users} isLoading={isLoading} error={error} />
      )}
    </div>
  );
}
export default UserContainer;
