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
  color: "rgb(68, 68, 68, 0.5)",
  textAlign: "left",
}));

const TextLink = styled(Link)(({ theme }) => ({
  fontFamily: "Montserrat,sans-serif",
  textDecoration: "none",
  color: "rgb(68, 68, 68, 0.5)",
  "&:hover": {
    color: "#444444",
  },
}));

function Footer(props) {
  return (
    <>
      <Box sx={{ background: "rgb(68, 68, 68, 0.1)", padding: "20px 0" }}>
        <Grid container spacing={3}>
          <ColumnGrid
            size={{ xs: 12, md: 4 }}
            sx={{ placeItems: { xs: "start", md: "center" } }}
          >
            <Box
              sx={{
                display: "flex",

                mb: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  display: "flex",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "#DA0037",
                  textDecoration: "none",
                  mr: 11,
                  fontSize: { xs: 16, md: 20 },
                }}
              >
                AUTO.FREEBUYS
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",

                mb: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <TextCompany>Manzillo Rosario</TextCompany>
              <TextCompany>via G.Cobellis, 16</TextCompany>
              <TextCompany>Vallo della Lucania, Salerno</TextCompany>
              <TextCompany>P.Iva IT01836970655</TextCompany>
              <TextCompany>CCIIAA Numero REA SA - 195991</TextCompany>
              <TextCompany>+39 0974 1926094 | +39 3285867405</TextCompany>
              <TextCompany>autofreebuys.web@gmail.com</TextCompany>
            </Box>
          </ColumnGrid>
          <ColumnGrid
            size={{ xs: 12, md: 4 }}
            sx={{ placeItems: { xs: "start", md: "center" } }}
          >
            <Box
              sx={{
                display: "flex",

                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <TextCompany sx={{ fontWeight: "bold", color: "#DA0037" }}>
                LINK
              </TextCompany>

              <TextLink href={"#about"}>Chi Siamo</TextLink>
              <TextLink href={"#showroom"}>Esplora</TextLink>
              <TextLink href={"#contactUs"}>Contattaci</TextLink>
            </Box>
          </ColumnGrid>
          <ColumnGrid
            size={{ xs: 12, md: 4 }}
            sx={{ placeItems: { xs: "start", md: "center" } }}
          >
            <Box
              sx={{
                display: "flex",

                mb: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <TextCompany sx={{ fontWeight: "bold", color: "#DA0037" }}>
                POLICY
              </TextCompany>

              <TextLink
                href={"https://www.iubenda.com/privacy-policy/99746964"}
              >
                Privacy Policy
              </TextLink>
              <TextLink
                href={
                  "https://www.iubenda.com/privacy-policy/99746964/cookie-policy"
                }
              >
                Cookies Policy
              </TextLink>
            </Box>
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
