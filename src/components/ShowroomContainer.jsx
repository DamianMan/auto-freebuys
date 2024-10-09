import React from "react";
import { styled, Box, Pagination, Stack } from "@mui/material";
import CarCard from "./CarCard";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const Container = styled(Box)(({ theme }) => ({
  margin: 20,
  zIndex: 10,

  [theme.breakpoints.up("sm")]: {
    margin: 30,
  },
}));

function ShowroomContainer({ cars }) {
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
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {currentCars.map((car) => (
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
