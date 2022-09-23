import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardUser from "../FoodCard/FoodCardUser";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// const Category = [
//   "Fruits and Vegetables",
//   "Starchy food",
//   "Proteins",
//   "Dairy and Fats",
//   "Sugar",
// ];

export default function FoodList(props) {

  const Category = props.Category; 

  function getArray(name) {
    if (name === "Fruits and Vegetables") {
      return Vegetables_Fruits;
    }
    else if  (name === "Starchy food") {
      return StarchyFood;
    }
    else if  (name === "Proteins") {
      return Proteins;
    }
    else if  (name === "Dairy and Fats") {
      return Dairy_Fat;
    }
    else if  (name === "Sugar") {
      return Sugar;
    }
    else {
      return [];
    }
  }

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
        {Category.map((type) => (
          <>
            <Grid key={type} item xs={12}>
              <Item>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  component="h4"
                  color="secondary"
                >
                  {type}
                </Typography>
              </Item>
            </Grid>
            {getArray(type).map((food) => (
              <Grid key={food.Food} item xs={12} md={3}>
                <FoodCardUser foodItem={food} />
              </Grid>
            ))}
          </>
        ))}
      </Grid>
    </Box>
  );
}

const Vegetables_Fruits = [
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
    Selected: true,
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
    Selected: false,
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
    Selected: true,
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
    Selected: false,
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
    Selected: true,
  },
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
    Selected: true,
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
    Selected: false,
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
    Selected: true,
  },
];

const Dairy_Fat = [
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
    Selected: true,
  },
];

const Proteins = [];
const StarchyFood = [];
const Sugar = [];
