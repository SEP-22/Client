import { Button, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from "react-router-dom";

const EditEmail = () => {

    const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
            m: 2,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            margin: "70px",
          }}
      >
        <Paper sx={{ mt: 8, mb: 8, p: 8, alignItems: "center" }}>
          <Typography
          sx={{ fontWeight: "bold" }}
          variant="h6"
          component="h4"
          color="primary"
          align="center"
          >
            Edit Email Address
          </Typography>
          <br></br>
          <br></br>
          <form>
            <Box sx={{ pr: 2, pl: 2 }}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel htmlFor='component-outlined' required>
                    Email Address
                  </InputLabel>
                  <OutlinedInput
                    name='emailaddress'
                    label="Emailaddress"
                    required
                    value={"jithmi.nawoda01@gmail.com"}
                    />
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
              <Button variant="contained" type="submit" >
                Save
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </>
  )
}

export default EditEmail
