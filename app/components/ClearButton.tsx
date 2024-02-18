"use client";

import { deleteCompleted } from "@/actions/deleteCompleted";
import React from "react";

export default function ClearButton() {
  async function handleDelete() {
    try {
        await deleteCompleted();
    } catch (error) {
        console.log(error);
    }
  } 

  return (
    <button
      className="
      text-gray-600 
      dark:text-gray-200 
      font-light"
      onClick={handleDelete}
    >
      Clear Completed
    </button>
  );
}
