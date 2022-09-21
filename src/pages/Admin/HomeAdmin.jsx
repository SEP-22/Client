import React from "react";
import Navbar from "../../components/Navbar/NavbarAdmin";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const [users, dietplans, foods, usersMultiplePlans] = [100, 80, 100, 5];

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
                <Typography variant="h6">Foods </Typography>
                <Typography color="primary" variant="h4" sx={{ m: 2 }}>
                  {foods}
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomeAdmin;
