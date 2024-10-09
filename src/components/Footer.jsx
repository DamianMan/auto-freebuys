import { Box, Typography } from "@mui/material";
import React from "react";

function Footer(props) {
  return (
    <Box sx={{ background: "#444444" }}>
      <Typography
        variant="body2"
        fontFamily={"Montserrat, sans-serif"}
        sx={{ textAlign: "center", padding: "10px 0", color: "#DEDEDE" }}
      >
        2024 ©️ Auto.Freebuys.it
      </Typography>
    </Box>
  );
}

export default Footer;
