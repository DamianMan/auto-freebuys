import InfoIcon from "@mui/icons-material/Info";
import { Chip } from "@mui/material";

export default function NavigationBreadcrumb() {
  return (
    <>
      <Chip
        label="CHI SIAMO"
        variant="outlined"
        color="error"
        sx={{ color: "#DA0037", margin: "50px 0px" }}
        icon={<InfoIcon />}
      />
    </>
  );
}
