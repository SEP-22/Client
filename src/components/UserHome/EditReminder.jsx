import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Paper, Typography, Container } from "@mui/material";
import Button from "@mui/material/Button";
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
  ["BREAKFAST", true, "08.00 AM"],
  ["LUNCH", true, "13:46"],
  ["DINNER", true, "21:08"],
];


export default function EditReminder() {

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
                  {reminder[0]}: {reminder[2]}
                </Typography>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} md={3}>
            <Button variant="contained" color="success" sx={{ width: "100%" }} onClick={handleClickOpen} >
              Edit Reminders
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>
                <Box
                  sx={{
                    justifyContent: 'center',
                    display: "flex",
                    pr: 15,
                    pl: 15,
                    mb:2,
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
                  <ReminderDialog key={reminder[0]} reminders={reminder}/>
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
