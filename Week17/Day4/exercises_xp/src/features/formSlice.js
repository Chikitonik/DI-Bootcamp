import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("w17_d4_exercise_xp")),
  indexEditedRow: "",
  status: "idle",
};

// any name, it is used just in exports
export const formSlice = createSlice({
  name: "formSlice", // that text is shown in Google Chrome redux extension as a part of action name
  initialState,
  reducers: {
    // action (reducer) name:
    formSubmit: (state, action) => {
      // similar to state.value = action.payload but return a copy:
      if (state.indexEditedRow !== "") {
        return {
          ...state,
          value: [
            ...state.value.slice(0, state.indexEditedRow),
            action.payload,
            ...state.value.slice(state.indexEditedRow + 1),
          ],
          indexEditedRow: "",
        };
      }
      return {
        ...state,
        value: [...state.value, action.payload], // in this case value = value which is put in action in Form (in App)
      };
    },
    deleteRow: (state, action) => {
      return {
        ...state,
        value: [
          ...state.value.slice(0, action.payload),
          ...state.value.slice(action.payload + 1),
        ],
      };
    },
    editRow: (state, action) => {
      return {
        ...state,
        indexEditedRow: action.payload,
      };
    },
  },
});
// add to actions, which are used in Form (in App):
export const { formSubmit, deleteRow, editRow } = formSlice.actions;
// this name 'form' is equal reducer name from store:
export const createTransaction = (state) => state.form.value;
export const getIndexEditedRow = (state) => state.form.indexEditedRow;
// it is used in store.js (Action creators)
export default formSlice.reducer;
