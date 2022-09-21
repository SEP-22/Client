import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Button from "@mui/material/Button";
import FoodCard from "../../components/FoodCard/FoodCard";
import NavbarLanding from "../../components/Navbar/NavbarLanding";
import loginImg from "../../assets/images/loginImg.png";
import TextField from "@mui/material/TextField";
import "./loginPage.css";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="loginContainer">
        <div className="loginFormContainer">
          <img src={loginImg} alt="" />
          <p className="loginTitle">Log in to your account</p>
          <form className="loginFormContainer">
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              required
              fullWidth
            />
            <Button
              className="formItem"
              style={{ backgroundColor: "#4CAF50", marginBottom: "3vh" }}
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </form>
          <Link className="formLink">Forgot your Password?</Link>
          <Link className="formLink">Create a new account?</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
