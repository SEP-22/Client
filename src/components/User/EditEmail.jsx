import { Button, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { getASingleUser } from '../../utils/api/user';
import { editUserEmail } from '../../utils/api/user';

const EditEmail = () => {

  const navigate = useNavigate();
  const _id = JSON.parse(localStorage.getItem("user")).id;
  const[profileDet , setProfileDet] = React.useState({});
  const[newEmail,setNewEmail] = React.useState('');
  const [error, setError] = React.useState("");

  const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

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
    setNewEmail(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(newEmail == "" || newEmail.trim() == ""){
      setError("Email cannot be empty!");
    }
    else if(!reEmail.test(newEmail)){
      setError("Please enter a valid email address!");
    }
    else{
      sendData({
        userId : _id,
        email: newEmail,
      });
    }
  };

  const sendData = async (data) => {
    console.log(data);
    const res = await editUserEmail(data);
    if(res){
      if(res.status === 200 ){
        console.log(res.body);
        navigate("/eatsmart/profile");
      }else{
        setError(res.body.error);
      }
    }else{
      setError("The email is already is use..")
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
                    pattern="/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/"
                    required
                    defaultValue={profileDet.email}
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

export default EditEmail
