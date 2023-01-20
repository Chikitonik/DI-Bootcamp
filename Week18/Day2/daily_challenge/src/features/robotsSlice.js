import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allRobots: [],
  filteredRobots: [],
  status: "idle",
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {
    filterRobots: (state, action) => {
      state.filteredRobots = state.allRobots.filter((robot) => {
        return robot.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
    setRobots: (state, action) => {
      state.allRobots = action.payload;
      state.filteredRobots = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    default: (state) => state,
  },
});

export const { filterRobots, setRobots, setStatus } = robotsSlice.actions;
export const selectRobots = (state) => state.robots.filteredRobots;
export const selectStatus = (state) => state.robots.status;

export const fetchRobots = () => async (dispatch) => {
  dispatch(setStatus("loading"));
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(setRobots(response.data));
    dispatch(setStatus("success"));
  } catch (err) {
    console.error(err);
    dispatch(setStatus("error"));
  }
};

export default robotsSlice.reducer;
