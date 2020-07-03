import React, { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("suraj");
  const [hobby, setHobby] = useState("");
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    document.title = `${name} Clicked the counter ${count} times`;
  }, [count, name]);

  return (
    <div>
      <p>
        <strong>Simple Counter</strong>
      </p>
      <label for="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <p>
        {name} clicked the counter {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <br /> <br />
      <div>
        <label for="hobby">Enter Your hobby:</label>
        <input
          id="hobby"
          type="text"
          value={hobby}
          onChange={(event) => setHobby(event.target.value)}
        />
        <button
          onClick={() => {
            setHobbies(hobbies.concat(hobby));
            setHobby("");
          }}
        >
          Add to List
        </button>
      </div>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export function MultipleStateVariables() {}
