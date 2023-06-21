import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

export const App = () => {
  return (
    <Layout>
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
