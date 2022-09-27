import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ShoppingList() {
  return (
    <Box sx={{ flexGrow: 1 }} margin="25px">
      {/* <Grid item xs={12}>
        <Item elevation={0}>
          <Button sx={{ width: "30vw" }} variant="contained" >
            Select Diet Plan
          </Button>
        </Item>
      </Grid> */}
      <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {/* {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))} */}
        {FoodList.map((food) => (
          <Grid key={food.Food} item xs={2} sm={4} md={4}>
            {/* <FoodCard foodItem={food} /> */}
            <div >
              <Item color="secondary"><Avatar alt="food image" src={food.Image} sx={{ width: 50, height: 50 }} 
              />{food.Food} - { food.Grams} grams</Item>
            </div>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const FoodList = [
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