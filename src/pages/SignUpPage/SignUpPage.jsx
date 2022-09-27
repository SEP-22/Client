import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Button from "@mui/material/Button";
import FoodCard from "../../components/FoodCard/FoodCardUser";
import NavbarLanding from "../../components/Navbar/NavbarLanding";
import loginImg from "../../assets/images/loginImg.png";
import TextField from "@mui/material/TextField";
import "./signUpPage.css";
import { signUp } from "../../utils/api/user";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const nav = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();
    if (
      name != "" &&
      email != "" &&
      phone != "" &&
      password != "" &&
      repassword != ""
    ) {
      const res = await signUp({ name, email, phone, password });
      if (res.status==201) {
        nav("/login");
      } else {
        console.log(res.status);
      }
    } else {
      alert("Invalid inputs");
    }
  };

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
              onChange={() => {
                setName(event.target.value);
              }}
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              required
              onChange={() => {
                setEmail(event.target.value);
              }}
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
              onChange={() => {
                setPhone(event.target.value);
              }}
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              required
              onChange={() => {
                setPassword(event.target.value);
              }}
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Re-type Password"
              variant="outlined"
              type="password"
              fullWidth
              required
              onChange={() => {
                setRepassword(event.target.value);
              }}
            />
            <Button
              className="formItem"
              style={{ backgroundColor: "#F178B6", marginBottom: "3vh" }}
              variant="contained"
              type="submit"
              fullWidth
              onClick={submitForm}
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
