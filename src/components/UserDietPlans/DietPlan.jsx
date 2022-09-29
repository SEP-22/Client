import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardAdmin from "../FoodCard/FoodCardAdmin";
import Meal from "../Meal/Meal"
import "./UserDietPlans.css"
import { width } from "@mui/system";
import Chip from '@mui/material/Chip';
import { Link, NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FoodList() {
  return (
    <>
    <Box
        sx={{
            m: 2,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            margin: "1px",
          }}
      >
        <Paper 
        sx={{ mt: 4, mb: 4, p: 4, 
          alignItems: "center" , 
          display: "flex",
          flexDirection: "column",
          width:"50%"}}
        >
        <Grid item xs={12}>
          <Button variant="contained" sx={{mb:4}} component={Link} to="/eatsmart/quiz">
            Create a Diet Plan
          </Button>
        </Grid>
          
          <Typography
          sx={{ fontWeight: "light" }}
          variant="h6"
          component="h4"
          color="dark"
          align="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae vehicula dui. Etiam consectetur porta tellus, vel porta leo scelerisque semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean in dapibus metus, in ultrices libero. Nulla vel placerat lectus, a commodo elit.
          </Typography>
          <br></br>
          <br></br>
        </Paper>
          
      </Box>
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
            {/* <Button>Active</Button> */}
            <Chip label="Active" color="primary" />
          </Item>
          
        </Grid>
          <Meal/>
          <Button variant="outlined" color="secondary" sx={{m:2}}>View</Button>
          <Button variant="contained" color="primary">Deactivate</Button>
        </div>
        
        <div className="scrollable">
        <Grid item xs={12}>
          <Item>
            <Typography
              sx={{ fontWeight: "bold"}}
              variant="h6"
              component="h4"
              color="secondary"
            >
              Diet Plan 2
            </Typography>
            {/* <Button>Active</Button> */}
            {/* <Chip label="Active" color="primary" /> */}
          </Item>
          
        </Grid>
          <Meal/>
          <Button variant="outlined" color="secondary" sx={{m:2}}>View</Button>
          <Button variant="contained" color="primary">Activate</Button>
        </div>
        {/* {category.map((category) => (
        <Typography key={category}>{category}</Typography>
      ))} */}
    </Box>
    </>
  );
}