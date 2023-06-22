import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} id={task.id} />
        </li>
      ))}
    </ul>
  );
};
