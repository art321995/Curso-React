import { ZodError } from "zod";
import { todoZodSchema } from "../schema/todo.zod.schema";
import { prisma } from "@/libs/prismadb";
import { revalidatePath } from "next/cache";
import { UserButton } from "@clerk/nextjs";

interface CreateTodoResponse {
  success: boolean;
  message: string;
}

export const createTodo = async (
  title: string
): Promise<CreateTodoResponse> => {
  try {
    todoZodSchema.parse({
      title,
    });
    await prisma.todo.create({
      data: {
        title: title.trim(),
      },
    });
    revalidatePath("/todo");
    return {
      success: true,
      message: "Todo created (backend)",
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: error.issues[0].message,
      };
    }

    return {
      success: false,
      message: "error de servidor (backend)",
    };
  }
};