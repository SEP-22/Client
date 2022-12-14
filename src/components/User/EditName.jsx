import { Button, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { redirect, useNavigate } from "react-router-dom";
import { getASingleUser } from '../../utils/api/user';
import { editUserName } from '../../utils/api/user';

const EditName = () => {

  const navigate = useNavigate();
  const _id = JSON.parse(localStorage.getItem("user")).id;
  const[profileDet , setProfileDet] = React.useState({});
  const[newName,setNewName] = React.useState('')
  const [error, setError] = React.useState("");

  React.useEffect(() =>{
    const getData = async() => {
      const res = await getASingleUser(_id);
      if(res.status == 200) {
        const data = res.data;
        setProfileDet(data)
      }else{
        console.log("error")
      }
    };
    getData();
  },[]);

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(newName == ""){
      setError("Name cannot be empty!");
    }
    else if(newName.trim() == ""){
      setError("Name cannot be empty!");
    }
    else {
      sendData({
        userId : _id,
        name: newName,
      });
      navigate("/eatsmart/profile");
    }
    //notify that name cannot be empty
  };

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
            Edit Name
          </Typography>
          <br></br>
          <br></br>
          <form>
            <Box sx={{ pr: 2, pl: 2 }}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel htmlFor='component-outlined' required>
                    Name
                  </InputLabel>
                  <OutlinedInput
                    name='name'
                    label="Name"
                    required
                    //value={"Jonathan Herondale"}
                    //key={`${Math.floor((Math.random() * 1000))}-min`}
                    defaultValue={profileDet.name}
                    //value={profileDet.name}
                    onChange={handleChange}
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

export default EditName
