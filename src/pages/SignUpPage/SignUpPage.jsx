import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Button from "@mui/material/Button";
import loginImg from "../../assets/images/loginImg.png";
import TextField from "@mui/material/TextField";
import "./signUpPage.css";
import { signUp } from "../../utils/api/user";
import useAuth from "../../utils/providers/AuthProvider";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const { user, signUser } = useAuth();

  const reContact = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const submitForm = async (event) => {
    event.preventDefault();
    if (
      name == "" ||
      email == "" ||
      phone == "" ||
      password == "" ||
      repassword == ""
    ) {
      setError("All fields should be filled!");
    } else if (!reEmail.test(email)) {
      setError("Please enter a valid Email!");
    } else if (!reContact.test(phone)) {
      setError("Please enter a valid phone number!");
    } else if (password !== repassword) {
      setError("Passwords do not match!");
    } else if (password.length < 8) {
      setError("Password length should be more than 8!");
    } else {
      const res = await signUp({ name, email, phone, password, role: "user" });
      if (res.status === 201) {
        signUser(res.data.newUser);
        // console.log(user)
        nav("/login");
      } else {
        console.log(res.status);
      }
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
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField
              style={{ marginBottom: "3vh" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              pattern="/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/"
              fullWidth
              required
              onChange={(event) => {
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
              onChange={(event) => {
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
              onChange={(event) => {
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
              onChange={(event) => {
                setRepassword(event.target.value);
              }}
            />
            {error !== "" ? <p style={{ color: "red" }}>{error}</p> : <p></p>}
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
