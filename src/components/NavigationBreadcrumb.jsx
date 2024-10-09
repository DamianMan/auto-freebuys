import InfoIcon from "@mui/icons-material/Info";
import { Chip, Grow } from "@mui/material";
import DvrIcon from "@mui/icons-material/Dvr";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function NavigationBreadcrumb({ name }) {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  return (
    <Grow ref={container} in={isInView} timeout={3000}>
      <Chip
        label={name}
        variant="outlined"
        color="error"
        sx={{
          color: `${
            (name === "CHI SIAMO" && "#DA0037") ||
            (name === "SHOWROOM" && "#EDEDED") ||
            (name === "CONTACT US" && "#DA0037")
          }`,
          margin: { xs: "50px 20px", md: "50px 35px" },
        }}
        icon={
          (name === "CHI SIAMO" && <InfoIcon />) ||
          (name === "SHOWROOM" && <DvrIcon />) ||
          (name === "CONTACT US" && <ContactPageIcon />)
        }
      />
    </Grow>
  );
}
