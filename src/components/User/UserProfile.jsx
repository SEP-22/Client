import React from 'react'
//import "../../pages/Profile/profilePage.css"
import Card from '@mui/material/Card';
import { Avatar, CardContent, Typography, CardActions, Button } from '@mui/material';
import { borderBottom, Box, margin, width } from '@mui/system';
import ProfileDetail from './ProfileDetail';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
//import SmileIcon from "@mui/icons/Mood";

const UserProfile = () => {
  const str = (Detail.Type.padEnd(20,' ')+Detail.Value).padEnd(60,' ');
  const str1 = (Detail1.Type.padEnd(20,' ')+Detail1.Value).padEnd(60,' ');
  const str2 = (Detail2.Type.padEnd(20,' ')+Detail2.Value).padEnd(60,' ');
  const str3 = (Detail3.Type.padEnd(20,' ')+Detail3.Value).padEnd(60,' ');
  //const str2 = str1.padEnd(15,' ');

  return (
    <Box
      sx={{
        m: 2,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card 
        sx={{ 
          width: "60%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: 700,
        }}
        //container spacing={{ xs: 4, md: 2 }}
      >
        <Avatar alt="Profile Picture"
          src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb--people-icon-avatar.jpg"
          sx={{ width: 200, height: 200, margin:"30px"}}>
        </Avatar>
        {/* <ProfileDetail Detail={Detail}></ProfileDetail>
        <ProfileDetail Detail={Detail1}></ProfileDetail>
        <ProfileDetail Detail={Detail2}></ProfileDetail>
        <ProfileDetail Detail={Detail3}></ProfileDetail> */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid grey'
        }}>
          <CardContent>
            <Typography variant="body2" color="text.Secondary">
            <pre>{str}</pre>
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button variant="contained" endIcon={<EditIcon />}>
          </Button> */}
            <IconButton size='small' color='primary'>
              <EditIcon fontSize='small'/>
            </IconButton>
          </CardActions>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid grey'
        }}>
          <CardContent>
            <Typography variant="body2" color="text.Secondary">
            <pre>{str1}</pre>
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button variant="contained" endIcon={<EditIcon />}>
          </Button> */}
            <IconButton size='small' color='primary'>
              <EditIcon fontSize='small'/>
            </IconButton>
          </CardActions>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid grey'
        }}>
          <CardContent>
            <Typography variant="body2" color="text.Secondary">
            <pre>{str2}</pre>
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button variant="contained" endIcon={<EditIcon />}>
          </Button> */}
            <IconButton size='small' color='primary'> 
              <EditIcon fontSize='small'/>
            </IconButton>
          </CardActions>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'space-between',
          borderBottom: '1px solid grey',
          marginBottom: '50px'
        }}>
          <CardContent>
            <Typography variant="body2" color="text.Secondary">
            <pre>{str3}</pre>
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button variant="contained" endIcon={<EditIcon />}>
          </Button> */}
            <IconButton size='small' color='primary'>
              <EditIcon fontSize='small'/>
            </IconButton>
          </CardActions>
        </div>
      </Card>
    </Box>
    
  )
}

export default UserProfile

const Person = {
    Name: "Jithmi",
    Email: "jithmi.nawoda01@gmail.com",
    PhoneNumber: "0762878555",
    Password: "########",
    Image: "https://img.rolandberger.com/persons/RB_Peter_Magunia_square_person2_none.png",
}
const Detail = {
  Type: "Name",
  Value: "Jonathan Herondale",
}
const Detail1 = {
  Type: "Email",
  Value: "jithmi.nawoda01@gmail.com",
}
const Detail2 = {
  Type: "Phone Number",
  Value: "0762878555",
}
const Detail3 = {
  Type: "Password",
  Value: "########",
}
