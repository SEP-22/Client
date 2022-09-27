import React from "react";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Button from "@mui/material/Button";
import FoodCard from "../../components/FoodCard/FoodCardUser";
import NavbarLanding from "../../components/Navbar/NavbarLanding";
import LandingImg1 from "../../assets/images/LandingPic1.png"
import LandingImg2 from "../../assets/images/LandingPic2.png";
import "./landingPage.css"


export default function LandingPage() {
  return (
    <>
      <NavbarLanding />
      <div className="landingContainer">
        <div className="landingCard">
          <div className="landingDesc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button className="landingBtn" variant="contained">
              GET YOUR DIET PLAN
            </Button>
          </div>
          <img className="landingCardImg" src={LandingImg1} alt="" />
        </div>
        <div className="landingCard">
          <img className="landingCardImg" src={LandingImg2} alt="" />
          <div className="landingDesc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button
              className="landingBtn"
              style={{ backgroundColor: "#4CAF50" }}
              variant="contained"
            >
              GET MOBILE APP
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
