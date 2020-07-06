import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import UserList from "./userlist";
import UserForm from "./userForm";

function UserContainer(props) {
  const [username, setUsername] = useState("");
  const [job, setJob] = useState("");
  const dispatch = useDispatch();

  const fetchUsersList = () => {
    dispatch({ type: "FETCH_USER" });
  };

  const dispatchCreateUserRequest = () => {
    dispatch({
      type: "CREATE_USER",
      payload: {
        name: username,
        job: job
      }
    });
  };

  const dispatchUpdateUserRequest = () => {
    dispatch({
      type: "UPDATE_USER",
      payload: {
        name: username,
        job: job
      }
    });
  };

  const dispatchDeleteUserRequest = () => {
    dispatch({
      type: "DELETE_USER",
      payload: username
    });
  };

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
      {props.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <UserList
          users={props.users.toJS()}
          isLoading={props.isLoading}
          error={props.error}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.get("users"),
    error: state.get("error"),
    isLoading: state.get("isLoading")
  };
};

export default connect(mapStateToProps, null)(UserContainer);
