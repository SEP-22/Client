import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      <Paper
        sx={{ position:"static", bottom: 0, left: 0, right: 0, minHeight: "10vh" }}
        elevation={3}
        
      >
        <br></br>
        <Typography variant="subtitle1"  align="center">Copyright © 2022 SEP 22</Typography>
      </Paper>
    </Box>
  );
}
