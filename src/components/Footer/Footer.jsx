import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

export default function FixedBottomNavigation() {
  return (
    <Box sx={{ pb: 10 }}>
      <Paper
        sx={{ position:"fixed", bottom: 0, left: 0, right: 0, minHeight: "10vh" }}
        elevation={3}
        
      >
        <br></br>
        <Typography variant="subtitle1"  align="center">Copyright © 2022 SEP 22</Typography>
      </Paper>
    </Box>
  );
}
