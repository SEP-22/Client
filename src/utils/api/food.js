import baseApi from "./@baseURL";

const addFood = async (body) => {
  try {
    const res = await baseApi.post("food/newFood", body);
    return res;
  } catch (error) {
    console.log(error);
  }
};



export { addFood };
