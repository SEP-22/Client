import React from "react";
import { Grid, Box, Paper, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ReminderList = [
  ["Breakfast", "08.00 AM"],
  ["Lunch", "01.00 PM"],
  ["Dinner", "08.00 PM"],
];

const EditReminder = () => {
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
              <Typography mr={1} variant="h6">
                REMINDERS
              </Typography>
              <NotificationsActiveIcon
                sx={{ display: "flex", alignSelf: "center" }}
                fontSize="small"
              />
            </Box>
          </Grid>
          {ReminderList.map((reminder) => (
            <Grid
              key={reminder[0]}
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                alignContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography align="center" variant="body1">
                  {reminder[0]}: {reminder[1]}
                </Typography>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} md={3}>
            <Button variant="contained" color="success" sx={{ width: "100%" }}>
              Edit Reminders
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EditReminder;
