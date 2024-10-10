import React from "react";
import { Typography, styled, Box, Button, Grow } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Container = styled(Box)(({ theme }) => ({
  margin: 20,

  [theme.breakpoints.up("sm")]: {
    margin: 20,
  },
}));
function ContactUsContainer(props) {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  return (
    <Container ref={container}>
      <Grow in={isInView} timeout={3000}>
        <Typography
          variant="body1"
          fontFamily={"Montserrat, sans-serif"}
          color="#444444"
          sx={{
            fontWeight: "light",
            padding: "0 20px",
            marginBottom: 10,
            width: { md: "50%" },
          }}
        >
          Non trovate l'auto dei vostri sogni? Non preoccupatevi! Chiamateci o
          inviateci un’email, e noi ci impegneremo a cercare il modello perfetto
          per voi. Siamo qui per trasformare il vostro desiderio automobilistico
          in realtà.
          <br />
          La vostra avventura inizia con un semplice gesto: contattateci e
          scopriamo insieme il futuro della vostra mobilità!
        </Typography>
      </Grow>
      <Grow in={isInView} timeout={5000}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            ml: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#DA0037",
              margin: "20px 0",
              fontFamily: "Montserrat, sans-serif",
            }}
            endIcon={<SendIcon />}
            elevation={6}
            href="mailto:autofreebuys.web@gmail.com"
          >
            autofreebuys.web@gmail.com
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#444444",
              margin: "20px 0",
              fontFamily: "Montserrat, sans-serif",
            }}
            endIcon={<PhoneIphoneIcon />}
            elevation={6}
            href="tel:+393285867405"
          >
            +39 3285867405
          </Button>
        </Box>
      </Grow>
    </Container>
  );
}

export default ContactUsContainer;
