import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Button from "@mui/material/Button";
import loginImg from "../../assets/images/loginImg.png";
import TextField from "@mui/material/TextField";
import "./managePage.css";
import { signUp, getUserByID } from "../../utils/api/user";
import useAuth from "../../utils/providers/AuthProvider";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";

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
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [medConditions, setMedConditions] = useState([]);
  const [workingHours, setWorkingHours] = useState(WorkingHours[0]);
  const [dietaryIntention, setDietaryIntention] = useState(DietaryIntention[0]);
  const nav = useNavigate();
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

  const submitForm = async (event) => {
    event.preventDefault();
    if (
      name != "" &&
      email != "" &&
      phone != "" &&
      password != "" &&
      repassword != ""
    ) {
      const res = await signUp({ name, email, phone, password, role: "user" });
      if (res.status == 201) {
        signUser(res.data.newUser);
        // console.log(user)
        nav("/login");
      } else {
        console.log(res.status);
      }
    } else {
      alert("Invalid inputs");
    }
  };

  useEffect(() => {
    const getActiveDietPlanDetails = async () => {
      // const res = await getTutorGig(params["gigName"]);
      // var areas = res.areas.filter((area) => !area.startsWith("all-"));
      // res.areas = areas;
      console.log(user);
      const currentUser = await getUserByID(user.id);
      console.log(currentUser.data.activeDietPlan);
      setAge(currentUser.data.activeDietPlan.dob);
      setWeight(currentUser.data.activeDietPlan.weight);
      setHeight(currentUser.data.activeDietPlan.height);
      setWorkingHours(
        currentUser.data.activeDietPlan.activity == "verylight"
          ? "Very Light"
          : currentUser.data.activeDietPlan.activity == "light"
          ? "Light"
          : currentUser.data.activeDietPlan.activity == "moderate"
          ? "Mderate"
          : currentUser.data.activeDietPlan.activity == "heavy"
          ? "Heavy"
          : currentUser.data.activeDietPlan.activity == "veryheavy"
          ? "Very Heavy"
          : ""
      );
      setDietaryIntention(
        currentUser.data.activeDietPlan.intention == "loose"
          ? "Loose Weight"
          : currentUser.data.activeDietPlan.intention == "maintain"
          ? "Maintain Weight"
          : currentUser.data.activeDietPlan.intention == "gain"
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
    };
    getActiveDietPlanDetails();
    // console.log(params["gigName"]);
  }, []);

  return (
    <>
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
                  <TextField
                    style={{ marginBottom: "3vh" }}
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    required
                    value={age}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
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
                      setName(event.target.value);
                    }}
                  />
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
                      setName(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <p>Working Hours</p>
                </Grid>
                <Grid item xs={12}>
                  <Select
                    name="category"
                    label="Category"
                    value={workingHours}
                    fullWidth
                    onChange={handleworkingHoursChange}
                    required
                  >
                    {WorkingHours.map((type) => (
                      <MenuItem value={type} key={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={4}>
                  <p>Dietary Intention</p>
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={4}>
                  <p>Medical Conditions</p>
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
            </Box>

            <Button
              className="formItem"
              style={{ backgroundColor: "#F178B6", marginBottom: "3vh" }}
              variant="contained"
              type="submit"
              fullWidth
              onClick={submitForm}
            >
              Update Diet Plan
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
