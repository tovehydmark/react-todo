import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { PrintTodo } from "./PrintTodo";

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: Todo): void {
    setTodos([...todos, todo]);
  }

  function toggleTodos(todoToToggle: Todo) {
    todoToToggle.done = !todoToToggle.done;
    setTodos([...todos]);
  }

  function deleteTodo(i: number) {
    // todos.findIndex(i);
  }

  let todoHtml = todos.map((todo: Todo, i) => {
    return (
      <>
        <PrintTodo
          key={i}
          todo={todo}
          toggleTodo={toggleTodos}
          deleteTodo={deleteTodo}
        ></PrintTodo>
      </>
    );
  });

  return (
    <>
      <AddTodo addTodoFromChild={addTodo}></AddTodo>

      {todoHtml}
    </>
  );
}
