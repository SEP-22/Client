import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Button from "@mui/material/Button";
import FoodCard from "../../components/FoodCard/FoodCardUser";
import NavbarLanding from "../../components/Navbar/NavbarLanding";
import loginImg from "../../assets/images/loginImg.png";
import TextField from "@mui/material/TextField";
import "./loginPage.css";
import { signIn } from "../../utils/api/user";

export default function LandingPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);

  const nav = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    if (username != "" && password != "") {
      const res = await signIn({ username, password });
      if (res.data.message=="success") {
        nav("/");
      }else if (res.data.message == "invalid email or password") {
        setIsMatch(false);
        console.log(res.data.message);
      }
    } else {
      alert("Invalid inputs");
    }
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
              onChange={() => {
                setUsername(event.target.value);
              }}
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="login-password"
              label="Password"
              variant="outlined"
              type="password"
              required
              fullWidth
              onChange={() => {
                setPassword(event.target.value);
              }}
            />
            {!isMatch ? <p>Invalid email or password</p>:<p></p>}
            <Button
              className="formItem"
              style={{ backgroundColor: "#4CAF50", marginBottom: "3vh" }}
              variant="contained"
              fullWidth
              onClick={login}
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
