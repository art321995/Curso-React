"use server";

import { prisma } from "@/libs/prismadb";
import { revalidatePath } from "next/cache";

export const createTodo = async (title: string) => {
  if (!title || !title.trim()) {
    return {
      error: "Title is required (backend)",
    };
  }

  try {
    await prisma.todo.create({ data: { title } });
    revalidatePath("/todo");
    return {
      success: "Todo created successfully",
    };
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
};

export const removeItem = async (id: string) => {
  if (!id || !id.trim()) return { error: "Id is required (backend)" };

  try {
    await prisma.todo.delete({ where: { id } });
    revalidatePath("/todo");
    return {
      success: "Todo deleted successfully",
    };
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
};