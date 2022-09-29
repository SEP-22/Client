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

const editFood = async (id,body) => {
  try {
    const res = await baseApi.patch(`food/editFood/${id}`, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const deleteFood = async (id) => {
  try {
    const res = await baseApi.delete(`food/deleteFood/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }

};

export { addFood, foodByCategory, getFoods, addImage, editFood, deleteFood,  };
