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

const getUserByID = async (params) => {
  try {
    const res = await baseApi.get("user/single/" + params);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { signUp, signIn, getUserByID };
