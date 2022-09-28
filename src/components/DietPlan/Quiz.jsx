import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Paper, Grid, Button } from "@mui/material";
import Navbar from "../Navbar/NabvarUser";
import Footer from "../Footer/Footer";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function Quiz() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <>
      <Navbar />
      <Box
        mt={10}
        sx={{
          m: 2,
          pt: 5,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <form>
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
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} required />}
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
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
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
                    name="height"
                    //   onChange={handleChange}
                    label="height"
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
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
                    name="weight"
                    //   onChange={handleChange}
                    label="weight"
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
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
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="moderate"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="verylight"
                      control={<Radio />}
                      label="Very Light"
                    />
                    <FormControlLabel
                      value="light"
                      control={<Radio />}
                      label="Light"
                    />
                    <FormControlLabel
                      value="moderate"
                      control={<Radio />}
                      label="Moderate"
                    />
                    <FormControlLabel
                      value="heavy"
                      control={<Radio />}
                      label="Heavy"
                    />
                    <FormControlLabel
                      value="veryheavy"
                      control={<Radio />}
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
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="maintain"
                    name="radio-buttons-group"
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
                <Button variant="contained" color="secondary" type="submit">
                  Generate Diet Plan
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Footer />
    </>
  );
}
