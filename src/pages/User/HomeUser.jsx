import React from 'react'
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
import FoodCard from '../../components/DietPlan/FoodCard';
import DietPlan from '../../components/UserHome/DietPlan';
import Reminder from '../../components/UserHome/AddReminder';
import StatsMain from '../../components/Stats/StatsMain';



const HomeUser = () => {
  return (
    <>
    <Box>
        <DietPlan/>
        <StatsMain/>

    </Box>
  </>
  )
}

export default HomeUser