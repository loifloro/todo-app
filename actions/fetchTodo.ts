"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function fetchTodo() {
  try {
    return await prisma.todo.findMany();
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}
