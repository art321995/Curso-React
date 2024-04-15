import { prisma } from "@/libs/prismadb";
import { revalidatePath } from "next/cache";

export const createTodo = async (title: string) => {
    "use server";
    await prisma.todo.create({ data: { title } });
    revalidatePath("/todo");
  };