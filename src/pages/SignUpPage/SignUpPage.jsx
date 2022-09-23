import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Button from "@mui/material/Button";
import FoodCard from "../../components/FoodCard/FoodCardUser";
import NavbarLanding from "../../components/Navbar/NavbarLanding";
import loginImg from "../../assets/images/loginImg.png";
import TextField from "@mui/material/TextField";
import "./signUpPage.css";

export default function LandingPage() {
  return (
    <>
      <div className="signUpContainer">
        <div className="signUpFormContainer">
          <img src={loginImg} alt="" />
          <p className="signUpTitle">Create Your Account</p>
          <form className="signUpFormContainer">
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              required
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              fullWidth
              required
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              required
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Re-type Password"
              variant="outlined"
              type="password"
              fullWidth
              required
            />
            <Button
              className="formItem"
              style={{ backgroundColor: "#F178B6", marginBottom: "3vh" }}
              variant="contained"
              type="submit"
              fullWidth
            >
              CREATE YOUR ACCOUNT
            </Button>
          </form>
          <Link className="formLink">Already a member? Sign in.</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
