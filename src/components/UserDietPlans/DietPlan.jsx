import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardAdmin from "../FoodCard/FoodCardAdmin";
import Meal from "../Meal/Meal"
import "./UserDietPlans.css"
import { width } from "@mui/system";
import Chip from '@mui/material/Chip';
import { Link, NavLink } from "react-router-dom";
import { getAllDietPlans } from "../../utils/api/dietPlan";
import SingleDietPlan from "./singleDiet";
import { getDietPlansByUserId } from "../../utils/api/dietPlan";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DietPlan = () => {

  const _id = JSON.parse(localStorage.getItem("user")).id;
  const[dietPlanDetails, setDietPlanDetails] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const[userDietPlans,setUserDietPlans] = React.useState([]);
  const[activeDietPlanId,setActiveDietPlanId] = React.useState("None");
  
  React.useEffect(() =>{
    const getData = async() => {
      setIsLoading(true);
      const res = await getAllDietPlans();
      const res2 = await getDietPlansByUserId(_id);
      if(res.status === 200) {
        const data = res.data;
        setDietPlanDetails(data)
        if(res2.status === 200){
          const data2 = res2.data;
          setUserDietPlans(data2);
        }
        setIsLoading(false);
      }else{
        console.log("error")
        setIsLoading(false);
      }
    };
    getData();
    //console.log(dietPlanDetails);
    //setIsLoading(false);
   // console.log("I am happy")
    //console.log(userDietPlans[0])
    //console.log(dietPlanDetails)
  },[]);
  return (
    <>
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
        sx={{ mt: 4, mb: 4, p: 4, 
          alignItems: "center" , 
          display: "flex",
          flexDirection: "column",
          width:"50%"}}
        >
        <Grid item xs={12}>
          <Button variant="contained" sx={{mb:4}} component={Link} to="/eatsmart/quiz">
            Create a Diet Plan
          </Button>
        </Grid>
          
          <Typography
          sx={{ fontWeight: "light" }}
          variant="h6"
          component="h4"
          color="dark"
          align="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae vehicula dui. Etiam consectetur porta tellus, vel porta leo scelerisque semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean in dapibus metus, in ultrices libero. Nulla vel placerat lectus, a commodo elit.
          </Typography>
          <br></br>
          <br></br>
        </Paper>
          
      </Box>
    {!isLoading && (
      <>
      {userDietPlans.map((onePlan) => (
        <SingleDietPlan planDetails = {dietPlanDetails[0]} title = "My Plan" completeDet = {onePlan}/>
      ))}
      {/* <SingleDietPlan planDetails = {dietPlanDetails[0]} title = "My Plan" completeDet = {userDietPlans[0]}/> */}
      {/* <SingleDietPlan planDetails = {dietPlanDetails[1]} title = "My Second Plan"/> */}
      </>
    )}
    </>
  );
}
export default DietPlan