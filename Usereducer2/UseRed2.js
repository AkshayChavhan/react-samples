import "./styles.css";
import React, { useReducer } from "react";

export default function UseRed2() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "React":
        return { react: true };
      case "Angular":
        return { angular: true };
      case "Vue":
        return { vue: true };
      default:
        throw new Error();
    }
  };

  const handleReact = () => {
    dispatch({ type: "React" });
  };

  const handleAngular = () => {
    dispatch({ type: "Angular" });
  };

  const handleVue = () => {
    dispatch({ type: "Vue" });
  };

  let initialState = { react: false, angular: false, vue: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>What is target for this week</h1>
      <p>you selected to 
      {state.react 
        ? " React" 
        : state.angular 
        ?" Angular" 
        : state.vue 
        ? " Vue"
        : " No Target Selected"}

      </p>
      <button onClick={handleReact}>React</button>  
      <button onClick={handleAngular}>Angular</button>  
      <button onClick={handleVue}>Vue</button>  
    </div>
  );
}
