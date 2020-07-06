import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: 1em 1em;
`;
export default function UserForm(props) {
  return (
    <div>
      <Div>
        First Name:
        <input
          type="text"
          placeholder="first name"
          onChange={(event) => props.setName(event.target.value)}
          value={props.username}
        />
      </Div>
      <Div>
        Last:
        <input
          type="text"
          placeholder="last name"
          onChange={(event) => props.setLastName(event.target.value)}
          value={props.job}
        />
      </Div>
      <Div>
        <button onClick={props.createUser}>Create</button>
        <button onClick={props.updateUser}>Update</button>
        <button onClick={props.deleteUser}>Delete</button>
      </Div>
    </div>
  );
}
