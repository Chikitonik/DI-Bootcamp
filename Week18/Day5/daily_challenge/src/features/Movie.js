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
import MovieDetails from "./MovieDetails";

export default function Movie(props) {
  //   console.log("props :>> ", props);
  const dispatch = useDispatch();

  const movie = props.movie;
  const [open, setOpen] = React.useState(false);
  const handleOpen = (imdbID) => {
    setOpen(true);
    dispatch(fetchMovie(imdbID));
  };
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card sx={{ maxWidth: 300 }} key={movie.imdbID}>
      <CardActionArea
        id={movie.imdbID}
        onClick={() => handleOpen(movie.imdbID)}
      >
        <CardMedia
          component="img"
          //   height="300"
          image={movie.Poster}
          alt={movie.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${movie.Title}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Type: ${movie.Type}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Year: ${movie.Year} `}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <MovieDetails />
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}
