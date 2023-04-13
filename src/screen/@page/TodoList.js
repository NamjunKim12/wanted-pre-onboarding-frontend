import React, { useEffect, useState } from "react";
import todoApi from "../../story/api/todo";
import Todo from "../components/Todo";

export default function TodoList() {
  const [todoItem, setTodoItem] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    todoApi.getTodoList().then((res) => {
      setTodoItem([...res]);
    });
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const response = await todoApi.createTodoList(newTodo);
    console.log(response);
    setTodoItem([...todoItem, response]);
    console.log(todoItem);
  };

  return (
    <>
      <form>
        <input
          data-testid="new-todo-input"
          placeholder="할일을 입력"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button data-testid="new-todo-add-button" onClick={handleAddTodo}>
          추가
        </button>
      </form>
      <ul>
        {todoItem.map((item) => (
          <Todo key={item.id} isCompleted={item.isCompleted} todo={item.todo} />
        ))}
      </ul>
    </>
  );
}
