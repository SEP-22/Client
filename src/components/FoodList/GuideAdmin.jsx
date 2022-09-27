import * as React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCardUser";
import FoodCardAdmin from "../FoodCard/FoodCardAdmin";
import FoodListAdmin from "./FoodListAdmin";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

const Category = [
  "Fruits and Vegetables",
  "Starchy food",
  "Proteins",
  "Dairy and Fats",
  "Sugar",
];


function getStyles(name, foodCategory, theme) {
  return {
    fontWeight:
      foodCategory.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function GuideAdminFoodList() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [foodCategory, setFoodCategory] = React.useState([]);
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFoodCategory(
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
        <Paper sx={{ mt: 4, mb: 4, p: 4, alignItems: "center" , minWidth:250}}>
          <Grid>
            <Grid item xs={12}>
              <Item elevation={0}>
                <Box sx={{ pr: 2, pl: 2 }}>
                  <Button
                    onClick={() => navigate("addfood")}
                    sx={{ width: "100%" }}
                    variant="contained"
                  >
                    Add new Food
                  </Button>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item elevation={0}>
                <Box sx={{ pr: 2, pl: 2 }}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-multiple-chip-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={foodCategory}
                      onChange={handleChange}
                      input={
                        <OutlinedInput
                          id="select-multiple-chip"
                          label="Category"
                        />
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {Category.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, foodCategory, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item elevation={0}>
                <Box sx={{ pr: 2, pl: 2 }}>
                  <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    id="search"
                    options={FoodList}
                    getOptionLabel={(option) => option.Food}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Search for " />
                    )}
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {value && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ maxWidth: 300 }}>
            <FoodCardAdmin foodItem={value} />
          </Box>
        </Box>
      )}
      {foodCategory.length === 0 ? <FoodListAdmin Category={Category}/> : <FoodListAdmin Category={foodCategory}/> }
      {/* {console.log(foodCategory)} */}
    </>
  );
}

const FoodList = [
  {
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
  },
  {
    Food: "Broccoli",
    Measure: "1 cup",
    Grams: 150,
    Calories: 45,
    Protein: 5,
    Fat: 0,
    Fiber: 0,
    Carbs: 8,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/broccoli.jpg",
  },
  {
    Food: "Carrots",
    Measure: "1 cup",
    Grams: 150,
    Calories: 45,
    Protein: 1,
    Fat: 0,
    Fiber: 9,
    Carbs: 10,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/carrot.jpg",
  },
  {
    Food: "Corn",
    Measure: "1 ear",
    Grams: 100,
    Calories: 92,
    Protein: 3,
    Fat: 1,
    Fiber: 0.8,
    Carbs: 21,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/corn.jpg",
  },
  {
    Food: "Potato",
    Measure: "1 medium",
    Grams: 110,
    Calories: 155,
    Protein: 2,
    Fat: 1,
    Fiber: 1,
    Carbs: 36,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/potato.jpg",
  },
  {
    Food: "Tomato",
    Measure: "1 medium",
    Grams: 120,
    Calories: 25,
    Protein: 1,
    Fat: 0,
    Fiber: 1,
    Carbs: 4.5,
    Category: "Vegetables",
    Image: "/src/assets/images/foods/tomato.jpg",
  },
  {
    Food: "Apple",
    Measure: "1 medium",
    Grams: 130,
    Calories: 70,
    Protein: 0,
    Fat: 0,
    Fiber: 1,
    Carbs: 18,
    Category: "Fruits",
    Image: "/src/assets/images/foods/apple.jpg",
  },
  {
    Food: "Avacado",
    Measure: "1 large",
    Grams: 216,
    Calories: 370,
    Protein: 4,
    Fat: 36,
    Fiber: 3.6,
    Carbs: 12,
    Category: "Fruits",
    Image: "/src/assets/images/foods/avacado.jpg",
  },
  {
    Food: "Banana",
    Measure: "1 medium",
    Grams: 150,
    Calories: 85,
    Protein: 1,
    Fat: 0,
    Fiber: 0.9,
    Carbs: 23,
    Category: "Fruits",
    Image: "/src/assets/images/foods/banana.jpg",
  },
];
