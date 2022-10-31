import baseApi from "./@baseURL";

const signUp = async (body) => {
  try {
    const res = await baseApi.post("user/signUp", body);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (body) => {
  try {
    const res = await baseApi.post("user/signIn", body);
    localStorage.setItem("_RT", res.headers["x-refresh-token"]);
    sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    return res;
  } catch (error) {
    //TODO: add custom error
    console.log(error);
  }
};

const setPreferedFoods = async (body) => {
  try {
    const res = await baseApi.post("user/preferedfoods", body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    //TODO: add custom error
    console.log(error);
  }
};

const getPreferedFoods = async (body) => {
  try {
    const res = await baseApi.post("user/getpreferedfoods", body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    //TODO: add custom error
    console.log(error);
  }
};

const haveActiveDietPlan = async (body) => {
  try {
    const res = await baseApi.post("user/activeplan", body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    //TODO: add custom error
    console.log(error);
  }
};

const updateActiveDietPlan = async (body) => {
  try {
    const res = await baseApi.post("user/updateactiveplan", body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  } catch (error) {
    //TODO: add custom error
    console.log(error);
  }
};

export { signUp, signIn, setPreferedFoods ,haveActiveDietPlan,updateActiveDietPlan,getPreferedFoods};
