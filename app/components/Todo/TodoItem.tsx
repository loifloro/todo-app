import { IItemProps } from "react-movable";
import StatusRadio from "../StatusRadio";

type Todo = {
  id: string;
  title: string;
  status: string;
  props: IItemProps;
};

export default function TodoItem({ id, title, status, props }: Todo) {
  return (
    <li
      {...props}
      className={`
        flex
        items-center
        gap-4
        p-4
        text-gray-600
        dark:text-white
        border-b-[1px]
        border-b-slate-200
        dark:border-b-gray-700
      `}
    >
      <StatusRadio id={id} status={status} checked={status === "completed"} />
      <p
        className={`
                  ${status === "completed" ? "line-through" : ""}
                  ${status === "completed" ? "text-gray-300" : "text-gray-800"}
                  ${
                    status === "completed"
                      ? "dark:text-gray-600"
                      : "dark:text-white"
                  }
                  cursor-pointer
                `}
      >
        {title}
      </p>
    </li>
  );
}
