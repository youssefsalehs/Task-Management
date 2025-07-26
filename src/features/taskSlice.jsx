import { createSlice } from "@reduxjs/toolkit";
const storedTasks = localStorage.getItem("tasks");
const initialState = {
  tasks: storedTasks ? JSON.parse(storedTasks) : [],
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description, status } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});
export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
