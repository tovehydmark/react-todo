import { Todo } from "../models/Todo";

interface ITodoProps {
  todo: Todo;
  toggleTodo(todo: Todo): void;
}

export function PrintTodo(props: ITodoProps) {
  function handleClick() {
    props.toggleTodo(props.todo);
  }
  return (
    <>
      <ul>
        <li onClick={handleClick}>{props.todo.todo}</li>
      </ul>
    </>
  );
}
