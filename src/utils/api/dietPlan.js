import baseApi from "./@baseURL";

const getInputs = async (body) => {
  try {
    const res = await baseApi.post("dietPlan/quiz", body);
    if (res.headers["x-access-token"]) {
			sessionStorage.setItem("_AT", res.headers["x-access-token"]);
		}
    console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getActiveDietPlanDetails = async (params) => {
  try {
    const res = await baseApi.post("dietPlan/quiz" + params);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
};

const generateDietPlan = async (body) => {
  try {
    const res = await baseApi.post("dietPlan/generatedietplan" , body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { getInputs, getActiveDietPlanDetails, generateDietPlan };
