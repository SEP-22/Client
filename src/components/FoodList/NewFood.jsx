import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Input,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import PhotoIcon from "@mui/icons-material/Photo";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Category = [
  "Fruit and Vegetables",
  "Starchy food",
  "Proteins",
  "Dairy and Fats",
  "Sugar",
];

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

const MedicalConditions = ["Diabetics", "Cholesterol", "High Blood Pressure"];

function NewFood() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [medConditions, setMedConditions] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [filename, setFilename] = React.useState(null);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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

  return (
    <>
      <Box
        sx={{
          m: 2,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper sx={{ mt: 4, mb: 4, p: 4, alignItems: "center" }}>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h6"
            component="h4"
            color="primary"
            align="center"
          >
            ADD NEW FOOD
          </Typography>
          <br></br>
          <Box sx={{ pr: 2, pl: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                // value={name}
                // onChange={}
                label="Name"
              />
            </FormControl>
          </Box>
          <br></br>
          <Box sx={{ pr: 2, pl: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="component-outlined">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                value={category}
                onChange={handleCategoryChange}
              >
                {Category.map((type) => (
                  <MenuItem value={type} key={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <br></br>
          <Box sx={{ pr: 2, pl: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="component-outlined">
                Calories per Gram
              </InputLabel>
              <TextField
                id="component-outlined"
                // value={Grams}
                // onChange={}
                label="Calories per Gram"
                endAdornment={
                  <InputAdornment position="end">kcal/g</InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <br></br>
          <Box sx={{ pr: 2, pl: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-chip-label">
                Medical Conditions
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
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
          </Box>
          <br></br>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="subtitle2"
            component="h6"
            align="center"
          >
            NUTRIENTS
          </Typography>
          <br></br>
          <Box sx={{ pr: 2, pl: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="component-outlined">Protein</InputLabel>
              <OutlinedInput
                id="component-outlined"
                // value={Grams}
                // onChange={}
                label="Protein"
                endAdornment={<InputAdornment position="end">g</InputAdornment>}
              />
            </FormControl>
          </Box>
          <br></br>
          <Box sx={{ pr: 2, pl: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="component-outlined">Fat</InputLabel>
              <OutlinedInput
                id="component-outlined"
                // value={Grams}
                // onChange={}
                label="Fat"
                endAdornment={<InputAdornment position="end">g</InputAdornment>}
              />
            </FormControl>
          </Box>
          <br></br>
          <Box sx={{ pr: 2, pl: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="component-outlined">Fiber</InputLabel>
              <OutlinedInput
                id="component-outlined"
                // value={Grams}
                // onChange={}
                label="Fiber"
                endAdornment={<InputAdornment position="end">g</InputAdornment>}
              />
            </FormControl>
          </Box>
          <br></br>
          <Box sx={{ pr: 2, pl: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="component-outlined">Carbs</InputLabel>
              <OutlinedInput
                id="component-outlined"
                // value={Grams}
                // onChange={}
                label="Carbs"
                endAdornment={<InputAdornment position="end">g</InputAdornment>}
              />
            </FormControl>
          </Box>
          <br></br>
          <Box sx={{ pr: 2, pl: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <Button
                variant="outlined"
                color="warning"
                component="label"
              >
                Upload an Image of Food
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(event) => {
                    setFilename(event.target.files[0].name);
                  }}
                />
              </Button>
              {filename && (
                <Box
                  sx={{
                    alignContent: "flex-start",
                    display: "flex",
                    pr: 15,
                    pl: 15,
                    mt:1,
                  }}
                >
                  <PhotoIcon
                    sx={{ display: "flex", alignSelf: "center" }}
                    fontSize="small"
                  />
                  <Typography ml={1} align="center">
                    {filename}
                  </Typography>
                </Box>
              )}
            </FormControl>
          </Box>
          <br></br>
          <br></br>
          <Box
            sx={{
              pr: 2,
              pl: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button variant="contained">Submit</Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default NewFood;
