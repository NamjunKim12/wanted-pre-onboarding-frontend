import React from "react";
import todoApi from "../../../story/api/todo";

export default function TodoCheckbox({ todo, isCompleted, id, isEdit }) {
  const handleCheckbox = () => {
    todoApi.updateTodoList({ todo, isCompleted: !isCompleted }, id);
  };
  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={isCompleted}
        onChange={handleCheckbox}
      />
      <span>{isEdit ? "" : todo}</span>
    </label>
  );
}
