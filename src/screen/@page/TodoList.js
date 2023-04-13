import React, { useEffect, useState } from "react";
import todoApi from "../../story/api/todo";
import Todo from "../components/Todo";

export default function TodoList() {
  const [todoItem, setTodoItem] = useState([]);

  useEffect(() => {
    todoApi.getTodoList().then((res) => {
      setTodoItem([...res]);
    });
  }, []);

  return (
    <>
      <form>
        <input data-testid="new-todo-input" />
        <button data-testid="new-todo-add-button">추가</button>
      </form>
      <ul>
        {todoItem.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
