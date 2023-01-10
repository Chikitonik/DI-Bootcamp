import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../features/robotsSlice"; // look below
export const store = configureStore({
  reducer: {
    robotsArr: robotsReducer,
  },
});
store.subscribe(() => {
  console.log("The store state has changed:", store.getState());
});
