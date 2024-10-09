import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, styled } from "@mui/system";
import { Chip } from "@mui/material";

const Text = styled(Typography)(({ them }) => ({
  fontFamily: "Montserrat, sans-serif",
}));

function CarCard({ car }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      sx={{
        width: { xs: "80vw", md: "45vw" },
        boxShadow: "10px 5px 25px #DEDEDE",
        marginBottom: 3,
        margin: "20px 3px",
      }}
    >
      <CardHeader
        sx={{ fontFamily: "Montserrat, sans-serif" }}
        title={`${car.make} ${car.model}`}
        subheader={`Anno - ${car.year}`}
      />
      <CardMedia
        component="img"
        image="https://images.unsplash.com/photo-1510903117032-f1596c327647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhciUyMGJtd3xlbnwwfHwwfHx8MA%3D%3D"
        alt={`${car.make} ${car.model}`}
      />
      <CardContent>
        <Text variant="body2" sx={{ color: "#444444", fontWeight: "bold" }}>
          Motore
        </Text>
        <Text variant="body2" sx={{ color: "#171717" }}>
          {car.engine}
        </Text>
        <Text variant="body2" sx={{ color: "#444444", fontWeight: "bold" }}>
          Chilometri
        </Text>
        <Text variant="body2" sx={{ color: "#171717" }}>
          {car.mileage}
        </Text>
        <Text variant="body2" sx={{ color: "#444444", fontWeight: "bold" }}>
          Carburante
        </Text>
        <Text variant="body2" sx={{ color: "#171717" }}>
          {car.fuelType}
        </Text>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          background: "rgb(237, 237, 237, 0.6)",
          padding: "3px 15px",
        }}
      >
        <Text variant="body2" sx={{ color: "#444444", ml: 1 }}>
          Più Info
        </Text>
        <IconButton
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {!expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Text variant="body2" sx={{ color: "#444444", fontWeight: "bold" }}>
            Optionals
          </Text>
          {car.features.map((item) => (
            <Chip label={item} variant="outlined" color="error" />
          ))}
          <Text variant="body2" sx={{ color: "#444444", fontWeight: "bold" }}>
            Cambio
          </Text>
          <Text variant="body2" sx={{ color: "#171717" }}>
            {car.transmission}
          </Text>
          <Text variant="body2" sx={{ color: "#444444", fontWeight: "bold" }}>
            Trazione
          </Text>
          <Text variant="body2" sx={{ color: "#171717" }}>
            {car.drivetrain}
          </Text>
          <Text variant="body2" sx={{ color: "#444444", fontWeight: "bold" }}>
            Colore
          </Text>
          <Text variant="body2" sx={{ color: "#171717" }}>
            {car.color}
          </Text>
          <Text variant="body2" sx={{ color: "#444444", fontWeight: "bold" }}>
            Porte
          </Text>
          <Text variant="body2" sx={{ color: "#171717" }}>
            {car.doors}
          </Text>
          <Text variant="body2" sx={{ color: "#444444", fontWeight: "bold" }}>
            Posti
          </Text>
          <Text variant="body2" sx={{ color: "#171717" }}>
            {car.seats}
          </Text>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
              background: "rgb(237, 237, 237, 0.6)",
              borderRadius: "16px",
              padding: "3px 15px",
            }}
          >
            <Text
              variant="body1"
              sx={{ color: "#444444", fontWeight: "bold", textAlign: "end" }}
            >
              Prezzo
            </Text>
            <Text variant="body1" sx={{ color: "#171717", textAlign: "end" }}>
              € {car.price},00
            </Text>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CarCard;
