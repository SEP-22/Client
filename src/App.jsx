import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink, green, blueGrey, teal } from "@mui/material/colors";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import FoodListUser from "./pages/User/FoodListUser";
import FoodListAdmin from "./pages/Admin/FoodListAdmin";
import MainAdmin from "./pages/Admin/MainAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import HomeUser from "./pages/User/HomeUser";
import LandingPage from "./pages/LandingPage/LandingPage";
import NewFood from "./components/FoodList/NewFood";
import FoodListMain from "./pages/Admin/FoodListMain";
// import ResponsiveAppBar from "./components/Navbar/Nabvar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f178b6",
      light: "#ffaae8",
      dark: "#bc4786",
    },
    secondary: {
      main: green[500],
    },
    info: {
      main: pink[100],
    },
    warning: {
      main: green[100],
    },
    success: {
      main: green[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />

            <Route path="eatsmart">
              <Route index element={<HomeUser />} />
              <Route path="home" element={<HomeUser />} />
              <Route path="foodlist" element={<FoodListUser />} />
            </Route>

            {/* <Route path="dashboard" >
              <Route index element={<Home />} />
              <Route path="home" element={<Home />}></Route>
              <Route path="dietplans" element={<DietPlans />}></Route>
              <Route path="manage" element={<Manage />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
            <Route path="admin">
              <Route index element={<AdminHome />} />
              <Route path="home" element={<Home />}></Route>
              <Route path="foodlist" element={<FoodList />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route> */}
            <Route path="admin" element={<MainAdmin />}>
              <Route index element={<HomeAdmin />} />
              <Route path="home" element={<HomeAdmin />} />
              <Route path="foodlist" element={<FoodListMain />}>
                <Route index element={<FoodListAdmin />} />
                <Route path="addfood" element={<NewFood />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
