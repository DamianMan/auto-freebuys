import React from "react";
import {
  styled,
  Box,
  Pagination,
  Stack,
  Typography,
  Grow,
} from "@mui/material";
import CarCard from "./CarCard";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Container = styled(Box)(({ theme }) => ({
  margin: 20,

  [theme.breakpoints.up("sm")]: {
    margin: 30,
  },
}));

function ShowroomContainer({ cars }) {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  const [page, setPage] = useState(1);
  const itemsPerPage = 4; // Number of cars per page

  // Calculate the current cars to display
  const startIndex = (page - 1) * itemsPerPage;
  const currentCars = cars.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(cars.length / itemsPerPage); // Total number of pages

  const handleChange = (event, value) => {
    setPage(value);
    const section = document.getElementById("showroom");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <Container ref={container}>
      <Grow ref={container} in={isInView} timeout={2000}>
        <Typography
          variant="body1"
          fontFamily={"Montserrat, sans-serif"}
          color="#EDEDED"
          sx={{
            fontWeight: "light",
            padding: "0 20px",
            marginBottom: 10,
            width: { md: "50%" },
          }}
        >
          In questo angolo raffinato dedicato alle auto, la nostra selezione,
          sebbene contenuta, è solo un assaggio delle infinite possibilità che
          possiamo offrirvi.
          <br /> Invitiamo tutti gli amanti delle auto a esplorare il nostro
          assortimento curato, ma sappiate che il vero viaggio inizia quando ci
          contattate.
        </Typography>
      </Grow>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {currentCars.map((car) => (
            <Grow ref={container} in={isInView} timeout={4000}>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CarCard car={car} />
              </Grid>
            </Grow>
          ))}
        </Grid>
        <Stack spacing={2} sx={{ marginTop: 5 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="circular"
            color="error"
            sx={{
              marginTop: 2,
              display: "flex",
              justifyContent: "center",
              "& .MuiButtonBase-root": { color: "#EDEDED" },
            }}
          />
        </Stack>
      </Box>
    </Container>
  );
}

export default ShowroomContainer;
