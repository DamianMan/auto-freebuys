import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { styled, Box, Typography } from "@mui/material";
import HomeBackground from "./components/HomeBAckground";
import ShowroomBtn from "./components/ShowroomBtn";
import HomeIntro from "./components/HomeIntro";
import AboutContainer from "./components/AboutContainer";

const Main = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

function App() {
  return (
    <>
      <Navbar />
      <HomeBackground />
      <Main>
        <HomeIntro />
        <ShowroomBtn />
      </Main>
      <Main id="about" style={{ height: 700 }}>
        <AboutContainer />
      </Main>
    </>
  );
}

export default App;
