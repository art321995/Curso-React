import { useState, ChangeEvent, FormEvent } from "react";

interface Props {
  addTodo: (text: string) => void;
}

const FormAddTodo = ({ addTodo }: Props) => {
  const [todo, setTodo] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedTodo = todo.trim();
    if (!trimmedTodo) return;

    addTodo(trimmedTodo);

    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo</label>
      <input
        type="text"
        id="todo"
        placeholder="Enter a todo"
        value={todo}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default FormAddTodo;