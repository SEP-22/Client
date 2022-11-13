import React from "react";
import { Grid, Box, Paper, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import MealsChart from "./MealsChart";
import PieChartSharpIcon from "@mui/icons-material/PieChartSharp";
import ErrorSharpIcon from '@mui/icons-material/ErrorSharp';
import CategoryChart from "../Admin/CategoryChart";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { haveActiveDietPlan } from "../../utils/api/user";
import TableContainer from "@mui/material/TableContainer";
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import {
  getCaloryPercentagebyCategory,
  getMaxCountsFoods,
} from "../../utils/api/stats";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



const StatsMain = () => {
  const [activePlan, setActivePlan] = React.useState(null);
  const [foodsByCategory, setFoodsByCategory] = React.useState([]);
  const [preferedFoods, setPreferedFoods] = React.useState([]);
  const [error, setError] = React.useState(null);

  const _id = JSON.parse(localStorage.getItem("user")).id;
  
  React.useEffect(() => {
    const getData = async () => {
      const res = await haveActiveDietPlan({ user_Id: _id });
      if (res && res.status === 200) {
        setError(false);
        const data = res.data;
        setActivePlan(data.active);

        const res1 = await getCaloryPercentagebyCategory({ user_Id: _id });
        const res2 = await getMaxCountsFoods({ user_Id: _id });

        if (res1 && res1.status === 200) {
          const data = res1.data;
          console.log(data.message)
          setFoodsByCategory(data.message);
        } else {
          setFoodsByCategory("..~error encounted~..");
        }

        if (res2 && res2.status === 200) {
          const data = res2.data;
          console.log(data);
          if (data.message.includes("[[")) {
            let arr = data.message.split("]");
            arr.pop(-1);
            arr.pop(-1);
            let fd = [];
            for (let i = 0; i < arr.length; i++) {
              let temp;
              if (i > 0) {
                temp = arr[i].slice(arr[i].indexOf(",") + 1).split(",");
              } else {
                temp = arr[i].split(",");
              }

              let t = [];
              console.log(temp);
              temp.forEach((e) => {
                t.push(e.slice(e.indexOf("'") + 1, e.lastIndexOf("'")));
              });
              console.log(t);
              fd.push(t);
            }
            setPreferedFoods(fd);
          } else {
            setPreferedFoods(data.message);
          }
        } else {
          setPreferedFoods("..~error encounted~..");
        }
      } else {
        setError(true);
        console.log(res);
      }
    };

    getData();
  }, [_id]);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        m: 5,
        display: "flex",
        mr: { md: 15 },
        ml: { md: 15 },
      }}
    >
      <Container
        sx={{
          padding: 3,
          bgcolor: "background.paper",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
            <Box sx={{ alignContent: "flex-start", display: "flex" }}>
              <TipsAndUpdatesIcon
                sx={{
                  display: "flex",
                  alignSelf: "center",
                  fontWeight: "bold",
                }}
                fontSize="small"
                color="secondary"
              />
              <Typography ml={1} variant="h6">
                Know MORE about your DIET PLAN...
              </Typography>
            </Box>
          </Grid>
          {error && (
            <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
              <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                <ErrorSharpIcon
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    fontWeight: "bold",
                  }}
                  fontSize="small"
                />
                <Typography ml={1} variant="body">
                  Something went WRONG......
                </Typography>
              </Box>
            </Grid>
          )}
          {!activePlan && !error && (
            <Grid item xs={12} sx={{ justifyContent: "flex-start" }}>
              <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                <TipsAndUpdatesIcon
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    fontWeight: "bold",
                  }}
                  fontSize="small"
                  color="secondary"
                />
                <Typography ml={1} variant="button">
                  No Active DIET PLANS yet...!
                </Typography>
              </Box>
            </Grid>
          )}
          {activePlan && !error && (
            <>
              <Grid item xs={12} md={6}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <PieChartSharpIcon
                    sx={{ display: "flex", alignSelf: "center" }}
                    fontSize="small"
                    color="primary"
                  />
                  <Typography ml={1}>
                    Calory distribution for 3 meals
                  </Typography>
                </Box>
                <MealsChart />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <PieChartSharpIcon
                    sx={{ display: "flex", alignSelf: "center" }}
                    fontSize="small"
                    color="primary"
                  />
                  <Typography ml={1}>
                    Calory distribution by Food Category
                  </Typography>
                </Box>
                <CategoryChart data={foodsByCategory} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ alignContent: "flex-start", display: "flex" }}>
                  <RiceBowlIcon
                    sx={{ display: "flex", alignSelf: "center" }}
                    fontSize="small"
                    color="primary"
                  />
                  <Typography ml={1}>
                    Most Occuring Foods in Active Diet Plan
                  </Typography>
                </Box>
                {typeof preferedFoods === "string" ? (
                  <Typography> {preferedFoods} </Typography>
                ) : (
                  <TableContainer>
                  <List sx={{ paddingLeft: 5 }}>
                    {preferedFoods.map((food) => (
                      <ListItem key={food[0]} sx={{ paddingLeft: 5 }}>
                        <ListItemAvatar>
                          <Avatar alt={food[2]} src={food[1]} />
                        </ListItemAvatar>
                        <ListItemText primary={food[2]}/>
                      </ListItem>
                    ))}
                  </List>
                  </TableContainer>
                )}
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsMain;
