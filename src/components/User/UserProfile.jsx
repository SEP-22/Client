import React from 'react'
import "../../pages/Profile/profilePage.css"
import Card from '@mui/material/Card';
import { Avatar, CardContent, Typography, CardActions, Button, ListItemText } from '@mui/material';
import { borderBottom, Box, margin, minWidth, width } from '@mui/system';
import ProfileDetail from './ProfileDetail';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from "react-router-dom";
import { getASingleUser } from '../../utils/api/user';
//import SmileIcon from "@mui/icons/Mood";
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import { FolderSpecialOutlined } from '@mui/icons-material';
import Paper from '@mui/material/Paper';

const UserProfile = () => {

  const[profileDet , setProfileDet] = React.useState({name:"",email:"",phone:"",password:""});
  const _id = JSON.parse(localStorage.getItem("user")).id;

  React.useEffect(() =>{
    const getData = async() => {
      const res = await getASingleUser(_id);
      if(res.status === 200) {
        const data = res.data;
        setProfileDet(data)
      }else{
        console.log("error")
      }
    };
    getData();
  },[]);

   const str = ("Name".padEnd(20,' ')+profileDet.name);
   const str1 = ("Email".padEnd(20,' ')+profileDet.email);
   const str2 = ("Phone".padEnd(20,' ')+profileDet.phone);
  
  const navigate = useNavigate();

  return (
    <Box
        sx={{
          m: 2,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          margin: "1px",
        }}
      >
      
      <Paper
          sx={{
            mt: 4,
            mb: 4,
            p: 4,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <br></br>
          <Avatar alt="Profile Picture"
          src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb--people-icon-avatar.jpg"
          sx={{ width: 150, height: 150, margin:"30px"}}>
        </Avatar>
        <div className='data' style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid grey'}}>
        <ListItem alignItems='flex-start'
            secondaryAction={<IconButton edge="end" aria-label='edit' size='small' color='primary' component={Link} to="editname"><EditIcon></EditIcon></IconButton>}>
            <ListItemText primary = "Name" secondary = {profileDet.name} /> 
          </ListItem> 
        </div>
        <div className='data' style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid grey'}}>
        <ListItem
            secondaryAction={<IconButton edge="end" aria-label='edit' size='small' color='primary' component={Link} to="editemail"><EditIcon></EditIcon></IconButton>}>
            <ListItemText primary = "Email" secondary = {profileDet.email} /> 
          </ListItem>
        </div>
        <div className='data' style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid grey'}}>
        <ListItem
            secondaryAction={<IconButton edge="end" aria-label='edit' size='small' color='primary' component={Link} to="editphone"><EditIcon></EditIcon></IconButton>}>
            <ListItemText primary = "Phone" secondary = {profileDet.phone} /> 
          </ListItem>
        </div>
        <br></br><br />
          <Button variant="contained" component={Link} to="editpassword" endIcon={<EditIcon />}> Edit Password
          </Button>
          <br></br>
        </Paper>
      
        
       
        {/* <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
            <List dense={dense}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
            </List>
        </Grid> */}
        {/* <div style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid grey'
        }}> */}
          {/* <CardContent>
            <Typography variant="body2" color="text.Secondary">
            <pre>{str}</pre>
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size='small' color='primary' component={Link} to="editname">
              <EditIcon fontSize='small'/>
            </IconButton>
          </CardActions> */}
        {/* </div> */}
        {/* <div style={{
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
            <IconButton size='small' color='primary' component={Link} to="editemail">
              <EditIcon fontSize='small'/>
            </IconButton>
          </CardActions>
        </div> */}
        {/* <div style={{
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
            <IconButton size='small' color='primary' component={Link} to="editphone"> 
              <EditIcon fontSize='small'/>
            </IconButton>
          </CardActions>
        </div> */}
        <br />
        <br />
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <CardActions>
            
          </CardActions>
        </div>
        <br />
        <br />
      
    </Box>
    
  )
}

export default UserProfile