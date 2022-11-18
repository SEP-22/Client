import { Button, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { getASingleUser } from '../../utils/api/user';
import { editUserPhone } from '../../utils/api/user';

const EditPhone = () => {

    const navigate = useNavigate();
    const _id = JSON.parse(localStorage.getItem("user")).id;
    const[profileDet , setProfileDet] = React.useState({});
    const[newPhone,setNewPhone] = React.useState('');
    const [error, setError] = React.useState("");

    const reContact = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  
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
      setNewPhone(event.target.value)
    }
  
    const handleSubmit = (event) =>{
      event.preventDefault();
      if(newPhone == "" || newPhone.trim()==""){
        setError("The phone number cannot be empty!")
      }
      else if(!reContact.test(newPhone)){
        setError("Please enter a valid phone number!");
      }
      else{
        sendData({
          userId : _id,
          phone: newPhone,
        });
        navigate("/eatsmart/profile");
      }
    };
  
    const sendData = async (data) => {
      const res = await editUserPhone(data);
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
            Edit Phone Number
          </Typography>
          <br></br>
          <br></br>
          <form>
            <Box sx={{ pr: 2, pl: 2 }}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel htmlFor='component-outlined' required>
                    Phone Number
                  </InputLabel>
                  <OutlinedInput
                    name='phonenumber'
                    label="Phonenumber"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                    defaultValue={profileDet.phone}
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

export default EditPhone
