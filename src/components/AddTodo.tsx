import { ChangeEvent, useState } from "react";
import { Todo } from "../models/Todo";
import { Button } from "../styled-components/Button";
import { Div } from "../styled-components/Div";
import { Input } from "../styled-components/Input";

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
      <Div>
        <h1>Kom ihåg:</h1>
        <Input type="text" value={todoText} onChange={handleChange} />
        <br />
        <Button type="button" onClick={addNewTodo}>
          Spara
        </Button>
      </Div>
    </>
  );
}
