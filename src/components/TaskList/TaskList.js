import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { getTasks } from "../../redux/selectors";

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  // console.log(typeof tasks);
  // const statusFilter = useSelector((state) => state.filters.status);
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);
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
