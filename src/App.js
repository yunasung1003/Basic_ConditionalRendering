import "./styles.css";
import React from "react";
import Hello from "./Hello";

export default function App() {
  return (
    <div className="App">
      <Hello name="yuna" color="red" isSpecial={true} />
    </div>
  );
}
