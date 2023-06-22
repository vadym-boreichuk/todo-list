import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";
import { addTask } from "../../redux/tasksSlice";
import Modal from "../Modal/Modal";
import { useState } from "react";

export const TaskForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newText, setNewText] = useState("");

  const dispatch = useDispatch();

  const handleTextareaChange = (event) => {
    setNewText(event.target.value);
  };

  return (
    <div>
      <div className={css.divBtn} onClick={() => setIsOpen(true)}>
        <Button>Add task</Button>
      </div>
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
              dispatch(addTask(newText));
              setNewText("");
            }}
          >
            Save
          </button>
        </Modal>
      )}
    </div>
  );
};
