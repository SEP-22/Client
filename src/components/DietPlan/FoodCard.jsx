import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function FoodCard(props) {
   const FoodItem = props.foodItem;

  return (
      <Card sx={{ height:{xs:"unset", md:290}, display:"flex" , flexDirection:"column",}}>
        <CardMedia
          component="img"
          alt={FoodItem.Food}
          width="100%"
          height="80%"
          image={FoodItem.Image}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            {FoodItem.Food}
          </Typography>
          <Typography variant="body1" >
            Calories: {FoodItem.Calories} <br></br>
          </Typography>
          <Typography sx={{fontWeight:"bold",}} variant="body1">
            Consume : {FoodItem.Consume} g <br></br>
          </Typography>
        </CardContent>
      </Card>
  );
}
