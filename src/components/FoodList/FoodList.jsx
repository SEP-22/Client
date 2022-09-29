import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCard from "../FoodCard/FoodCardUser";

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
        <Grid item xs={12}>
          <Item>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h6"
              component="h4"
              color="secondary"
            >
              Vegetables
            </Typography>
          </Item>
        </Grid>
        {Vegetables.map((food) => (
          <Grid key={food.Food} item xs={6} md={3}>
            <FoodCard foodItem={food} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Item>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h6"
              component="h4"
              color="secondary"
            >
              Fruits
            </Typography>
          </Item>
        </Grid>
        {Fruits.map((food) => (
          <Grid key={food.Food} item xs={6} md={3}>
            <FoodCard foodItem={food} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Item>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h6"
              component="h4"
              color="secondary"
            >
              Dairy Products
            </Typography>
          </Item>
        </Grid>
        {DairyProducts.map((food) => (
          <Grid key={food.Food} item xs={6} md={3}>
            <FoodCard foodItem={food} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Item>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h6"
              component="h4"
              color="secondary"
            >
              Proteins
            </Typography>
          </Item>
        </Grid>
        {Proteins.map((food) => (
          <Grid key={food.Food} item xs={6} md={3}>
            <FoodCard foodItem={food} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Item>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h6"
              component="h4"
              color="secondary"
            >
              Fat
            </Typography>
          </Item>
        </Grid>
        {Fat.map((food) => (
          <Grid key={food.Food} item xs={6} md={3}>
            <FoodCard foodItem={food} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const Vegetables = [
  {
    Food: "Broccoli",
    Measure: "1 cup",
    Grams: 150,
    Calories: 45,
    Protein: 5,
    Fat: 0,
    Fiber: 0,
    Carbs: 8,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/broccoli.jpg",
  },
  {
    Food: "Carrots",
    Measure: "1 cup",
    Grams: 150,
    Calories: 45,
    Protein: 1,
    Fat: 0,
    Fiber: 9,
    Carbs: 10,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/carrot.jpg",
  },
  {
    Food: "Corn",
    Measure: "1 ear",
    Grams: 100,
    Calories: 92,
    Protein: 3,
    Fat: 1,
    Fiber: 0.8,
    Carbs: 21,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/corn.jpg",
  },
  {
    Food: "Potato",
    Measure: "1 medium",
    Grams: 110,
    Calories: 155,
    Protein: 2,
    Fat: 1,
    Fiber: 1,
    Carbs: 36,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/potato.jpg",
  },
  {
    Food: "Tomato",
    Measure: "1 medium",
    Grams: 120,
    Calories: 25,
    Protein: 1,
    Fat: 0,
    Fiber: 1,
    Carbs: 4.5,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/tomato.jpg",
  },
];

const Fruits = [
  {
    Food: "Apple",
    Measure: "1 medium",
    Grams: 130,
    Calories: 70,
    Protein: 0,
    Fat: 0,
    Fiber: 1,
    Carbs: 18,
    Category: "Fruits",
    Image: "/src/assets/images/foods/apple.jpg",
  },
  {
    Food: "Avacado",
    Measure: "1 large",
    Grams: 216,
    Calories: 370,
    Protein: 4,
    Fat: 36,
    Fiber: 3.6,
    Carbs: 12,
    Category: "Fruits",
    Image: "/src/assets/images/foods/avacado.jpg",
  },
  {
    Food: "Banana",
    Measure: "1 medium",
    Grams: 150,
    Calories: 85,
    Protein: 1,
    Fat: 0,
    Fiber: 0.9,
    Carbs: 23,
    Category: "Fruits",
    Image: "/src/assets/images/foods/banana.jpg",
  },
];

const DairyProducts = [
  {
    Food: "Ice cream",
    Measure: "1 cup",
    Grams: 188,
    Calories: 300,
    Protein: 6,
    Fat: 18,
    Fiber: 0,
    Carbs: 29,
    Category: "Dairy products",
    Image: "/src/assets/images/foods/icecream.jpg",
  },
];

const Proteins = [];
const Fat = [];
