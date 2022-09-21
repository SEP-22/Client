import React from "react";
import Navbar from "../../components/Navbar/NavbarAdmin";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CategoryChart from "../../components/Admin/CategoryChart";

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
  return (
    <>
      <Box sx={{ m: 5 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">Total Number of Users</Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {users}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Diet Plans created
                </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {dietplans}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">
                  Total Number of Users with Multiple Diet Plans
                </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {usersMultiplePlans}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ minHeight: 100, padding: 2, borderRadius: 5 }}>
                <Typography variant="h6">Total Number of Foods</Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {foods}
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
                <CategoryChart />
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomeAdmin;
