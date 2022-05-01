import React from "react";
import { Counter } from "./components/Counter/Counter";
import { Todo } from "./components/Todo/Todo";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Todo />
    </>
  );
}

export default App;