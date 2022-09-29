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
          <Grid key={food.name} item xs={6} md={3}>
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
          <Grid key={food.name} item xs={6} md={3}>
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
          <Grid key={food.name} item xs={6} md={3}>
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
          <Grid key={food.name} item xs={6} md={3}>
            <FoodCard foodItem={food} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

