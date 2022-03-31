import { useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { PrintTodo } from "./PrintTodo";

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  let listForSlicingTodos: Todo[] = [];

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function addTodo(todo: Todo): void {
    setTodos([...todos, todo]);
  }

  function toggleTodos(todoToToggle: Todo) {
    todoToToggle.done = !todoToToggle.done;
    setTodos([...todos]);
  }

  function deleteTodo(todo: Todo) {
    listForSlicingTodos.push(todo);

    for (let i = 0; i < todos.length; i++) {
      for (let j = 0; j < listForSlicingTodos.length; j++) {
        if (listForSlicingTodos[j].todo === todos[i].todo) {
          todos.splice(i, 1);
        }
      }
    }
    setTodos([...todos]);
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
