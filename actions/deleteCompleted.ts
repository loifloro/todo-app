"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export async function deleteCompleted() {
    try {
        await prisma.todo.deleteMany({
            where: {
                status: "completed"
            }
        })
        revalidatePath("/")
    } catch (error) {
        console.log(error);
    }
}