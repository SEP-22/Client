import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardAdmin from "../FoodCard/FoodCardAdmin";
import Meal from "../Meal/Meal"
import "./UserDietPlans.css"
import { width } from "@mui/system";
import Chip from '@mui/material/Chip';
import { Link, NavLink } from "react-router-dom";
import { getAllDietPlans } from "../../utils/api/dietPlan";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SingleDietPlan = (props) => {
  return (
    <>
      <Box
      sx={{
        m: 2,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      
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
        <div className="outerscrollable">
        <Grid item xs={12}>
            <Item>
              <Typography
                sx={{ fontWeight: "bold"}}
                variant="h6"
                component="h4"
                color="secondary"
              >
                {props.title}
              </Typography>
              {/* <Button>Active</Button> */}
              <Chip label="Active" color="primary" />
            </Item>
          </Grid>
          <div className="scrollable">
            <Meal meal={props.planDetails}/>
          </div>
          <Button variant="outlined" color="secondary" sx={{m:2}}>View</Button>
          <Button variant="contained" color="primary">Deactivate</Button>
        </div>
        {/* {category.map((category) => (
        <Typography key={category}>{category}</Typography>
      ))} */}
    </Box>
    </>
  );
}
export default SingleDietPlan