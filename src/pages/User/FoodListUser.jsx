import React from "react";
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
import GuideUserFoodList from "../../components/FoodListUser/GuideUserFoodList";
import FoodList from "../../components/FoodListUser/FoodList";

export default function FoodListUser() {
    return (
      <>
        <Navbar />
        <Box>
          <GuideUserFoodList />
          <FoodList/>
        </Box>
        <Footer />
      </>
    );
  }