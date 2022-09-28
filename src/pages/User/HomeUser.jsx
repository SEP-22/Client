import React from 'react'
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
import FoodCard from '../../components/DietPlan/FoodCard';
import DietPlan from '../../components/UserHome/DietPlan';
import Reminder from '../../components/UserHome/AddReminder';


const FoodList = [ {
    Food: "Ice cream",
    Consume: 188,
    Calories: 300,
    Image: "/src/assets/images/foods/icecream.jpg",
  }];


const HomeUser = () => {
  return (
    <>
    <Box>
        {/* <FoodCard foodItem={FoodList[0]}/> */}
        <DietPlan/>
        <Reminder/>
    </Box>
  </>
  )
}

export default HomeUser