import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { getTasks } from "../../redux/selectors";

export const TaskList = () => {
  const tasks = useSelector((state) => state);

  console.log(tasks);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
