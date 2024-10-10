import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
