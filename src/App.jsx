import { useState } from "react";
import { useDebounce } from "./useDebounce";

export const App = () => {
  const [state, setState] = useState("");

  const { invoke, isDebouncing } = useDebounce({
    callback: setState,
    delay: 500,
  });

  const handler = (event) => {
    const { value } = event.target;
    invoke(value);
  };

  return (
    <div>
      <input onChange={handler}></input>
      <h1>{state}</h1>
      <div>{isDebouncing ? "Debouncing..." : ""}</div>
    </div>
  );
};
