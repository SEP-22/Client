import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NutrientTable from "./NutrientTable";
import ReactCardFlip from "react-card-flip";
import Switch from '@mui/material/Switch';

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
  Image: "/src/assets/images/foods/icecream.jpg",
};

export default function FoodCard(props) {
  const FoodItem = props.foodItem;

  const [checked, setChecked] = React.useState(FoodItem.Selected);
  const [Flipped, setFlipped] = useState(false);


  const setFlippedTrue = () => {
    setFlipped(true);
  };

  const setFlippedFalse = () => {
    setFlipped(false);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <ReactCardFlip isFlipped={Flipped} flipDirection="vertical">
      <Card sx={{ maxWidth: "30vw", minHeight: "60vh", m: 2 }}>
        <CardMedia
          sx={{position:"cover"}}
          component="img"
          alt={FoodItem.Food}
          width="100%"
          height="200vh"
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
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
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
