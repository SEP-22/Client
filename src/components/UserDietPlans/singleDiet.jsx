import React from "react";
import { Grid, Box, Paper, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardAdmin from "../FoodCard/FoodCardAdmin";
import Meal from "../Meal/Meal"
import "./UserDietPlans.css"
import { width } from "@mui/system";
import Chip from '@mui/material/Chip';
import { Link, NavLink } from "react-router-dom";
import { getAllDietPlans } from "../../utils/api/dietPlan";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SingleDietPlan = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const completeDetails = props.completeDet.dietIDs;
  const status = props.active;
   //console.log("here i log",status);
  // console.log(completeDetails)
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
              {/* <Chip label="Active" color="primary" /> */}
            </Item>
          </Grid>
          <div className="scrollable">
            {completeDetails.map((eachDiet) =>(
              <Meal meal={eachDiet}/>
            ))}
            {/* <Meal meal={props.planDetails}/> */}
          </div>
          <Button variant="outlined" color="secondary" sx={{m:2}}>View</Button>
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
                <Button onClick={handleClose} color="secondary" autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
            </>
          )}
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