import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardUser from "../FoodCard/FoodCardUser";
import { foodByCategory } from "../../utils/api/food";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorSharpIcon from "@mui/icons-material/ErrorSharp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FoodList({ Category, state, id }) {
  const [Vegetables_Fruits, setVegetablesFruits] = React.useState([]);
  const [StarchyFood, setStartchyFood] = React.useState([]);
  const [Proteins, setProteins] = React.useState([]);
  const [Dairy_Fat, setDairyFat] = React.useState([]);
  const [Sugar, setSugar] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // const _id = JSON.parse(localStorage.getItem("user")).id;
  // const _id = "633601573507a646fb339d94"

  // const Category = props.Category;

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await foodByCategory();
      if (res && res.status === 200) {
        setError(false);
        const data = res.data;
        setVegetablesFruits(data.Vegetables_Fruits);
        setStartchyFood(data.StarchyFood);
        setDairyFat(data.Dairy_Fat);
        setProteins(data.Proteins);
        setSugar(data.Sugar);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(true);
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
      {!isLoading && !error && (
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
                  <FoodCardUser
                    foodItem={food}
                    checked={
                      state[food._id]
                    } /* handleStateChange={handleStateChange} */
                  />
                </Grid>
              ))}
            </>
          ))}
        </Grid>
      )}

      {isLoading && (
        <Box
          mt={10}
          sx={{
            m: 2,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Paper
              sx={{
                mt: 1,
                mb: 1,
                p: 4,
                minWidth: { md: 400 },
                borderRadius: 2,
              }}
            >
              <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <CircularProgress color="warning" size={20} />
                  <Typography variant="button">
                    &nbsp;&nbsp;Loading....{" "}
                  </Typography>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      )}
      {error && !isLoading && (
        <Box
          mt={10}
          sx={{
            m: 2,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Paper
              sx={{
                mt: 1,
                mb: 1,
                p: 4,
                minWidth: { md: 400 },
                borderRadius: 2,
              }}
            >
              <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <ErrorSharpIcon
                    sx={{
                      display: "flex",
                      alignSelf: "center",
                      fontWeight: "bold",
                    }}
                    fontSize="small"
                  />
                  <Typography ml={1} variant="body">
                    Something went WRONG......
                  </Typography>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
