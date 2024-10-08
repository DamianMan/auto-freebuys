import React from "react";
import { Button, styled, keyframes, Fade } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import { useRef } from "react";
import { useInView } from "framer-motion";
const pulse = keyframes`  
 
0% {
 box-shadow: 0 0 0 0 #DA0037;
}

70% {
 box-shadow: 0 0 0 30px rgb(218 103 68 / 0%);
}

100% {
 box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
}

`;
const ShowBtn = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  background: "#DA0037",
  borderRadius: "16px",
  color: "#EDEDED",
  padding: "15px 40px",
  letterSpacing: 3,
  animation: `${pulse} 3s infinite`,
  "&:hover": {
    background: "#EDEDED",
    borderRadius: "16px",
    color: "#DA0037",
  },
}));

function ShowroomBtn(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Fade timeout={3000} ref={ref} in={isInView}>
      <ShowBtn variant="contained" startIcon={<SpeedIcon fontSize="large" />}>
        Showroom
      </ShowBtn>
    </Fade>
  );
}

export default ShowroomBtn;
