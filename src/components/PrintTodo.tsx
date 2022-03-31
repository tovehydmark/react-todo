import { Todo } from "../models/Todo";
import { Ul } from "../styled-components/Ul";

interface ITodoProps {
  todo: Todo;
  toggleTodo(todo: Todo): void;
  deleteTodo(todo: Todo): void;
}

export function PrintTodo(props: ITodoProps) {
  function taskIsDoneClick() {
    props.toggleTodo(props.todo);
  }

  function deleteTaskClick() {
    props.deleteTodo(props.todo);
  }

  return (
    <>
      {props.todo.done ? (
        <Ul>
          <li onClick={taskIsDoneClick}>{props.todo.todo}</li>
          <button onClick={deleteTaskClick}>x</button>
        </Ul>
      ) : (
        <ul>
          <li onClick={taskIsDoneClick}>{props.todo.todo}</li>
          <button onClick={deleteTaskClick}>x</button>
        </ul>
      )}
    </>
  );
}
