"use server";

import { PrismaClient, Status, type Todo as TodoType } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();


export async function createTodo(title: string) {
    try {
        await prisma.todo.create({
            data: {
                title: title,
                status: Status.active,
                dateCreated: new Date()
            }
        });
        revalidatePath("/")
    } catch (error) {
        console.error("Error creating todo:", error);
    } finally {
        await prisma.$disconnect(); // Close Prisma client connection after operation
    }

}
