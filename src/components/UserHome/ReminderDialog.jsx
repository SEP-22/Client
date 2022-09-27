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

export default function ReminderDialog(props) {

    const reminders = props.reminders;
    const [checked, setChecked] = React.useState(reminders[1]);

    const [value, setValue] = React.useState(reminders[1]== false ? null : dayjs(reminders[2], "HH:mm", 'es'));
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

  return (
    <>
    <Box sx={{ alignContent: "flex-start", display: "flex", justifyContent: 'space-between', mr:3, ml:3,  }}>
      <Typography mr={1} variant="h6">
        {reminders[0]}
      </Typography>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </Box>
    {checked ? (
      <Box sx={{display:"flex", justifyContent:"center", m:2, }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label={reminders[0]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
    ): <Box></Box>}
  </>

  )
}
