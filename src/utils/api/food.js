import baseApi from "./@baseURL";

const addFood = async (body) => {
  try {
    const res = await baseApi.post("food/newFood", body);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getFoods = async () => {
  try {
    const res = await baseApi.get("food/allfoods");
    console.log("hi")
    return res;
  } catch (error) {
    console.log(error);
  }
};

const foodByCategory = async () => {
  try {
    const res = await baseApi.get("food/foodbycategory");
    return res;
  } catch (error) {
    console.log(error);

  }
};

export { addFood, foodByCategory, getFoods };
