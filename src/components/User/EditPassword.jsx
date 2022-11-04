import { Button, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { redirect, useNavigate } from "react-router-dom";
import { getASingleUser } from '../../utils/api/user';
import { editUserName } from '../../utils/api/user';
import TextField from "@mui/material/TextField";

const EditPassword = () => {

  //const[profileDet , setProfileDet] = React.useState({});
  //const _id = "6335d3657e7aaea82d5e3650"
  const _id = JSON.parse(localStorage.getItem("user")).id;
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const navigate = useNavigate();

  //const[newName,setNewName] = React.useState(profileDet.name)

  const handleChange = (event) => {
    setPassword(event.target.value)
    //console.log(event.target.value)
  }
  const handleReChange = (event) => {
    setRepassword(event.target.value)
    //console.log(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(password)

    if (
        password != "" &&
        repassword != ""
      ) {
        sendData({
            userId:_id,
            password: password,
        });
      } else {
        alert("Invalid inputs");
      }
    //notify that name cannot be empty
  };
//navigate("/eatsmart/profile");
  const sendData = async (data) => {
    const res = await editUserName(data);
    if(res.status == 200 ){
      console.log(res.body);
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
                    />
                    <TextField
                    style={{marginBottom: "3vh"}}
                    id="outlined-basic"
                    label="Re-Enter Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
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
