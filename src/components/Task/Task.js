import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleCompleted } from "../../redux/tasksSlice";
import { useState } from "react";
import Modal from "../Modal/Modal";

// import styles from "../App.module.css";

export const Task = ({ task, id }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToogle = () => dispatch(toggleCompleted(task.id));

  const [newText, setNewText] = useState("");

  const handleTextareaChange = (event) => {
    setNewText(event.target.value);
  };

  const handleSave = (taskId) => {
    dispatch(editTask(taskId, newText));
  };

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
          setIsOpen(true);
        }}
      >
        edit task
      </button>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <textarea
            className={css.textArea}
            cols={40}
            rows={8}
            value={newText}
            onChange={handleTextareaChange}
          />
          <button
            className={css.saveBtn}
            onClick={() => {
              setIsOpen(false);
              handleSave(id);
            }}
          >
            Save
          </button>
        </Modal>
      )}

      <button className={css.btn}>
        <MdClose size={24} onClick={handleDelete} />
      </button>
    </div>
  );
};
