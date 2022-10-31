import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardUser from "../FoodCard/FoodCardUser";
import { foodByCategory } from "../../utils/api/food";
import CircularProgress from "@mui/material/CircularProgress";
import { getPreferedFoods } from "../../utils/api/user";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FoodList(props) {
  const [Vegetables_Fruits, setVegetablesFruits] = React.useState([]);
  const [StarchyFood, setStartchyFood] = React.useState([]);
  const [Proteins, setProteins] = React.useState([]);
  const [Dairy_Fat, setDairyFat] = React.useState([]);
  const [Sugar, setSugar] = React.useState([]);
  const [state, setState] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  // const _id = JSON.parse(localStorage.getItem("user")).id;
  const _id = "633601573507a646fb339d94"

  const Category = props.Category;

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await foodByCategory();
      if (res.status === 200) {
        let states = {}; 
        const data = res.data;
        setVegetablesFruits(data.Vegetables_Fruits);
        setStartchyFood(data.StarchyFood);
        setDairyFat(data.Dairy_Fat);
        setProteins(data.Proteins);
        setSugar(data.Sugar);
        data.Vegetables_Fruits.map((f) => (states[f._id] = false));
        data.StarchyFood.map((f) => (states[f._id] = false));
        data.Dairy_Fat.map((f) => (states[f._id] = false));
        data.Proteins.map((f) => (states[f._id] = false));
        data.Sugar.map((f) => (states[f._id] = false));

        const res1 = await getPreferedFoods({ user_Id : _id});
        if (res1.status === 200) {
          const prefered = res1.data.preferedFoods;
          prefered.map((p) => (states.p = true))
          setState(states);
          setIsLoading(false);
          console.log(state)
        }else{
          console.log(res)
          setIsLoading(false);   
        }

        setIsLoading(false);
      } else {
        console.log(res)
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  function getArray(name) {
    if (name === "Fruits and Vegetables") {
      return Vegetables_Fruits;
    } else if (name === "Starchy food") {
      return StarchyFood;
    } else if (name === "Proteins") {
      return Proteins;
    } else if (name === "Dairy and Fats") {
      return Dairy_Fat;
    } else if (name === "Sugar") {
      return Sugar;
    } else {
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
        {isLoading && (
          <Box
            sx={{
              m: 2,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="warning" size={20} />
            <Typography variant="button">&nbsp;&nbsp;Loading.... </Typography>
          </Box>
        )}
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
