import { ChangeEvent, useState } from "react";
import { Todo } from "../models/Todo";

interface IAddProps {
  addTodoFromChild(todo: Todo): void;
}

export function AddTodo(props: IAddProps) {
  const [todoText, setTodoText] = useState("");

  function addNewTodo() {
    let newTodo = new Todo(todoText);
    props.addTodoFromChild(newTodo);
    setTodoText("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }
  return (
    <>
      <div>
        <input type="text" value={todoText} onChange={handleChange} />

        <button type="button" onClick={addNewTodo}>
          Spara
        </button>
      </div>
    </>
  );
}
