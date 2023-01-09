import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  status: "idle",
};

export const searchSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { filter } = searchSlice.actions;
export const filterArticle = (state) => state.filter.value;
export default searchSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   value: "",
//   status: "idle",
// };

// export const movieSlice = createSlice({
//   name: "movie",
//   initialState,
//   reducers: {
//     indexMovie: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });
// export const { indexMovie } = movieSlice.actions;
// export const selectMovie = (state) => state.movie.value;
// export default movieSlice.reducer;
