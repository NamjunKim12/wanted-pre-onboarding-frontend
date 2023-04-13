import React from "react";

export default function Todo({ id, todo, isCompleted = false }) {
  const handleRemoveTodo = (e) => {
    e.preventDefault();
  };
  const handleModifyTodo = (e) => {
    e.preventDefault();
  };
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={isCompleted} />
        <span>{todo}</span>
      </label>
      <button data-testid="modify-button" onClick={handleModifyTodo}>
        수정
      </button>
      <button data-testid="delete-button" onClick={handleRemoveTodo}>
        삭제
      </button>
    </li>
  );
}
