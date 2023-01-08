import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { indexMovie, selectMovie } from "./movieSlice";
import styles from "./Movie.module.css";

import movies from "../data/movies.json";

export function Movie() {
  const index = useSelector(selectMovie);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>Movie List</h2>
        {/* <div>Index: {index}</div> */}
        {movies.map((movie, index) => {
          return (
            <div className={styles.row}>
              <div key={index}>{movie.title} </div>
              <button onClick={() => dispatch(indexMovie(index))}>
                Details
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Movie</h2>
        <p>
          {index === "" ? (
            "Select movie"
          ) : (
            <div>
              Title: {movies[index].title}
              <br />
              Release Date: {movies[index].releaseDate}
              <br />
              Rating: {movies[index].rating}
            </div>
          )}
        </p>
      </div>
    </div>
  );
}
