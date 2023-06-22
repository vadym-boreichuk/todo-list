import { useDispatch } from "react-redux";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, editTask, toggleCompleted } from "../../redux/tasksSlice";
import Modal from "../Modal/Modal";

export const Task = ({ task, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newText, setNewText] = useState("");

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToogle = () => dispatch(toggleCompleted(task.id));

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
            placeholder="Edit your task"
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
