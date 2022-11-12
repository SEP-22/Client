import React from "react";
import { Grid, Box, Paper, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import MealsChart from "./MealsChart";
import PieChartSharpIcon from "@mui/icons-material/PieChartSharp";
import CategoryChart from "../Admin/CategoryChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ReminderList = [
  ["BREAKFAST", false, "08.00 AM"],
  ["LUNCH", false, "12:30"],
  ["DINNER", false, "20:00"],
];

const StatsMain = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        m: 5,
        display: "flex",
        mr: { md: 15 },
        ml: { md: 15 },
      }}
    >
      <Container
        sx={{
          padding: 3,
          bgcolor: "background.paper",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
            <Box sx={{ alignContent: "flex-start", display: "flex" }}>
              <TipsAndUpdatesIcon
                sx={{ display: "flex", alignSelf: "center", fontWeight: "bold"}}
                fontSize="small"
                color="secondary"
              />
              <Typography ml={1} variant="h6">
                Know MORE about your DIET PLAN...
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ alignContent: "flex-start", display: "flex" }}>
              <PieChartSharpIcon
                sx={{ display: "flex", alignSelf: "center" }}
                fontSize="small"
                color="primary"
              />
              <Typography ml={1} >
              Calory distribution for 3 meals
              </Typography>
            </Box>
            <MealsChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ alignContent: "flex-start", display: "flex" }}>
              <PieChartSharpIcon
                sx={{ display: "flex", alignSelf: "center" }}
                fontSize="small"
                color="primary"
              />
              <Typography ml={1} >
              Calory distribution by Food Category
              </Typography>
            </Box>
            <CategoryChart />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsMain;
