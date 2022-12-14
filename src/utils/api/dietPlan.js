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

const saveDietPlans = async (body) => {
  try {
    const res = await baseApi.post("dietPlan/savedietplan" , body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getAllDietPlans = async() => {
  try{
    const res = await baseApi.get("dietPlan/getplans/getDietPlans");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res)
    return res;
  }catch (error) {
    console.log(error);
  }
};

const getDietPlansByUserId = async(id) => {
  try{
    const res = await baseApi.get(`dietPlan/getUserDietPlans/${id}`);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res)
    return res;
  }catch (error) {
    console.log(error);
  }
};
const getNonActivePlans = async(id) => {
  try{
    const res = await baseApi.get(`dietPlan/getuserplans/nonactive/${id}`);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res)
    return res;
  }catch (error) {
    console.log(error);
  }
};
const getActivePlans = async(id) => {
  try{
    const res = await baseApi.get(`dietPlan/getuserplans/active/${id}`);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res)
    return res;
  }catch (error) {
    console.log(error);
  }
};
const deleteDietPlan = async(id) => {
  try{
    const res = await baseApi.delete(`dietPlan/deleteDietPlan/${id}`);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res)
    return res;
  }catch (error) {
    console.log(error);
  }
};
const getWeeklyDietPlanActiveForHome = async(id) => {
  try{
    const res = await baseApi.get(`dietPlan/getWeeklyDietPlan/active/${id}`);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res)
    return res;
  }catch (error) {
    console.log(error);
  }
}

const updateActiveDietPlanDetails = async (id, body) => {
  try {
    const res = await baseApi.post(`dietPlan/updateactiveplan/${id}`, body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};


export { getInputs, getActiveDietPlanDetails, generateDietPlan, saveDietPlans,getAllDietPlans, updateActiveDietPlanDetails,getDietPlansByUserId,getNonActivePlans,getActivePlans,deleteDietPlan,getWeeklyDietPlanActiveForHome };
