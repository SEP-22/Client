import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Paper, Grid, Button } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { foodByCategory } from "../../utils/api/food";
import CircularProgress from "@mui/material/CircularProgress";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { setPreferedFoods } from "../../utils/api/user";

function FoodSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const steps = [
    "Vegetables",
    "Fruits",
    "Starchy food",
    "Proteins",
    "Dairy",
    "Fats and Sugar",
  ];
  const dietPlan_Id = location.state._id;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [Vegetables, setVegetables] = React.useState([]);
  const [Fruits, setFruits] = React.useState([]);
  const [StarchyFood, setStartchyFood] = React.useState([]);
  const [Proteins, setProteins] = React.useState([]);
  const [Dairy, setDairy] = React.useState([]);
  const [Fat_Sugar, setFat_Sugar] = React.useState([]);
  const [state, setState] = React.useState({});
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      let states = {};
      const res = await foodByCategory();
      if (res.status === 200) {
        const data = res.data;
        setVegetables(data.Vegetables);
        setFruits(data.Fruits);
        setStartchyFood(data.StarchyFood);
        setDairy(data.Dairy);
        setProteins(data.Proteins);
        setFat_Sugar(data.Fat_Sugar);

        data.Vegetables.map((f) => (states[f._id] = false));
        data.Fruits.map((f) => (states[f._id] = false));
        data.StarchyFood.map((f) => (states[f._id] = false));
        data.Dairy.map((f) => (states[f._id] = false));
        data.Proteins.map((f) => (states[f._id] = false));
        data.Fat_Sugar.map((f) => (states[f._id] = false));
      }
      setState(states);
      setIsLoading(false);
    };

    getData();
  }, []);

  const handleNext = () => {
    if (!getError(steps[activeStep])) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const _id = JSON.parse(localStorage.getItem("user")).id;

  const handleSubmit = (event) => {
    event.preventDefault();
    let foods = [];
    for (const s in state) {
      if (state[s]) {
        foods.push(s);
      }
    }
    const data = {
      user_Id: _id,
      foods: foods,
    };

    sendData(data);
  };

  const sendData = async (data) => {
    const res = await setPreferedFoods(data);
    if (res.status === 200) {
      console.log(res.data);
      navigate("/eatsmart/dietplanselection", {
        state: {
          dietPlan_Id: dietPlan_Id,
        },
      });
    } else {
      console.log(res.status);
    }
  };

  const getError = (name) => {
    let c = 0;
    let data = getArray(name);
    for (let f in data) {
      if (state[data[f]._id] === true) {
        c = c + 1;
      }
    }
    if (c >= 4) {
      return false;
    } else {
      return true;
    }
  };

  //   const error = getError(steps[activeStep]).filter((v) => v).length !== 2;

  function getArray(name) {
    if (name === "Vegetables") {
      return Vegetables;
    } else if (name === "Fruits") {
      return Fruits;
    } else if (name === "Starchy food") {
      return StarchyFood;
    } else if (name === "Proteins") {
      return Proteins;
    } else if (name === "Dairy") {
      return Dairy;
    } else if (name === "Fats and Sugar") {
      return Fat_Sugar;
    } else {
      return [];
    }
  }

  return (
    <>
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
                Select at least 2 foods !!!
              </Typography>
              <MobileStepper
                variant="progress"
                steps={steps.length}
                position="static"
                activeStep={activeStep}
                sx={{ width: "100%" }}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={
                      activeStep === steps.length - 1 ||
                      getError(steps[activeStep])
                    }
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Paper>
          </Grid>
        </Grid>

        {activeStep === steps.length ? (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        ) : (
          <Grid>
            <Paper
              sx={{
                mt: 1,
                mb: 1,
                p: 4,
                minWidth: { md: 400 },
                borderRadius: 10,
              }}
            >
              <Grid item xs={12}>
                <Typography
                  align="center"
                  component="h4"
                  variant="h6"
                  gutterBottom
                >
                  Food Category - {steps[activeStep]}
                </Typography>
              </Grid>
              <br></br>
              <Grid item xs={12} align="center">
                {isLoading && (
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress color="warning" size={20} />
                    <Typography variant="button">
                      &nbsp;&nbsp;Loading....{" "}
                    </Typography>
                  </Box>
                )}

                <FormControl
                  required
                  error={getError(steps[activeStep])}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel component="typography">
                    Pick at least TWO
                  </FormLabel>
                  <FormGroup>
                    <Grid container spacing={2} m={2}>
                      {" "}
                      {getArray(steps[activeStep]).map((food) => (
                        <Grid item xs={12} md={4}>
                          <Stack
                            direction="row"
                            spacing={2}
                            key={food._id}
                            mb={2}
                            mr={1}
                          >
                            <Avatar
                              alt={food.name}
                              src={food.image}
                              sx={{ width: 56, height: 56, boxShadow: 3 }}
                              variant="rounded"
                            />

                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={state[food._id]}
                                  onChange={handleChange}
                                  name={food._id}
                                />
                              }
                              label={food.name}
                            />
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                  <FormHelperText sx={{alignSelf:"center"}}>You must select at least 2 foods</FormHelperText>
                </FormControl>
              </Grid>
            </Paper>
          </Grid>
        )}

        {activeStep === steps.length - 1 &&
          getError(steps[activeStep]) === false && (
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
                    Make sure you entered the correct details
                  </Typography>
                  <br></br>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Generate Diet Plan
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          )}
      </Box>
    </>
  );
}

export default FoodSelection;
