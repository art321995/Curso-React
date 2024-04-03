import { Todo } from "../App";

interface Props {
  todo: Todo;
  index: number;
  toggleTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const TodoItem = ({ index, todo, toggleTodo, removeTodo }: Props) => {
  return (
    <article>
      <fieldset>
        <label htmlFor={`todo-${index}`}>
          <input
            type="checkbox"
            id={`todo-${index}`}
            checked={todo.complete}
            onChange={() => toggleTodo(index)}
          />
          {todo.text}
        </label>
      </fieldset>
      <button
        className="contrast"
        onClick={() => removeTodo(index)}
      >
        Remove
      </button>
    </article>
  );
};
export default TodoItem;