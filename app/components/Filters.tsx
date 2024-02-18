import React from "react";

type FilterProps = {
    filter: string;
    setFilter: (filter: string) => void
}

export default function Filters({ filter, setFilter }: FilterProps) {

  return (
    <div
      className=" 
      sm:hidden
      flex
      items-center
      justify-center
      gap-4
      p-4
      bg-white
      dark:bg-slate-800
      mb-5
      rounded-md
      drop-shadow-xl
      w-full
      min-w-[330px]
      mt-4
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
  );
}
