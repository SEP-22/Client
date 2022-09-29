import baseApi from "./@baseURL";

const getInputs = async (body) => {
  try {
    console.log("hello");
    const res = await baseApi.post("dietPlan/quiz", body);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getInputs };
