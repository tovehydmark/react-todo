import { useState } from "react";
import { Todo } from "../models/Todo";
import { PrintTodo } from "./PrintTodo";

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([
    { todo: "hej" },
    { todo: "handla" },
  ]);

  let todoHtml = todos.map((todo: Todo, i) => {
    return (
      <>
        <PrintTodo key={i} todo={todo}></PrintTodo>
      </>
    );
  });

  return <>{todoHtml}</>;
}
