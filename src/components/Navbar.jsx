import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../assets/auto-logo.png";

const pages = [
  { page: "Chi Siamo", url: "#about" },
  { page: "Esplora", url: "#showroom" },
  { page: "Contattaci", url: "#contactUs" },
  { page: "Telefono", url: "tel:+393285867405" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const color = `${trigger ? "#EDEDED" : "#DA0037"}`;

  return (
    <AppBar
      position="fixed"
      sx={{
        background: `${trigger ? "#DA0037" : "transparent"}`,
        transition: "background-color 0.5s ease-in-out", // Smooth transition effect
      }}
      elevation={trigger ? 3 : 0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color,
              textDecoration: "none",
            }}
          >
            AUTO.FREEBUYS
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color }}
            >
              {!isMenuOpen ? <ClearAllIcon /> : <CloseIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              color="yellow"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((item) => (
                <MenuItem key={item.page} onClick={handleCloseNavMenu}>
                  {item.page !== "Telefono" ? (
                    <Typography sx={{ textAlign: "center" }}>
                      {item.page}
                    </Typography>
                  ) : (
                    <PhoneIcon />
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img
            src={logo}
            style={{
              width: 50,
              height: 50,
              m: 3,
              display: { xs: "flex", md: "none" },
              boxShadow: "3px 5px 10px #444444",
              borderRadius: "50%",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 1,
              display: "flex",
              flexGrow: 1,
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color,
              textDecoration: "none",
              fontSize: { xs: 16, md: 20 },
            }}
          >
            AUTO.FREEBUYS
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}>
            {pages.map((item, i) => (
              <Button
                key={item.page + i}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color, display: "block" }}
                endIcon={item.page === "Telefono" && <PhoneIcon />}
                href={item.url}
              >
                {item.page !== "Telefono" && item.page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
