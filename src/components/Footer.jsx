import { Box, Typography, styled, Link } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import logo from "../assets/auto-logo.png";

const ColumnGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: 10,
}));

const TextCompany = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat,sans-serif",
  color: "#444444",
}));

const TextLink = styled(Link)(({ theme }) => ({
  fontFamily: "Montserrat,sans-serif",
  textDecoration: "none",
  color: "#444444",
}));

function Footer(props) {
  return (
    <>
      <Box sx={{ background: "rgb(68, 68, 68, 0.1)", padding: "20px 0" }}>
        <Grid container spacing={3}>
          <ColumnGrid size={{ xs: 12, md: 4 }} sx={{ placeItems: "start" }}>
            <Box
              sx={{
                display: "flex",

                mb: 1,
              }}
            >
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "#DA0037",
                  textDecoration: "none",
                  fontSize: { xs: 16, md: 20 },
                }}
              >
                AUTO.FREEBUYS
              </Typography>
            </Box>

            <TextCompany>via G.Cobellis, 16</TextCompany>
            <TextCompany>Vallo della Lucania, Salerno</TextCompany>
            <TextCompany>P.IVA IT483072380234</TextCompany>
            <TextCompany>+39 328 5867405</TextCompany>
            <TextCompany>auto.freebuys@info.it</TextCompany>
          </ColumnGrid>
          <ColumnGrid size={{ xs: 12, md: 4 }} sx={{ placeItems: "start" }}>
            <TextCompany sx={{ fontWeight: "bold", color: "#DA0037" }}>
              LINK
            </TextCompany>

            <TextLink href={"#about"}>Chi Siamo</TextLink>
            <TextLink href={"#showroom"}>Esplora</TextLink>
            <TextLink href={"#contactUs"}>Contattaci</TextLink>
          </ColumnGrid>
          <ColumnGrid size={{ xs: 12, md: 4 }}>
            <TextCompany sx={{ fontWeight: "bold", color: "#DA0037" }}>
              POLICY
            </TextCompany>

            <TextLink href={"#showroom"}>Privacy Policy</TextLink>
            <TextLink href={"#contactUs"}>Cookies Policy</TextLink>
          </ColumnGrid>
        </Grid>
      </Box>
      <Box sx={{ background: "#444444" }}>
        <Typography
          variant="body2"
          fontFamily={"Montserrat, sans-serif"}
          sx={{ textAlign: "center", padding: "10px 0", color: "#DEDEDE" }}
        >
          2024 ©️ Auto.Freebuys.it
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
