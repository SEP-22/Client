import baseApi from "./@baseURL";

const addFood = async (body) => {
  try {
    const res = await baseApi.post("food/newFood", body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
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
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const foodByCategory = async () => {
  try {
    const res = await baseApi.get("food/foodbycategory");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const editFood = async (id, body) => {
  try {
    const res = await baseApi.patch(`food/editFood/${id}`, body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const deleteFood = async (id) => {
  try {
    const res = await baseApi.delete(`food/deleteFood/${id}`);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const foodForCholesterol = async () => {
  try {
    const res = await baseApi.get("food/foodforcholesterol");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const foodForHighBloodPressure = async () => {
  try {
    const res = await baseApi.get("food/foodforbloodpressure");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const foodForDiabetics = async () => {
  try {
    const res = await baseApi.get("food/foodfordiabetics");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

export {
  addFood,
  foodByCategory,
  getFoods,
  addImage,
  editFood,
  deleteFood,
  foodForHighBloodPressure,
  foodForDiabetics,
  foodForCholesterol,
};
