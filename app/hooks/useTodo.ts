import { useEffect, useState } from "react";

export default function useTodo({todoList}) {
  const [filter, setFilter] = useState("All");
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
  }, [filter, todoList, todos]);
  return <div>useTodo</div>;
}
