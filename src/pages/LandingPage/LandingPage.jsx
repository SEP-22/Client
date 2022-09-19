import * as React from "react";
import Navbar from "../../components/Navbar/Nabvar";
import Footer from "../../components/Footer/Footer";
import FoodCard from "../../components/FoodCard/FoodCard";
import NavbarLanding from "../../components/Navbar/NavbarLanding";

const FoodList = [
  {
    Food: "Ice cream",
    Measure: "1 cup",
    Grams: 188,
    Calories: 300,
    Protein: 6,
    Fat: 18,
    SaturatedFat: 16,
    Fiber: 0,
    Carbs: 29,
    Category: "Dairy products",
    Image: "src/assets/images/foods/icecream.jpg",
  },
];

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <FoodCard foodItem={FoodList[0]} />

      <Footer />
    </>
  );
}
