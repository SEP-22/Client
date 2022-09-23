import React from "react";
import { Grid, Box, Paper, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCard from "../DietPlan/FoodCard";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Diet = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Grid container alignItems="stretch" direction="row">
          <Grid item xs={12} md={1}>
            <Item
              elevation={3}
              sx={{
                minHeight: {xs: "none", md:263},
                backgroundColor: "#ffaae8",
                justifyContent: "center",
                display:"flex",
                alignContent:"center",
                mb:{xs: 3, md:"none"}
              }}
            >
              <Typography align="center" sx={{ fontSize: 20 , writingMode: {xs: "none", md:"vertical-lr"}, textOrientation: {xs: "none", md:"upright"},}}>
                BREAKFAST
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={11}>
            <Item elevation={0} sx={{pt:0}}>
              <Grid container>
                {Breakfast.map((food) => (
                  <Grid item xs={12} md={2}>
                    <Item elevation={0} sx={{pt:0}}>
                      <FoodCard foodItem={food} />
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12} md={1}>
            <Item
              elevation={3}
              sx={{
                minHeight: {xs: "none", md:263},
                backgroundColor: "#ffaae8",
                justifyContent: "center",
                display:"flex",
                alignContent:"center",
                mb:{xs: 3, md:"none"}
              }}
            >
              <Typography align="center" sx={{ fontSize: 20 , writingMode: {xs: "none", md:"vertical-lr"}, textOrientation: {xs: "none", md:"upright"},}}>
                LUNCH
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={11}>
            <Item elevation={0} sx={{pt:0}}>
              <Grid container>
                {Lunch.map((food) => (
                  <Grid item xs={12} md={2}>
                    <Item elevation={0} sx={{pt:0}}>
                      <FoodCard foodItem={food} />
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12} md={1}>
            <Item
              elevation={3}
              sx={{
                minHeight: {xs: "none", md:263},
                backgroundColor: "#ffaae8",
                justifyContent: "center",
                display:"flex",
                alignContent:"center",
                mb:{xs: 3, md:"none"}
              }}
            >
              <Typography align="center" sx={{ fontSize: 20 , writingMode: {xs: "none", md:"vertical-lr"}, textOrientation: {xs: "none", md:"upright"},}}>
                DINNER
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={11}>
            <Item elevation={0} sx={{pt:0}}>
              <Grid container>
                {Dinner.map((food) => (
                  <Grid item xs={12} md={2}>
                    <Item elevation={0} sx={{pt:0}}>
                      <FoodCard foodItem={food} />
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Container>
      {/* <Paper sx={{ m: 4, p: 4, alignItems: "center" }} >

      </Paper> */}
    </Box>
  );
};

export default Diet;

// const FoodList = [Breakfast,Lunch,Dinner]

const Breakfast = [
  {
    Food: "Ice cream",
    Consume: 188,
    Calories: 300,
    Image: "src/assets/images/foods/icecream.jpg",
  },
  {
    Food: "Potato",
    Consume: 110,
    Calories: 155,
    Image: "src/assets/images/foods/potato.jpg",
  },
  {
    Food: "Tomato",
    Consume: 188,
    Calories: 300,
    Image: "src/assets/images/foods/tomato.jpg",
  },
  {
    Food: "Apple",
    Consume: 130,
    Calories: 70,
    Image: "src/assets/images/foods/apple.jpg",
  },
  {
    Food: "Banana",
    Consume: 150,
    Calories: 85,
    Image: "src/assets/images/foods/banana.jpg",
  },
  {
    Food: "Ice cream",
    Consume: 188,
    Calories: 300,
    Image: "src/assets/images/foods/icecream.jpg",
  },
  {
    Food: "Potato",
    Consume: 110,
    Calories: 155,
    Image: "src/assets/images/foods/potato.jpg",
  },
  {
    Food: "Tomato",
    Consume: 188,
    Calories: 300,
    Image: "src/assets/images/foods/tomato.jpg",
  },
  {
    Food: "Apple",
    Consume: 130,
    Calories: 70,
    Image: "src/assets/images/foods/apple.jpg",
  },
  {
    Food: "Banana",
    Consume: 150,
    Calories: 85,
    Image: "src/assets/images/foods/banana.jpg",
  },
];

const Lunch = [
  {
    Food: "Potato",
    Consume: 110,
    Calories: 155,
    Image: "src/assets/images/foods/potato.jpg",
  },
  {
    Food: "Apple",
    Consume: 130,
    Calories: 70,
    Image: "src/assets/images/foods/apple.jpg",
  },
  {
    Food: "Banana",
    Consume: 150,
    Calories: 85,
    Image: "src/assets/images/foods/banana.jpg",
  },
];

const Dinner = [
  {
    Food: "Tomato",
    Consume: 188,
    Calories: 300,
    Image: "src/assets/images/foods/tomato.jpg",
  },
  {
    Food: "Potato",
    Consume: 110,
    Calories: 155,
    Image: "src/assets/images/foods/potato.jpg",
  },
  {
    Food: "Apple",
    Consume: 130,
    Calories: 70,
    Image: "src/assets/images/foods/apple.jpg",
  },
  {
    Food: "Banana",
    Consume: 150,
    Calories: 85,
    Image: "src/assets/images/foods/banana.jpg",
  },
];
