import { Button, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { redirect, useNavigate } from "react-router-dom";
import { getASingleUser } from '../../utils/api/user';
import { editUserName } from '../../utils/api/user';
import TextField from "@mui/material/TextField";
import { editUserPassword } from '../../utils/api/user';

const EditPassword = () => {

  const _id = JSON.parse(localStorage.getItem("user")).id;
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const [error,setError] = React.useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setPassword(event.target.value)
  }
  const handleReChange = (event) => {
    setRepassword(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    if(password == "" || repassword == "" || password.trim() == "" || repassword.trim() == ""){
      setError("Password cannot be empty");
    }
    else if(password != repassword){
      setError("The passwords doesn't match!");
    }
    else if(password.length < 8){
      setError("Password length should be more than 8!");
    }else{
      sendData({
        userId:_id,
        password: password,
      });
    }
  };
//navigate("/eatsmart/profile");
  const sendData = async (data) => {
    const res = await editUserPassword(data);
    if(res.status == 200 ){
      console.log(res.body);
      navigate("/eatsmart/profile");
    }else{
      console.log(res.status);
    }
  };

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
            Change your Password
          </Typography>
          <br></br>
          <br></br>
          <form>
            <Box sx={{ pr: 2, pl: 2 }}>
                <FormControl sx={{ width: "100%" }}>
                    <TextField
                    style={{marginBottom: "3vh"}}
                    id="outlined-basic"
                    label="New Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                    onChange={handleChange}
                    />
                    <TextField
                    style={{marginBottom: "3vh"}}
                    id="outlined-basic"
                    label="Re-Enter Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                    onChange={handleReChange}
                    />
                </FormControl>
                {error !== "" ? <p style={{ color: "red" }}>{error}</p> : <p></p>}
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
                onClick={() => navigate("/eatsmart/profile")}
              >
                Back
              </Button>
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Save
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </>
  )
}

export default EditPassword
