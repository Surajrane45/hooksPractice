import React from "react";

export default function UserList(props) {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.last_name}>
              Name-{user.first_name} {user.last_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
