import React, { useState } from "react";

export default function ToDoEdit({
  todo,
  toggleEdit,
  onUpdate,
  id,
  isCompleted,
}) {
  const [newTodo, setNewTodo] = useState(todo);
  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };
  const handleUpdateTodo = async (e) => {
    e.preventDefault();
    await onUpdate(newTodo, isCompleted, id);
    toggleEdit();
  };

  return (
    <>
      <input
        defaultValue={todo}
        value={newTodo}
        onChange={handleInput}
        data-testid="modify-input"
      />
      <button data-testid="submit-button" onClick={handleUpdateTodo}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={toggleEdit}>
        취소
      </button>
    </>
  );
}
