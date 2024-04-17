"use client";

import toast from "react-hot-toast";

import { useRef } from "react";
import { createTodo } from "../actions/todo.action";
import ButtonForm from "./button-form.todo";
import { todoZodSchema } from "../schema/todo.zod.schema";
import { ZodError } from "zod";

const FormTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (data: FormData) => {
    const title = data.get("title") as string;
  
    try {
      // se comentó para forzar validaciones en el backend
      // todoZodSchema.parse({ title });
      const res = await createTodo(title);
      if (!res.success) {
        return toast.error(res.message);
      }
      toast.success(res.message);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return error.issues.map((issue) => toast.error(issue.message));
      }
    } finally {
      formRef.current?.reset();
    }
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="flex"
    >
      <input
        type="text"
        name="title"
        className="border border-gray-400 rounded p-2 mr-2 w-full"
      />
      <ButtonForm />
    </form>
  );
};
export default FormTodo;