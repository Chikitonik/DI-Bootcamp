import { createClient } from "pexels";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./PhotoList.css";
const PEXELS_API = "563492ad6f917000010000013e6f1e9203ec4876883e3d95a8024e5d";
const client = createClient(PEXELS_API);

export default function PhotoList({ query }) {
  const [photosArr, setPhotosArr] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await client.photos.search({ query, per_page: 10 });
      setPhotosArr(result.photos);
    };
    fetchPhotos();
  }, [query]);

  // console.log("photosArr :>> ", photosArr);

  return (
    <Box
      sx={{
        width: 500,
        // height: 450,
        // overflowY: "scroll"
      }}
    >
      {" "}
      <ImageList variant="masonry" cols={3} gap={8}>
        {photosArr.length > 0
          ? photosArr.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.src.small}?w=164&h=164&fit=crop&auto=format`}
                  // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.alt}
                  loading="lazy"
                />
              </ImageListItem>
            ))
          : "No Images Found"}
      </ImageList>
    </Box>
  );
}

// No Images Found
