import * as React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
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
import { getFoods } from "../../utils/api/food";
import FoodCard from "../FoodCard/FoodCardUser";
import FoodListUser from "./FoodListUser";
import { getPreferedFoods } from "../../utils/api/user";

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
  "Vegetables",
  "Fruits",
  "Starchy food",
  "Proteins",
  "Dairy",
  "Fats and Sugar",
];

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
  const StateContext = React.createContext()

  const [foodCategory, setFoodCategory] = React.useState([]);
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [FoodList, setFoodList] = React.useState([]);
  const [state, setState] = React.useState({});

  const _id = JSON.parse(localStorage.getItem("user")).id;
  // const _id = "633601573507a646fb339d94"

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFoodCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };


  // const handleStateChange = (f_id,checked) => {
  //   setState({
  //     ...state,
  //     [f_id]: checked,
  //   });
  // };

  // const handleStateChange = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  React.useEffect(() => {
    const getData = async () => {
      const res = await getFoods();
      if (res.status === 200) {
        let states = {}; 
        const data = res.data;
        setFoodList(data);
        data.map((f) => (states[f._id] = false));
        const res1 = await getPreferedFoods({ user_Id : _id});
        if (res1.status === 200) {

          const prefered = res1.data.preferedFoods;
          prefered.map((p) => (states[p] = true))
          setState(states);

        }else{

        }

      } else {
      }
    };

    getData();
  }, []);

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
        <Paper sx={{ mt: 4, mb: 4, p: 4, alignItems: "center", minWidth: 250 }}>
          <Grid>
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
                    getOptionLabel={(option) => option.name}
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
          {/* {console.log((value._id))} */}
            <FoodCard foodItem={value} checked = {state[(value._id)]} /* handleStateChange={handleStateChange} */ />
          </Box>
        </Box>
      )}
      {foodCategory.length === 0 ? (
        <FoodListUser Category={Category} state={state} id = {0}/* handleStateChange={handleStateChange} *//>
      ) : (
        <FoodListUser Category={foodCategory} state={state} id = {1} /* handleStateChange={handleStateChange} */ />
      )}
      {/* {console.log(foodCategory)} */}
    </>
  );
}
