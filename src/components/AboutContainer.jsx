import React from "react";
import { Typography } from "@mui/material";
function AboutContainer(props) {
  return (
    <>
      <Typography
        sx={{
          color: "#444444",
          paddingBottom: 3,
          fontSize: { xs: 14, md: 16 },
        }}
        fontFamily={"'Montserrat', sans-serif "}
      >
        La nostra missione è trasformare l’acquisto della tua auto in
        un’esperienza unica e senza preoccupazioni, grazie alla nostra
        competenza, trasparenza e passione per il mondo dei motori. Che tu stia
        cercando un'auto sportiva per vivere l'adrenalina su strada, un veicolo
        familiare per i tuoi viaggi, o desideri partecipare alle nostre aste per
        aggiudicarti l’auto dei tuoi sogni, da noi troverai la soluzione
        perfetta.
      </Typography>
      <Typography
        sx={{ color: "#444444", fontSize: { xs: 14, md: 16 } }}
        fontFamily={"'Montserrat', sans-serif "}
      >
        Scopri il nostro showroom e lasciati guidare dal nostro team di esperti,
        oppure partecipa alle nostre aste per un’esperienza emozionante e
        conveniente. Il tuo viaggio verso l’auto ideale inizia qui!
      </Typography>
    </>
  );
}

export default AboutContainer;
