import React, { useReducer } from "react";

export default function UseRed() {
  // First render will create the state, and it will
  // persist through future renders
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);

  return (
    <>
      {sum}

      <button onClick={() => dispatch(1)}>Add 1</button>
      <button onClick={() => dispatch(-1)}>Sub 1</button>
    </>
  );
}