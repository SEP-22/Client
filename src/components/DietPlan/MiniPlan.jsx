import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TableContainer from "@mui/material/TableContainer";

const MiniPlan = ({ meals , m}) => {
  return (
    <TableContainer>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography
          align="center"
          sx={{
            fontSize: 12,
            writingMode: "vertical-lr",
            textOrientation:  "upright",
            fontWeight: "bold"
          }}
        >
          {m === "breakfast" ? "BKFST" :  m.toUpperCase()}
        </Typography>
        {meals.map((food) => (
          <ListItem divider key={food[0]} dense={true}>
            <ListItemAvatar>
              <Avatar alt={food[4]} src={food[3]} />
            </ListItemAvatar>
            <ListItemText primary={food[4]} secondary={food[2]} />
          </ListItem>
        ))}
      </Stack>
    </TableContainer>
  );
};

export default MiniPlan;
