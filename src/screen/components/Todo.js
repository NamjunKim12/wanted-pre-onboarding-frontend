import React, { useState } from "react";
import todoApi from "../../story/api/todo";
import ToDoEdit from "./TodoEdit";
import TodoCheckbox from "./TodoCheckbox";

export default function Todo({ id, todo, isCompleted, onRemove, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  if (isEdit)
    return (
      <li>
        <TodoCheckbox todo={todo} isCompleted={isCompleted} id={id} />
        <ToDoEdit
          todo={todo}
          toggleEdit={toggleEdit}
          onUpdate={onUpdate}
          id={id}
          isCompleted={isCompleted}
        />
      </li>
    );

  return (
    <li>
      <TodoCheckbox todo={todo} isCompleted={isCompleted} id={id} />
      <span>{todo}</span>
      <button data-testid="modify-button" onClick={toggleEdit}>
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
