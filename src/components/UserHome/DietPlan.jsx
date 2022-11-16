import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Diet from "./Diet";
import useMediaQuery from '@mui/material/useMediaQuery';
import { getWeeklyDietPlanActiveForHome } from "../../utils/api/dietPlan";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function DietPlan() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const userId = JSON.parse(localStorage.getItem("user")).id;
  const [isLoading, setIsLoading] = React.useState(true);
  const[sevenDayArr,setSevenDayArr] = React.useState([]);
  const[hasActive,setHasActive] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await getWeeklyDietPlanActiveForHome(userId);
      const data = res.data;
      if(res.status == 200){
        setSevenDayArr(data[0][2]);
        setIsLoading(false);
        setHasActive(true)
      }else{
        setHasActive(false)
        setIsLoading(false);
      }
    };
    getData();
  },[])
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        m: 5,
        mr:{md:15},
        ml:{md:15},
      }}
    >
      {(!hasActive && !isLoading) && (
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
        </>
      )}
      {!isLoading && (
        <>
        <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Tab label="Monday" {...a11yProps(0)} />
          <Tab label="Tuesday" {...a11yProps(1)} />
          <Tab label="Wednesday" {...a11yProps(2)} />
          <Tab label="Thursday" {...a11yProps(3)} />
          <Tab label="Friday" {...a11yProps(4)} />
          <Tab label="Saturday" {...a11yProps(5)} />
          <Tab label="Sunday" {...a11yProps(6)} />
        </Tabs>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="full width tabs example"
          sx={{ display: { md: "none" } }}
        >
          <Tab label="Monday" {...a11yProps(0)} />
          <Tab label="Tuesday" {...a11yProps(1)} />
          <Tab label="Wednesday" {...a11yProps(2)} />
          <Tab label="Thursday" {...a11yProps(3)} />
          <Tab label="Friday" {...a11yProps(4)} />
          <Tab label="Saturday" {...a11yProps(5)} />
          <Tab label="Sunday" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Diet details ={sevenDayArr[0]}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Diet details ={sevenDayArr[1]}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Diet details ={sevenDayArr[2]}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Diet details ={sevenDayArr[3]}/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Diet details ={sevenDayArr[4]}/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Diet details ={sevenDayArr[5]}/>
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <Diet details ={sevenDayArr[6]}/>
        </TabPanel>
      </SwipeableViews>
        </>
      )}
    </Box>
  );
}
