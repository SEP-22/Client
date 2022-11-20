import React from "react";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Button from "@mui/material/Button";
import FoodCard from "../../components/FoodCard/FoodCardUser";
import NavbarLanding from "../../components/Navbar/NavbarLanding";
import LandingImg1 from "../../assets/images/LandingPic1.png";
import LandingImg2 from "../../assets/images/LandingPic2.png";
import "./landingPage.css";

export default function LandingPage() {
  return (
    <>
      <NavbarLanding />
      <div className="landingContainer">
        <div className="landingCard">
          <div className="landingDesc">
            <p>
              Healthy - Smart - Easy - User Friendly
              <p className="eatsmart">EatSmart</p>
              Customized diet plans to achieve all of your body goals.<br></br>{" "}
              Unique food preferences; No worries we got you 7 choices.<br></br>{" "}
              Each diet plan comes with a shopping list.<br></br> Checking off
              all the boxes for nutritional levels, we guarantee a BALANCED
              diet.<br></br> Complete the quiz to create your own diet plan.
              <br></br> Hurry UP! No time to waste...<br></br>
              Jump into your healthy lifestyle with EatSmart
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
