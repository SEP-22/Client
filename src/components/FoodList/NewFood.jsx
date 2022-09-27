import * as React from "react";
import { Box, Container, Typography, Paper, Grid, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


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

function NewFood() {
  const navigate = useNavigate();
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
                // value={age}
                // onChange={handleChange}
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
              <OutlinedInput
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
