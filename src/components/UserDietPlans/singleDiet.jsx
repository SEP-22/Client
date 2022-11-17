import React from "react";
import { Grid, Box, Paper, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardAdmin from "../FoodCard/FoodCardAdmin";
import Meal from "../Meal/Meal"
import "./UserDietPlans.css"
import { width } from "@mui/system";
import Chip from '@mui/material/Chip';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAllDietPlans } from "../../utils/api/dietPlan";
import { ConnectedTvOutlined, Delete } from "@mui/icons-material";
import { updateActiveDietPlan } from "../../utils/api/user";
import ViewDiet from "./ViewDiet";
import {deleteDietPlan} from "../../utils/api/dietPlan";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SingleDietPlan = (props) => {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [delWindowopen, setDelWindowOpen] = React.useState(false);
  const _id = JSON.parse(localStorage.getItem("user")).id;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = () => {
    sendData({user_Id:_id,activePlan_Id:props.completeDet._id});
    handleClose();
    window.location.reload(false);
  };
  const handleView = () => {
    navigate("viewPlan")
  };
  //delete diet plan
  const handleDelWindowClickOpen = () => {
    setDelWindowOpen(true);
  };
  const handleDelWindowClose = () => {
    setDelWindowOpen(false);
  };
  const handleDelWindowChange = () => {
    //sendData({user_Id:_id,activePlan_Id:props.completeDet._id});
    deleteData(props.completeDet._id);
    handleDelWindowClose();
    console.log("delwindow closed")
    window.location.reload(false);
  }

  const completeDetails = props.completeDet.dietIDs;
  const status = props.active;
   //console.log("here i log",status);
  // console.log(completeDetails)
  //console.log("id is here",props.completeDet._id);
  const sendData = async (data) => {
    //const data = {user_Id:_id,activePlan_Id:props.completeDet._id};
    const res = await updateActiveDietPlan(data);
    if(res.status == 200 ){
      console.log(res.body);
    }else{
      console.log(res.status);
    }
  };
  const deleteData = async(data) => {
    const res = await deleteDietPlan(data);
    if(res.status == 200){
      console.log(res.body);
    }else{
      console.log(res.status);
    }
  }
  return (
    <>
      <Box
      sx={{
        m: 2,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      
        {/* <Grid item xs={12} sx={{display:"flex", flexDirection:"row",alignItems:"center",justifyContent:"center",}}>
          <Item>
            <Typography
              sx={{ fontWeight: "bold"}}
              variant="h6"
              component="h4"
              color="secondary"
            >
              Diet Plan 1
            </Typography>
            <Button>Hi</Button>
          </Item>
          
        </Grid> */}
        <div className="outerscrollable">
        <Grid item xs={12}>
            <Item>
              <Typography
                sx={{ fontWeight: "bold"}}
                variant="h6"
                component="h4"
                color="secondary"
              >
                {props.title}
              </Typography>
              {/* <Button>Active</Button> */}
              {status && (
                <>
                <Chip label="Active" color="primary" />
                </>
              )}
              <IconButton size='small' color='primary'onClick={handleDelWindowClickOpen}>
              <Delete></Delete>
              </IconButton>
              {/* <Chip label="Active" color="primary" /> */}
            </Item>
          </Grid>
          <div className="scrollable">
            {completeDetails.map((eachDiet) =>(
              <Meal meal={eachDiet}/>
            ))}
            {/* <Meal meal={props.planDetails}/> */}
          </div>
          {/* <Button variant="outlined" color="secondary" component={Link} to={{pathname: "viewPlan",data: "jimi"}} sx={{m:2}}>View</Button> */}
          {/* <Button variant="outlined" color="secondary" onClick={handleView} sx={{m:2}}>View</Button> */}  
          <Button variant="outlined" color="secondary" component={Link} to="viewPlan" state={{ details: props.completeDet }} sx={{m:2}}>View</Button>
          {!status && (
            <>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Activate</Button>
            <Dialog 
              open = {open}
              onClose = {handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id = "alert-dialog-title">
                {"Change Active Diet Plan?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to set this as your active diet plan?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">No</Button>
                <Button onClick={handleChange} color="secondary" autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
            </>
          )}
          <Dialog 
              open = {delWindowopen}
              onClose = {handleDelWindowClose}
              aria-labelledby="alert-deldialog-title"
              aria-describedby="alert-deldialog-description"
            >
              <DialogTitle id = "alert-deldialog-title">
                {"Delete Diet Plan?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want delete this diet plan? This action is not reversible. The associated shopping list will also get deleted..
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDelWindowClose} color="secondary">Cancel</Button>
                <Button onClick={handleDelWindowChange} color="primary" autoFocus>
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          {/* <Button variant="contained" color="primary">Activate</Button> */}
        </div>
        {/* {category.map((category) => (
        <Typography key={category}>{category}</Typography>
      ))} */}
    </Box>
    </>
  );
}
export default SingleDietPlan