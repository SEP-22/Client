import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Paper, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { getInputs } from "../../utils/api/dietPlan";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import VerifiedIcon from "@mui/icons-material/Verified";
import { haveActiveDietPlan, updateActiveDietPlan } from "../../utils/api/user";
import FoodBankRoundedIcon from "@mui/icons-material/FoodBankRounded";

function getStyles(name, medicalConditions, theme) {
  return {
    fontWeight:
      medicalConditions.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MedicalConditions = ["Diabetics", "Cholesterol", "High Blood Pressure"];

export default function Quiz() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [date, setDate] = React.useState(null);
  const [gender, setGender] = React.useState("female");
  const [activity, setActivity] = React.useState("moderate");
  const [intention, setIntention] = React.useState("maintain");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [medConditions, setMedConditions] = React.useState([]);
  const [activePlan, setActivePlan] = React.useState(null);
  const [makeActive, setMakeActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectFoods, setSelectFoods] = React.useState(false);
  const [name, setName] = React.useState("");

  const _id = JSON.parse(localStorage.getItem("user")).id;
  // const _id = "633601573507a646fb339d94"

  React.useEffect(() => {
    const getData = async () => {
      const res = await haveActiveDietPlan({ user_Id: _id });
      if (res.status === 200) {
        const data = res.data;
        setActivePlan(data.active);
      } else {
      }
    };

    getData();
  }, [_id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleIntentionChange = (event) => {
    setIntention(event.target.value);
  };

  const handleMedConditionChange = (event) => {
    const {
      target: { value },
    } = event;
    setMedConditions(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (event) => {
    setMakeActive(event.target.checked);
  };

  const handleSelectFoods = (event) => {
    setSelectFoods(event.target.checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let diabetics = 0;
    let cholesterol = 0;
    let bloodpressure = 0;

    medConditions.map((med) => {
      if (med === "Diabetics") {
        diabetics = 1;
      } else if (med === "Cholesterol") {
        cholesterol = 1;
      } else if (med === "High Blood Pressure") {
        bloodpressure = 1;
      }
    });

    if (date !== null && height !== "" && weight !== "") {
      let d = date.toDate();
      const data = {
        user_Id: _id,
        dob: d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(),
        gender: gender,
        activity: activity,
        intention: intention,
        height: height,
        weight: weight,
        diabetics: diabetics,
        cholesterol: cholesterol,
        bloodpressure: bloodpressure,
        name: name,
      };
      sendData(data);
      console.log("Name", name);
    }
  };

  const sendData = async (data) => {
    const res = await getInputs(data);
    if (res.status === 200) {
      if (!activePlan || makeActive) {
        const res1 = await updateActiveDietPlan({
          user_Id: _id,
          activePlan_Id: res.data._id,
        });
        if (res1.status === 200) {
          if (!activePlan) {
            navigate("/eatsmart/foodselection", {
              state: {
                _id: res.data._id,
              },
            });
          } else if (!selectFoods) {
            navigate("/eatsmart/dietplanselection", {
              state: {
                dietPlan_Id: res.data._id,
              },
            });
          } else {
            navigate("/eatsmart/foodselection", {
              state: {
                _id: res.data._id,
              },
            });
          }
        }
      } else if (selectFoods) {
        navigate("/eatsmart/foodselection", {
          state: {
            _id: res.data._id,
          },
        });
      } else {
        navigate("/eatsmart/dietplanselection", {
          state: {
            dietPlan_Id: res.data._id,
          },
        });
      }
    } else {
      console.log(res.status);
    }
  };

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
        <form onSubmit={handleSubmit}>
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
                  Let's get started by answering this simple QUIZ !!!
                </Typography>
              </Paper>
            </Grid>
          </Grid>

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
                  Enter your Birthday
                </Typography>
              </Grid>
              <br></br>
              <Grid item xs={12} align="center">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disableFuture
                    label="Birthday"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField id="birthday"{...params} required />}
                  />
                </LocalizationProvider>
              </Grid>
            </Paper>
          </Grid>

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
                  Select your Gender
                </Typography>
              </Grid>

              <Grid item xs={12} align="center">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="gender-group-label"
                    defaultValue="female"
                    name="gender-group"
                    value={gender}
                    onChange={handleGenderChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio id="female"/>}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio id="male"/>}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Paper>
          </Grid>

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
                  Enter your Height
                </Typography>
              </Grid>
              <br></br>
              <Grid item xs={12} align="center">
                <FormControl>
                  <InputLabel htmlFor="component-outlined" required>
                    Height
                  </InputLabel>
                  <OutlinedInput
                  id="height"
                    name="height"
                    data-testid="height"
                    onChange={(event) => {
                      setHeight(event.target.value);
                    }}
                    label="height"
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    required
                    type="number"
                  />
                </FormControl>
              </Grid>
            </Paper>
          </Grid>

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
                  Enter your Weight
                </Typography>
              </Grid>
              <br></br>
              <Grid item xs={12} align="center">
                <FormControl>
                  <InputLabel htmlFor="component-outlined" required>
                    Weight
                  </InputLabel>
                  <OutlinedInput
                  id = "weight"
                    name="weight"
                    onChange={(event) => {
                      setWeight(event.target.value);
                    }}
                    label="weight"
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    type="number"
                    required
                  />
                </FormControl>
              </Grid>
            </Paper>
          </Grid>

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
                  Select your Daily Activity Level
                </Typography>
              </Grid>

              <Grid item xs={12} align="center">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="activity-group-label"
                    defaultValue="moderate"
                    name="activity-group"
                    value={activity}
                    onChange={handleActivityChange}
                  >
                    <FormControlLabel
                      value="verylight"
                      control={<Radio id="verylight"/>}
                      label="Very Light"
                    />
                    <FormControlLabel
                      value="light"
                      control={<Radio id="light"/>}
                      label="Light"
                    />
                    <FormControlLabel
                      value="moderate"
                      control={<Radio id="moderate"/>}
                      label="Moderate"
                    />
                    <FormControlLabel
                      value="heavy"
                      control={<Radio id="heavy"/>}
                      label="Heavy"
                    />
                    <FormControlLabel
                      value="veryheavy"
                      control={<Radio id="veryheavy"/>}
                      label="Very Heavy"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Paper>
          </Grid>

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
                  Select your Diet Intention
                </Typography>
              </Grid>
              <Grid item xs={12} align="center">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="intention-group-label"
                    defaultValue="maintain"
                    name="intention-group"
                    value={intention}
                    onChange={handleIntentionChange}
                  >
                    <FormControlLabel
                      value="loose"
                      control={<Radio />}
                      label="Loose Weight"
                    />
                    <FormControlLabel
                      value="maintain"
                      control={<Radio />}
                      label="Maintain Weight"
                    />
                    <FormControlLabel
                      value="gain"
                      control={<Radio />}
                      label="Gain Weight"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Paper>
          </Grid>

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
                  Select if you have any of the following illnesses
                </Typography>
              </Grid>
              <br></br>
              <Grid item xs={12} align="center">
                <FormControl sx={{ width: "200px" }}>
                  <InputLabel>Medical Conditions</InputLabel>
                  <Select
                    name="medConditions"
                    multiple
                    value={medConditions}
                    onChange={handleMedConditionChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Medical Conditions"
                      />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {MedicalConditions.map((med) => (
                      <MenuItem
                        key={med}
                        value={med}
                        style={getStyles(med, MedicalConditions, theme)}
                      >
                        {med}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Paper>
          </Grid>
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
                  Enter a name for your diet plan
                </Typography>
              </Grid>

              <Grid item xs={12} align="center">
                <FormControl>
                  <InputLabel htmlFor="component-outlined" required>
                    Name
                  </InputLabel>
                  <OutlinedInput
                    name="name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    label="name"
                    required
                  />
                </FormControl>
              </Grid>
            </Paper>
          </Grid>

          {activePlan && (
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
                  <FormControlLabel
                    label="save as ACTIVE Diet Plan"
                    control={
                      <Checkbox
                        checked={makeActive}
                        icon={<CheckBoxOutlineBlankRoundedIcon />}
                        checkedIcon={<VerifiedIcon />}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                  />
                  <br></br>
                </Paper>
              </Grid>
            </Grid>
          )}

          {activePlan && (
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
                  <FormControlLabel
                    label="select food for Prefered Foods"
                    control={
                      <Checkbox
                        checked={selectFoods}
                        icon={<CheckBoxOutlineBlankRoundedIcon />}
                        checkedIcon={<FoodBankRoundedIcon />}
                        onChange={handleSelectFoods}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                  />
                  <br></br>
                </Paper>
              </Grid>
            </Grid>
          )}

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
                {activePlan ? (
                  <Button variant="contained" color="secondary" type="submit">
                    Continue
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    // onClick={handleSubmit}
                  >
                    Select Foods
                  </Button>
                )}
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
