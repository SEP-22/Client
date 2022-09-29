import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
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
import { addFood, addImage } from "../../utils/api/food";
import useAuth from "../../utils/providers/AuthProvider";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Category = [
  "Fruits and Vegetables",
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

  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const initialValues = {
    name: "",
    cal_per_gram: "",
    med_con: "",
    protein: "",
    fiber: "",
    fat: "",
    carbs: "",
  };
  const [formValues, setformValues] = React.useState(initialValues);
  const [formError, setformError] = React.useState(initialValues);
  const [medConditions, setMedConditions] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [filename, setFilename] = React.useState(null);
  const [imageData, setimageData] = React.useState("");
  const [imageBuffer, setimageBuffer] = React.useState("");
  const [imageloading, setimageloading] = React.useState(false);

  const renderImage = (file) => {
    try {
      if (file.type === "Buffer") {
        const reader = "data:image/png;base64," + encode(file.data);

        console.log("file");
        return setimageData(reader);
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        console.log(reader.result);
        reader.onloadend = async () => {
          return setimageData(reader.result);
        };
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      try {
        renderImage(file);
        const formData = new FormData();
        formData.append("image", file);
        setimageloading(true);
        const res = await addImage(formData);
        if (res) {
          setimageBuffer(res);
          return(res)
          // changeDP(res);
          //TODO:handle errors
        }
        console.log("handleUpload");
      } catch (error) {
        //TODO:show error
        console.log("Faild");
      }
      setimageloading(false);
    } else {
      //TODO:show error
      console.log("no file selected");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

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
    sendData({
      ...formValues,
      category: category,
      diabetics: diabetics,
      cholesterol: cholesterol,
      bloodpressure: bloodpressure,
      image:imageBuffer
    });
  };

  const sendData = async (data) => {
    const res = await addFood(data);
    if (res.status==201) {
      console.log(res.body);
    } else {
      console.log(res.status);
    }
  }

  useEffect(()=>{
    console.log(user)
  },[])

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
          <form>
            <Box sx={{ pr: 2, pl: 2 }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel htmlFor="component-outlined" required>
                  Name
                </InputLabel>
                <OutlinedInput
                  name="name"
                  onChange={handleChange}
                  label="Name"
                  required
                />
              </FormControl>
            </Box>

            <br></br>

            <Box sx={{ pr: 2, pl: 2 }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel htmlFor="component-outlined" required>
                  Category
                </InputLabel>
                <Select
                  name="category"
                  label="Category"
                  value={category}
                  onChange={handleCategoryChange}
                  required
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
                <InputLabel htmlFor="component-outlined" required>
                  Calories per Gram
                </InputLabel>
                <OutlinedInput
                  name="cal_per_gram"
                  onChange={handleChange}
                  label="Calories per Gram"
                  endAdornment={
                    <InputAdornment position="end">kcal/g</InputAdornment>
                  }
                  required
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
                <InputLabel htmlFor="component-outlined" required>
                  Protein
                </InputLabel>
                <OutlinedInput
                  name="protein"
                  onChange={handleChange}
                  label="Protein"
                  endAdornment={
                    <InputAdornment position="end">g</InputAdornment>
                  }
                  required
                />
              </FormControl>
            </Box>

            <br></br>

            <Box sx={{ pr: 2, pl: 2 }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel htmlFor="component-outlined" required>
                  Fat
                </InputLabel>
                <OutlinedInput
                  name="fat"
                  onChange={handleChange}
                  label="Fat"
                  endAdornment={
                    <InputAdornment position="end">g</InputAdornment>
                  }
                  required
                />
              </FormControl>
            </Box>

            <br></br>

            <Box sx={{ pr: 2, pl: 2 }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel htmlFor="component-outlined" required>
                  Fiber
                </InputLabel>
                <OutlinedInput
                  name="fiber"
                  onChange={handleChange}
                  label="Fiber"
                  endAdornment={
                    <InputAdornment position="end">g</InputAdornment>
                  }
                  required
                />
              </FormControl>
            </Box>

            <br></br>

            <Box sx={{ pr: 2, pl: 2 }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel htmlFor="component-outlined" required>
                  Carbs
                </InputLabel>
                <OutlinedInput
                  name="carbs"
                  onChange={handleChange}
                  label="Carbs"
                  endAdornment={
                    <InputAdornment position="end">g</InputAdornment>
                  }
                  required
                />
              </FormControl>
            </Box>

            <br></br>
            <Avatar
              alt={"avatar"}
              src={imageData}
              // src={user.image ? "data:image/jpeg;base64," + user.image : "#"}
              sx={{ width: 150, height: 150 }}
            />

            <Box sx={{ pr: 2, pl: 2 }}>
              <FormControl sx={{ width: "100%" }}>
                <Button variant="outlined" color="warning" component="label">
                  Upload an Image of Food
                  <input
                    hidden
                    multiple
                    accept="image/png,  image/jpeg"
                    type="file"
                    required
                    onChange={handleUpload}
                  />
                </Button>
                {/*{filename && (
                  <Box
                    sx={{
                      alignContent: "flex-start",
                      display: "flex",
                      pr: 15,
                      pl: 15,
                      mt: 1,
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
                  )}*/}
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
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </>
  );
}

export default NewFood;
