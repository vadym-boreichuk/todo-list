import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleCompleted } from "../../redux/tasksSlice";
import { useState } from "react";
import Modal from "../Modal/Modal";

// import styles from "../App.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToogle = () => dispatch(toggleCompleted(task.id));
  const handleEdit = () => dispatch(editTask(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToogle}
      />
      <p className={css.text}>{task.text}</p>

      <button
        className={css.primaryBtn}
        onClick={() => {
          handleEdit();
          setIsOpen(true);
        }}
      >
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

      <button className={css.btn}>
        <MdClose size={24} onClick={handleDelete} />
      </button>
    </div>
  );
};
