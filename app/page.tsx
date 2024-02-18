import { fetchTodo } from "@/actions/fetchTodo";
import ThemeButton from "./components/ThemeSwitch";
import Title from "./components/Title";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

export default async function Home() {
  const todoList = await fetchTodo();

  return (
    <main
      className="
          flex 
          min-h-screen 
          flex-col 
          items-center 
          justify-between 
          sm:p-24 
          py-24
          text-lg
          bg-fixed
          bg-top
          bg-no-repeat
          bg-[length:100vw]
          sm:bg-desktop-light
          dark:sm:bg-desktop-dark
          bg-mobile-light   
          dark:bg-mobile-dark    
          bg-white
          dark:bg-slate-950
        "
    >
      <div className="sm:w-[768px]">
        <div className="flex justify-between items-center mb-10">
          <Title content="Todo" />
          <ThemeButton />
        </div>
        <TodoForm />
        {todoList && <TodoList todoList={todoList} />}
      </div>
    </main>
  );
}
