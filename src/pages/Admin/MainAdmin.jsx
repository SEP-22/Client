import React from 'react'
import Navbar from "../../components/Navbar/NavbarAdmin";
import Footer from "../../components/Footer/Footer";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const MainAdmin = () => {
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

export default MainAdmin