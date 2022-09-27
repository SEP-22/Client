import React from "react";
import Box from '@mui/material/Box';
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import UserFoodList from "../../components/FoodList/UserFoodList";

export default function FoodListUser() {
    return (
      <>
        <Navbar />
        <Box>
          <UserFoodList/>
        </Box>
        <Footer />
      </>
    );
  }