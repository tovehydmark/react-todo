import { Todo } from "../models/Todo";
import { Ul } from "../styled-components/Ul";

interface ITodoProps {
  todo: Todo;
  toggleTodo(todo: Todo): void;
  deleteTodo(todo: Todo): void;
}

export function PrintTodo(props: ITodoProps) {
  function handleClick() {
    props.toggleTodo(props.todo);
  }

  function handleButtonClick() {
    props.deleteTodo(props.todo);
  }

  return (
    <>
      {props.todo.done ? (
        <Ul>
          <li onClick={handleClick}>{props.todo.todo}</li>
          <button onClick={handleButtonClick}>x</button>
        </Ul>
      ) : (
        <ul>
          <li onClick={handleClick}>{props.todo.todo}</li>
          <button onClick={handleButtonClick}>x</button>
        </ul>
      )}
    </>
  );
}
