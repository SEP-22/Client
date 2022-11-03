import { Button, FormControl, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { getASingleUser } from '../../utils/api/user';
import { editUserPhone } from '../../utils/api/user';

const EditPhone = () => {

    const navigate = useNavigate();

    const[profileDet , setProfileDet] = React.useState({});
    const _id = "6335d3657e7aaea82d5e3650"
    const[newPhone,setNewPhone] = React.useState('')
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
  
    const handleChange = (event) => {
      setNewPhone(event.target.value)
      //console.log(event.target.value)
    }
  
    const handleSubmit = (event) =>{
      event.preventDefault();
  
      // sendData({
      //   userId : _id,
      //   name: newName,
      // });
  
      console.log(newPhone)
      if(newPhone.trim() != "") {
        //update the name in db
        //const data = ({userId:_id,name:newName});
        //editUserProfile(data.json());
        sendData({
          userId : _id,
          phone: newPhone,
        });
        navigate("/eatsmart/profile");
      }
      //notify that name cannot be empty
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
                    required
                    //value={"0762878555"}
                    defaultValue={profileDet.phone}
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
