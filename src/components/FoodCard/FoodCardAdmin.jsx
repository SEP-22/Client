import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NutrientTable from "./NutrientTable";
import ReactCardFlip from "react-card-flip";

const FoodList = {
  Food: "Ice cream",
  Measure: "1 cup",
  Grams: 188,
  Calories: 300,
  Protein: 6,
  Fat: 18,
  SaturatedFat: 16,
  Fiber: 0,
  Carbs: 29,
  Category: "Dairy products",
  Image: "src/assets/images/foods/icecream.jpg",
};

export default function FoodCardAdmin(props) {
  const [Flipped, setFlipped] = useState(false);
  const FoodItem = props.foodItem;

  const setFlippedTrue = () => {
    setFlipped(true);
  };

  const setFlippedFalse = () => {
    setFlipped(false);
  };

  return (
    <ReactCardFlip isFlipped={Flipped} flipDirection="vertical">
      <Card sx={{ maxWidth:"300", m: 2 ,display:"flex" , flexDirection:"column" }}>
        <CardMedia
        sx={{}}
          component="img"
          alt={FoodItem.Food}
          width="100%"
          image={FoodItem.Image}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {FoodItem.Food}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category : {FoodItem.Category} <br></br>
            Measure: {FoodItem.Measure} <br></br>
            Grams: {FoodItem.Grams} <br></br>
            Calories: {FoodItem.Calories} <br></br>
            Nutrients :{" "}
            <Button
              disableElevation
              variant="text"
              color="secondary"
              size="small"
              onClick={setFlippedTrue}
            >
              View Details
            </Button>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Remove</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardContent>
          <NutrientTable foodItem={FoodItem} />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={setFlippedFalse}>
            Back
          </Button>
        </CardActions>
      </Card>
    </ReactCardFlip>
  );
}
