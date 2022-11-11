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
import { getFoodById } from '../../utils/api/food';
import { getShoppingListsByUserId } from '../../utils/api/shoppingList';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ShoppingList = () => {

  const [dietPlan, setDietPlan] = React.useState('');
  const [shoppingListj, setShoppingListj] = React.useState([]);
  const [foodDetails, setFood] = React.useState([]);
  const id = "63613940a8722b99ececed77"
  const userId = JSON.parse(localStorage.getItem("user")).id;
  const [completeDetailedList,setCompleteDetailedList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleChange = (event) => {
    setDietPlan(event.target.value);  
  };

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const res = await getShoppingList();
      const res2 = await getShoppingListsByUserId(userId);

      if(res.status === 200 && res2.status == 200) {
        const data = res.data;
        setShoppingListj(data)
        //console.log(shoppingListj)
        const data2 = res2.data;
        setCompleteDetailedList(data2);
        //console.log(completeDetailedList)
        setIsLoading(false);
        // if(res2.status === 200){
        //   const data2 = res2.data;
        //   setCompleteDetailedList(data2);
        //   setIsLoading(false);
        // }

      }else{ 
        //console.log("jimmy");
        setIsLoading(false);
      }
    };

    getData();
  },[]);

  return (
    <>
    {!isLoading && (
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
        {shoppingListj.map((food) => ( 
          <Grid key={food.foodId.name} item xs={2} sm={4} md={3}>
            <div >
              <Item color="secondary"
              sx={{
                display:"flex",
                flexDirection: "row",
                alignContent: "center",
              }}><Avatar alt="food image" src={food.foodId.image} sx={{ width: 45, height: 45 ,m:3}} 
              />
              <div align='center' display="flex" alignContent="center">
                <Typography 
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  component="h4"
                  color="secondary"
                  align="center"
                >
                  {food.foodId.name}
                </Typography>
                <br></br>
                <Typography>
                { food.amount} grams
                </Typography>
              </div>
              </Item>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
      </>
    )}
    </>
  );
}
export default ShoppingList