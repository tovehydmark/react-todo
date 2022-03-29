import { Todo } from "../models/Todo";
import { Ul } from "../styled-components/Ul";

interface ITodoProps {
  todo: Todo;
  toggleTodo(todo: Todo): void;
}

export function PrintTodo(props: ITodoProps) {
  function handleClick() {
    console.log("UOH");

    props.toggleTodo(props.todo);
  }
  return (
    <>
      {props.todo.done ? (
        <Ul>
          <li onClick={handleClick}>{props.todo.todo}</li>
        </Ul>
      ) : (
        <ul>
          <li onClick={handleClick}>{props.todo.todo}</li>
        </ul>
      )}
    </>
  );
}
