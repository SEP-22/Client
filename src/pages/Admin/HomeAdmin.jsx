import * as React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CategoryChart from "../../components/Admin/CategoryChart";
import { countFoodsbyCategory, getCountADPUsers, getCountofDietPlans, getCountofDiets, getCountofFoods, getCountofMDPUsers, getCountofUsers, getMostPrefferedFood } from "../../utils/api/stats";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const [users, dietplans, foods, usersMultiplePlans] = [100, 80, 100, 5];
const FavoriteFoods = [
  ["Banana", "/src/assets/images/foods/banana.jpg", 300],
  ["Apple", "/src/assets/images/foods/apple.jpg", 267],
  ["Carrot", "/src/assets/images/foods/carrot.jpg", 250],
  ["Ice cream", "/src/assets/images/foods/icecream.jpg", 250],
];



const HomeAdmin = () => {
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [totalFoods, setTotalFoods] = React.useState(0);
  const [totalUsersWithADP, setTotalUsersWithADP] = React.useState(0);
  const [totalUsersWithMDP, setTotalUsersWithMDP] = React.useState(0);
  const [totalDiets, setTotalDiets] = React.useState(0);
  const [totalQuizes, setTotalQuizes] = React.useState(0);
  const [foodsByCategory, setFoodsByCategory] = React.useState([]);
  const [preferedFoods, setPreferedFoods] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const res1 = await (getCountofUsers());
      const res2 = await (getCountofFoods());
      const res3 = await (getCountADPUsers());
      const res4 = await (getCountofMDPUsers());
      const res5 = await (getCountofDiets());
      const res6 = await (getCountofDietPlans());
      const res7 = await (countFoodsbyCategory());
      const res8 = await (getMostPrefferedFood());
      if (res1 && res1.status === 200) {
        const data = res1.data;
        setTotalUsers(data.count);
      }else{
        setTotalUsers("..~error encounted~..");
      }
      if (res2 && res2.status === 200) {
        const data = res2.data;
        setTotalFoods(data.count);
      }else{
        setTotalFoods("..~error encounted~..");
      }
      if (res3 && res3.status === 200) {
        const data = res3.data;
        setTotalUsersWithADP(data.count);
      }else{
        setTotalUsersWithADP("..~error encounted~..");
      }
      if (res4 && res4.status === 200) {
        const data = res4.data;
        setTotalUsersWithMDP(data.count);
      }else{
        setTotalUsersWithMDP("..~error encounted~..");
      }
      if (res5 && res5.status === 200) {
        const data = res5.data;
        setTotalDiets(data.count);
      }else{
        setTotalDiets("..~error encounted~..");
      }
      if (res6 && res6.status === 200) {
        const data = res6.data;
        setTotalQuizes(data.count);
      }else{
        setTotalQuizes("..~error encounted~..");
      }
      if (res7 && res7.status === 200) {
        const data = res7.data;
        let arr = [["Category", "Total number of Foods"]]
        data.forEach(ele => {
          arr.push([ele._id, ele.count])
        });
        console.log(arr)
        setFoodsByCategory(arr);
      }else{
        setFoodsByCategory("..~error encounted~..");
      }
      if (res8 && res8.status === 200) {
        const data = res8.data;
        setPreferedFoods(data);
      }else{
        setPreferedFoods("..~error encounted~..");
      }
    };
  
    getData();
  }, []);

  return (
    <>
      <Box sx={{ m: 5 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">Total Number of Users</Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalUsers}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">Total Number of Foods</Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalFoods}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">Total Number of Quizes taken</Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalQuizes}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Diet Plans created
                </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalDiets}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Users with a Active Diet Plan
                </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalUsersWithADP}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Users with Multiple Diet Plans
                </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalUsersWithMDP}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Most Favorite Foods by all users{" "}
                </Typography>
                <List sx={{paddingLeft: 10}}>
                  {FavoriteFoods.map((food) => (
                    <ListItem key={food[0]} sx={{paddingLeft: 10}}>
                      <ListItemAvatar>
                        <Avatar alt={food[0]} src={food[1]} />
                      </ListItemAvatar>
                      <ListItemText primary={food[0]} secondary={food[2]} />
                    </ListItem>
                  ))}
                </List>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">Total Number of Foods in each Category</Typography>
                <CategoryChart data={foodsByCategory}/>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomeAdmin;
