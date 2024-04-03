import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  removeTodo: (index: number) => void;
  toggleTodo: (index: number) => void;
}

const Todos = ({ todos, removeTodo, toggleTodo }: Props) => {
  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}

      {todos.length === 0 && <p>No todos yet!</p>}
    </>
  );
};
export default Todos;