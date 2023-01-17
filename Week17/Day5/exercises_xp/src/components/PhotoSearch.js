import PhotoList from "./PhotoList";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "./PhotoSearch.css";

export default function PhotoSearch() {
  let [query, setQuery] = useState("mountains");

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.search.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    setQuery(event.target.textContent);
  };

  const buttonLabels = ["mountains", "rivers", "sea", "food", "birds"];
  const buttons = buttonLabels.map((label, index) => (
    <Button key={index} onClick={handleButtonClick}>
      {label}
    </Button>
  ));
  return (
    <Box
      sx={{
        width: "auto",
        // height: 450,
        // overflowY: "scroll",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h2" gutterBottom className="center-blue">
          Snap Shot
        </Typography>
        <form onSubmit={(event) => handleSearch(event)} className="center-blue">
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            name="search"
            className="center-blue"
          />
        </form>
        <ButtonGroup
          size="small"
          aria-label="small button group"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {buttons}
        </ButtonGroup>
        <Typography variant="h4" gutterBottom className="center-blue">
          {query} images
        </Typography>
        <PhotoList query={query} />
      </Stack>
    </Box>
  );
}
