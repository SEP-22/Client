import { Button, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { redirect, useNavigate } from "react-router-dom";
import { getASingleUser } from '../../utils/api/user';

const EditName = () => {

  const navigate = useNavigate();

  const[profileDet , setProfileDet] = React.useState({});
  const _id = "6335d3657e7aaea82d5e3650"
  const[newName,setNewName] = React.useState('')
  //const[newName,setNewName] = React.useState(profileDet.name)

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

  function handleChange(event) {
    setNewName(event.target.value)
    //console.log(event.target.value)
  }

  function changeName(){
    console.log(newName)
    if(newName.trim() != "") {
      //update the name in db
      navigate("/eatsmart/profile");
    }
    //notify that name cannot be empty
  }

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
              <Button variant="contained" type="submit" onClick={changeName}>
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
