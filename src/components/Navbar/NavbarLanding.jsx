import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const buttons = [
  ["login", "success"],
  ["signup", "primary"],
];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            alt="logo"
            src="/src/assets/images/logo.png"
          />
          <Typography
            variant="h5"
            noWrap
            component="h2"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EatSmart
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {buttons.map((page) => (
                <MenuItem
                  key={page[0]}
                  to={page[0]}
                  className="nav-link"
                  component={NavLink}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center" variant="button">{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            alt="logo"
            src="/src/assets/images/logo.png"
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EatSmart
          </Typography>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            {buttons.map((btn) => (
              <Button
                variant="contained"
                color={btn[1]}
                key={btn[0]}
                id = {btn[0]}
                onClick={() => navigate(btn[0])}
                sx={{ m: 2, color: "black", display: "block" }}
              >
                {btn[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
