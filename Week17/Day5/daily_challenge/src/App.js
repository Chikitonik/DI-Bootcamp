import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Box from "@mui/material/Box";
import "./App.css";

const rawData = [
  [<AirplanemodeActiveIcon />, "Flies", 3000],
  [<AccessibilityNewIcon />, "People", 9000],
  [<ArrowCircleRightIcon />, "Arrows", 5000],
  [<AssistantPhotoIcon />, "Flags", 50000],
  [<Brightness5Icon />, "Suns", 1000],
];
const data = rawData.map((element) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {element[0]} {element[1]}
        </Typography>
        <Typography variant="h5" component="div">
          {element[2]}
        </Typography>
      </CardContent>
    </Card>
  );
});

function App() {
  return (
    <Box
      className="box"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,

          "& ul": { padding: 0 },
        }}
        // subheader={<Card />}
      >
        <ListItem>{data}</ListItem>
      </List>
    </Box>
  );
}

export default App;
