import "./App.css";
import Navbar from "./components/Navbar";
import { styled, Box, Typography } from "@mui/material";
import HomeBackground from "./components/HomeBAckground";
import ShowroomBtn from "./components/ShowroomBtn";
import HomeIntro from "./components/HomeIntro";
import AboutContainer from "./components/AboutContainer";
import NavigationBreadcrumb from "./components/NavigationBreadcrumb";
import bg from "./assets/about-bg.png";
import cars from "./assets/carsData/cars";

const Main = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const About = styled(Box)(({ theme }) => ({
  height: 700,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  margin: 20,
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom", // set position to bottom for mobile
  [theme.breakpoints.up("sm")]: {
    margin: 30,
  },
}));
function App() {
  return (
    <>
      <Navbar />
      <HomeBackground />
      <Main id="home">
        <HomeIntro />
        <ShowroomBtn />
      </Main>
      <About id="about">
        <NavigationBreadcrumb />
        <AboutContainer />
      </About>
    </>
  );
}

export default App;
