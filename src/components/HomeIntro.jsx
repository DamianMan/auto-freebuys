import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Fade, Box, Typography } from "@mui/material";
function HomeIntro(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Fade in={isInView} timeout={2000} ref={ref}>
      <Box
        sx={{
          zIndex: 10,
          //   background: "rgba(68, 68, 68, 0.27)",
          //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          //   backdropFilter: "blur(5px)",
          //   WebkitBackdropFilter: "blur(5px)",
          //   border: "1px solid rgba(68, 68, 68, 0.3)",
          padding: { xs: 5, md: 20 },
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          marginTop: { xs: 10, md: 0 },
        }}
      >
        <Typography
          sx={{
            color: "#EDEDED",
            paddingBottom: 3,
            fontSize: { xs: 20, md: 26 },
          }}
          fontFamily={"'Montserrat', sans-serif"}
        >
          Benvenuti da
          <Typography
            variant="span"
            color="#DA0037"
            fontFamily={"'Montserrat', sans-serif"}
            sx={{
              m: 1,
              fontSize: { xs: 22, md: 33 },
              fontWeight: "bold",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.48)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(68, 68, 68, 0.3)",
              padding: 1,
            }}
          >
            Auto.Freebuys.it!{""}
          </Typography>
        </Typography>
        <Typography
          color="#EDEDED"
          fontFamily={"'Montserrat', sans-serif"}
          sx={{ fontSize: { xs: 20, md: 26 } }}
        >
          Siamo il punto di riferimento per chi desidera trovare l'auto dei
          propri sogni, con un’ampia selezione di veicoli nuovi e usati
          garantiti, tutti accuratamente selezionati per offrirti solo il
          meglio.
        </Typography>
      </Box>
    </Fade>
  );
}

export default HomeIntro;
