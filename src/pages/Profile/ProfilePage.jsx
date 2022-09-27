import React from 'react'
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
import UserProfile from '../../components/User/UserProfile';
import "./profilePage.css"
// import FoodCard from '../../components/DietPlan/FoodCard';
//import DietPlan from '../../components/UserHome/DietPlan';
//import FoodCard from '../../components/ShoppingList/FoodCard';

const ProfilePage = () => {
  return (
    <>
      <Navbar/>
      <Box>
        {/* <DietPlan/> */}
        {/* <FoodCard/> */}
        <UserProfile/>
      </Box>
      <Footer/>
    </>
  )
}

export default ProfilePage