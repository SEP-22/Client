import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MiniPlan from "./MiniPlan";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const meals = ["breakfast", "lunch", "dinner"];

const DietPlan = [
  {
    id: 0,
    breakfast: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    lunch: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    dinner: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
  },
  {
    id: 1,
    breakfast: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    lunch: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    dinner: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
  },
  {
    id: 2,
    breakfast: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    lunch: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    dinner: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
  },
  {
    id: 3,
    breakfast: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    lunch: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    dinner: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
  },
  {
    id: 4,
    breakfast: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    lunch: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    dinner: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
  },
  {
    id: 5,
    breakfast: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    lunch: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    dinner: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
  },
  {
    id: 6,
    breakfast: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    lunch: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
    dinner: [
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
      ["Banana", "/src/assets/images/foods/banana.jpg", 300],
      ["Apple", "/src/assets/images/foods/apple.jpg", 267],
      ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
      ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
    ],
  },
];

export default function DietPlanSelection() {
  const [checked, setChecked] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const[error,setError] = React.useState(true)

  const handleChange0 = (event) => {
    setChecked([
      event.target.checked,
      checked[1],
      checked[2],
      checked[3],
      checked[4],
      checked[5],
      checked[6],
    ]);
  };

  const handleChange1 = (event) => {
    setChecked([
      checked[0],
      event.target.checked,
      checked[2],
      checked[3],
      checked[4],
      checked[5],
      checked[6],
    ]);
  };

  const handleChange2 = (event) => {
    setChecked([
      checked[0],
      checked[1],
      event.target.checked,
      checked[3],
      checked[4],
      checked[5],
      checked[6],
    ]);
  };

  const handleChange3 = (event) => {
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      event.target.checked,
      checked[4],
      checked[5],
      checked[6],
    ]);
  };

  const handleChange4 = (event) => {
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      checked[3],
      event.target.checked,
      checked[5],
      checked[6],
    ]);
  };

  const handleChange5 = (event) => {
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      checked[3],
      checked[4],
      event.target.checked,
      checked[6],
    ]);
  };

  const handleChange6 = (event) => {
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      checked[3],
      checked[4],
      checked[5],
      event.target.checked,
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (getError) {
      console.log(checked)
    } else {
      console.log("Invalid inputs");
    }

  }

  const getError = () => {
    let c = 0;
    for (let index = 0; index < checked.length; index++) {
      if (checked[index] === true) {
        c = c + 1;
      }
      
    }
    console.log(c)
    console.log(checked)

    if (c >= 1) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <Box sx={{ m: 5 }}>
        <Container>
          <Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  mt: 1,
                  mb: 1,
                  p: 4,
                  alignItems: "center",
                  minWidth: { md: 400 },
                }}
              >
                <Typography align="center">
                  Select Diet Plans you LIKE !!! Select at least TWO...
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="center"
            alignSelf={"center"}
            alignContent="center"
            sx={{ justifyContent: "center" }}
          >
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6"></Typography>

                <FormControlLabel
                  value={"Diet Plan - ".concat(DietPlan[0].id, " ", null)}
                  control={
                    <Checkbox
                      checked={checked[DietPlan[0].id]}
                      icon={<CheckBoxOutlineBlankRoundedIcon />}
                      checkedIcon={<FactCheckIcon />}
                      onChange={handleChange0}
                    />
                  }
                  label={"Diet Plan - ".concat(DietPlan[0].id + 1, " ")}
                  labelPlacement="top"
                />
                <DisplayPlans id={DietPlan[0].id} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6"></Typography>

                <FormControlLabel
                  value={"Diet Plan - ".concat(DietPlan[1].id, " ", null)}
                  control={
                    <Checkbox
                      checked={checked[DietPlan[1].id]}
                      onChange={handleChange1}
                      icon={<CheckBoxOutlineBlankRoundedIcon />}
                      checkedIcon={<FactCheckIcon />}
                    />
                  }
                  label={"Diet Plan - ".concat(DietPlan[1].id + 1, " ")}
                  labelPlacement="top"
                />
                <DisplayPlans id={DietPlan[1].id} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6"></Typography>

                <FormControlLabel
                  value={"Diet Plan - ".concat(DietPlan[2].id, " ", null)}
                  control={
                    <Checkbox
                      checked={checked[DietPlan[2].id]}
                      onChange={handleChange2}
                      icon={<CheckBoxOutlineBlankRoundedIcon />}
                      checkedIcon={<FactCheckIcon />}
                    />
                  }
                  label={"Diet Plan - ".concat(DietPlan[2].id + 1, " ")}
                  labelPlacement="top"
                />
                <DisplayPlans id={DietPlan[2].id} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6"></Typography>

                <FormControlLabel
                  value={"Diet Plan - ".concat(DietPlan[3].id, " ", null)}
                  control={
                    <Checkbox
                      checked={checked[DietPlan[3].id]}
                      onChange={handleChange3}
                      icon={<CheckBoxOutlineBlankRoundedIcon />}
                      checkedIcon={<FactCheckIcon />}
                    />
                  }
                  label={"Diet Plan - ".concat(DietPlan[3].id + 1, " ")}
                  labelPlacement="top"
                />
                <DisplayPlans id={DietPlan[3].id} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6"></Typography>

                <FormControlLabel
                  value={"Diet Plan - ".concat(DietPlan[4].id, " ", null)}
                  control={
                    <Checkbox
                      checked={checked[DietPlan[4].id]}
                      onChange={handleChange4}
                      icon={<CheckBoxOutlineBlankRoundedIcon />}
                      checkedIcon={<FactCheckIcon />}
                    />
                  }
                  label={"Diet Plan - ".concat(DietPlan[4].id + 1, " ")}
                  labelPlacement="top"
                />
                <DisplayPlans id={DietPlan[4].id} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6"></Typography>

                <FormControlLabel
                  value={"Diet Plan - ".concat(DietPlan[5].id, " ", null)}
                  control={
                    <Checkbox
                      checked={checked[DietPlan[5].id]}
                      onChange={handleChange5}
                      icon={<CheckBoxOutlineBlankRoundedIcon />}
                      checkedIcon={<FactCheckIcon />}
                    />
                  }
                  label={"Diet Plan - ".concat(DietPlan[5].id + 1, " ")}
                  labelPlacement="top"
                />
                <DisplayPlans id={DietPlan[5].id} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6"></Typography>

                <FormControlLabel
                  value={"Diet Plan - ".concat(DietPlan[6].id, " ", null)}
                  control={
                    <Checkbox
                      checked={checked[DietPlan[6].id]}
                      onChange={handleChange6}
                      icon={<CheckBoxOutlineBlankRoundedIcon />}
                      checkedIcon={<FactCheckIcon />}
                    />
                  }
                  label={"Diet Plan - ".concat(DietPlan[6].id + 1, " ")}
                  labelPlacement="top"
                />
                <DisplayPlans id={DietPlan[6].id} />
              </Item>
            </Grid>
          </Grid>
          <Grid>
            <Grid item xs={12} align="center">
              <Paper
                sx={{
                  mt: 1,
                  mb: 1,
                  p: 4,
                  alignItems: "center",
                  minWidth: { md: 400 },
                }}
              >
                <Typography align="center">
                  Have you finished selecting Diet Plans?
                </Typography>
                <br></br>
                <Button
                  variant="contained"
                  color="secondary"
                  // disabled = {error}
                  onClick={handleSubmit}
                >
                  Save your Diet Plan
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

function DisplayPlans({ id }) {
  return (
    <Grid>
      <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
        <List dense={true}>
          {meals.map((meal) => (
            <ListItem key={meal + id}>
              <MiniPlan meals={DietPlan[id][meal]} m={meal} />
            </ListItem>
          ))}
        </List>
      </Item>
    </Grid>
  );
}
