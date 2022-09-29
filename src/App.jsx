import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink, green, blueGrey, teal, grey } from "@mui/material/colors";
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
import ShoppingLists from "./pages/ShoppingList/ShoppingList";
import ProfilePage from "./pages/Profile/ProfilePage";
import MultipleDietPlans from "./pages/MultipleDietPlans/MultipleDietPlans";
import Quiz from "./components/DietPlan/Quiz";
import MainUser from "./pages/User/MainUser";
import Manage from "./components/DietPlan/Manage";
import UserPrivateRoute from "./PrivateRoutes/UserPrivateRoute";
import EditFood from "./components/FoodList/EditFood";
import AddFood from "./components/FoodList/AddFood";
import EditName from "./components/User/EditName";
import EditPhone from "./components/User/EditPhone";
import EditEmail from "./components/User/EditEmail";
import ProfilePageMain from "./pages/Profile/ProfilePageMain";

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
      main: grey[600],
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

            <Route path="eatsmart" element={<MainUser />}>
              <Route index element={<HomeUser />} />
              <Route path="home" element={<HomeUser />} />
              <Route path="foodlist" element={<FoodListUser />} />
              <Route path="shoppinglist" element={<ShoppingLists />} />
              <Route path="profile" element={<ProfilePageMain />}>
                <Route index element={<ProfilePage />} />
                <Route path="editname" element={<EditName />} />
                <Route path="editemail" element={<EditEmail />} />
                <Route path="editphone" element={<EditPhone />} />
              </Route>
              <Route path="dietplans" element={<MultipleDietPlans />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="manage" element={<Manage />} />
            </Route>

            <Route path="admin" element={<MainAdmin />}>
              <Route index element={<UserPrivateRoute> <HomeAdmin /> </UserPrivateRoute>} />
              <Route path="home" element={<UserPrivateRoute> <HomeAdmin /> </UserPrivateRoute>} />
              <Route path="foodlist" element={<UserPrivateRoute> <FoodListMain /> </UserPrivateRoute>}>
                <Route index element={<FoodListAdmin />} />
                <Route path="addfood" element={ <AddFood />} />
                <Route path="editfood" element={ <EditFood />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
