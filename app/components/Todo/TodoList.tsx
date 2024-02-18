"use client";

import React, { useEffect, useState } from "react";
import Filters from "../Filters";
import { List, arrayMove } from "react-movable";
import TodoItem from "./TodoItem";
import ClearButton from "../ClearButton";

type Todo = {
  id: string;
  title: string;
  status: string;
  dateCreated: Date;
};

type TodoProps = {
  todoList: Todo[];
};

export default function TodoList({ todoList }: TodoProps) {
  const [filter, setFilter] = useState<string>("All");
  const [todos, setTodos] = useState(todoList);

  useEffect(() => {
    if (filter === "Active") {
      setTodos(() => todoList.filter((todo) => todo.status === "active"));
      todoList.filter((todo) => todo.status === "active");
    } else if (filter === "Completed") {
      setTodos(() => todoList.filter((todo) => todo.status === "completed"));
    } else {
      setTodos(() => todoList);
    }
  }, [filter, todoList]);

  return (
    <>
      <List
        values={todos}
        onChange={({ oldIndex, newIndex }) =>
          setTodos(arrayMove(todos, oldIndex, newIndex))
        }
        renderList={({ children, props }) => (
          <ul
            {...props}
            className="bg-white dark:bg-slate-800 rounded-md drop-shadow-xl"
          >
            {children}
            <div
              className="
                flex
                justify-between
                items-center
                p-4
              "
            >
              <p className="text-gray-600 dark:text-gray-200 font-light">
                {todos.filter((todo: Todo) => todo.status === "active").length}{" "}
                items left
              </p>
              <div
                className="
                  justify-between
                  items-center
                  gap-3
                  sm:flex
                  hidden
                "
              >
                <button
                  className={`
        dark:hover:text-white
        hover:text-gray-950
        ${filter === "All" ? "text-sky-500" : "text-gray-700"}
        ${filter === "All" ? "dark:text-white" : "text-slate-400"}
      `}
                  onClick={() => setFilter("All")}
                >
                  All
                </button>
                <button
                  className={`
        dark:hover:text-white
        hover:text-gray-950
        ${filter === "Active" ? "text-sky-500" : "text-gray-700"}
        ${filter === "Active" ? "dark:text-white" : "text-slate-400"}
      `}
                  onClick={() => setFilter("Active")}
                >
                  Active
                </button>
                <button
                  className={`
        dark:hover:text-white
        hover:text-gray-950
        ${filter === "Completed" ? "text-sky-500" : "text-gray-700"}
        ${filter === "Completed" ? "dark:text-white" : "text-slate-400"}
      `}
                  onClick={() => setFilter("Completed")}
                >
                  Completed
                </button>
              </div>
              <ClearButton />
            </div>
          </ul>
        )}
        renderItem={({ value, props }) => (
          <TodoItem
            id={value.id}
            status={value.status}
            title={value.title}
            props={{ ...props }}
          />
        )}
      />
      <Filters filter={filter} setFilter={setFilter} />
      <p
        className="        
          p-8
          text-center
          dark:text-slate-500
          text-gray-950
          font-normal
        "
      >
        Drag and drop to reorder list
      </p>
    </>
  );
}
