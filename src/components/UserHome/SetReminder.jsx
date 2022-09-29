import * as React from "react";
import { Grid, Box, Paper, Typography, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import dayjs from 'dayjs';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function FormDialog() {
  const [checked, setChecked] = React.useState(true);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box
            sx={{ alignContent: "flex-start", display: "flex", pr: 15, pl: 15 }}
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
          <Box sx={{ alignContent: "flex-start", display: "flex" }}>
            <Typography mr={1} variant="h6">
              BREAKFAST
            </Typography>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
          {checked && (
            <Box sx={{display:"flex", justifyContent:"center", m:2, }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="timepicker"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
