import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
//import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
//import { Typography } from '@mui/material/styles/createTypography';
import { Grid, Box, Paper, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { getShoppingList } from '../../utils/api/shoppingList';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ShoppingList() {

  const [dietPlan, setDietPlan] = React.useState('');
  const [shoppingListj, setShoppingListj] = React.useState([]);
  const id = "63613940a8722b99ececed77"

  const handleChange = (event) => {
    setDietPlan(event.target.value);
  };

  React.useEffect(() => {
    const getData = async () => {
      const res = await getShoppingList();
      if(res.status === 200) {
        console.log("jimmy")
        const data = res.data;
        setShoppingListj(data.foodList)
      }else{
        console.log("jimmy")
      }
    };
    getData();
  },[]);

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
        <Paper sx={{ mt: 4, mb: 4, p: 4, alignItems: "center" }}>
          <Typography
          sx={{ fontWeight: "bold" }}
          variant="h6"
          component="h4"
          color="primary"
          align="center"
          >
            Select a diet plan
          </Typography>
          <br></br>
          <br></br>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Diet Plan</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={dietPlan}
              label="DietPlan"
              onChange={handleChange}
            >
              <MenuItem value={'Diet Plan 1'}>Diet Plan 1</MenuItem>
              <MenuItem value={'Diet Plan 2'}>Diet Plan 2</MenuItem>
              <MenuItem value={'Diet Plan 3'}>Diet Plan 3</MenuItem>
            </Select>
        </FormControl>
        </Paper>
          
      </Box>
      <Box sx={{ flexGrow: 1 }} margin="25px" alignItems="center">
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
        {/* {FoodList.map((food) => ( */}
        {FoodList.map((food) => (
          <Grid key={food.Food} item xs={2} sm={4} md={3}>
            {/* <FoodCard foodItem={food} /> */}
            <div >
              {/* <Item color="secondary"><Avatar alt="food image" src={food.Image} sx={{ width: 50, height: 50 }} 
              />{food.Food} - { food.Grams} grams</Item> */}
              <Item color="secondary"
              sx={{
                display:"flex",
                flexDirection: "row",
                alignContent: "center",
              }}><Avatar alt="food image" src={food.Image} sx={{ width: 45, height: 45 ,m:3}} 
              />
              <div align='center' display="flex" alignContent="center">
                <Typography 
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  component="h4"
                  color="secondary"
                  align="center"
                >
                  {food.Food}
                </Typography>
                <br></br>
                <Typography>
                { food.Grams} grams
                </Typography>
              </div>
              </Item>
              {/* <Chip
                sx={{minWidth:300, maxHeight:100 }}
                avatar={<Avatar alt={food.Food} src={food.Image} />}
                label={food.Food+`-`+food.Grams+`g`}
                variant="contained"
              /> */}
            </div>
            
          </Grid>
        ))}
        {shoppingListj.map((food) => (
          <Grid key={food.foodId} item xs={2} sm={4} md={3}>
            {/* <FoodCard foodItem={food} /> */}
            <div >
              {/* <Item color="secondary"><Avatar alt="food image" src={food.Image} sx={{ width: 50, height: 50 }} 
              />{food.Food} - { food.Grams} grams</Item> */}
              <Item color="secondary"
              sx={{
                display:"flex",
                flexDirection: "row",
                alignContent: "center",
              }}><Avatar alt="food image" src="/src/assets/images/foods/carrot.jpg" sx={{ width: 45, height: 45 ,m:3}} 
              />
              <div align='center' display="flex" alignContent="center">
                <Typography 
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  component="h4"
                  color="secondary"
                  align="center"
                >
                  {food.foodId}
                </Typography>
                <br></br>
                <Typography>
                { food.amount} grams
                </Typography>
              </div>
              </Item>
              {/* <Chip
                sx={{minWidth:300, maxHeight:100 }}
                avatar={<Avatar alt={food.Food} src={food.Image} />}
                label={food.Food+`-`+food.Grams+`g`}
                variant="contained"
              /> */}
            </div>
            
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
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