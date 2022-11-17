import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Paper, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./managePage.css";
import { signUp, getUserByID, haveActiveDietPlan } from "../../utils/api/user";
import useAuth from "../../utils/providers/AuthProvider";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import FoodBankRoundedIcon from "@mui/icons-material/FoodBankRounded";
import ErrorSharpIcon from "@mui/icons-material/ErrorSharp";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CircularProgress from "@mui/material/CircularProgress";

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
function getStyles(name, medicalConditions, theme) {
  return {
    fontWeight:
      medicalConditions.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const WorkingHours = ["Very Light", "Light", "Moderate", "Heavy", "Very Heavy"];
const MedicalConditions = ["Diabetics", "Cholesterol", "High Blood Pressure"];
const DietaryIntention = ["Loose Weight", "Maintain Weight", "Gain Weight"];

export default function ManagePage() {
  const [activePlan, setActivePlan] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [medConditions, setMedConditions] = useState([]);
  const [gender, setGender] = useState("male");
  const [workingHours, setWorkingHours] = useState(WorkingHours[0]);
  const [dietaryIntention, setDietaryIntention] = useState(DietaryIntention[0]);
  const [selectFoods, setSelectFoods] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const { user, signUser } = useAuth();

  const handleDietaryIntentionChange = (event) => {
    setDietaryIntention(event.target.value);
  };

  const handleworkingHoursChange = (event) => {
    setWorkingHours(event.target.value);
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

  const handleSelectFoods = (event) => {
    setSelectFoods(event.target.checked);
  };

  useEffect(() => {
    const getActiveDietPlanDetails = async () => {
      const res = await haveActiveDietPlan({ user_Id: user.id });

      if (res && res.status === 200) {
        setError(false);
        const data = res.data;
        setActivePlan(data.active);

        if (data.active) {
          const currentUser = await getUserByID(user.id);

          if (currentUser && currentUser.status === 200) {
            setError(false);
            setAge(currentUser.data.activeDietPlan.dob);
            setWeight(currentUser.data.activeDietPlan.weight);
            setHeight(currentUser.data.activeDietPlan.height);
            setWorkingHours(
              currentUser.data.activeDietPlan.activity === "verylight"
                ? "Very Light"
                : currentUser.data.activeDietPlan.activity === "light"
                ? "Light"
                : currentUser.data.activeDietPlan.activity === "moderate"
                ? "Mderate"
                : currentUser.data.activeDietPlan.activity === "heavy"
                ? "Heavy"
                : currentUser.data.activeDietPlan.activity === "veryheavy"
                ? "Very Heavy"
                : ""
            );
            setDietaryIntention(
              currentUser.data.activeDietPlan.intention === "loose"
                ? "Loose Weight"
                : currentUser.data.activeDietPlan.intention === "maintain"
                ? "Maintain Weight"
                : currentUser.data.activeDietPlan.intention === "gain"
                ? "Gain Weight"
                : ""
            );

            let medConditions = [];
            if (currentUser.data.activeDietPlan.bloodpressure) {
              medConditions.push("High Blood Pressure");
            }
            if (currentUser.data.activeDietPlan.cholesterol) {
              medConditions.push("Cholesterol");
            }
            if (currentUser.data.activeDietPlan.diabetics) {
              medConditions.push("Diabetics");
            }
            setMedConditions(medConditions);
            setGender(currentUser.data.activeDietPlan.gender);
            setLoading(false);
          } else {
            setError(true);
            console.log(res);
          }
        } else {
          setError(false);
          setLoading(false);
        }
      } else {
        setError(true);
        console.log(res);
        setLoading(false);
      }
    };
    getActiveDietPlanDetails();
  }, [user.id]);

  return (
    <>
      {activePlan && !loading && !error && (
        <div className="signUpContainer">
          <div className="signUpFormContainer">
            <p className="signUpTitle">Active Diet Plan Details</p>
            <form className="signUpFormContainer">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={4}>
                    <p>Birthday</p>
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        disableFuture
                        label="Birthday"
                        openTo="year"
                        views={["year", "month", "day"]}
                        value={age}
                        onChange={(newValue) => {
                          setAge(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} required />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Height</p>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      style={{ marginBottom: "3vh" }}
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      required
                      value={height}
                      onChange={(event) => {
                        setHeight(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <p>Gender</p>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="gender-group-label"
                        defaultValue="female"
                        name="gender-group"
                        value={gender}
                        onChange={(event) => {
                          setGender(event.target.value);
                        }}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Weight</p>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      style={{ marginBottom: "3vh" }}
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      required
                      value={weight}
                      onChange={(event) => {
                        setWeight(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <p>Working Hours</p>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ width: "100%" }}>
                      {" "}
                      <InputLabel id="demo-multiple-chip-label">
                        Working Hours
                      </InputLabel>
                      <Select
                        name="WorkingHours"
                        label="Working Hours"
                        value={workingHours}
                        fullWidth
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Working Hours"
                            name="WorkingHours"
                          />
                        }
                        onChange={handleworkingHoursChange}
                        required
                      >
                        {WorkingHours.map((type) => (
                          <MenuItem value={type} key={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Dietary Intention</p>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ width: "100%" }}>
                      {" "}
                      <InputLabel id="demo-multiple-chip-label">
                        Dietary Intention
                      </InputLabel>
                      <Select
                        name="category"
                        label="Select Dietary Intention"
                        value={dietaryIntention}
                        onChange={handleDietaryIntentionChange}
                        fullWidth
                        required
                      >
                        {DietaryIntention.map((type) => (
                          <MenuItem value={type} key={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Medical Conditions</p>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ width: "100%" }}>
                      {" "}
                      <InputLabel id="demo-multiple-chip-label">
                        Medical Conditions
                      </InputLabel>
                      <Select
                        name="medConditions"
                        multiple
                        value={medConditions}
                        fullWidth
                        onChange={handleMedConditionChange}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Medical Conditions"
                          />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 0.5,
                            }}
                          >
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
                </Grid>
              </Box>
              <br></br>
              <br></br>
              <Grid>
                <Grid item xs={12} align="center">
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
                </Grid>
              </Grid>
              <Button
                className="formItem"
                style={{ backgroundColor: "#F178B6", marginBottom: "3vh" }}
                variant="contained"
                type="submit"
                fullWidth
                onClick={() => {}}
              >
                Update Diet Plan
              </Button>
            </form>
          </div>
        </div>
      )}

      {!activePlan && !loading && !error && (
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
            <Paper
              sx={{
                mt: 1,
                mb: 1,
                p: 4,
                minWidth: { md: 400 },
                borderRadius: 2,
              }}
            >
              <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <RateReviewIcon
                    sx={{
                      display: "flex",
                      alignSelf: "center",
                      fontWeight: "bold",
                    }}
                    fontSize="small"
                    color="secondary"
                  />
                  <Typography ml={1} variant="button">
                    No Active DIET PLANS yet...!
                  </Typography>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      )}

      {error && !loading && (
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
            <Paper
              sx={{
                mt: 1,
                mb: 1,
                p: 4,
                minWidth: { md: 400 },
                borderRadius: 2,
              }}
            >
              <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <ErrorSharpIcon
                    sx={{
                      display: "flex",
                      alignSelf: "center",
                      fontWeight: "bold",
                    }}
                    fontSize="small"
                  />
                  <Typography ml={1} variant="body">
                    Something went WRONG......
                  </Typography>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      )}

      {loading && (
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
            <Paper
              sx={{
                mt: 1,
                mb: 1,
                p: 4,
                minWidth: { md: 400 },
                borderRadius: 2,
              }}
            >
              <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <CircularProgress color="warning" size={20} />
                  <Typography variant="button">
                    &nbsp;&nbsp;Loading....{" "}
                  </Typography>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      )}
    </>
  );
}
