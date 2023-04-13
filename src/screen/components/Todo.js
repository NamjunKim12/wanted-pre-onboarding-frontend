import React from "react";
import todoApi from "../../story/api/todo";

export default function Todo({ id, todo, isCompleted = false, onRemove }) {
  const handleModifyTodo = async (e) => {
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
