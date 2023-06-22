import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
};

const tasksSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    editTask: {
      reducer(state, action) {
        const { taskId, newText } = action.payload;
        const updatedTasks = state.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, text: newText };
          }
          return task;
        });
        return { ...state, tasks: updatedTasks };
      },
      prepare(taskId, newText) {
        return {
          payload: {
            taskId,
            newText,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state.tasks) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted, editTask } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
