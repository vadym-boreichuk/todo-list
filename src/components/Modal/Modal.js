import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../redux/tasksSlice";

const Modal = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);
  const task = tasks.find((task) => task.id === 3);
  console.log(task.text);

  const handleEdit = () => dispatch(editTask(text));
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <textarea rows={3} cols={20} placeholder={task.text}></textarea>
          {/* <div className={styles.modalContent}>
            Are you sure you want to delete the item?
          </div> */}
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
