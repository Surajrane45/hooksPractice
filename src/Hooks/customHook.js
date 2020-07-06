import React, { useState, useCallback } from "react";
import {
  Button,
  TomatoButton,
  Link
} from "../StyledComponents/styledComponents";
const myAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd_num = Math.random() * 10;
      rnd_num < 5
        ? resolve("Submitted Successfully !!")
        : reject("Ohh there's an Error");
    }, 2000);
  });
};

function useAsync(asyncFunc) {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setPending(true);
    setValue(null);
    setError(null);
    asyncFunc()
      .then((response) => setValue(response))
      .catch((error) => setError(error))
      .finally(() => setPending(false));
  }, [asyncFunc]);

  return { execute, pending, value, error };
}

function CustomHook() {
  const { execute, pending, value, error } = useAsync(myAsyncFunction);
  return (
    <div>
      <h1>A Custom Hook example using async call</h1>
      {value && <h2>{value}</h2>}
      {error && <h2>{error}</h2>}
      <TomatoButton onClick={execute} disabled={pending}>
        Click here for Asynchronous Action
      </TomatoButton>
      <Link as="a" href="/">
        Button as a Link
      </Link>
    </div>
  );
}

export default CustomHook;
