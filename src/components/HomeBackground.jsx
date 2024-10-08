import React from "react";
import video from "../assets/home-cars.mp4";
import { styled } from "@mui/material";

const Video = styled("video")(({ theme }) => {});
function HomeBackground(props) {
  return (
    <div style={{ maxWidth: "100%" }}>
      <Video
        style={{
          width: "100%", // Make the video fill the width of the container
          height: "100vh",

          objectFit: "cover", // Maintain aspect ratio
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        autoPlay
        loop
        playsInline
        muted
      >
        <source src={video} type="video/mp4"></source>
      </Video>
    </div>
  );
}

export default HomeBackground;
