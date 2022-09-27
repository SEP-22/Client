import React from 'react'
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
// import FoodCard from '../../components/DietPlan/FoodCard';
import DietPlan from '../../components/UserHome/DietPlan';
//import FoodCard from '../../components/ShoppingList/FoodCard';
import ShoppingList from '../../components/ShoppingList/ShoppingList';

const ShoppingLists = () => {
  return (
    <>
      <Navbar/>
      <Box>
        {/* <DietPlan/> */}
        {/* <FoodCard/> */}
        <ShoppingList/>
      </Box>
      <Footer/>
    </>
  )
}

export default ShoppingLists
