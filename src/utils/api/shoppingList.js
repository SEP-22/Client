import baseApi from "./@baseURL";

const getShoppingList = async () => {
  try{
    const res = await baseApi.get("shoppingList/getShoppingList");
    if (res.headers["x-access-token"]) {
        sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  }catch(error){
    console.log(error);
  }
};
const createAndSaveShoppingList = async (body) => {
  try{
    const res = await baseApi.post("shoppingList/createAndSaveShoppingList", body);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    return res;
  }catch(error){
    console.log(error);
  }
};
const getShoppingListsByUserId = async(id)=>{
  try{
    const res = await baseApi.get(`shoppingList/getShoppingListsFromUserId/${id}`);
    if (res.headers["x-access-token"]) {
      sessionStorage.setItem("_AT", res.headers["x-access-token"]);
    }
    //console.log(res.data)
    return res;
  }catch(error){
    console.log(error);
  }
};

export {
    getShoppingList,
    createAndSaveShoppingList,
    getShoppingListsByUserId,
};