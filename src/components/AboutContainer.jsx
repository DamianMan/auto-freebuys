import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.27)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(68, 68, 68, 0.3)",
  padding: "20px 10px",
  [theme.breakpoints.up("sm")]: {
    background: "transparent",
    borderRadius: 0,
    boxShadow: "none",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    border: "none",
  },
}));

function AboutContainer(props) {
  return (
    <Container sx={{ paddingRight: { xs: 0, md: 105 } }}>
      <Typography
        sx={{
          color: "#444444",
          paddingBottom: 3,
          fontSize: { xs: 14, md: 16 },
        }}
        fontFamily={"Montserrat"}
      >
        La nostra missione è trasformare l’acquisto della tua auto in
        un’esperienza unica e senza preoccupazioni, grazie alla nostra
        competenza, trasparenza e passione per il mondo dei motori.
      </Typography>
      <Typography
        sx={{
          color: "#444444",
          paddingBottom: 3,
          fontSize: { xs: 14, md: 16 },
        }}
        fontFamily={"Montserrat"}
      >
        Che tu stia cercando un'auto sportiva per vivere l'adrenalina su strada,
        un veicolo familiare per i tuoi viaggi, o desideri partecipare alle
        nostre aste per aggiudicarti l’auto dei tuoi sogni, da noi troverai la
        soluzione perfetta.
      </Typography>
      <Typography
        sx={{
          color: "#444444",
          fontSize: { xs: 14, md: 16 },
        }}
        fontFamily={"Montserrat"}
      >
        Scopri il nostro showroom e lasciati guidare dal nostro team di esperti,
        oppure partecipa alle nostre aste per un’esperienza emozionante e
        conveniente. Il tuo viaggio verso l’auto ideale inizia qui!
      </Typography>
    </Container>
  );
}

export default AboutContainer;
