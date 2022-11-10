import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//import { Grid, Box, Paper, Typography } from '@mui/system';
import { Grid, Box, Paper, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";
import "./meal.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Meal(props) {
  const mealDetails = props.meal;
  const breakfastDetails = mealDetails.breakfast
  const lunchDetails = mealDetails.lunch
  const dinnerDetails = mealDetails.dinner
  // console.log(breakfastDetails);
  // console.log(lunchDetails);
  // console.log(dinnerDetails);

  return (
    <>
    <Box
      sx={{
        m: 2,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}>
      {/* <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="body1" align="center" sx={{ fontSize: 21 , writingMode: {xs: "none", md:"vertical-lr"}, textOrientation: {xs: "none", md:"upright"},}}>BREAKFAST</Typography>
      </Stack> */}
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={6} md={4}>
          <Grid item>
            <Item>
              <Typography align="center" sx={{ fontSize: 21}}>
                BREAKFAST
              </Typography>
            </Item>
          </Grid>
          <ImageList sx={{ width: 338, height: 330 , marginRight: 2,}} cols={2} rowHeight={164} >
            {breakfastDetails.map((item) => (
              <ImageListItem key={item[0]} borderColor="primary.main" 
              borderTop={4} 
              borderBottom={4}>
                <img
                  src={`${item[3]}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item[3]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item[4]}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>   
        <Grid item xs={4} sm={4} md={4}>
          <Grid item>
            <Item>
              <Typography align="center" sx={{ fontSize: 21 }}>
                LUNCH
              </Typography>
            </Item>
          </Grid>
          <ImageList sx={{ width: 338, height: 330 , marginRight: 2,}} cols={2} rowHeight={164} >
          {lunchDetails.map((item) => (
            <ImageListItem key={item[0]} borderColor="primary.main" 
            borderTop={4} 
            borderBottom={4}>
              <img
                src={`${item[3]}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item[3]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item[4]}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        </Grid>   
        <Grid item xs={4} sm={4} md={4}>
          <Grid item>
            <Item>
              <Typography align="center" sx={{ fontSize: 21}}>
                DINNER
              </Typography>
            </Item>
          </Grid>
          <ImageList sx={{ width: 338, height: 330 , marginRight: 2,}} cols={2} rowHeight={164} >
          {dinnerDetails.map((item) => (
            <ImageListItem key={item[0]} borderColor="primary.main" 
            borderTop={4} 
            borderBottom={4}>
              <img
                src={`${item[3]}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item[3]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item[4]}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        </Grid>   
      {/* <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="body1" align="center" sx={{ fontSize: 21 , writingMode: {xs: "none", md:"vertical-lr"}, textOrientation: {xs: "none", md:"upright"},}}>LUNCH</Typography>
      </Stack> */}
      {/* <Grid item >
        <Item>
          <Typography align="center" sx={{ fontSize: 21 , writingMode: {xs: "none", md:"vertical-lr"}, textOrientation: {xs: "none", md:"upright"},}}>
            LUNCH
          </Typography>
        </Item>
      </Grid> */}
      {/* <ImageList sx={{ width: 338, height: 330, marginRight: 2,}} cols={2} rowHeight={164}>
      {lunchDetails.map((item) => (
          <ImageListItem key={item[0]}>
            <img
              src={`${item[3]}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item[3]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item[4]}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
      {/* <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="body1" align="center" sx={{ fontSize: 21 , writingMode: {xs: "none", md:"vertical-lr"}, textOrientation: {xs: "none", md:"upright"},}}>DINNER</Typography>
      </Stack> */}
      {/* <Grid item >
        <Item>
          <Typography align="center" sx={{ fontSize: 21 , writingMode: {xs: "vertical-lr", md:"vertical-lr"}, textOrientation: {xs: "upright", md:"upright"},}}>
            DINNER
          </Typography>
        </Item>
      </Grid> */}
      {/* <ImageList sx={{ width: 338, height: 330 ,marginRight: 2,}} cols={2} rowHeight={164}>
      {dinnerDetails.map((item) => (
          <ImageListItem key={item[0]}>
            <img
              src={`${item[3]}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item[3]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item[4]}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
      </Grid>
      
      {/* </div> */}
    </Box>
    
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
