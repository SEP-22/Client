import baseApi from "./@baseURL";

const signUp = async (body) => {
  try {
    const res = await baseApi.post("user/signUp", body);
    return res;
  } catch (error) {
    console.log(error);
  }
};



export { signUp };
