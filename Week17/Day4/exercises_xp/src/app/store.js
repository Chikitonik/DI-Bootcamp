import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/formSlice"; // look below

export const store = configureStore({
  reducer: {
    // 'form' - equal name in slice in createTransaction - state.form.value
    // 'formReducer' is formed auto in slice in function 'createSlice',
    // it doesn't matter how you want to call it here and in import
    form: formReducer,
  },
});

store.subscribe(() => {
  console.log("The store state has changed:", store.getState());
  localStorage.setItem(
    "w17_d4_exercise_xp",
    JSON.stringify(store.getState().form.value)
  );
});
