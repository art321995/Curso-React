"use client";

import { createTodo } from "../actions/todo.action";

const FormTodo = () => {
  const handleSubmit = async (data: FormData) => {
    const title = data.get("title") as string;
    await createTodo(title);
  };

  return (
    <form action={handleSubmit}>
      <input
        type="text"
        name="title"
        className="border border-gray-400 rounded p-2 mr-2"
      />
      <button
        type="submit"
        className="border border-gray-400 rounded p-2"
      >
        Add
      </button>
    </form>
  );
};
export default FormTodo;