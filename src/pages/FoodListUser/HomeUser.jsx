import React from 'react'
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
import FoodCard from '../../components/DietPlan/FoodCard';
import DietPlan from '../../components/UserHome/DietPlan';

const FoodList = [ {
    Food: "Ice cream",
    Consume: 188,
    Calories: 300,
    Image: "src/assets/images/foods/icecream.jpg",
  }];


const HomeUser = () => {
  return (
    <>
    <Navbar />
    <Box>
        {/* <FoodCard foodItem={FoodList[0]}/> */}
        <DietPlan/>
    </Box>
    <Footer />
  </>
  )
}

export default HomeUser