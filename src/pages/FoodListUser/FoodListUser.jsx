import React from "react";
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
import GuideUserFoodList from "../../components/FoodList/GuideUser";
import FoodList from "../../components/FoodList/FoodList";

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