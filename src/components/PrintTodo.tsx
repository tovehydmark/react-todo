import { Todo } from "../models/Todo";

interface ITodoProps {
  todo: Todo;
}

export function PrintTodo(props: ITodoProps) {
  return (
    <>
      <ul>
        <li>{props.todo.todo}</li>
      </ul>
    </>
  );
}
