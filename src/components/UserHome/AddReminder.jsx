import React from "react";
import { Grid, Box, Paper, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ReminderDialog from "./ReminderDialog";

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

const AddReminder = () => {
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
          <Grid item xs={12} md={9} sx={{ justifyContent: "flex-start" }}>
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
          <Grid item xs={12} md={3}>
            <Button variant="contained" color="primary" sx={{ width: "100%" }} onClick={handleClickOpen}>
              Add Reminders
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>
                <Box
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    pr: 15,
                    pl: 15,
                    mb: 2,
                  }}
                >
                  <Typography mr={1} variant="h6">
                    REMINDERS
                  </Typography>
                  <NotificationsActiveIcon
                    sx={{ display: "flex", alignSelf: "center" }}
                    fontSize="small"
                  />
                </Box>
              </DialogTitle>
              <DialogContent>
                {ReminderList.map((reminder) => (
                  <ReminderDialog key={reminder[0]} reminders={reminder} />
                ))}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Set Reminders</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddReminder;
