import { React, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Typography, Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import FoodCard from "../../components/FoodCard/FoodCardUser";
import NavbarLanding from "../../components/Navbar/NavbarLanding";
import loginImg from "../../assets/images/loginImg.png";
import TextField from "@mui/material/TextField";
import "./loginPage.css";
import { signIn } from "../../utils/api/user";
import useAuth from "../../utils/providers/AuthProvider";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

export default function LogInPage() {
  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, signUser } = useAuth();

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    setIsMatch(true);
    setIsSet(false);
    if (username !== "" && password !== "") {
      setIsSet(false);
      const res = await signIn({ username, password });
      if (res.data.message === "success") {
        signUser(res.data.user);
        console.log(res.data.user);
        if (res.data.user.role === "user") {
          nav("/eatsmart");
        } else {
          nav("/admin");
        }
      } else if (res.data.message === "invalid email or password") {
        setIsMatch(false);
        setLoading(false);
        console.log(res.data.message);
      }
    } else {
      setIsSet(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(user);
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginFormContainer">
          <img src={loginImg} alt="" />
          <p className="loginTitle">Log in to your account</p>
          <form className="loginFormContainer">
            <TextField
              style={{ marginBottom: "3vh" }}
              id="login-email"
              label="E-mail"
              variant="outlined"
              required
              fullWidth
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="login-password"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              required
              fullWidth
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {!isMatch ? <p>Invalid email or password</p> : <p></p>}
            {isSet ? <p>Please enter email and password</p> : <p></p>}
            {!loading ? (
              <Button
                id="login"
                className="formItem"
                style={{ backgroundColor: "#4CAF50", marginBottom: "3vh" }}
                variant="contained"
                fullWidth
                onClick={login}
              >
                Login
              </Button>
            ) : (
              <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <CircularProgress color="warning" size={20} />
                  <Typography variant="button">
                    &nbsp;&nbsp;Loading....{" "}
                  </Typography>
                </Box>
              </Grid>
            )}
          </form>
          <Link className="formLink" >Forgot your Password?</Link>
          <Link className="formLink" to={"/signup"}>Create a new account?</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
