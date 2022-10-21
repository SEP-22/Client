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

export { getInputs };
