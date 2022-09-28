import React from 'react'
import Navbar from "../../components/Navbar/NabvarUser";
import Footer from "../../components/Footer/Footer";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const MainUser = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Outlet/>
      </Box>
      <Footer />
    </>
  )
}

export default MainUser