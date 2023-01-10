import { robots } from "../data/robots";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: robots,
  status: "idle",
};
export const robotsSlice = createSlice({
  name: "robotsSlice",
  initialState,
  reducers: {
    robotsFilter: (state, action) => {
      return {
        ...state,
        // value: action.payload,
        value: robots.filter((element) =>
          element.name.toLowerCase().includes(action.payload)
        ),
      };
    },
  },
});
export const { robotsFilter } = robotsSlice.actions;
export const createTransaction = (state) => state.robotsArr.value;
export default robotsSlice.reducer;
