"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export async function setStatus(id: string, status: string) {
    const newStatus = status === "active" ? "completed" : "active";

    try {
        const update = await prisma.todo.update({
            where: {
                id: id
            },
            data: {
                status: newStatus
            }
        })
        console.log(update);
        return revalidatePath("/")
    } catch (error) {
        console.log(error);
    }
}