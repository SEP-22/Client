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
import TableContainer from "@mui/material/TableContainer";
import CircularProgress from "@mui/material/CircularProgress";
import {
  countFoodsbyCategory,
  getCountADPUsers,
  getCountofDietPlans,
  getCountofDiets,
  getCountofFoods,
  getCountofMDPUsers,
  getCountofUsers,
  getMostPrefferedFood,
} from "../../utils/api/stats";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const HomeAdmin = () => {
  const [totalUsers, setTotalUsers] = React.useState('loading...');
  const [totalFoods, setTotalFoods] = React.useState('loading...');
  const [totalUsersWithADP, setTotalUsersWithADP] = React.useState('loading...');
  const [totalUsersWithMDP, setTotalUsersWithMDP] = React.useState('loading...');
  const [totalDiets, setTotalDiets] = React.useState('loading...');
  const [totalQuizes, setTotalQuizes] = React.useState('loading...');
  const [foodsByCategory, setFoodsByCategory] = React.useState('loading...');
  const [preferedFoods, setPreferedFoods] = React.useState('loading...');


  React.useEffect(() => {
    const getData = async () => {
      const res1 = await getCountofUsers();
      const res2 = await getCountofFoods();
      const res3 = await getCountADPUsers();
      const res4 = await getCountofMDPUsers();
      const res5 = await getCountofDiets();
      const res6 = await getCountofDietPlans();
      const res7 = await countFoodsbyCategory();
      const res8 = await getMostPrefferedFood();
      if (res1 && res1.status === 200) {
        const data = res1.data;
        setTotalUsers(data.count);
      } else {
        setTotalUsers("..~error encounted~..");
      }
      if (res2 && res2.status === 200) {
        const data = res2.data;
        setTotalFoods(data.count);
      } else {
        setTotalFoods("..~error encounted~..");
      }
      if (res3 && res3.status === 200) {
        const data = res3.data;
        setTotalUsersWithADP(data.count);
      } else {
        setTotalUsersWithADP("..~error encounted~..");
      }
      if (res4 && res4.status === 200) {
        const data = res4.data;
        setTotalUsersWithMDP(data.count);
      } else {
        setTotalUsersWithMDP("..~error encounted~..");
      }
      if (res5 && res5.status === 200) {
        const data = res5.data;
        setTotalDiets(data.count);
      } else {
        setTotalDiets("..~error encounted~..");
      }
      if (res6 && res6.status === 200) {
        const data = res6.data;
        setTotalQuizes(data.count);
      } else {
        setTotalQuizes("..~error encounted~..");
      }
      if (res7 && res7.status === 200) {
        const data = res7.data;
        let arr = [["Category", "Total number of Foods"]];
        data.forEach((ele) => {
          arr.push([ele._id, ele.count]);
        });
        setFoodsByCategory(arr);
      } else {
        setFoodsByCategory("..~error encounted~..");
      }
      if (res8 && res8.status === 200) {
        const data = res8.data;
        console.log(data);
        if (data.message.includes("[[")) {
          let arr = data.message.split(']')
          arr.pop(-1)
          arr.pop(-1)
          let fd = []
          for (let i = 0; i < arr.length; i++) {
            let temp
            if (i > 0) {
               temp = arr[i].slice(arr[i].indexOf(',')+1).split(',');        
            }else{
              temp = arr[i].split(','); 
            }

            let t = []
            console.log(temp)
            temp.forEach(e => {
              t.push(e.slice(e.indexOf("'")+1, e.lastIndexOf("'")))
            });
            console.log(t)
            fd.push(t)
          }
          setPreferedFoods(fd)
        } else {
          setPreferedFoods(data.message);         
        }

      } else {
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
            <Grid item xs={12} md={4}>
              <Item sx={{ height: {xs:"unset", md:120}, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">Total Number of Users</Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalUsers}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ height: {xs:"unset", md:120}, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">Total Number of Foods</Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalFoods}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ height: {xs:"unset", md:120}, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Quizes taken
                </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalQuizes}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ height: {xs:"unset", md:120}, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Diet Plans created
                </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalDiets}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ height: {xs:"unset", md:120}, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Users with a Active Diet Plan
                </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalUsersWithADP}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
              <Item sx={{ height: {xs:"unset", md:120}, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Users with Multiple Diet Plans
                </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {totalUsersWithMDP}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ height: {xs:"unset", md:340}, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Foods in each Category
                </Typography>
                {typeof foodsByCategory === "string" ? (
                  <Typography> {foodsByCategory} </Typography>
                ) : (
                  <CategoryChart data={foodsByCategory} />
                )}

              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ height: {xs:"unset", md:340}, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Most Favorite Foods by all users{" "}
                </Typography>
                {typeof preferedFoods === "string" ? (
                  <Typography> {preferedFoods} </Typography>
                ) : (
                  <TableContainer>
                  <List sx={{ paddingLeft: {xs:"unset", md:10} }}>
                    {preferedFoods.map((food) => (
                      <ListItem key={food[0]} sx={{ paddingLeft: 10 }}>
                        <ListItemAvatar>
                          <Avatar alt={food[1]} src={food[2]} />
                        </ListItemAvatar>
                        <ListItemText primary={food[1]}/>
                      </ListItem>
                    ))}
                  </List>
                  </TableContainer>
                )}
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>

    
  );
};

export default HomeAdmin;
