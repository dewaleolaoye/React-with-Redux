import React from "react";
import ReactDOM from "react-dom";

const App = function() {
  return (
    <div>
      <label>Enter your name: </label>
      <input type="text" className="" />
      <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
