import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";
import axios from "axios";

const initialState = {
  movies: [],
  selectedMovie: "",
  status: "idle",
};
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    default: (state) => state,
    setMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setMovies, setMovie, setStatus } = moviesSlice.actions;
export const selectMovies = (state) => state.movies.movies;
export const selectMovie = (state) => state.movies.selectedMovie;
export const selectStatus = (state) => state.movies.status;
export const fetchMovies = (text) => async (dispatch) => {
  dispatch(setStatus("loading"));
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=c85457b0&s=${text}&plot=full`
    );
    dispatch(setMovies(response.data));
    dispatch(setStatus("success"));
  } catch (err) {
    console.error(err);
    dispatch(setStatus("error"));
  }
};
export const fetchMovie = (imdbID) => async (dispatch) => {
  dispatch(setStatus("loading"));
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=c85457b0&i=${imdbID}&plot=full`
    );
    dispatch(setMovie(response.data));
    dispatch(setStatus("success"));
  } catch (err) {
    console.error(err);
    dispatch(setStatus("error"));
  }
};
export default moviesSlice.reducer;
