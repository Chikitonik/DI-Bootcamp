import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const logger = (store) => (next) => (action) => {
  // console.log("dispatching", action);
  let result = next(action);
  console.log(
    `caught in the middleware {"age": ${store.getState().counter.value}}`
  );
  return result;
};
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [logger],
});
