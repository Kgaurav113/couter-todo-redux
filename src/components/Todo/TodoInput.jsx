import React from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todo/action.js";

export const TodoInput = () => {
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      name,
      status: false,
      id: uuid()
    };

    dispatch(addTodo(payload));
    setName("");
  };

  return (
    <div>
      <input
        placeholder="Add Todos"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};
