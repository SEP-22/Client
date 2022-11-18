import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useLocation, useNavigate } from "react-router-dom";
import MiniPlan from "./MiniPlan";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { generateDietPlan, saveDietPlans } from "../../utils/api/dietPlan";
import CircularProgress from "@mui/material/CircularProgress";
import { createAndSaveShoppingList } from "../../utils/api/shoppingList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const meals = ["breakfast", "lunch", "dinner"];

export default function DietPlanSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const dietPlanId = location.state.dietPlan_Id;
  // const dietPlanId = "63526d0b8dceb61e22b1da5e";

  const [checked, setChecked] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [DietPlan, setDietPlan] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await generateDietPlan({ dietPlan_Id: dietPlanId });
      if (res && res.status === 200) {
        const data = res.data.message.split("}");
        data.pop();
        let dietPlan = [];
        data.forEach((element) => {
          let obj = {};
          let i1 = element.indexOf(":");
          let i2 = element.indexOf(":", i1 + 1);
          let i3 = element.indexOf("breakfast") + 12;
          let i4 = element.indexOf("lunch") + 8;
          let i5 = element.indexOf("dinner")+10;
          
          let dp = element.slice(i1, i2);
          let i = element.slice(i2, i3);
          let br = element.slice(i3, i4).split("],");
          let ln = element.slice(i4, i5).split("],");
          let dn = element.slice(i5, -1).split("],");
          br.pop();
          let b = [];
          br.forEach((e) => {
            let t1 = e.indexOf(",");
            let t2 = e.indexOf(",", t1 + 1);
            let t3 = e.indexOf(",", t2 + 1);
            let t4 = e.indexOf(",", t3 + 1);
            b.push([
              e.slice(e.indexOf("'") + 1, t1 - 1),
              e.slice(t1 + 3, e.indexOf("kcal") + 4),
              e.slice(t2 + 3, e.indexOf("g") + 1),
              e.slice(t3 + 3, t4 - 1),
              e.slice(t4 + 3, e.lastIndexOf("'")),
            ]);
          });
          ln.pop();
          let l = [];
          ln.forEach((e) => {
            let t1 = e.indexOf(",");
            let t2 = e.indexOf(",", t1 + 1);
            let t3 = e.indexOf(",", t2 + 1);
            let t4 = e.indexOf(",", t3 + 1);
            l.push([
              e.slice(e.indexOf("'") + 1, t1 - 1),
              e.slice(t1 + 3, e.indexOf("kcal") + 4),
              e.slice(t2 + 3, e.indexOf("g") + 1),
              e.slice(t3 + 3, t4 - 1),
              e.slice(t4 + 3, e.lastIndexOf("'")),
            ]);
          });
          dn.pop();
          let d = [];
          dn.forEach((e) => {
            let t1 = e.indexOf(",");
            let t2 = e.indexOf(",", t1 + 1);
            let t3 = e.indexOf(",", t2 + 1);
            let t4 = e.indexOf(",", t3 + 1);
            d.push([
              e.slice(e.indexOf("'") + 1, t1 - 1),
              e.slice(t1 + 3, e.indexOf("kcal") + 4),
              e.slice(t2 + 3, e.indexOf("g") + 1),
              e.slice(t3 + 3, t4 - 1),
              e.slice(t4 + 3, e.lastIndexOf("'")),
            ]);
          });
          obj["dietPlan_Id"] = dp.slice(3, dp.indexOf(",") - 1);
          obj["id"] = parseInt(i.slice(2, i.indexOf(",")));
          obj["breakfast"] = b;
          obj["lunch"] = l;
          obj["dinner"] = d;
          dietPlan.push(obj);
        });
        setDietPlan(dietPlan);
        setIsLoading(false);
        setError();
      }else{
        setError("Something went Wrong");
        setIsLoading(false);
      }

    };

    getData();
  }, []);

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let plans = [];
    for (const s in checked) {
      if (checked[s]) {
        plans.push(DietPlan[s]);
      }
    }
    sendData({plans: plans});
  };

  const sendData = async (data) => {
    const res = await saveDietPlans(data);
    const res2 = await createAndSaveShoppingList(data);
    if (res.status === 200) {
      if(res2.status === 200){
        navigate("/eatsmart/dietplans", {
          state: {
            dietPlan_Id: res.data._id,
          },
        });
      }else{
        console.log(res2.data);
      }
    } else {
      console.log(res.status);
    }
  };

  const getError = () => {
    let c = 0;
    for (let index = 0; index < 7; index++) {
      if (checked[index] === true) {
        c = c + 1;
      }
    }
    if (c >= 2) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {!isLoading && (
        <Box sx={{ m: 5 }}>
          <Container>
            <Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    mt: 1,
                    mb: 1,
                    p: 4,
                    alignItems: "center",
                    minWidth: { md: 400 },
                  }}
                >
                  <Typography align="center">
                    Select Diet Plans you LIKE !!! Select at least TWO...
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              alignItems="center"
              alignSelf={"center"}
              alignContent="center"
              sx={{ justifyContent: "center" }}
            >
              {DietPlan.map((arr) => (
                <Grid item xs={12} md={6} key={arr.id}>
                  <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                    <Typography variant="h6"></Typography>

                    <FormControlLabel
                      value={"Diet Plan - ".concat(arr.id, " ", null)}
                      control={
                        <Checkbox
                          checked={checked[arr.id]}
                          name={arr.id}
                          icon={<CheckBoxOutlineBlankRoundedIcon />}
                          checkedIcon={<FactCheckIcon />}
                          onChange={handleChange}
                        />
                      }
                      label={"Diet Plan - ".concat(arr.id + 1, " ")}
                      labelPlacement="top"
                    />
                    <DisplayPlans id={arr.id} arr={arr} />
                  </Item>
                </Grid>
              ))}
            </Grid>
            <Grid>
              <Grid item xs={12} align="center">
                <Paper
                  sx={{
                    mt: 1,
                    mb: 1,
                    p: 4,
                    alignItems: "center",
                    minWidth: { md: 400 },
                  }}
                >
                  <Typography align="center">
                    Have you finished selecting Diet Plans?
                  </Typography>
                  <br></br>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={getError() === true}
                    onClick={handleSubmit}
                  >
                    Save your Diet Plan
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      {isLoading && (
        <Box
          sx={{
            m: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            alignSelf={"center"}
            alignContent="center"
            sx={{ justifyContent: "center" }}
          >
            <Grid item xs={12}>
              <Paper
                sx={{
                  mt: 1,
                  mb: 1,
                  p: 4,
                  alignItems: "center",
                  minWidth: { md: 400 },
                }}
              >
                <Typography align="center">
                  We are generating your Diet Plan.... Hang On...
                  <br></br>
                  <br></br>
                  <CircularProgress color="warning" size={40} align="center" />
                  <br></br>
                  <Typography variant="button" align="center">
                    &nbsp;&nbsp;Loading....{" "}
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}

      {error && !isLoading && (
        <Box
          sx={{
            m: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            alignSelf={"center"}
            alignContent="center"
            sx={{ justifyContent: "center" }}
          >
            <Grid item xs={12}>
              <Paper
                sx={{
                  mt: 1,
                  mb: 1,
                  p: 4,
                  alignItems: "center",
                  minWidth: { md: 400 },
                }}
              >
                <Typography align="center">{error}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

function DisplayPlans({ id, arr }) {
  return (
    <Grid>
      <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
        <List dense={true}>
          {meals.map((meal) => (
            <ListItem key={meal + id}>
              <MiniPlan meals={arr[meal]} m={meal} />
            </ListItem>
          ))}
        </List>
      </Item>
    </Grid>
  );
}
