import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NutrientTable from "./NutrientTable";
import ReactCardFlip from "react-card-flip";
import Switch from "@mui/material/Switch";


export default function FoodCard(props) {
  const FoodItem = props.foodItem;
  const handleStateChange = props.handleStateChange;

  const [checked, setChecked] = React.useState(props.checked);
  const [Flipped, setFlipped] = useState(false);

  const setFlippedTrue = () => {
    setFlipped(true);
  };

  const setFlippedFalse = () => {
    setFlipped(false);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    handleStateChange(FoodItem._id,event.target.checked);
  };


  const getMedConditions = (food) => {
    let med_con = "";
    if (food.cholesterol === 1 || food.cholesterol === true) {
      med_con = med_con.concat(" Cholesterol, ");
    }
    if (food.diabetics === 1 || food.diabetics === true) {
      med_con = med_con.concat(" Diabetics, ");
    }
    if (food.bloodpressure === 1 || food.bloodpressure === true) {
      med_con = med_con.concat(" High Blood Pressure, ");
    }

    if (med_con === "") {
      return "None";
    } else {
      return med_con.slice(0, med_con.length - 2);
    }
  };

  return (
    <ReactCardFlip isFlipped={Flipped} flipDirection="vertical">
      <Card
        sx={{
          maxWidth: "30vw",
          display: "flex",
          flexDirection: "column",
          m: 2,
        }}
      >
        <CardMedia
          sx={{}}
          component="img"
          alt={FoodItem.Food}
          width="100%"
          image={FoodItem.image}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {FoodItem.Food}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category : <strong>{FoodItem.category}</strong>
            <br></br>
            Calories per Gram: <strong>{FoodItem.cal_per_gram}</strong> kcal/g
            <br></br>
            Medical Conditions:<strong>
              {" "}
              {getMedConditions(FoodItem)}
            </strong>{" "}
            <br></br>
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
