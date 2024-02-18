"use client";

import { createTodo } from "@/actions/createTodo";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import StatusRadio from "../StatusRadio";

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
      text-slate-700
      dark:text-slate-50
      hidden
      "
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const [success, formAction] = useFormState(handleSubmit, null);

  async function handleSubmit() {
    try {
      await createTodo(todo);
      setTodo("")
      return "Success";
    } catch (error) {
      return "Error has occured";
    }
  }

  return (
    <form
      action={formAction}
    >
      <div
        className="
          flex 
          items-center
          justify-between
          p-4
          bg-white
          dark:bg-slate-800
          mb-5
          rounded-md
          drop-shadow-xl
          w-full
          min-w-[330px]
        "
      >
        <div className="flex items-center">
          <StatusRadio />
          <input
            type="text"
            placeholder="Create a new todo..."
            className="
              bg-inherit
              caret-sky-500
              outline-none
              border-none
              focus:outline-none
              text-gray-600
              dark:text-white
              sm:min-w-[540px]
            "
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <Submit />
      </div>
    </form>
  );
}
