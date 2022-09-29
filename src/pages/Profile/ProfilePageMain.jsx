import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const ProfilePageMain = () => {
  return (
    <Box m={3}>
      <Outlet />
    </Box>
  );
};

export default ProfilePageMain;