import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NutrientTable from "./NutrientTable";
import ReactCardFlip from "react-card-flip";
import { Link, useNavigate } from "react-router-dom";
import { deleteFood } from "../../utils/api/food";

export default function FoodCardAdmin(props) {

  const navigate = useNavigate();

  const [Flipped, setFlipped] = useState(false);
  const FoodItem = props.foodItem;

  const setFlippedTrue = () => {
    setFlipped(true);
  };

  const setFlippedFalse = () => {
    setFlipped(false);
  };

  const getMedConditions = (food) => {
    let med_con = ""
    if (food.cholesterol === 1 || food.cholesterol === true) {
      med_con = med_con.concat(" Cholesterol, ")
      
    } if (food.diabetics === 1 || food.diabetics === true) {
      med_con = med_con.concat(" Diabetics, ")

    } if (food.bloodpressure === 1 || food.bloodpressure === true) {
      med_con = med_con.concat(" High Blood Pressure, ")
    }

    if(med_con === ""){
      return "None"
    }else {
      return med_con.slice(0, med_con.length-2)
    }
  }

  const deleteFoodCard = async() => {
    const res = await deleteFood(FoodItem._id);
    if (res.status == 200) {
      console.log(res.body);
      navigate(0);
    } else {
      console.log(res.status);
    }

  }


  return (
    <ReactCardFlip isFlipped={Flipped} flipDirection="vertical">
      <Card sx={{ maxWidth:"300", m: 2 ,display:"flex" , flexDirection:"column" }}>
        <CardMedia
        sx={{}}
          component="img"
          alt={FoodItem.name}
          width="100%"
          image={FoodItem.Image}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {FoodItem.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category : <strong>{FoodItem.category}</strong><br></br>
            Calories per Gram: <strong>{FoodItem.cal_per_gram}</strong> kcal/g<br></br>
            Medical Conditions:<strong> {getMedConditions(FoodItem)}</strong> <br></br>
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
          <Button size="small" component={Link} to="editfood" state={{food: FoodItem}}>Edit</Button>
          <Button size="small" onClick={deleteFoodCard}>Remove</Button>
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
