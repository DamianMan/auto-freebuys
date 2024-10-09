import "./App.css";
import Navbar from "./components/Navbar";
import { styled, Box, Typography } from "@mui/material";
import HomeBackground from "./components/HomeBAckground";
import ShowroomBtn from "./components/ShowroomBtn";
import HomeIntro from "./components/HomeIntro";
import AboutContainer from "./components/AboutContainer";
import NavigationBreadcrumb from "./components/NavigationBreadcrumb";
import aboutBg from "./assets/about-bg.png";
import contactUsBg from "./assets/contactUs-bg.png";
import cars from "./assets/carsData/cars";
import ShowroomContainer from "./components/ShowroomContainer";
import ContactUsContainer from "./components/ContactUsContainer";
import Footer from "./components/Footer";

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
  backgroundImage: `url(${aboutBg})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom", // set position to bottom for mobile
  [theme.breakpoints.up("sm")]: {
    paddingTop: 35,
  },
}));

const ShohwRoom = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  background: "#171717",
  backgroundImage: `
    linear-gradient(rgba(23, 23, 23, 0.7), rgba(23, 23, 23, 0.7)), 
    url("https://images.unsplash.com/photo-1518987048-93e29699e79a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
  `,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center", // set position to bottom for mobile

  [theme.breakpoints.up("sm")]: {
    paddingTop: 35,
  },
}));
const ContactUs = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  backgroundImage: `url(${contactUsBg})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom", // set position to bottom for mobile

  [theme.breakpoints.up("sm")]: {
    paddingTop: 35,
  },
}));

const Blank = styled(Box)(({ theme }) => ({
  height: 100,
  background: "transparent",
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
      <Blank />
      <About id="about">
        <NavigationBreadcrumb name="CHI SIAMO" />
        <AboutContainer />
      </About>
      <Blank />
      <ShohwRoom id="showroom">
        <NavigationBreadcrumb name="SHOWROOM" />
        <ShowroomContainer cars={cars} />
      </ShohwRoom>
      <Blank />
      <ContactUs id="contactUs">
        <NavigationBreadcrumb name="CONTACT US" />
        <ContactUsContainer />
      </ContactUs>
      <Blank />
      <Footer />
    </>
  );
}

export default App;
