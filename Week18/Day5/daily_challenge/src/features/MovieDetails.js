import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { fetchMovie, selectStatus, selectMovie } from "./moviesSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Movie() {
  //   console.log("props :>> ", props);
  const selectedMovie = useSelector(selectMovie);
  console.log("selectedMovie :>> ", selectedMovie);
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Card sx={{ maxWidth: 200, maxHeight: 300 }} key={selectedMovie.imdbID}>
        {/* <CardActionArea id={selectedMovie.imdbID}> */}
        <CardMedia
          component="img"
          //   height="300"
          image={selectedMovie.Poster}
          alt={selectedMovie.Title}
        />
        {/* </CardActionArea> */}
      </Card>
      <Box sx={{ maxWidth: 400 }}>
        <Typography gutterBottom variant="h5" component="div">
          Title: {`${selectedMovie.Title}`}
        </Typography>
        <Typography variant="body1">{`Type: ${selectedMovie.Type}`}</Typography>
        <Typography variant="body1">{`Year: ${selectedMovie.Year}`}</Typography>
        <Typography variant="body1">{`Country: ${selectedMovie.Country}`}</Typography>
        <Typography variant="body1">{`Genre: ${selectedMovie.Genre}`}</Typography>
        <Typography variant="body1">{`Actors: ${selectedMovie.Actors}`}</Typography>
        <br />
        <Typography variant="body2">{selectedMovie.Plot}</Typography>
        <Button
          href={`https://www.imdb.com/title/${selectedMovie.imdbID}/`}
          target="blank"
        >
          View on IMDB
        </Button>
      </Box>
    </Box>
  );
}
