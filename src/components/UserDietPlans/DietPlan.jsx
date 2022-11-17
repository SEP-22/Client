import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FoodCardAdmin from "../FoodCard/FoodCardAdmin";
import Meal from "../Meal/Meal";
import "./UserDietPlans.css";
import { width } from "@mui/system";
import Chip from "@mui/material/Chip";
import { Link, NavLink } from "react-router-dom";
import { getAllDietPlans } from "../../utils/api/dietPlan";
import SingleDietPlan from "./singleDiet";
import { getDietPlansByUserId } from "../../utils/api/dietPlan";
import { haveActiveDietPlan } from "../../utils/api/user";
import { getNonActivePlans } from "../../utils/api/dietPlan";
import { getActivePlans } from "../../utils/api/dietPlan";
import CircularProgress from "@mui/material/CircularProgress";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DietPlan = () => {
  const _id = JSON.parse(localStorage.getItem("user")).id;
  const [dietPlanDetails, setDietPlanDetails] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userDietPlans, setUserDietPlans] = React.useState([]);
  const [activePlanDetails, setactivePlanDetails] = React.useState([]);
  const [nonActiveDetails, setNoneActive] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      // const res = await getAllDietPlans();
      // const res2 = await getDietPlansByUserId(_id);
      const res3 = await getActivePlans(_id);
      const res4 = await getNonActivePlans(_id);

      if (res3.status === 200) {
        const data3 = res3.data;
        setactivePlanDetails(data3);
        console.log("active", activePlanDetails);
        if (res4.status === 200) {
          const data4 = res4.data;
          setNoneActive(data4);
          console.log("nonActive", nonActiveDetails);
          setIsLoading(false);
        }
      }

      //setIsLoading(false);
      else {
        console.log("error");
        setIsLoading(false);
      }
    };
    getData();
    //console.log("active",activePlanDetails);
    //console.log("nonActive",nonActiveDetails);
  }, []);
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
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ mb: 4 }}
              component={Link}
              to="/eatsmart/quiz"
            >
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae vehicula dui. Etiam consectetur porta tellus, vel porta leo
            scelerisque semper. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aenean in dapibus metus,
            in ultrices libero. Nulla vel placerat lectus, a commodo elit.
          </Typography>
          <br></br>
          <br></br>
        </Paper>
      </Box>
      {!isLoading && (
        <>
          {activePlanDetails.map((onePlan1) => (
            <SingleDietPlan
              title={onePlan1.name}
              completeDet={onePlan1}
              active={true}
            />
          ))}
          {nonActiveDetails.map((onePlan2) => (
            <SingleDietPlan
              title={onePlan2.name}
              completeDet={onePlan2}
              active={false}
            />
          ))}
          {/* {userDietPlans.map((onePlan) => (
        <SingleDietPlan planDetails = {dietPlanDetails[0]} title = "My Plan" completeDet = {onePlan}/>
      ))} */}
          {/* <SingleDietPlan planDetails = {dietPlanDetails[0]} title = "My Plan" completeDet = {userDietPlans[0]}/> */}
          {/* <SingleDietPlan planDetails = {dietPlanDetails[1]} title = "My Second Plan"/> */}
        </>
      )}

      {isLoading && (
        <Box
          mt={10}
          sx={{
            m: 2,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid>
            <Paper
              sx={{
                mt: 1,
                mb: 1,
                p: 4,
                minWidth: { md: 400 },
                borderRadius: 2,
              }}
            >
              <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <CircularProgress color="warning" size={20} />
                  <Typography variant="button">
                    &nbsp;&nbsp;Loading....{" "}
                  </Typography>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Box>
      )}
    </>
  );
};
export default DietPlan;
