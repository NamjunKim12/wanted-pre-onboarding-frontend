import React, { useEffect, useState } from "react";
import todoApi from "../../story/api/todo";
import Todo from "../components/TodoList/Todo";
import { store } from "../../service/store/store";

export default function TodoList() {
  const [todoItem, setTodoItem] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const token = store.getLocalStorage();
    if (token) {
      todoApi.getTodoList().then((res) => {
        setTodoItem(res);
      });
    }
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const response = await todoApi.createTodoList(newTodo);
    setTodoItem([...todoItem, response]);
    setNewTodo("");
  };

  const onRemove = async (id) => {
    await todoApi.deleteTodoList(id);
    setTodoItem(todoItem.filter((item) => item.id !== id));
  };

  const onUpdate = async (todo, isCompleted, id) => {
    await todoApi.updateTodoList({ todo, isCompleted }, id);
    setTodoItem((prev) =>
      prev.map((item) => (item.id === id ? { ...item, todo } : item))
    );
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
          <Todo
            key={item.id}
            id={item.id}
            isCompleted={item.isCompleted}
            todo={item.todo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </>
  );
}
