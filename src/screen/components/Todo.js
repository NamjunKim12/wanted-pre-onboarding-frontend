import React from "react";
import todoApi from "../../story/api/todo";

export default function Todo({ id, todo, isCompleted, onRemove, onUpdate }) {
  const handleCheckbox = () => {
    todoApi.updateTodoList({ todo, isCompleted: !isCompleted }, id);
  };
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={handleCheckbox}
        />
        <span>{todo}</span>
      </label>
      <button
        data-testid="modify-button"
        onClick={() => onUpdate(id, isCompleted)}
      >
        수정
      </button>
      <button
        data-testid="delete-button"
        type="button"
        onClick={() => onRemove(id)}
      >
        삭제
      </button>
    </li>
  );
}
