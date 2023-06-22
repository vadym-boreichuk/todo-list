import React, { useState } from "react";
import styles from "./App.module.css";
import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import Modal from "./Modal/Modal";

export const App = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      {/* <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />} */}
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
