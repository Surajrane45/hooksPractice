import React, { useReducer, useState, useContext } from "react";
import { MyThemeContext } from "../App";
import { Button } from "../StyledComponents/styledComponents";

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];

    default:
      return state;
  }
}

export function MyTodoList() {
  const [todoList, dispatch] = useReducer(todoReducer, []);
  const [todo, setTodo] = useState("");
  const theme = useContext(MyThemeContext);

  return (
    <div>
      <div>
        <label htmlFor="todo">Add Todo:</label>
        <input
          id="todo"
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <Button
          onClick={() => {
            dispatch({ type: "add", text: todo });
            setTodo("");
          }}
        >
          Add to List
        </Button>
      </div>
      <h1>My Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li style={{ background: theme.background, color: theme.foreground }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
