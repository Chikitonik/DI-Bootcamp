// Send all data requests to: http://www.omdbapi.com/?apikey=[yourkey]&
// Here is your key: c85457b0
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=c85457b0

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchMovies, selectStatus, selectMovies } from "./moviesSlice";
import { useSelector, useDispatch } from "react-redux";
import Movie from "./Movie";
import TextField from "@mui/material/TextField";

export default function Movies() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {" "}
      <Typography variant="h4" gutterBottom>
        Movies and Series info from IMDb
      </Typography>
      <form
        style={{ textAlign: "center", marginBottom: "20px" }}
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(fetchMovies(event.target.search.value));
        }}
      >
        <TextField
          id="standard-basic"
          label="search in title"
          variant="standard"
          name="search"
        />
      </form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {movies.Search &&
          movies.Search.map((movie) => {
            return <Movie movie={movie} />;
          })}
      </div>
    </Box>
  );
}
