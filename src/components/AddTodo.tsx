import { Todo } from "../models/Todo";

interface IAddProps {
  addTodoFromChild(todo: Todo): void;
}

export function AddTodo() {
  return <>AddTodo works!</>;
}
