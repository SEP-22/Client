import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const MultipleDietPlansMain = () => {
  return (
    <Box m={3}>
      <Outlet />
    </Box>
  );
};

export default MultipleDietPlansMain;