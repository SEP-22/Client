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

const category = ["Vagetables", "Fruits", "Dairy Products", "Proteins", "Fat"];

function getStyles(name, foodCategory, theme) {
  return {
    fontWeight:
      foodCategory.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function GuideUserFoodList() {
  const theme = useTheme();
  const [foodCategory, setFoodCategory] = React.useState([]);

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
        <Paper sx={{ m: 4, p: 4, alignItems: "center" }}>
          <Grid  >
            <Grid item xs={12}>
              <Item elevation={0}>
                <Button  sx={{ width: "30vw" }} variant="contained">Add new Food</Button>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item elevation={0}>
                <FormControl sx={{ width: "30vw" }}>
                  <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={foodCategory}
                    onChange={handleChange}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
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
                    {category.map((name) => (
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
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item elevation={0}>
                <Autocomplete
                  freeSolo
                  id="search"
                  options={FoodList.map((option) => option.Food)}
                  renderInput={(params) => (
                    <TextField
                      sx={{ width: "30vw" }}
                      {...params}
                      label="Search for "
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                    />
                  )}
                />
              </Item>
            </Grid>
          </Grid>
        </Paper>
      </Box>
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
    Image: "src/assets/images/foods/icecream.jpg",
  },
];
