import baseApi from "./@baseURL";

const addFood = async (body) => {
  try {
    const res = await baseApi.post("food/newFood", body);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const addImage = async (formData) => {
  try {
    const res = await baseApi.post("image", formData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getFoods = async () => {
  try {
    const res = await baseApi.get("food/allfoods");
    console.log(res)
    console.log("next")
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

export { addFood, foodByCategory, getFoods, addImage };
