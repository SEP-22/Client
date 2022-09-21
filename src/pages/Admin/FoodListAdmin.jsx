import React from 'react'
import Navbar from "../../components/Navbar/NavbarAdmin";
import Footer from "../../components/Footer/Footer";
import GuideAdmin from "../../components/FoodList/GuideAdmin";
import FoodList from "../../components/FoodList/FoodListAdmin";
import Box from '@mui/material/Box';

const FoodListAdmin = () => {
  return (
    <>
      <GuideAdmin />
      <FoodList/>
  </>
  )
}

export default FoodListAdmin