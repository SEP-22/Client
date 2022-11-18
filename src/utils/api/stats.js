import baseApi from "./@baseURL";

const getMaxCountsFoods = async (body) => {
  try {
    const res = await baseApi.post("stats/maxcountfoodsinDP", body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getCaloryPercentagebyCategory = async (body) => {
    try {
      const res = await baseApi.post("stats/calorypercentagebycateory", body);
      if (res.headers["x-access-token"]) {
        sessionStorage.setItem("_AT", res.headers["x-access-token"]);
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

//get total count of users - Admin
const getCountofUsers = async () => {
  try {
    const res = await baseApi.get("stats/getcountofusers");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

//get total number of diets created - Admin
const getCountofDiets = async () => {
  try {
    const res = await baseApi.get("stats/getcountofdiets");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

//get total number of quizes taken - Admin
const getCountofDietPlans = async () => {
    try {
      const res = await baseApi.get("stats/getcountofdietplans");
      if (res.headers["x-access-token"]) {
        sessionStorage.setItem("_AT", res.headers["x-access-token"]);
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

//get total number of foods in the system - Admin
const getCountofFoods = async () => {
  try {
    const res = await baseApi.get("stats/getcountoffoods");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

//get total number of users with Active Diet Plan - Admin
const getCountADPUsers = async () => {
  try {
    const res = await baseApi.get("stats/getcountofADPusers");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

//get total number of users with Multiple Diet Plans - Admin
const getCountofMDPUsers = async () => {
  try {
    const res = await baseApi.get("stats/getcountofMDPusers");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

//get count of foods by category - Admin
const countFoodsbyCategory = async () => {
  try {
    const res = await baseApi.get("stats/countfoodbycateory");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

//get most preffered foods by all users - Admin
const getMostPrefferedFood = async () => {
  try {
    const res = await baseApi.get("stats/mostprefferedfoods");
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};



export {
  getCountofUsers,
  getCountofDiets,
  getCountofFoods,
  getCountADPUsers,
  getCountofMDPUsers,
  countFoodsbyCategory,
  getMostPrefferedFood,
  getCountofDietPlans,
  getMaxCountsFoods,
  getCaloryPercentagebyCategory
};
