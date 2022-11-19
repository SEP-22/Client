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
import { NavLink } from "react-router-dom";
import useAuth from "../../utils/providers/AuthProvider";


const pages = [
  ["HOME", "home"],
  ["DIET PLANS", "dietplans"],
  ["MANAGE", "manage"],
  ["FOOD LIST", "foodlist"],
  ["SHOPPING LIST", "shoppinglist"],
];
const settings = [["Profile", "profile"], ["Logout", "/login"]];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, signUser } = useAuth();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (value) => {
    if (value == "/login") {
      sessionStorage.removeItem("_AT");
      localStorage.removeItem("_RT");
      localStorage.removeItem("user");
      signUser(null)
    }
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar position="fixed" color="secondary">
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
                {pages.map((page) => (
                  <MenuItem
                    id = {page[1]}
                    key={page[0]}
                    to={page[1]}
                    className="nav-link"
                    component={NavLink}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center" variant="button">
                      {page[0]}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              alt="logo"
              src="src/assets/images/logo.png"
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
              {pages.map((page) => (
                <Button
                  className="nav-link"
                  component={NavLink}
                  to={page[1]}
                  key={page[0]}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page[0]}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb--people-icon-avatar.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting[0]}
                    to={setting[1]}
                    className="nav-link"
                    component={NavLink}
                    onClick={()=>{handleCloseUserMenu(setting[1]);}}
                  >
                    <Typography textAlign="center" variant="button">{setting[0]}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar></Toolbar>
    </Box>
  );
};
export default ResponsiveAppBar;
