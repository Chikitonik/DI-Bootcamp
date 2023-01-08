import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  status: "idle",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    indexMovie: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { indexMovie } = movieSlice.actions;
export const selectMovie = (state) => state.movie.value;
export default movieSlice.reducer;
