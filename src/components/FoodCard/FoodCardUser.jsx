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
import { alpha, styled } from '@mui/material/styles';
import { pink } from "@mui/material/colors";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#ec407a',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 1,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


export default function FoodCard(props) {
  const FoodItem = props.foodItem;
  const handleStateChange = props.handleStateChange;

  // const [checked, setChecked] = React.useState(props.checked);
  const [Flipped, setFlipped] = useState(false);

  const setFlippedTrue = () => {
    setFlipped(true);
  };

  const setFlippedFalse = () => {
    setFlipped(false);
  };

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  //   handleStateChange(FoodItem._id,event.target.checked);
  // };


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
          display: "flex",
          flexDirection: "column",
          m: 2,
          height:{xs:"unset", md:500},
        }}
      >
        <CardMedia
          sx={{}}
          component="img"
          alt={FoodItem.Food}
          width="100%"
          height="80%"
          image={FoodItem.image}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {FoodItem.name}
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
          <IOSSwitch
            checked={props.checked}
            // onChange={handleChange}
            disabled
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
