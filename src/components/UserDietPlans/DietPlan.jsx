import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardAdmin from "../FoodCard/FoodCardAdmin";
import Meal from "../Meal/Meal"
import "./UserDietPlans.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FoodList() {
  return (
    <Box
      sx={{
        m: 2,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sx={{display:"flex", flexDirection:"row",alignItems:"center",justifyContent:"center",}}>
          <Item>
            <Typography
              sx={{ fontWeight: "bold"}}
              variant="h6"
              component="h4"
              color="secondary"
            >
              Diet Plan 1
            </Typography>
            <Button>Hi</Button>
          </Item>
          
        </Grid> */}
        <div className="scrollable">
        <Grid item xs={12}>
          <Item>
            <Typography
              sx={{ fontWeight: "bold"}}
              variant="h6"
              component="h4"
              color="secondary"
            >
              Diet Plan 1
            </Typography>
            <Button>Active</Button>
          </Item>
          
        </Grid>
          <Meal/>
          <Button>View</Button>
          <Button>Active</Button>
        </div>
        {/* {category.map((category) => (
        <Typography key={category}>{category}</Typography>
      ))} */}
      </Grid>
    </Box>
  );
}